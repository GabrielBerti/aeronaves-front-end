import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aeronave } from './aeronave';

@Injectable({
  providedIn: 'root'
})

export class AeronaveService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAeronaveList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'aeronaves');
  }

  getAeronaveListLastWeek(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'aeronaves/lastWeek');
  }

  getAeronaveListGroupByFabricante(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'aeronaves/groupByNome');
  }

  getAeronaveListAeronaveNotSoulds(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'aeronaves/countNotSolds');
  }

  getAeronave(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/aeronaves/${id}`);
  }

  createAeronave(aeronave: object): Observable<object> {
    return this.http.post(`${this.baseUrl}` + 'aeronaves', aeronave);
  }

  deleteAeronave(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/aeronaves/${id}`, { responseType: 'text' });
  }

  updateAeronave(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}aeronaves`, value);
  }

}