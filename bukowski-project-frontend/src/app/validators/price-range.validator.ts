import { AbstractControl, ValidationErrors } from '@angular/forms';

export function priceRangeValidator(
  minKey: string,
  maxKey: string
) {
  return (control: AbstractControl): ValidationErrors | null => {
    const min = control.get(minKey)?.value;
    const max = control.get(maxKey)?.value;

    if (min != null && max != null && min > max) {
      return { priceRangeInvalid: true };
    }

    return null;
  };
}