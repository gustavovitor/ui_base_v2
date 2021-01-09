import { ErrorMessage } from 'ng-bootstrap-form-validation';

export const CUSTOM_ERRORS: ErrorMessage[] = [
  {
    error: 'required',
    format: requiredFormat
  }, {
    error: 'email',
    format: emailFormat
  }, {
    error: 'needToBeEqual',
    format: needToBeEqual
  }, {
    error: 'minlength',
    format: minLengthFormat
  }, {
    error: 'maxlength',
    format: maxLengthFormat
  }, {
    error: 'pattern',
    format: patternFormat
  }, {
    error: 'fullNameException',
    format: fullNameException
  }
];

export function patternFormat(label: string, error: any): string {
  return `${label} está inválido!`;
}

export function requiredFormat(label: string, error: any): string {
  return `${label} é obrigatório(a)!`;
}

export function emailFormat(label: string, error: any): string {
  return `Isso não me parece um email válido.`;
}

export function minLengthFormat(label: string, error: any): string {
  return `${label} precisa ter no mínimo ${error.requiredLength} caracteres.`;
}

export function maxLengthFormat(label: string, error: any): string {
  return `${label} só pode ter no máximo ${error.requiredLength} caracteres.`;
}

export function needToBeEqual(label: string, error: any): string {
  return error;
}

export function fullNameException(label: string, error: any): string {
  return `${label} não parece um nome completo.`;
}
