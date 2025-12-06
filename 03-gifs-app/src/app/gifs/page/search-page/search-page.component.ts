import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from "../../services/gifs.service";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {

  gifService = inject( GifService );
  gifs = signal<Gif[]>([]);

  constructor() {
    const route = inject(ActivatedRoute);
    route.queryParams.subscribe(params => {
      const q = params['q']?.trim();
      if (q) {
        this.gifService.loadSearchGifs(q).subscribe((resp) => {
          this.gifs.set(resp);
        });
      }
    });
  }

  // readonly gifService = inject(GifService);

  onSearch( query:string ) {
    const q = query?.trim() ?? '';
    if (q.length === 0) return;
    this.gifService.loadSearchGifs(q).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }

}
