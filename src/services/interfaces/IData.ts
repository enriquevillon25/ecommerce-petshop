export interface IData<T> {
  getAll(): Promise<T[]>;
}
