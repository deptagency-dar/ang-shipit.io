import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, CardComponent]
})
export class SharedModule { }
