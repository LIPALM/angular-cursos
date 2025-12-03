import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from "../../services/gifs.service";

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {

  readonly gifService = inject(GifService);

  onSearch( query:string ) {
    const q = query?.trim() ?? '';
    if (q.length === 0) return;
    this.gifService.loadSearchGifs(q);
  }

}
