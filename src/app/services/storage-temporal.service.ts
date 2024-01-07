import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageTemporalService {

  private _inputValue: string = '';

  get inputValue(): string {
    return this._inputValue;
  }

  set inputValue(value: string) {
    this._inputValue = value;
  }
}
