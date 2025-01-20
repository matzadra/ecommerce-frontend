import storage from 'redux-persist/lib/storage';
import noopStorage from './noopStorage';

const isServer = typeof window === 'undefined';

export default isServer ? noopStorage : storage;
