## eslint 相关的配置说明

忽略的文件
`.eslintignore`
```
src/xxx/xx
```


`.eslintrc.js` 文件  或其它的配置文件

```js
rules: {
    // 允许使用console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [
        "error",
        4
    ],
    // https://cn.eslint.org/docs/rules/comma-dangle
    // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号
    "comma-dangle": ["error", "only-multiline"],
},
// 允许一些全局的变量，如在html中引入的高德地图全局变量
globals: {
    AMap: true,
    Vue: true,
    VueRouter: true,
    ELEMENT: true,
    AMapUI: true
}
```