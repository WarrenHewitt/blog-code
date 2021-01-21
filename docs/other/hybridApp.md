[[toc]]
[toc]

# APP解决方案

## 小程序

基于微信，支付宝，钉钉等提供小程序的平台，可以一次开发多端打包，也可以针对一个平台进行开发

## 原生APP

1. 采用原生的 Objective C 或 Swift 语言开发 ios
2. 采用原生的 Kotlin  或 Java(基于Java的一个分支) 语言开发 Android

开发的成本比较高，而且后期维护比较困难,版本更新较麻烦

## 混合APP (hybrid app)  

半原生半Web的混合类App

- 多View混合型：WebView当成一个独立的View运行起来，在WebView内完成相关的展示操作，多是起到补充作用，或是更新比较频繁的业务，需要原生开发人员搭建基础框架，创建 webview

- 单View混合型： 在同一个View内，同时包括Native View和Web View（头和底部是原生，内容是web），互相之间是覆盖的关系。 这种Hybrid App的开发成本较高，开发难度较大，但是体验较好

- Web主体：主要是web  原生开发提供调用底层接口的方法，比如文件，定位，支付等

以上模式都需要原生开发支持

找第三方购买基础底层框架或招原生开发人员


## react-native

开发语言：js语言，基于react

链接 blog

推送是个大坑 

需要处理的隐藏问题也很多

## flutter

官方宣布支持的平台 iOS 和 Android Mac、Windows 和 Web，Linux 

dart 语言

学习成本高，实际的开发过程中还有很多坑，目前来说，技术实力弱的团队，只能开发加单的功能


## uniapp

一套代码 支持打包为原生app  小程序等

https://uniapp.dcloud.net.cn/



## web-app

基于移动端浏览器，类似于pc端，可以直接添加桌面入口



