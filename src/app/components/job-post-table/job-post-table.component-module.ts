import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { JobPostTableComponent } from './job-post-table.component';

@NgModule({
  imports: [MatCardModule],
  declarations: [JobPostTableComponent],
  providers: [],
  exports: [JobPostTableComponent]
})
export class JobPostTableComponentModule {
}
