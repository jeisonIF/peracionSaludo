import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstaOperacionesPageRoutingModule } from './esta-operaciones-routing.module';

import { EstaOperacionesPage } from './esta-operaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstaOperacionesPageRoutingModule
  ],
  declarations: [EstaOperacionesPage]
})
export class EstaOperacionesPageModule {}
