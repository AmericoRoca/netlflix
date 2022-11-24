import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MidleComponent } from './midle/midle.component';
import { MyListComponent } from './my-list/my-list.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { RegisterComponent } from './register/register.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'midle',
    component: MidleComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'movies',
    component: PeliculasComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'my-list',
    component: MyListComponent,
  },
  {
    path: '**',
    redirectTo: "/home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
