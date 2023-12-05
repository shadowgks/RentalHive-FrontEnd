import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EquipmentComponent } from "./equipment/equipment.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DashboardHomeComponent } from "./dashboard.home/dashboard.home.component";

const configRoute: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'equipments',
        component: EquipmentComponent,
        title: 'Equipments'
    },
    {
        path: 'dashboard',
        component: DashboardHomeComponent,
        title: 'Dashboard'
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        title: 'Not Found'
    },
    {
        path: '**',
        redirectTo: '/not-found'
    }
];

export default configRoute;