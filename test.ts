// 编译: tsc 文件名
// tsc --init 生成配置文件
// tsc --watch 自动编译
// tsc --noEmitOnError 报错不编译

var a: string = "";

function nameHandle(params: string, date: Date) {
   return `${params}----${date}`
}

nameHandle('123', new Date())
let perName: string = ''
let perAge: number = 0

let arr: number[] = [1, 2]
// 不声明值类型，ts会自动推断
let arr1: Array<boolean> = [true, false]

function clickHandle(): void {
   // 不声明返回值类型，ts会自动推断
   console.log('void');
}

function clickHandle1(obj: { a: number, b?: string }){
   // ?可选
   console.log(obj.b?.toUpperCase());
}
clickHandle1({ a: 1, b: '2'})

// 联合类型
function clickHandle2( a: number|string ){
   // 使用参数的方法时必须区分参数类型
   if(typeof a === 'string'){
      console.log(a.toUpperCase());
   }else{
      console.log(a);
   }
}
clickHandle2('t')

// 类型别名
type ID = number|string
type NameString = string
function clickHandle3(a: ID): NameString{
   return 'dasdasdasdasdas'
}
clickHandle3('t')

// 接口
interface Point {
   x: number,
   y: number
}
function clickHandle4(params: Point){
   console.log('params.x', params.x);
}
clickHandle4({
   x: 1,
   y: 2,
})

// 几乎所有可以通过interface定义的类型都可以通过type来定义

// 拓展接口
interface Animal {
   name: string
}
interface Bear extends Animal {
   honey: string
}
const bear: Bear = {
   name: 'name',
   honey: 'honey'
}
// 类型别名拓展
type FlyAnimal = {
   name: string
}
type BirdAnimal = FlyAnimal & {
   seaMew: string
}
const birdAnimal: BirdAnimal = {
   name: 'name',
   seaMew: 'seaMew'
}

// 重复声明interface，为interface增加新的成员
interface Book {
   name: string
}
interface Book {
   kind: string
}
const tiger: Book = {
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

function createArray<T>(length: number, value: T): Array<T> {
   let result: T[] = [];
   for (let i = 0; i < length; i++) {
       result[i] = value;
   }
   return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']

// 泛型约束中使用类型参数
function asdasd<Type, Key extends keyof Type>(obj: Type, key: Key){
   // Key extends keyof Type   key的类型属于Type类型的其中一个key
   return obj[key]
}

class Odasd {
   name!: string;
}


class MyClass {
   [s: string]: boolean | ((s: string) => boolean)
   x = true
   check(s: string){
      console.log(1);
      console.log(this[s]);
      return this[s] as boolean
   }
}
const myclass = new MyClass()
console.log('myclass.x', myclass.x);
myclass.check('x')

