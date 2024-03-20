export interface IUser {
  id: number | undefined,
  name: string
}

export interface IUserInitial {
  isLoading: boolean,
  error: null | string,
  user: IUser
}