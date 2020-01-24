import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';
import { CustomRoutingModule } from './custom-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule,
    CustomRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomModule { }
