import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Equipment } from '../interface/equipment';

@Injectable({
  providedIn: 'root'
})

export class EquipmentService {
  private apiServerUrl = 'http://localhost:8080/api/v1/equipments';
  constructor(private http: HttpClient) { }

  public getEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(`${this.apiServerUrl}`);
  }
  public addEquipment(equipment: Equipment): Observable<Equipment>{
    return this.http.post<Equipment>(`${this.apiServerUrl}/create`, equipment);
  }
  public updateEquipment(equipmentId: number, equipment: Equipment): Observable<Equipment>{
    return this.http.put<Equipment>(`${this.apiServerUrl}/update/${equipmentId}`, equipment);
  }
  public deleteEquipment(equipmentId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${equipmentId}`);
  }
}
