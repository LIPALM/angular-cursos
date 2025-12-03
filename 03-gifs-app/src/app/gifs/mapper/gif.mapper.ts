import { GiphyItem } from "../interfaces/giphy.interface";
import { Gif } from '../interfaces/gif.interface';

export class GifMapper {



  static mapGiphySearchToGit(searchItem: GiphyItem): Gif {
    return {
      id: searchItem.id,
      title: searchItem.title,
      url: searchItem.images.original.url
    }
  }
  //mapGiphySearchToGiArray
  static mapGiphySearchToGiArray ( itemsSearch: GiphyItem[] ): Gif[] {
    return itemsSearch.map(this.mapGiphySearchToGit);
  }




  static mapGiphyItemToGit(item: GiphyItem ): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    };
  }

  static mapGiphyItemToGifArray ( items: GiphyItem[] ): Gif[] {
    return items.map(this.mapGiphyItemToGit);
  }
}
