import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal, Query, effect } from '@angular/core';
import { environment } from "@environments/environment";
import type { GiphyResponse } from "../interfaces/giphy.interface";
import { Gif } from "../interfaces/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";
import { map, tap } from "rxjs";

const GIF_KEYS = 'searchHistory';

const LoadFromLocalStorage = () => {
  const gifsHistoryString = localStorage.getItem(GIF_KEYS) ?? '{}';
  const gifs = JSON.parse(gifsHistoryString);
  console.log(gifs);
  return gifs;
}



@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]); // [gif1, gif2, gif3]
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);


  // [ [gif1, gif2, gif3], [gif4, gif5, gif5], [gif6, gif7, gif9] ]
  trendinGridgroup = computed(() => {
    const gifs = []
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      gifs.push(this.trendingGifs().slice(i, i + 3));
    }
    console.log(gifs);
    return gifs;
  })

  //searchGifs = signal<Gif[]>([]);
  //searchGifsLoading = signal(false);

  searchHistory = signal<Record<string, Gif[]>>(LoadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));


  constructor() {
    this.loadTrendingGifs();
    this.loadSearchGifs();
  }


  saveGifsToHistory = effect(() =>{
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEYS, historyString);
  })

  loadTrendingGifs() {
    if (this.trendingGifsLoading()) return ;

    this.trendingGifsLoading.set(true);

    //this.trendingGifsLoading.set(true);
    this.http.get<GiphyResponse>(`${environment.giphyUrl}${environment.giphytrending}`, {
      params: {
        api_key: environment.giphyApikey,
        limit: 20,
        offset: this.trendingPage() * 20,
      },
    })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
        this.trendingGifs.update((currentGifs) => [
          ...currentGifs,
          ...gifs
        ])
        this.trendingPage.update((page) => page + 1 );
        this.trendingGifsLoading.set(false);
        console.log({gifs})
      });
  }

  loadSearchGifs( query:string = '' ) {
    //if (query.trim() === '') {
    //  this.searchGifs.set([]);
    //  this.searchGifsLoading.set(false);
    //  return;
    //}
    //this.searchGifsLoading.set(true);
    return this.http.get<GiphyResponse>(`${environment.giphyUrlSearch}${environment.giphytrendingSearch}`, {
      params: {
        api_key: environment.giphyApikey,
        q: query,
        limit: 20,
      },
    })
    .pipe(
      map(({ data }) => data),
      map(( items ) => GifMapper.mapGiphyItemToGifArray(items)),

      tap ( items => {
        this.searchHistory.update( history => ({
          ...history,
          [query.toLowerCase()]: items
        }))
      })


    );
      // .subscribe((resp) => {
      //   const gifsSearch = GifMapper.mapGiphyItemToGifArray(resp.data);
      //   // this.searchGifs.set(gifsSearch);
      //   // this.searchGifsLoading.set(false);
      //   // console.log({search: gifsSearch})
      // });
  }

  getHistoryGifs ( query: string ): Gif[] {
    return this.searchHistory() [query] ?? [];
  }
}


