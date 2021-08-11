import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokeDetailRoutingModule } from './poke-detail-routing.module';
import { PokeDetailComponent } from './poke-detail.component';

@NgModule({
  declarations: [PokeDetailComponent],
  imports: [CommonModule, PokeDetailRoutingModule],
})
export class PokeDetailModule {}
