## 利用css 实现心型图案

[codepen地址](https://codepen.io/Hewitt/pen/abzEgVj)

```html
<div class="heart"></div>
```

```css
.heart {
  margin: 100px;
  width: 100px;
  height: 100px;
  position: relative;
  background: pink;
  transform: rotate(45deg);
}

/* 用两个圆与上面的矩形相切，在顺时针旋转45度 */
.heart:after,
.heart:before {
  content: '';
  width: inherit;
  height: inherit;
  background: red;
  border-radius: 50%;
  position: absolute;
}

.heart:after {
  top: -50px;
}

.heart:before {
  left: -50px;
}
```