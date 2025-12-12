import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ControlPanelPage } from './pages/control-panel-page/control-panel-page';
import { BlackboardPage } from './pages/blackboard-page/blackboard-page';
import { EventsPage } from './pages/events-page/events-page';
import { PricesPage } from './pages/prices-page/prices-page';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', component: LoginPage },
    { path: 'control-panel', component: ControlPanelPage }, 
    { path: 'blackboard', component: BlackboardPage }, 
    { path: 'events', component: EventsPage }, 
    { path: 'prices', component: PricesPage }
];
