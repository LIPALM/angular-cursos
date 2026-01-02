import { Component, computed, input, linkedSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-pagination',
  imports: [RouterLink],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  pages = input(0);
  currentPage = input<number>(1);

  // activePage = signal(this.currentPage()); se puede usar con un signal pero es mejor usar linked signal, bueno es opcional 
  activePage = linkedSignal(this.currentPage);


  getPagesListArray = computed(() => {
    return Array.from({ length: this.pages()}, (_, i) => i + 1);
  })
}
