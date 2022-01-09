# ts中的类型

## 基本类型

- string
- number
- boolean
- array: ```Array<string>``` ```string[]```
- object
- null和undefind

## 其他类型

- void类型： 通常用于约束函数的返回值，表示没有任何返回
- never类型：通常用于约束函数，表示永远不会结束
- 字面量类型：使用一个定值进行约束
- 元祖类型：使用一个数组进行约束，并且数组中的每一项确定
- any类型：可以绕过类型系统的检查

## 类型别名
- 对已知的一些类型定义名称 ```type 类型名称 = ...```

## 函数的相关约束

- 函数重载：在函数实现之前，对函数调用的多种情况进行声明

- 可选参数：可以在某些参数名后加上问号，表示改参数可以不用传递
```js
function combine(a:string,b:string):string;
function combine(a:number,b:number):number;
function combine(a:number|string,b:number|string){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    }else if(typeof a === 'string' && typeof b === 'string'){
        return a + b
    }
    throw new Error('不支持的类型')
}
```
