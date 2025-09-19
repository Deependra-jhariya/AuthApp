export interface AuthTypes {
  uid: string;
  email: string | null;
}

export interface AuthPayload {
  email: string;
  password: string;
}
