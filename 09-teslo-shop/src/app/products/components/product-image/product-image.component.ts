import { AfterViewInit, Component, ElementRef, input, OnChanges, SimpleChanges, viewChild } from '@angular/core';
import { ControlEvent } from '@angular/forms';
import { ProductImagePipe } from '@products/pipes/product-image.pipe';
import Swiper from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


@Component({
  selector: 'product-image',
  imports: [ProductImagePipe],
  templateUrl: './product-image.component.html',
  styles: `
    .swiper {
      width: 100%;
      height: 500px;
    }
  `,
})
export class ProductImageComponent implements AfterViewInit, OnChanges {

  images = input.required<string[]>();
  swiperDiv = viewChild.required<ElementRef>('swiperDiv');


  swiper: Swiper | undefined = undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['images'].firstChange) {
      return;
    }
    if ( !this.swiper ) return;

    this.swiper.destroy(true, true);

    const paginationEl: HTMLDivElement =
      this.swiperDiv().nativeElement?.querySelector('.swiper-pagination');

    paginationEl.innerHTML = '';
    setTimeout(() => {
      this.swiperInit();
    }, 100);



    this.swiperInit();

    // En lugar de destruir, actualiza el Swiper
    // setTimeout(() => {
    //   if ( this.swiper ) {
    //     this.swiper.update();
    //     this.swiper.pagination?.render();
    //     this.swiper.pagination?.update();
    //   }
    // }, 100);
  }


  ngAfterViewInit(): void {
    this.swiperInit();
  }


  swiperInit() {
    const element = this.swiperDiv().nativeElement;
    if ( !element ) return;

    this.swiper = new Swiper( element , {
    // Optional parameters
      direction: 'horizontal',
      loop: true,
      modules: [
        Navigation, Pagination
      ],

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

  }

}
