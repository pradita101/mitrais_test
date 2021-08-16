import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserFormComponent } from "./user-form/user-form.component";
import { LoginComponent } from "./login/login.component";



const routes: Routes = [
  { path: "", component: UserFormComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
