import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddFutureComponent} from './add-future/add-future.component';
import { FuturesComponent } from './futures/futures.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  { path: '', component: FuturesComponent, canActivate: [AuthGaurdService] },
  { path: 'addcontract', component: AddFutureComponent, canActivate: [AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
