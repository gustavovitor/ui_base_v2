import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableAction, DataTableColumnTyped, DataTableComponent } from '../../../../shared/data-table/data-table.component';
import { Produto, ProdutoFilter } from '../../../../core/model/produto';
import { environment } from '../../../../../environments/environment';
import { defaultRemove } from '../../../../services/util/generic-functions';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-lista-page',
  templateUrl: './produtos-lista-page.component.html',
  styleUrls: ['./produtos-lista-page.component.scss']
})
export class ProdutosListaPageComponent implements OnInit {
  TABLE_COLUMNS: Array<DataTableColumnTyped<Produto>> = [
    {
      data: 'id',
      name: 'Cód.'
    },
    {
      data: 'nomeProduto',
      name: 'Nome do Produto'
    },
    {
      data: 'valorRevenda',
      name: 'Valor de Revenda',
      currency: true,
      mask: 'separator.2',
      thousandSeparator: ','
    },
    {
      data: 'produtoInativo',
      name: 'Produto Inativo',
      renderFunc: this.renderProdutoInativoColumn.bind(this)
    },
    { data: null, name: 'Ações' },
  ];
  TABLE_ACTIONS: Array<DataTableAction> = [
    {
      key: 1,
      action: (data: Produto) => this.router.navigate(['/pages/init/produtos/editar', data.id]),
      class: 'btn btn-icon btn-rounded btn-outline-primary',
      icon: 'fas fa-edit',
      tooltip: 'Editar'
    },
    {
      key: 2,
      action: (data: Produto) => this.excluirProduto(data),
      class: 'btn btn-icon btn-rounded btn-outline-danger',
      icon: 'fas fa-trash',
      tooltip: 'Remover'
    }
  ];
  TABLE_URL = environment.WebServiceList.URLProdutoResource + '/search/page';

  produtoFilter = new ProdutoFilter();

  @ViewChild('viewDataTable') viewDataTable: DataTableComponent;
  constructor(private produtoService: ProdutoService,
              private router: Router,
              private ngbModal: NgbModal) { }

  ngOnInit(): void {
  }

  filter() {
    this.viewDataTable.instanceTable.ajax.reload();
  }

  private async excluirProduto(data: Produto) {
    await defaultRemove<Produto>(this.produtoService, data, this.ngbModal);
    this.viewDataTable.instanceTable.ajax.reload();
  }

  renderProdutoInativoColumn(data) {
    if (data) {
      return `
        <div class="d-flex align-items-center">
            <div class="nutre-produto-inativo"></div>
        </div>
      `;
    } else {
      return `
        <div class="d-flex align-items-center">
            <div class="nutre-produto-ativo"></div>
        </div>
      `;
    }
  }
}
