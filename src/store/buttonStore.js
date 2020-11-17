import { makeObservable, observable, action, computed } from 'mobx';

class ButtonStore {
  openMenu = false;

  constructor() {
    makeObservable(this, {
      openMenu: observable,
      toggleOpenMenu: action,
      isOpen: computed,
    });
  }

  toggleOpenMenu() {
    this.openMenu = !this.openMenu;
  }

  get isOpen() {
    return this.openMenu;
  }
}

export default new ButtonStore();
