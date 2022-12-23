// 编译: tsc 文件名
// tsc --init 生成配置文件
// tsc --watch 自动编译
// tsc --noEmitOnError 报错不编译
var a = "";
function nameHandle(params, date) {
    return "".concat(params, "----").concat(date);
}
nameHandle('123', new Date());
var perName = '';
var perAge = 0;
var arr = [1, 2];
// 不声明值类型，ts会自动推断
var arr1 = [true, false];
function clickHandle() {
    // 不声明返回值类型，ts会自动推断
    console.log('void');
}
function clickHandle1(obj) {
    var _a;
    // ?可选
    console.log((_a = obj.b) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
clickHandle1({ a: 1, b: '2' });
// 联合类型
function clickHandle2(a) {
    // 使用参数的方法时必须区分参数类型
    if (typeof a === 'string') {
        console.log(a.toUpperCase());
    }
    else {
        console.log(a);
    }
}
clickHandle2('t');
function clickHandle3(a) {
    return 'dasdasdasdasdas';
}
clickHandle3('t');
function clickHandle4(params) {
    console.log('params.x', params.x);
}
clickHandle4({
    x: 1,
    y: 2
});
var bear = {
    name: 'name',
    honey: 'honey'
};
var birdAnimal = {
    name: 'name',
    seaMew: 'seaMew'
};
var tiger = {
    name: 'princekin',
    kind: 'child'
};
// 不能重复声明type
// type Person = {
//    name: string
// }
// type Person = {
//    kind: string
// }
// 将window断言为any类型
// (window as any).foo = 1;
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']
// 泛型约束中使用类型参数
function asdasd(obj, key) {
    // Key extends keyof Type   key的类型属于Type类型的其中一个key
    return obj[key];
}
var Odasd = /** @class */ (function () {
    function Odasd() {
    }
    return Odasd;
}());
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.x = true;
    }
    MyClass.prototype.check = function (s) {
        console.log(1);
        console.log(this[s]);
        return this[s];
    };
    return MyClass;
}());
var myclass = new MyClass();
console.log('myclass.x', myclass.x);
myclass.check('x');
