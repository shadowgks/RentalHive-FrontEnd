import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Equipment } from '../interface/equipment';

@Injectable({
  providedIn: 'root'
})

export class EquipmentService {
  private apiServerUrl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) { }

  public getEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(`${this.apiServerUrl}/equipments`);
  }
}
