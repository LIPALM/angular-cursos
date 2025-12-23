import { Pipe, PipeTransform } from "@angular/core";
import { Color } from "../interface/hero.interface";

@Pipe({
  name: 'color'
})

export class ColorCasePipe implements PipeTransform {
  transform(value: Color): string {
    return Color[value];
  }
}
