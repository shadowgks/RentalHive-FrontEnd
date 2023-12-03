import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Equipment } from './equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private apiServerUrl = '';
  constructor(private http: HttpClient) { }

  public getEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(`${this.apiServerUrl}/equipment/all`);
  }
}
