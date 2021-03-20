import { BaseHttp } from '../security/base-http';
import { HttpParams } from '@angular/common/http';

export class ServiceMaker<D extends PrimaryEntity> implements ServiceInterface<D> {
  constructor(http: BaseHttp,
              url: API) {
    this.API = url;
    this.http = http;
  }

  http: BaseHttp;
  API: API;

  findById(objectId: number, showLoading = true): Promise<D> {
    return this.http.get<D>(`${this.API.url}/${objectId.toString()}`, showLoading).toPromise();
  }

  findAll(object: D = null, showLoading = true): Promise<Array<D>> {
    return this.http.put<Array<D>>(`${this.API.url}/search`, object, null, showLoading).toPromise();
  }

  findAllPageable(object: D = null, pageable: Pageable, showLoading = true): Promise<any> {
    let params = new HttpParams();
    params = params.append('page', pageable.page.toString());
    params = params.append('size', pageable.size.toString());

    return this.http.put<any>(`${this.API.url}/search/page`, { object, pageable }, { params }, showLoading).toPromise();
  }

  delete(objectId: number): Promise<void> {
    return this.http.delete<void>(`${this.API.url}/${objectId}`).toPromise();
  }

  insert(object: D, showLoading = true): Promise<D> {
    return this.http.post<D>(`${this.API.url}`, object, null, showLoading).toPromise();
  }

  patch(object: D, showLoading = true): Promise<D> {
    return this.http.patch<D>(`${this.API.url}/${object.id}`, object, null, showLoading).toPromise();
  }

  update(object: D, showLoading = true): Promise<D> {
    return this.http.put<D>(`${this.API.url}/${object.id}`, object, null, showLoading).toPromise();
  }
}

interface ServiceInterface<D extends PrimaryEntity> {
  findById(objectId: number): Promise<D>;
  findAll(object: D): Promise<Array<D>>;
  findAllPageable(object: D, pageable: Pageable): Promise<any>;
  insert(D): Promise<D>;
  update(D): Promise<D>;
  patch(D): Promise<D>;
  delete(objectId: number): Promise<void>;
}

class API {
  url: string;
}

export class PrimaryEntity {
  id ?: number;
}

export class Pageable {
  page: number;
  size: number;
  sort?: any;
}

export class PageableResponse<T> {
  content: Array<T>;
  last: boolean;
}
