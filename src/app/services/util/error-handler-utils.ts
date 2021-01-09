export class APIError {
  errorCount: number;
  errors: Array<ErrorHandler>;

  constructor(errorCount: number, errors: Array<ErrorHandler>) {
    this.errorCount = errorCount;
    this.errors = errors;
  }
}

export class ErrorHandler {
  code: number;
  error: string;
  message: string;
  object: any;

  constructor(code: number, error: string, message: string, object: any) {
    this.code = code;
    this.error = error;
    this.message = message;
    this.object = object;
  }
}

export class UIError {
  code?: number;
  msg: string;
  error: any;
}

export class ErrorCodes {
  public static DEFAULT_ERROR = -1;
}

export interface FrontErrorHandler {
  handler(uiError: UIError);
}
