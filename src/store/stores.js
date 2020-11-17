import { configure } from 'mobx';

import buttonStore from './buttonStore';
import menuStore from './menuStore';

configure({ enforceActions: 'observed' });

const stores = {
  buttonStore,
  menuStore,
};

export default stores;
