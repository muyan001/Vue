/**
 * 
 * 
 * 
 * 
 *
 * 
 * 函数调用
函数中的代码将在其他代码调用该函数时执行：

当事件发生时（当用户点击按钮时）
当 JavaScript 代码调用时
自动的（自调用）
 */




function first(a,b){

    if(a>b){
        return a - b
    }

    if (b>=a){
        return a + b
    }
}


first(5,8)



/**
 * 
 * 局部变量
在 JavaScript 函数中声明的变量，会成为函数的局部变量。

局部变量只能在函数内访问。
 */

function myFunction(){

    var carName = "volvo"

}



