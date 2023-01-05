import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxCardComponent } from './checkbox-card/checkbox-card.component';
import { CheckboxContenedorComponent } from './checkbox-contenedor/checkbox-contenedor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CheckboxCardComponent,
    CheckboxContenedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CheckboxContenedorComponent
  ]
})
export class CheckboxModule { }
