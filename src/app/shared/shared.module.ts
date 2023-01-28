import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';


@NgModule({
  declarations: [
    SelectComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SelectComponent,
    TextComponent
  ]
})
export class SharedModule { }
