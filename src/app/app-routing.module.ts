import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChipsListComponent } from './components/chips-list/chips-list.component';
import { CheckboxCategoriesComponent } from './components/checkbox-categories/checkbox-categories.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { RadioCryptoComponent } from './components/radio-crypto/radio-crypto.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { SelectCategoriesComponent } from './components/select-categories/select-categories.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { JobPostTableComponent } from './components/job-post-table/job-post-table.component';
import { ChipsListComponentModule } from './components/chips-list/chips-list.component-module';
import { CheckboxCategoriesComponentModule } from './components/checkbox-categories/checkbox-categories.component-module';
import { MenuCategoriesComponentModule } from './components/menu-categories/menu-categories.component-module';
import { RadioCryptoComponentModule } from './components/radio-crypto/radio-crypto.component-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { SelectCategoriesComponentModule } from './components/select-categories/select-categories.component-module';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';
import { CryptoTableComponentModule } from './components/crypto-table/crypto-table.component-module';
import { JobPostTableComponentModule } from './components/job-post-table/job-post-table.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'crypto', component: ChipsListComponent },
      { path: 'checkbox-categories', component: CheckboxCategoriesComponent },
      { path: 'categories-menu', component: MenuCategoriesComponent },
      { path: 'radio-crypto', component: RadioCryptoComponent },
      { path: 'public-holidays', component: PublicHolidaysComponent },
      { path: 'categories', component: SelectCategoriesComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'product-search', component: ProductSearchComponent },
      { path: 'crypto-table', component: CryptoTableComponent },
      { path: 'job-post-table', component: JobPostTableComponent },
    ]),
    ChipsListComponentModule,
    CheckboxCategoriesComponentModule,
    MenuCategoriesComponentModule,
    RadioCryptoComponentModule,
    PublicHolidaysComponentModule,
    SelectCategoriesComponentModule,
    ProductsListComponentModule,
    ProductSearchComponentModule,
    CryptoTableComponentModule,
    JobPostTableComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
