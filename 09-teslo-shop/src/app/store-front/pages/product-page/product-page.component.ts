import { SlicePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@products/interface/product.interface';
import { ProductsService } from '@products/services/products.service';
import { ProductImageComponent } from "@products/components/product-image/product-image.component";

@Component({
  selector: 'app-product-page',
  imports: [ProductImageComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  productIdSlug = this.activatedRoute.snapshot.params['idSlug'];

  productResource = rxResource( {
    request: () => ({ idSlug: this.productIdSlug }),
    loader: ({ request }) =>
      this.productsService.getProductBySlug(request.idSlug),
  })
}
