import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "@environments/environment";
import type { GiphyResponse } from "../interfaces/giphy.interface";
import { Gif } from "../interfaces/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";



@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchGifs = signal<Gif[]>([]);
  searchGifsLoading = signal(false);

  constructor() {
    this.loadTrendingGifs();
    this.loadSearchGifs();
  }

  loadTrendingGifs(): void {
    this.trendingGifsLoading.set(true);
    this.http.get<GiphyResponse>(`${environment.giphyUrl}${environment.giphytrending}`, {
      params: {
        api_key: environment.giphyApikey,
        limit: 20,
      },
    })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({gifs})
      });
  }

  loadSearchGifs(query: string = ''): void {
    if (query.trim() === '') {
      this.searchGifs.set([]);
      this.searchGifsLoading.set(false);
      return;
    }
    this.searchGifsLoading.set(true);
    this.http.get<GiphyResponse>(`${environment.giphyUrlSearch}${environment.giphytrendingSearch}`, {
      params: {
        api_key: environment.giphyApikey,
        q: query,
        limit: 20,
      }
    })
      .subscribe((resp) => {
        const gifsSearch = GifMapper.mapGiphyItemToGifArray(resp.data);
        this.searchGifs.set(gifsSearch);
        this.searchGifsLoading.set(false);
        console.log({gifsSearch})
      });
  }
}


