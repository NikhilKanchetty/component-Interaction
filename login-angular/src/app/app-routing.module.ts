import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoggedComponent } from './logged/logged.component';
const routes: Routes = [
  {path: '',         component:   LoginComponent   },
  {path: '',         component:   LoggedComponent  },
  {path: 'register', component:   RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

