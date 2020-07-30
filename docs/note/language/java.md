[toc]
[[toc]]

---

## java

- 双引号表示字符串；单引号表示字符，返回ascii码，可与数字进行运算

- 包声明；在包文件头部 `package xxx` 

### 执行

1. 编译 `javac Hello.java`
2. 执行 Hello.class 使用 `java Hello`

### 语法相关

- 语句后面注意加分号

#### 关键字 
- java 关键字区分大小写

#### 标识符
- 给变量， 类，方法等命名的符号
- 数字，字母，下划线，$，组成，不能以数字开头
- 严格区分大小写


#### 变量
- 区分大小写
- 变量类型 变量名 = 变量值
- 先申明，后使用

#### 数据类型
- java是强类型
1. 基本数据类型(括号中的值为字节)
```
|-- 数值型  
    |-- 整数：byte，short，long，int(4)
    |-- 浮点：float(4)数字后添加字母f， double(8)
|-- 字符型 char(2) 用单引号 只能是一个字符
|-- 布尔型 boolean(1)  
```

- int 默认初始值：0

- 基本类型包装类(与基本类型之间可以自动转换)：

Byte Short Integer Long Float Double Character Boolean

```
int num = 123;
Integer n1 = new Integer(num)
float n2 = n1.floatValue()
```

- 基本类型转换为字符串
  - 使用 基本类型的封装类的 toString() 方法
  - 使用 String 类的 valueOf() 方法
  - 利用与 空字符串相加
- 字符串转基本类型 
  - 包装类.parseXxx(xx)
  - 包装类.valueOf(xx)
```
int num = 12;
System.out.println(Integer.toString(num));
System.out.println(String.valueOf(num));
System.out.println(num + "");

String s = "12.36";
Double db = Double.parseDouble(s);
Double dd = Double.valueOf(s);
```

2. 引用类型
```
|-- 类
|-- 接口
|-- 数组
```

float与double的区别：
- float占4字节，32位(但有9位要拿来放符号位和指数位)，最大数 8388608 最多7位，但只能保证6位精准
- double 位数部分52位 最大数2^52 4503599627370496 精度15-16位
- double消耗内存是float的两倍，double的运算速度比float慢

##### String
- 两种方式： `String str = ""` 或 `String str = new String("")`
- 引用数据类型 ；是字符串，用双引号
- 位于java.lang包中，默认自动引入所有的程序
- 每次创建一个字符串都是新对象
```
String s1 = "字符串";
String s2 = "字符串";
String s3 =  new String("字符串");
s1 和 s2 相等 因为多次出现的字符常量，java编译时只创建一个
s1，s2 和 s3 是不同的对象
s1 存放的是指向 "字符串"对象存在于堆内存中的地址
s1.equals(s3)  返回true；equals只比较内容
== 比较的是内存地址
```

程序中频繁操作字符串，就会产生很多的临时变量，使用`StringBuilder` 和 `StringBuffer` 就不会出现该问题；二者基本相似，不同在于 `StringBuilder`是线程安全的， `StringBuilder`没有实现但性能更高；所以一般情况下创建内容可变字符串，优先考虑 `StringBuilder`

##### 自动类型转换
  1. 两种类型要相互兼容
  2. 目标类型要大于源类型

##### 强制类型转换
语法：(要转化为的数据类型)值

#### 运算符
- 算术运算符

`+ - * / % ++ --`
- % 用来求余数，也称为”取模运算符

---

- 赋值运算符
`=  +=  -=  +=  /=  %=`

---

- 比较运算符
`>  <  >=  <= ` 两边的操作数是数值类型

` ==  !=` 两边既可以是数值类型也可以是引用类型

---

- 逻辑运算符
`&&  ||  !` 

`^` 有且必须一个为true一个为false

- 条件运算符

`? :` 三元运算符

#### 条件语句

##### swith
- switch后的值必须是整形或字符型

- case后面的可以使常量也可以是常量表达式

- 匹配后，只有遇到break或语句结束，才会停止执行，否则会执行下一个case中的值

##### for(循环变量初始化;循环条件;循环变量变化) {}}
1. 循环变量初始化在循环中只执行一次
2. 进行循环条件的判断，为真执行循环体
3. 改变循环变量的值
4. `2 -> 3 ->4 `

- 括号中的三个表达式可以省略但是分号不能省略
- 循环变量初始化和循环变量变化，可以用逗号隔开
- break continue

##### foreach
遍历数组，集合
语法：
```
for(类型 xxx: 遍历对象) {
  print(xxx)
}
```


#### 数组
- 声明：
  1. 类型[] xxx;
  2. 类型 xxx[];


- 分配空间
xxx = new 类型[ 长度]

合并以上： `int[] xxx = new int[ 3]`

- 赋值

`xxx[ 1] = xx`

`int[] xxx = { 11, 12, 13 }` 等同于 `int[] xxx = new int[ 不能有长度]{ 11, 12, 13 }`

- 工具方法Arrays的使用
```
import java.util.Arrays;
String[] names = {"sports", "game", "movie" };
Arrays.sort(names);
System.out.println("all name:" + Arrays.toString(names));
```

##### 二维数组

```
- 声明：int[][] arr = new int[2][3] 或者  int[][] arr ={{1,2,3},{4,5,6}}

- 赋值只能具体到某个值进行操作： arr[1] = {1,3,3}; arr = {{1,3,3}, {1,4,3}} 报错
```

#### 方法

语法：
```
访问修饰符 返回值类型 方法名(类型) {
  方法体
}
```
- 访问修饰符：public, protected, private,或省略
- 返回值类型：没有返回值用void

##### 方法重载

- 同一个类中
- 相同的方法名
- 方法的参数个数，顺序，类型不同
- 与方法的修饰符，返回值没有关系


## 类

1. 所有java程序都是以类为组织单元
2. 定义类（定义类名，定义属性，定义方法）

### 对象
- 类是对象的类型
- 创建对象 `类名 对象名 = new 构造方法()`
- 使用对象 对象名加调用

### 成员变量和局部变量

成员变量：在类中定义，描述对象将要有什么
局部变量：类的方法中定义，方法中保存临时数据

- 只会给成员变量初始值
- 成员变量和局部变量同名，遵循就近原则

### 构造方法
- new 构造方法 创建新对象
- 定义用来初始化对象的方法，构造方法与类同名且没有返回值
```
public 构造方法名(参数) {
  
}
```

- 没有指定无参的构造方法，系统会自动生成一个，也可以自己写无参构造方法
- 有参数构造方法

#### 静态变量
- 在类中定义

- 用static修饰，它属于整个类所有，而不是某个对象所有；可以直接用类名进行访问

- static可修饰变量、方法、代码块

#### final 关键字
语法 ： final xxx

1. 修饰类   类不可继承
2. 修饰方法  方法不可覆盖
3. 修饰属性  只可以在初始化时赋值一次

子类构造方法中，没有显示调用父类的构造方法。则系统默认调用父类午餐的构造方法

Object类是所有类的父类
- toString() 方法重写
- equals  比较对象的引用地址是否相同

#### 多态

同一个接口，使用不同的实例，执行不同的操作

1. 引用的多态  父类的引用指向子类的对象  父类的引用指向本类的对象 `Parent p = new Child();`

2. 继承
3. 重写,子类重写父类方法

不能使用子类的特有的属性和方法，强制转换：`Tiger tg = (Tiger) am;` 后即可访问

tg 指向最开始在堆内存中创建的那个 Tiger类型的对象

减少了多余对象的创建 


## UML 统一建模语言

图形话语言

1. 用例图
2. 序列图： 按照交互，发生的一系列顺序
3. 类图 


## 异常处理

```
Throwable 类 java中所有不正常类都继承于它
  -- Error: 虚拟机错误，线程死锁，一般出现 程序就挂了
  -- Exception：编码、环境、用户操作输入出现问题
     -- RuntimeException：非检查异常，数组越界，引用空对象的属性或方法，等等；由虚拟机自动抛出并捕获。
         -- NullPointerException(空指针异常) `String a = null;print(a.length())`
         -- ArrayIndexOutOfBoundsException(数组下标越界)
         -- ClassCastException(类型转换异常)
         -- ArithmeticExceptior(算术异常) `1/0`
     -- 其它：检查异常；手动添加捕获，以及处理语句
         -- IOException(文件异常)
         -- SQLException(SQL异常)
```

- catch 多异常捕获，从子类到父类捕获

- finally语句中去释放占用的资源

- 抛出异常：throw
```
throws 声明将要抛出何种类型的异常
如下是将错误抛出给更上一层的tryCatch，否则就直接在内部写tryCatch
public void 方法名(参数列表) throws Exception {
  // 调用会抛出异常的方法或
  throw new Exception("异常说明");
} 
```

- 自定义异常 继承Exception

## 时间处理

- 将 Calendar 转换为 Date  使用 getTime()  
- getTimeInMillis() 获取 Calendar 的时间值，以毫秒为单位

## 集合
- 集合中元素可以是任意类型的对象的引用
- 在类的内部对数据进行组织
- 简单快捷的搜索大数量的条目
- 有些集合提供了一系列有序的元素，可以在序列中快速的插入或删除有关元素
- 有些集合，提供了映射关系，可以通过关键字去快速查找唯一对象，这个关键字可以是任意类型
- 集合长度可变
```
Collection-- List  排列有序，可重复
             -- ArrayList(数组序列) 
          -- Queue 排列有序，可重复
             -- LinkedList(链表)
          -- Set 无序，不可重复
             == HashSet(哈希集)
存储的是一个一个的对象

Map -- HashMap(哈希表)
映射关系，键值对
```

- hashMap.values() 返回集合包含的值

### List
- 调用contains方法，遍历list中的每一个元素，再调用每一个元素的equals方法，与传入的参数比较

### Set：
- Set 中没有 get 方法
- 循环Set 每次的结果循序不一致
- 调用 contains 时，先调用每一个元素的 hashCode 方法返回hash码，如果hash码相同，再调用equals判断是否相等。都相等才相等

### Map: 
- 元素为键值对 key-value
- 键值对以Entry类型的对象形式存在
- key不可重复 value可以
- Map接口提供了返回key值集合，value值集合以及Entry集合的方法
- 支持泛型，`Map< key类型, value类型>`

#### HashMap
- 是Map的一个重要实现类，
- 其中的Entry对象是无序列的
- key和value都可以为null


## 泛型 
- 规定了某个集合只可以存放特定类型的对象，会在编译期间进行类型检测
- 泛型集合不能添加除泛型及其子类型以外的对象，否则会报错
- 不能是基本类型，要用基本类型，要使用包装类

## javadoc

- intelliJ 打开 Tools -> generate JavaDoc   

- 如果报编码错误，在 other command 中添加 -encoding utf-8 -charset utf-8


### HashMap

- ConcurrentHashMap 解决其在多线程编程中是线程不安全的，而Hashtable由于使用了synchronized修饰方法而导致执行效率不高

## 学习笔记

- Java是将代码编译成一种“字节码”，它类似于抽象的CPU指令，然后，针对不同平台编写虚拟机，不同平台的虚拟机负责加载字节码并执行，这样就实现了“一次编写，到处运行”的效果;SUN公司制定了一系列的Java虚拟机规范;

- java se 是标准版，包含标准JVM和标准库； java ee 是企业版，加了大量的api和库，两者虚拟机一致；java me 针对嵌入式设备的“瘦身版”,几乎没有使用；

### 相关名词

- JVM: java virtual machine
- JDK：java development kit（套件）
- JRE：java runtime environment
- JSR规范：Java Specification Request
- JCP组织：Java Community Process

关系
```
  —— —— —— —— compiler，debugger， etc
 |
JDK —— 
 |    |
 |   JRE —— JVM + runtime library
 |    |
 |  ——

Windows | Linux │ macOS │ others 
```

### 安装JDK

- oracle官网 -> product -> developer tools -> java se jdk -> Downloads -> 选择最下方对应的版本下载

- 安装完后，在安装路径(默认`C:\Program Files\Java\jdk-12.0.2`) 中查看

- 将bin添加到环境变量


### JDK与JVM

- OpenJ9：高性能可伸缩的 Java 虚拟机，可作为 Hotspot 的替代者用于 OpenJDK

- HotSpot：是JVM（Java Virtual Machine），openJDK所包含

- OpenJDK：是一个完整的开发工具包，包含其他组件，如Java 类库以及 JVM

---
## 教程笔记：

源文件 -> 编译器 -> 字节码文件 -> 解释器

### 环境变量

JAVA_HOME 配置JDK安装路径 系统变量里新建(地址为jdk安装的根目录，如：D:\java)

---

PATH   配置JDK命令文件的位置  在path变量中编辑即可，D:\java\bin

---

**从java9开始可以不用配置**

CLASSPATH  配置库类文件的位置 系统变量里新建(地址为jdk安装的根目录，如：D:\java\lib)

---

验证环境变量配置是否正确  在命令行输入java 和javac 显示正确提示即配置正确

### 用记事本编写程序

1. 源代码文件 .java 文件
  - 可以直接运行 `java FirstStep.java` 

2. 使用javac命令编译 源代码文件，得到.class的字节码文件
  - 编写java文件 
  - 用javac编译: `javac FirstStep.java` ,生成同名.class文件
  - javac -encoding UTF-8 xxx.java 处理有中文

3. 解释器（不同的平台去解释字节码文件），使用java命令
  - java是解释class文件的解释器，是class的执行引擎
  - 执行字节码文件不需要加后缀名
  - `java FirstStep`(在cmd上执行报找不到类，在bash上正常)

### 使用IDE

1. 创建java项目
2. 创建程序包
3. 编写java源程序
4. 运行java程序(点击运行后编译器自动编译了)


## spring

- 一个开源框架(Spring Framework)
- 轻量的控制反转IoC
- 面向切面AOP的容器框架

- 大小与开销两方面都是轻量的

- Bean，它代表的就是由Spring管辖的对象

- Spring MVC和Spring Boot都属于Spring，Spring MVC 是基于Spring的一个 MVC 框架，而Spring Boot 是基于Spring的一套快速开发整合包

- dependengcy: 用 mvc 选 spring web ，用 webFlux 选spring reactive web

### spring mvc

- 是spring的一部分

- 主要用于开发WEB应用和网络接口，它是Spring的一个模块

### spring boot


创建独立的Spring应用程序，用于创建微服务；用于简化 Spring 应用从搭建到开发的过程；

#### 使用 Spring Initializr 页面输出项目

1. 勾选配置,设置好 Group ，Artifact
2. 下载，将其移入放置项目的文件夹
3. 在开发工具中选择从已有项目资源(上一步下载的压缩包加压后的文件)新建；或是选择导入项目；
4. 勾选相关设置
5. 等待安装依赖包
6. 完成


Artifact：可以当它为一个web项目

--- 

- 构建工具 Maven，Gradle

-  spring framework  -> spring boot  -> spring cloud


- Netty和Tomcat最大的区别就在于通信协议，Tomcat是基于Http协议的，实质是一个基于http协议的web容器; Netty能通过编程自定义各种协议，因为netty能够通过codec自己来编码/解码字节流，完成类似redis访问的功能，这就是最大的不同

- pom.xml 文件用于 maven 构建，指定了如何编译和打包项目

- Servlet 是运行在Web服务器上的小程序，通过http协议和客户端进行交互

- @Configuration  理解为替换XML配置文件 作用于类上，相当于一个xml配置文件

- @Bean 作用于方法上，相当于xml配置中的`< bean>`

- Optional 防止空指针提出的接口

- spring注解 @Autowired ：表示被修饰的类需要注入对象,spring会扫描所有被@Autowired标注的类,然后根据 类型 在ioc容器中找到匹配的类注入

- 修改端口：`application.properties` 文件中添加 `server.port = 8880`

- 【spring-boot-starter-web】 在当下项目运行mvn spring-boot:run就可以直接启用一个嵌套了tomcat的web应用。如果没有提供任何服务的Cotroller,访问任何路径都会返回一个springBoot默认的错误页面 Whitelabel Error Page


## 第三方包

- fastJson： 传入的对象要有 getter 方法