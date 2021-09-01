// 字符串值，数值，布尔值，数组，对象。
var length = 7;                             // 数字
var lastName = "Gates";                      // 字符串
var cars = ["Porsche", "Volvo", "BMW"];         // 数组
var x = { firstName: "Bill", lastName: "Gates" };    // 对象 



/**
 *


Undefined 与 Null 的区别
Undefined 与 null 的值相等，但类型不相等：

typeof undefined              // undefined
typeof null                   // object
null === undefined            // false
null == undefined             // true


 */





/**
 * 
您可使用 JavaScript 的 typeof 来确定 JavaScript 变量的类型：
typeof 运算符可返回以下原始类型之一：

string
number
boolean
undefined

 */


typeof "Bill"              // 返回 "string"
typeof 3.14                // 返回 "number"
typeof true                // 返回 "boolean"
typeof false               // 返回 "boolean"
typeof x                   // 返回 "undefined" (假如 x 没有值)


