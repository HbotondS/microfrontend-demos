import { BehaviorSubject } from "rxjs";

export const counter$ = new BehaviorSubject<number>(0);

export function increase() {
    console.log("increasing value");
    counter$.next(counter$.value + 1);
}

