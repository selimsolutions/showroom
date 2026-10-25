import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { CarDetailPage } from './pages/car-detail/car-detail';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'car/:id', component: CarDetailPage },
  { path: '**', redirectTo: '' },
];
