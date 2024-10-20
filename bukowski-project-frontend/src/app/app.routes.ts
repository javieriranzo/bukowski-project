import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ControlPanelPageComponent } from './control-panel-page/control-panel-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'main', component: MainPageComponent },
    { path: 'control-panel', component: ControlPanelPageComponent},
    { path: '', redirectTo: '/main', pathMatch: 'full' }, // Redirige a 'main' por defecto
    { path: '**', redirectTo: '/main' } // Redirige a 'main' si la ruta no existe
];

