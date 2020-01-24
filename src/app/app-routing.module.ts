import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: 'meterial',
      loadChildren: () => import('./modules/material/material.module').then(mod => mod.MaterialModule)
    },
    {
      path: 'custom',
      loadChildren: () => import('./modules/custom/custom.module').then(mod => mod.CustomModule)
    },
    {
      path: '',
      redirectTo: 'meterial',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
