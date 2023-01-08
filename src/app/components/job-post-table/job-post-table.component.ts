import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-job-post-table',
  styleUrls: ['./job-post-table.component.scss'],
  templateUrl: './job-post-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostTableComponent {
}
