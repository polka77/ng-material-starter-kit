import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ChipsModel } from '../../models/chips.model';
import { ChipsService } from '../../services/chips.service';

@Component({
  selector: 'app-crypto-table',
  styleUrls: ['./crypto-table.component.scss'],
  templateUrl: './crypto-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoTableComponent {
  readonly list$: Observable<ChipsModel[]> = this._chipsService.getAll();

  constructor(private _chipsService: ChipsService) {
    
  }
}
