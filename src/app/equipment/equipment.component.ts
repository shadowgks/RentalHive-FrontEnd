import { Component } from '@angular/core';
import { EquipmentService } from './service/equipment.service';
import { Equipment } from './interface/equipment';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
  protected equipments!: Equipment[];

  constructor(private equipmentService: EquipmentService){}

  ngOnInit(): void {
    this.getEquipments();  
  }

  //get
  public getEquipments(): void {
    this.equipmentService.getEquipments().subscribe(
      (response: Equipment[]) => {
        this.equipments = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
