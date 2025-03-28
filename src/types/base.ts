export type MongooseModel<T> = T & IBase;

export interface IBase {
  readonly _id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
