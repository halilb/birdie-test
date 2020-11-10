import { RootState } from "../store";

export interface ModelSelector<Fields, Id = number> {
  (state: RootState, id: Id): Fields | null;
  (state: RootState, ids: Id[]): Fields[];
  (state: RootState): Fields[];
}

export interface ManySelector<Fields, Id = number> {
  (state: RootState, id: Id): Fields[] | null;
  (state: RootState, ids: Id[]): Fields[] | null;
  (state: RootState): Fields[];
}
