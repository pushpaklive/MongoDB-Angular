import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes:Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
