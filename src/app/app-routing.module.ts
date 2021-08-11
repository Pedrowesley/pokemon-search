import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/poke-list/poke-list.module').then(
        (m) => m.PokeListModule
      ),
  },
  {
    path: 'pokedetail',
    loadChildren: () =>
      import('./modules/poke-detail/poke-detail.module').then(
        (m) => m.PokeDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
