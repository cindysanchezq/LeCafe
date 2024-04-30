import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioFormat'
})
export class PrecioFormatPipe implements PipeTransform {
  transform(value: number): string {
    return value.toLocaleString('es-CO', { minimumFractionDigits: 0 });
  }
}
