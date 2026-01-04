import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '@auth/interfaces/user.interface';
import { Gender, Product, ProductsResponse } from '@products/interface/product.interface';
import { delay, forkJoin, map, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';



const baseUrl =  environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}


const emtyProduct: Product = {
  id: 'new',
  title: '',
  price: 0,
  description: '',
  slug: '',
  stock: 0,
  sizes: [],
  gender: Gender.Men,
  tags: [],
  images: [],
  user: {} as User,
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

  getProductById(id: string): Observable<Product> {

    if (id === 'new') {
      return of(emtyProduct);
    }

    if ( this.productCache.has(id)) {
      return of( this.productCache.get(id)! );
    }


    return this.http.get<Product>(`${baseUrl}/products/${id}`)
      .pipe(
        tap((product) => this.productCache.set(id, product))
      )
  }

  updateProduct(
    id: string,
    productLike: Partial<Product>,
    imagesFileList?: FileList
  ): Observable<Product> {
    const currentImages = productLike.images ?? [];

    return this.upLoadImages(imagesFileList).pipe(
        map((imageNames) => ({
          ...productLike,
          images: [...currentImages,...imageNames]
        })),
        switchMap( (updatedProduct) =>
          this.http.patch<Product>(`${baseUrl}/products/${id}`, updatedProduct)
        ),
        tap((product) => this.updateProductCache(product))
      );


    // return this.http.patch<Product>(`${baseUrl}/products/${id}`, productLike)
    //   .pipe(tap((product) => this.updateProductCache(product)) );
  }

  createProduct(
    productLike: Partial<Product>,
    imagesFileList?: FileList
  ): Observable<Product> {
    return this.upLoadImages(imagesFileList).pipe(
      map((imageNames) => ({
        ...productLike,
        images: [...(productLike.images ?? []), ...imageNames]
      })),
      switchMap((newProduct) =>
        this.http.post<Product>(`${baseUrl}/products`, newProduct)
      ),
      tap((product) => this.updateProductCache(product))
    );
  }


  updateProductCache( product: Product) {
    const productId = product.id;

    this.productCache.set(productId, product);

    this.producctCache.forEach((ProductsResponse) => {
      ProductsResponse.products = ProductsResponse.products.map((currentProduct) =>
        currentProduct.id === productId ? product : currentProduct
      );
    })
    console.log('Cache de productos actualizada');
  }

  // Tome un FileList y lo suba
  upLoadImages( images?: FileList ): Observable<string[]> {
    if ( !images ) return of([]);

    const uploadObservables = Array.from(images).map( (imageFile) =>
      this.upLoadImage(imageFile)
    );

    return forkJoin(uploadObservables).pipe(
      tap((imageNames) => console.log({ imageNames }))
    );
  }

  upLoadImage( imageFile: File ): Observable<string> {
    const formData = new FormData();
    formData.append('file', imageFile);

    return this.http.post<{ fileName: string }>(`${baseUrl}/files/product`, formData)
      .pipe(
        map(resp => resp.fileName)
      )
  }

}
