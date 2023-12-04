import { Equipment } from './equipment/interface/equipment';
import { Component, OnInit } from '@angular/core';
import { EquipmentService } from './equipment/service/equipment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Home';
}
