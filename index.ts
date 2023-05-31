type Proxy<T> = {
   get(): T;
   set(value: T): void;
}
type Proxify<T> = {
   [P in keyof T]: Proxy<T[P]>;
}
function proxify<T>(o: T): Proxify<T> {
   // ... wrap proxies ...
}
const props = { a: 1, b: 2, c: 3 }
let proxyProps = proxify(props);
function unproxify<T>(t: Proxify<T>): T {
   let result = {} as T;
   for (const k in t) {
       result[k] = t[k].get();
   }
   return result;
}

let originalProps = unproxify(proxyProps);