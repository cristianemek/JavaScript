import { v7 as uuid } from "uuid";

export class Todo {
  /**
   *
   * @param {String} description descripcion del todo
   */

  constructor(description) {
    this.id = uuid();
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
