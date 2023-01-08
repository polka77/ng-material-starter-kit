import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChipsListComponent } from './chips-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatChipsModule, MatProgressSpinnerModule],
  declarations: [ChipsListComponent],
  providers: [],
  exports: [ChipsListComponent]
})
export class ChipsListComponentModule {
}
