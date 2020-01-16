import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'alertas', loadChildren: () => import('./alertas/alertas.module').then( m => m.AlertasPageModule)},
  { path: 'avatar', loadChildren: () => import('./avatar/avatar.module').then( m => m.AvatarPageModule)},
  { path: 'check', loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)},
  { path: 'date-time', loadChildren: () => import('./date-time/date-time.module').then( m => m.DateTimePageModule)},
  { path: 'fab', loadChildren: () => import('./fab/fab.module').then( m => m.FabPageModule)},
  { path: 'grid', loadChildren: () => import('./grid/grid.module').then( m => m.GridPageModule)},
  { path: 'input', loadChildren: () => import('./input/input.module').then( m => m.InputPageModule)},
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
