import { ORM } from "redux-orm";
import Event from "./event/model";

const schema = {
  Event,
};

export type Schema = typeof schema;

const orm = new ORM<Schema>({
  // @ts-ignore
  stateSelector: (state) => state.orm,
});
// @ts-ignore
orm.register(Event);

export default orm;
