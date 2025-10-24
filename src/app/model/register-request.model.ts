export interface RegisterRequestDto {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  roles?: string[]; // optional, can be empty
}