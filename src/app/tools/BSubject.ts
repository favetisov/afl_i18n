import { BehaviorSubject } from 'rxjs';

/**
 * упрощённая версия Behavior subject для повседневного пользования
 */
export class BSubject<T>  {

  private bs$: BehaviorSubject<T>;

  constructor(value) {
    this.bs$ = new BehaviorSubject<T>(value);
  }

  subscribe(arg) {

    if (arg.next) { //classic subscription, nothing to do
      return this.bs$.subscribe(arg);
    } else { //short form

      let prevValue = this.bs$.getValue();
      return this.bs$.subscribe({
        next: (value) => {
          arg(value, prevValue);
          prevValue = JSON.parse(JSON.stringify(value));
        },
        error: (e) => {
          throw new Error('Uncaught BehaviorSubject error: '+e);
        },
        complete: () => {
          console.warn("BehaviorSubject Complete event caught, but not processed due to model limitations");
        }
      });
    }

  }

  getValue() {
    return this.bs$.getValue();
  }

  next(value: T) {
    return this.bs$.next(value);
  }

  /**
   * updating properties of object and emiting new value   */
  update(properties: Object) {
    let value = this.getValue();
    for (let key in properties) {
      value[key] = properties[key];
    }
    this.bs$.next(value);
  }

}