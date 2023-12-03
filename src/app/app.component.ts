import { Equipment } from './equipment/equipment';
import { Component, OnInit } from '@angular/core';
import { EquipmentService } from './equipment/equipment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Home';
  public equipments!: Equipment[];
  constructor(private equipmentService: EquipmentService){}

  // ngOnInit(): void {

  // }

  public getEquipments(): void {
    this.equipmentService.getEquipments().subscribe(
      (response: Equipment[]) => {
        this.equipments = response;
      },
      (error: HttpErrorResponse) => {
        alert(error);
      }
    );
  }

}
