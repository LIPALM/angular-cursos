import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { environment } from '../../../environments/environment.development';
import { v4 as UUIDv4 } from 'uuid';
import { JsonPipe } from '@angular/common';


mapboxgl.accessToken = environment.mapBoxToken


interface Marker {
  id: string;
  marker: mapboxgl.Marker;
}

@Component({
  selector: 'app-markes-page',
  imports: [JsonPipe],
  templateUrl: './markes-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkesPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);
  markes = signal<Marker[]>([]);


  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement ) return;

    await new Promise((resolve) => setTimeout( resolve, 80 ));

    const element = this.divElement()!.nativeElement


    const map = new mapboxgl.Map({
	    container: element, // container ID
	    style: 'mapbox://styles/mapbox/streets-v12', // style URL
	    center: [127.010382, 37.529917], // starting position [lng, lat]
	    zoom: 14, // starting zoom
    });

    // const marker = new mapboxgl.Marker({
    //   draggable: false,
    //   color: 'cyan'
    // })
    //   .setLngLat([127.010382, 37.529917])
    //   .addTo( map );

    // marker.on('dragend', (event) => {
    //   console.log(event);
    // });

    this.mapListeners( map );
  }

  mapListeners( map: mapboxgl.Map ) {
    map.on('click', (event) => this.mapClick(event));

    this.map.set( map );
  }

  mapClick( event: mapboxgl.MapMouseEvent ) {

    if ( !this.map() ) return;

    const map = this.map()!;
    const coords = event.lngLat;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const mapboxMarker = new mapboxgl.Marker({
      color: color,
    }).setLngLat(coords)
      .addTo(map)

    const newMarker: Marker = {
      id: UUIDv4(),
      marker: mapboxMarker
    }

    this.markes.update( (markes) => [newMarker, ...markes] );

    console.log( this.markes() );

  }


  flyToMarker ( lnglat:LngLatLike ) {
    if ( !this.map()) return;
    this.map()!.flyTo({
      center: lnglat,
    })

  }


  deleteMarker( marker: Marker ) {
    if ( !this.map()) return;
    const map = this.map()!;

    marker.marker.remove();

    this.markes.set( this.markes().filter( (m) => m.id !== marker.id ) );

  }




}
