// type Proxy<T> = {
//    get(): T;
//    set(value: T): void;
// }
// type Proxify<T> = {
//    [P in keyof T]: Proxy<T[P]>;
// }
// function proxify<T>(o: T): Proxify<T> {
//    // ... wrap proxies ...
// }
// let proxyProps = proxify(props);
// function unproxify<T>(t: Proxify<T>): T {
//    let result = {} as T;
//    for (const k in t) {
//        result[k] = t[k].get();
//    }
//    return result;
// }
var obj = {
    get: function () { return 1; },
    set: function () { return 1; },
};
