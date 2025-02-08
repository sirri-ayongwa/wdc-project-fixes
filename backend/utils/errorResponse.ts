class ErrorResponse extends Error {
    codeStatus: number;
  
    constructor(message: string, codeStatus: number) {
      super(message);
      this.codeStatus = codeStatus;
  
      // Ensure the name of the error is correct for debugging
      this.name = 'ErrorResponse';
  
      // Maintain proper stack trace in V8 environments
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export default ErrorResponse;
  