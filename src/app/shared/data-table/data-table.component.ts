import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, PipeTransform, ViewChild } from '@angular/core';
import { MaskPipe } from 'ngx-mask';
import { AuthService } from '../../services/security/auth.service';

declare var $;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;
  dtOption: any;

  public instanceTable: any;

  @Input() pageable = true;
  @Input() url;
  @Input() search;
  @Input() columns: Array<DataTableColumn> | Array<DataTableColumnTyped<any>>;
  @Input() actions: Array<DataTableAction>;
  @Input() searching = false;

  buttons: Array<any>;

  constructor(private authService: AuthService,
              private ngxMask: MaskPipe) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.hideTooltips();
  }

  async ngAfterViewInit() {
    await this.loadData();
    setTimeout(() => this.tooltipButtons(), 500);
  }

  public async loadData() {
    this.dtOption = {
      scrollY: '420px',
      columnDefs: this.extractColumnDefsMask(),
      language: {
        sEmptyTable: 'Nenhum registro encontrado',
        sInfo: 'Mostrando de _START_ até _END_ de _TOTAL_ registros',
        sInfoEmpty: 'Mostrando 0 até 0 de 0 registros',
        sInfoFiltered: '(Filtrados de _MAX_ registros)',
        sInfoPostFix: '',
        sInfoThousands: '.',
        sLengthMenu: '_MENU_ resultados por página',
        sLoadingRecords: 'Carregando...',
        sProcessing: 'Processando...',
        sZeroRecords: 'Nenhum registro encontrado',
        sSearch: 'Pesquisar',
        oPaginate: {
          sNext: 'Próximo',
          sPrevious: 'Anterior',
          sFirst: 'Primeiro',
          sLast: 'Último'
        },
        oAria: {
          sSortAscending: ': Ordenar colunas de forma ascendente',
          sSortDescending: ': Ordenar colunas de forma descendente'
        }
      },
      paging: true,
      ordering: false,
      info: false,
      searching: this.searching,
      processing: this.pageable,
      serverSide: this.pageable,
      lengthMenu: [[10, 25, 50, 99999], [10, 25, 50, 'Todos']],
      ajax: {
        dataSrc: this.pageable ? 'content' : '',
        url: this.url,
        type: 'PUT',
        headers: {
          Authorization: 'Bearer ' + await this.authService.getValidAccessToken(),
          'Content-Type': 'application/json'
        },
        error: (xhr, error, thrown) => {
          console.log('Error on datatable.');
          console.error({ xhr, error, thrown });
        },
        data: (params) => {
          if (this.pageable) {
            params.pageable = {
              page: params.start / params.length,
              size: params.length
            };
            params.object = {
              ...this.search
            };
          } else {
            params = {
              ...this.search
            };
          }
          return JSON.stringify(params);
        },
        dataFilter: (data) => {
          const json = JSON.parse(data);
          if (this.pageable) {
            json.recordsTotal = json.totalElements;
            json.recordsFiltered = json.totalElements;
          }
          return JSON.stringify(json);
        },
      },
      columns: this.columns
    };
    this.dataTable = $(this.table.nativeElement);
    this.instanceTable = this.dataTable.DataTable(this.dtOption);
    this.instanceTable.on('draw', () => this.updateActionButton());
    $.fn.dataTable.ext.errMode = 'throw';
  }

  extractColumnDefsMask(): any {
    // @ts-ignore
    return this.columns.map((x, index) => {
      if (x.renderFunc) {
        return {
          targets: index,
          data: x.data,
          render: x.renderFunc.bind(this)
        };
      }
      if (x.mask) {
        return {
          targets: index,
          data: x.data,
          render: (data, type, row, meta) => {
            let value;
            if (x.thousandSeparator) {
              value = this.ngxMask.transform(data, x.mask, x.thousandSeparator);
            } else {
              value = this.ngxMask.transform(data, x.mask);
            }
            if (x.currency) {
              return 'R$ ' + value;
            } else {
              return value;
            }
          }
        };
      }
      if (x.pipe) {
        return {
          targets: index,
          data: x.data,
          render: (data, type, row, meta) => {
            return x.pipe.transform(data, x.pipeArgs);
          }
        };
      }
      if (x.data === null) {
        return this.extractColumnAction();
      }
      return {
        targets: index,
        data: x.data,
        render: (data, type, row, meta) => {
          return data;
        }
      };
    });
  }

  extractColumnAction() {
    this.buttons = [];

    return {
      targets: this.columns.findIndex(column => column.data === null),
      render: (data, t, r, m) => {
        const container = document.createElement('div');
        container.classList.add('container');
        const row = document.createElement('div');
        row.classList.add('row');
        const column = document.createElement('div');
        column.classList.add('col-sm-12');
        column.classList.add('d-flex');
        column.classList.add('justify-content-around');

        this.actions.forEach(action => {
          const buttonElement = document.createElement('button');
          const id = Math.random();
          buttonElement.setAttribute('id', id.toString());
          buttonElement.setAttribute('class', 'btn btn-rounded btn-icon data-table-action-btn ' + action.class);
          buttonElement.setAttribute('actionKey', action.key.toString());
          buttonElement.setAttribute('data-toggle', 'tooltip');
          buttonElement.setAttribute('data-placement', 'top');
          // buttonElement.setAttribute('data-skin-class', 'tooltip-base');
          buttonElement.setAttribute('title', action.tooltip);
          buttonElement.disabled = action.disableFunction ? action.disableFunction() : false;


          if (action.svgIcon) {
            buttonElement.appendChild(action.svgIcon);
          } else {
            const icon = document.createElement('i');
            icon.setAttribute('class', action.icon + ' font-size-18');
            buttonElement.appendChild(icon);
          }


          this.buttons.push({ id, actionKey: action.key, data });
          column.appendChild(buttonElement);
        });

        row.appendChild(column);
        container.appendChild(row);

        return container.outerHTML;
      }
    };
  }

  updateActionButton() {
    if (this.buttons) {
      this.buttons.forEach(button => {
        if (document.getElementById(button.id.toString())) {
          document.getElementById(button.id.toString())
            .parentNode.replaceChild(document.getElementById(button.id.toString())
            .cloneNode(true), document.getElementById(button.id.toString()));

          document.getElementById(button.id.toString())
            .addEventListener('click', () =>
              this.actions[this.actions.findIndex(x => x.key === button.actionKey)].action(button.data));
        }
      });
    }
  }

  tooltipButtons() {
    if (this.buttons) {
      this.buttons.forEach((b) => {
        const element = document.getElementById(b.id);
        if (element) {
          element.setAttribute('data-original-title', element.getAttribute('data-original-title'));
          $(element).tooltip();
        }
      });
    }
  }

  hideTooltips() {
    this.buttons.forEach((b) => {
      const element = document.getElementById(b.id);
      $(element).tooltip('dispose');
    });
  }
}

export class DataTableColumnBase {
  name: string;
  currency?: boolean;
  mask?: string;
  thousandSeparator?: string;
  pipe?: PipeTransform;
  pipeArgs?: any;
  renderFunc?: Function;
}

export class DataTableColumn extends DataTableColumnBase {
  data: string;
}

export class DataTableColumnTyped<T> extends DataTableColumnBase {
  data: string | keyof T;
}

export class DataTableAction {
  key: number;
  id?: number;
  icon?: string;
  svgIcon?: SVGElement;
  action: Function;
  class?: string;
  tooltip: string;
  disableFunction?: Function;
}
