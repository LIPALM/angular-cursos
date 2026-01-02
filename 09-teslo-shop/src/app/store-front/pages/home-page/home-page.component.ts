import { Component, inject, Pipe } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
import { PaginationComponent } from "@shared/components/pagination/pagination.component";

// import { ProductCard } from "../../../products/components/product-card/product-card.component";
import { PaginationService } from '../../../shared/components/pagination/paginatio.service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productsService = inject(ProductsService);
  PaginationService = inject(PaginationService);

  // activedRoute = inject(ActivatedRoute);

  // currentPage = toSignal(
  //   this.activedRoute.queryParamMap.pipe(

  //     map( params => (params.get('page') ? + params.get('page')! : 1 ) ),
  //     map( page => (isNaN(page) ? 1 : page))
  //   ),
  //   {
  //     initialValue: 1
  //   }
  // );


  productsResponse = rxResource({
    request: () => ({ page: this.PaginationService.currentPage() - 1 }),
    loader: ({ request} ) => {
      return this.productsService.getProducts({
        offset: request.page * 9
      });
    }
  })
}
