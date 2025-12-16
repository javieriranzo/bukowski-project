import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ControlPanelPage } from './pages/control-panel-page/control-panel-page';
import { BlackboardPage } from './pages/blackboard-page/blackboard-page';
import { EventsPage } from './pages/events-page/events-page';
import { PricesPage } from './pages/prices-page/prices-page';
import { MenuCardPage } from './pages/menu-card-page/menu-card-page';
import { EditBlackboardPage } from './pages/control-panel-page/edit-blackboard-page/edit-blackboard-page';
import { EditEventsPage } from './pages/control-panel-page/edit-events-page/edit-events-page';
import { EditMenuCardPage } from './pages/control-panel-page/edit-menu-card-page/edit-menu-card-page';
import { EditPricesPage } from './pages/control-panel-page/edit-prices-page/edit-prices-page';
import { EmployeesManagement } from './pages/control-panel-page/employees-management/employees-management';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', component: LoginPage },
    { path: 'control-panel', component: ControlPanelPage,
        children: [
            { path: 'edit-blackboard-page', component: EditBlackboardPage },
            { path: 'edit-events-page', component: EditEventsPage },
            { path: 'edit-menu-card-page', component: EditMenuCardPage },
            { path: 'edit-prices-page', component: EditPricesPage },
            { path: 'employees-management', component: EmployeesManagement }
        ]
     }, 
    { path: 'blackboard', component: BlackboardPage }, 
    { path: 'events', component: EventsPage }, 
    { path: 'prices', component: PricesPage },
    { path: 'menu-card', component: MenuCardPage }
];
