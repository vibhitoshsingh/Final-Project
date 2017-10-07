import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

import {apiBaseUrl} from '../constants';

@Injectable()
export class ApiService {

  constructor(private _httpClient:HttpClient) { }

  post(url: string,data:any) {
  return this._httpClient.post(apiBaseUrl+url,data);  
  }


  get(url: string) {
    return this._httpClient.get(apiBaseUrl+url);
  }

  delete(url: string) {
   return this._httpClient.delete(apiBaseUrl+url);
  }

}


