import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://api.nuclias.tw/v1';
  constructor(private httpClient: HttpClient) { }

  public getEmitterKeys() {
    return this.httpClient.get(`${this.apiURL}/emitter`);
  }
}
