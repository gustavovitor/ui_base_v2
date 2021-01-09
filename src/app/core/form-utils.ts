import { ValidatorFn } from '@angular/forms';

export class FormUtils {
  constructor() {
  }

  public static needToBeEqual(compareField: string, message: string): ValidatorFn {
    return (control) => {
      if (!control || !control.value) {
        return null;
      } else {
        if (control.value !== control.parent.get(compareField).value) {
          return {
            needToBeEqual: message
          };
        }
      }
    };
  }

  public static requiredIfFieldNonEmpty(nonEmptyField: string): ValidatorFn {
    return (control) => {
      if (control && control.parent) {
        if (control.parent.get(nonEmptyField).value) {
          if (!control.value) {
            return {
              required: true
            };
          }
        }
      }
      return null;
    };
  }

  public static requiredIfFieldEmpty(emptyField: string): ValidatorFn {
    return (control) => {
      if (control && control.parent) {
        if (control.parent.get(emptyField).value) {
          if (control.value) {
            return {
              required: true
            };
          }
        }
      }
      return null;
    };
  }
}
