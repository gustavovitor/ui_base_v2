import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { ToastService } from '../../../../services/util/toast.service';
import { ErrorHandlerService } from '../../../../services/util/error-handler.service';

@Component({
  selector: 'app-produtos-formulario-page',
  templateUrl: './produtos-formulario-page.component.html',
  styleUrls: ['./produtos-formulario-page.component.scss']
})
export class ProdutosFormularioPageComponent implements OnInit {
  produtoForm = this.formBuilder.group({
    id: [null],
    nomeProduto: [null, Validators.compose([
      Validators.required, Validators.maxLength(100)
    ])],
    valorCusto: [null, Validators.required],
    valorRevenda: [null, Validators.required],
    medida: ['UNIDADE', Validators.required],
    produtoInativo: [false]
  });
  submited = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private produtoService: ProdutoService,
              private toastService: ToastService,
              private errorHandlerService: ErrorHandlerService) { }

  ngOnInit(): void {
    this.start();
  }

  async start() {
    const produtoId = this.activatedRoute.snapshot.params.produtoId;
    if (produtoId) {
      this.produtoForm.patchValue(await this.produtoService.findById(produtoId));
    }
  }

  async save() {
    this.submited = true;

    try {
      if (this.produtoForm.get('id').value) {
        await this.produtoService.patch(this.produtoForm.value);
      } else {
        await this.produtoService.insert(this.produtoForm.value);
      }
      this.toastService.success('Produto salvo.');
      await this.router.navigate(['/pages/init/produtos']);
    } catch (e) {
      this.errorHandlerService.error(e);
    }

    this.submited = false;
  }

}
