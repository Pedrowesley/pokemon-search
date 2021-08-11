import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { ListConditionsComponent } from './list-conditions/list-conditions.component';
import { ListGamesComponent } from './list-conditions/list-games/list-games.component';
import { PokeListRoutingModule } from './poke-list-routing.module';
import { PokeListComponent } from './poke-list.component';
import { SearchButtonComponent } from './search-button/search-button.component';

@NgModule({
  declarations: [
    PokeListComponent,
    SearchButtonComponent,
    ListConditionsComponent,
    ListGamesComponent,
  ],
  imports: [
    CommonModule,
    PokeListRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    LoadingModule,
    FormsModule,
    MatCardModule,
    MatListModule,
  ],
})
export class PokeListModule {}
