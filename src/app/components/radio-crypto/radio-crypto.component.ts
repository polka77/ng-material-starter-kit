import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ChipsModel } from '../../models/chips.model';
import { ChipsService } from '../../services/chips.service';

@Component({
  selector: 'app-radio-crypto',
  styleUrls: ['./radio-crypto.component.scss'],
  templateUrl: './radio-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioCryptoComponent {
  readonly list$: Observable<ChipsModel[]> = this._chipsService.getAll();

  constructor(private _chipsService: ChipsService) {}
}
