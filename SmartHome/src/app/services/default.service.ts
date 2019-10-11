import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DefaultModel } from '../dataModel/default-model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class DefaultElasticService {

  constructor(protected http: HttpClient) { }

  httpOptions = httpOptions;

  getUrl(): string {
    return 'http://localhost:9200/';
  }

  getAll() {
    console.log(this.getUrl());
    return this.http.post(this.getUrl() + '/_search', '{"from" : 0, "size" : 10000, "query": {"match_all": {}}}', httpOptions);
  }

  remove(bean: DefaultModel) {
    return this.http.delete(this.getUrl() + '/' + bean._id + '?refresh=true', httpOptions);
  }

  private update(bean: DefaultModel){
    return this.http.post(this.getUrl() + '/' + bean._id + '?refresh=true', bean._source, httpOptions);
  }

  private insert(bean: DefaultModel) {
    return this.http.post(this.getUrl() + '?refresh=true', bean._source, httpOptions);
  }

  beforeSave(bean: DefaultModel) {
    console.log('aqui é o before save super');
  }

  save(bean: DefaultModel) {
    this.beforeSave(bean);
    if (bean._id) {
      return this.update(bean);
    } else {
      return this.insert(bean);
    }
  }
}
