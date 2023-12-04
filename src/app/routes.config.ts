import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EquipmentComponent } from "./equipment/equipment.component";

const configRoute: Routes = [
    {
        path: '**',
        component: HomeComponent,
        title: 'Not Found'
    },
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'equipments',
        component: EquipmentComponent,
        title: 'equipments'
    }
];

export default configRoute;