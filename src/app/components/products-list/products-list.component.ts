import { isNgTemplate } from '@angular/compiler';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  styleUrls: ['./products-list.component.scss'],
  templateUrl: './products-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  readonly list$: Observable<ProductModel[]> = this._productsService.getAll();

  constructor(private _productsService: ProductsService) {}
}
