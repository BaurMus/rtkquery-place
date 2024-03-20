export interface IPlace {
  id: number,
  name: string,
  image: string
}

export interface IPlaceData extends Omit<IPlace, 'id'> {}