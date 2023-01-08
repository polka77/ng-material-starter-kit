import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { RadioCryptoComponent } from './radio-crypto.component';

@NgModule({
  imports: [MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule, MatGridListModule],
  declarations: [RadioCryptoComponent],
  providers: [],
  exports: [RadioCryptoComponent]
})
export class RadioCryptoComponentModule {
}
