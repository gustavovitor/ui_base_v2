import { Injectable } from '@angular/core';
import { Produto } from '../../core/model/produto';
import { ServiceMaker } from '../maker/service-maker';
import { BaseHttp } from '../security/base-http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends ServiceMaker<Produto> {
  constructor(http: BaseHttp) {
    super(http, {
      url: environment.WebServiceList.URLProdutoResource
    });
  }
}
