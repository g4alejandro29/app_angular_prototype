import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() {
  }

  setValueStorage(title: string, value: object) {
    const session = JSON.stringify(value);
    localStorage.setItem(title, session);
  }

  getValueStorage(title: string) {
    return localStorage.getItem(title);
  }

  clearValueStorage(remove: string) {
    localStorage.removeItem(remove);
  }

  removeValueStorage() {
    localStorage.clear();
  }
}
