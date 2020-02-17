import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() {
  }

  setValueStorage(title: string, value: object): void {
    const session = JSON.stringify(value);
    localStorage.setItem(title, session);
  }

  getValueStorage(title: string): string {
    return localStorage.getItem(title);
  }

  clearValueStorage(remove: string): void {
    localStorage.removeItem(remove);
  }

  removeValueStorage(): void {
    localStorage.clear();
  }
}
