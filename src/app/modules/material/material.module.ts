import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialRoutingModule } from './metrial-routing.module';

@NgModule({
  declarations: [MaterialComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialRoutingModule,
  ]
})
export class MaterialModule { }
