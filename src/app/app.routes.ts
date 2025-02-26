import { NewchartComponent } from './createtable/newchart/newchart.component';
import { NweqtComponent } from './createtable/nweqt/nweqt.component';
import { CreatetableComponent } from './createtable/createtable.component';
import { AdminstartpageComponent } from './adminstartpage/adminstartpage.component';
import { LoginComponent } from './login/login.component';
import { StartpageComponent } from './startpage/startpage.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'startpage', component: StartpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminstartpage', component: AdminstartpageComponent },
  {
    path: 'createtable',
    component: CreatetableComponent,
    children: [
      {
        path: 'newqt',
        component: NweqtComponent,
      },
      {
        path: 'newchart',
        component: NewchartComponent,
      },
    ],
  },
  { path: '', redirectTo: '/startpage', pathMatch: 'full' },
];
