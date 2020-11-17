import { makeObservable, observable, action } from 'mobx';

class MenuStore {
  textMainMenu = '';

  constructor() {
    makeObservable(this, {
      textMainMenu: observable,
      changeTextMainMenu: action,
    });
  }

  changeTextMainMenu (text) {
    this.textMainMenu = text;
  }
}

export default new MenuStore();
