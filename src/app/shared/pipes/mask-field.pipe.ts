import { Pipe, PipeTransform } from '@angular/core';
import { FieldMaskingService } from '../../core/services/field-masking.service';

/**
 * Pipe for masking sensitive data fields (PDPA/GDPR compliance)
 * 
 * Usage:
 * {{ value | maskField:'fieldName' }}
 * 
 * Example:
 * {{ employee.mobile | maskField:'mobile' }}
 * {{ employee.id_people | maskField:'id_people' }}
 */
@Pipe({
  name: 'maskField',
  pure: true,
  standalone: true
})
export class MaskFieldPipe implements PipeTransform {
  constructor(private maskService: FieldMaskingService) {}

  transform(value: string | null | undefined, fieldName: string): string | null {
    if (!fieldName) {
      return value ?? null;
    }
    return this.maskService.mask(fieldName, value);
  }
}

