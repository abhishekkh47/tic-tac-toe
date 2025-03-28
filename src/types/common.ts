export interface IUserAuthInfo {
  _id: string | undefined;
  issuedOn: number;
  expiredOn: number;
  email: string | undefined;
}

export interface IUserSignup {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ITokenResponse {
  token: string;
  refreshToken: string;
}
