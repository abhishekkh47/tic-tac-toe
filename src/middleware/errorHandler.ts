export class NetworkError extends Error {
  status: number;
  constructor(message: any, status: number) {
    super(message);
    this.status = status;
  }
}
