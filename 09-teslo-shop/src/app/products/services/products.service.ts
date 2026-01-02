import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from '@products/interface/product.interface';
import { delay, Observable, of, OperatorFunction, tap } from 'rxjs';
import { environment } from 'src/environments/environment';



const baseUrl =  environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}


@Injectable({providedIn: 'root'})
export class ProductsService {
  private http  = inject(HttpClient);

  private producctCache = new Map<string, ProductsResponse>();
  private productCache = new Map<string, Product>();


  getProducts(options: Options): Observable<ProductsResponse> {

    const { limit = 9, offset = 0, gender = '' } = options;

    const key = `${limit}-${offset}-${gender}`;
    if ( this.producctCache.has(key)) {
      return of( this.producctCache.get(key)! );
    }


    return this.http
      .get<ProductsResponse>(`${baseUrl}/products`, {
        params: {
          limit,
          offset,
          gender,
        }
      })
      .pipe(
        tap((resp) => console.log(resp)),
        tap((resp) => this.producctCache.set(key, resp))

      );
  }

  getProductBySlug(idSlug: string): Observable<Product> {

    if ( this.productCache.has(idSlug)) {
      return of( this.productCache.get(idSlug)! );
    }


    return this.http.get<Product>(`${baseUrl}/products/${idSlug}`)
      .pipe(
        tap((product) => this.productCache.set(idSlug, product))
      )
  }
}
