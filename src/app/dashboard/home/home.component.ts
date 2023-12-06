import { Component } from '@angular/core';
import { Equipment } from '../../equipment/interface/equipment';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { EquipmentService } from '../../equipment/service/equipment.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard.home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class DashboardHomeComponent {
  protected equipments!: Equipment[];
  protected editEquipment?: Equipment;
  protected deleteEquipment?: number;
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
        alert(error);
      }
    );
  }
  //add
  public onAddEquipment(addForm: NgForm): void{
    this.equipmentService.addEquipment(addForm.value).subscribe(
      (response: Equipment) => {
        console.log(response);
        this.getEquipments();
      },
      (error: HttpErrorResponse) => {
        // error.status === 400 ? this.router.navigate(['']) : "ok"
        console.log(error.status === 400 ? "Bad request you must be validate data!" : "ok");
      }
    )  
  }
  //update
  public onUpdateEquipment(equipment: Equipment): void{
    this.equipmentService.updateEquipment(equipment.id, equipment).subscribe(
      (response: Equipment) => {
        console.log(response);
        this.getEquipments();
      },
      (error: HttpErrorResponse) => {
        // error.status === 400 ? this.router.navigate(['']) : "ok"
        console.log(error.status === 400 ? "Bad request you must be validate data!" : "ok");
      }
    )  
  }
  //delete
  public onDeleteEquipment(equipmentId: number): void{
    this.equipmentService.deleteEquipment(equipmentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEquipments();
      },
      (error: HttpErrorResponse) => {
        console.log(error.status);
      }
    )
  }



  //modal
  public modal(equipment?: Equipment, mode?: string): void {
    const section = document.getElementById("main-section");
    const buttonShowModal = document.createElement("button");
    buttonShowModal.type = "button";
    
    if (mode === "add") {
      buttonShowModal.setAttribute('data-modal-toggle', 'modal-add');
    } else if (mode === "edit") {
      this.editEquipment = equipment;
      // Rest of your code for edit mode
      buttonShowModal.setAttribute('data-modal-toggle', 'modal-edit');
    } else if (mode === "delete") {
      this.deleteEquipment = equipment?.id;
      // Rest of your code for delete mode
      console.log('Delete mode');
    }
    
    if (section) {
      section.appendChild(buttonShowModal);
      buttonShowModal.click();
    }
  }
}
