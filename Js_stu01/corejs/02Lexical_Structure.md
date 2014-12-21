#Lexical Structure 词法结构

***

**词法**

* JavaScript区分大小写
* 在JavaScript中，与HTML相关连的方法、关键词、事件必须小写
* JavaScript标识符，必须以字母、—、$开始，可以为字母、数据、—、$
* the unicode 编码使得JavaScript标识符，可以定义为其它语言、或标识符
* 保留字：
        break delete function return typeof case do if switch var
        catch else   in       this   void   continue false instanceof
        throw  while debugger finally new true with default for null try
        
* 将来预留字:
        class const enum export extends import super
        implements let private public yield interface
        package protected static
* 不允许使用的非保留字
        arguments eval
        
* 在ES3中使用，在ES5中不再使用的保留字，但不建议使用
        abstract double goto native static boolean enum implements package 
        super byte export import private synchronized char extends int 
        protected throws class const float long short volatile
* JavaScript预先定义了一些保留字或方法，在定义变量时，应避免使用
        arguments encodeURI Infinity Number RegExp 
        Array     encodeURIComponent isFinite Object String
        Boolean   Error isNan parseFloat SyntaxError 
        Date      eval JSON parseInt TypeError 
        decodeURI EvalError Math RangeError undefined
        decodeURIComponent Function NaN ReferenceError URIError

* 在JavaScript中如果两个语句块在两行中，那么可以忽略; 否则用；号来区分代码句，如下
    * 忽略分号
       
            var a = 3
            var b = 4
        
            
    * 不忽略分号
      
             var a = 3 ; var a =4
        
* 并不是每一个行结束符，都作语句结束符，通常只有在离开些行结束符无法解析代码时，才将行结束符做为语句结束符
        
            var        
                 a        
                 =
                 6
            console.log(a)
        
* 在return、break、continue字符后不允许插入行结束符，此处行结束符作为;
            
                
                return
                
                true
                
            
     代表return;true;而实际上需要的是return true;

* 另外一个意外就是++、\--
           
            
                
                x
                
                ++
                
                y
                
           
       解析成`x;++y;`而不是`x++;y`
        
      
        
        
        
**注释**

* 方式1：//   
* 方式2：/*  ***  */

**陌生词汇**

*   rules：规则
       
*   elementary:初步的，基本的
        
*   delimiter :定义符
        
*   Case Sensitivity:大小写敏感 

*   consistent: 一致的

*   capitalize: 以大写字母写，使资本化

*   association: 关联

*   confusing : 使混乱的

*   represent : 表现、表示

*   neat : 整洁的、一致的

*   indent: 缩进

*   addition： 加法

*   regular : 正常的、正常体

*   recognize :认出

*   presentation： 描述，简报

*   identifier :标识符、用户ID 

*   interpret: 翻译、解释

*   normalization: 正常化

*   canonical: 典型的

*   comparisons ： 对比、比较

*   Reserved: 预留的

*   Optional : 可选择的

*   Semicolons: 分号

*   omit:忽略
