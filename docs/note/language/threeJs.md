# three.js 

- 视锥体，指的看起来像一个被削掉顶部的金字塔。这个形状是可以被透视camera看见和渲染的区域

- OrbitControls 轨道控制器， 可以使得相机围绕目标进行轨道运动。

- PerspectiveCamera ( fov : Number, aspect : Number, near : Number, far : Number ) 
fov — 摄像机视锥体垂直视野角度, 从视图的底部到顶部; aspect — 摄像机视锥体长宽比,通常是使用画布的宽/画布的高。默认值是1（正方形画布）; 
near — 摄像机视锥体近端面; far — 摄像机视锥体远端面

透视相机， 这一投影模式被用来模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式

- Fog(name: 可选, color : Integer, near : Float, far : Float) 雾，在一定的距离内设置雾

- AxesHelper( size : Number )  模拟3个坐标轴 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴. size 代表轴的线段长度. 默认为 1

## 渲染器

- renderer = WebGLRenderer({ 配置项 }) 用 WebGL(一种3D渲染协议) 渲染出制作的场景
```
alpha - canvas是否包含alpha (透明度)。默认为 false
antialias - 是否执行抗锯齿。默认为false.

renderer.shadowMap.enabled : Boolean 如果设置开启，允许在场景中使用阴影贴图。默认是 false。
```

## 灯光

- SpotLight 聚光灯，光线从一个点沿一个方向射出，随着光线照射的变远，光线圆锥体的尺寸也逐渐增大

----

- HemisphereLight(skyColor : Integer, groundColor : Integer, intensity : Float) 
半球光，光源直接放置于场景之上，光照颜色从天空光线颜色渐变到地面光线颜色。半球光不能投射阴影。
```
skyColor - (可选参数) 天空中发出光线的颜色。 缺省值 0xffffff。 
groundColor - (可选参数) 地面发出光线的颜色。 缺省值 0xffffff。 
intensity - (可选参数) 光照强度。 缺省值 1。
```

- DirectionalLight( color : Integer, intensity : Float ) 平行光, 可以投射阴影
color - (可选参数) 16进制颜色。 缺省值为 0xffffff (白色)。
intensity - (可选参数) 光照的强度。缺省值为1。

## 载入3D模型

官方文档 https://threejs.org/docs/index.html#manual/zh/introduction/Loading-3D-models

官方推荐使用glTF（gl传输格式）。.GLB和.GLTF是这种格式的这两种不同版本


## demo

[在线示例](https://codepen.io/Hewitt/pen/ZEWgNyg)

```html
<script src="https://cdn.bootcdn.net/ajax/libs/three.js/110/three.min.js"></script>

<!-- 作为Three.js渲染器输出元素 -->
<div id="cusThree" style="width:500px;height:500px;margin: 0 auto;">
```

```js
var windowW = 500
var windowH = 500
var camera = null;
var spotLight = null;
var plane = null;
var sphere = null;
var cube = null;

// 创建场景
var scene = new THREE.Scene()

// 创建渲染器
var renderer = new THREE.WebGLRenderer()
renderer.setSize(windowW, windowH)
renderer.shadowMap.enabled = true

/* 创建透视相机 */ 
function createCamera() {
    camera = new THREE.PerspectiveCamera(60, windowW / windowH, .1, 1000)
    /* 设置相机的位置 */
    camera.position.x = -40
    camera.position.y = 50
    camera.position.z = 30

    /* 设置镜头的位置 */
    camera.lookAt(scene.position)
}

/* 加入光源 */
function createSpotLight() {
    spotLight = new THREE.SpotLight(0xffffff, 1)
    spotLight.position.set(0, 100, 100)
    spotLight.castShadow = true
    spotLight.shadow.mapSize.with = 2048
    spotLight.shadow.mapSize.height = 2048

    scene.add(spotLight)
}

/* 创建平面 */
function createPlane() {
    /* 着色器 */
    /* 参数：宽 高 x方向分段 y方向分段 分段是对六个面进行分段 */
    var planeGeometry = new THREE.PlaneGeometry(40,40,1,1)

    /* 材质 */
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xC1C1C1 })

    plane = new THREE.Mesh(planeGeometry, planeMaterial)
    /* 打开阴影效果 */
    plane.receiveShadow = true

    /* 设置平面体的位置 */
    plane.position.x = 10
    plane.position.y = 0
    plane.position.z = 0
    /* 可以用如下方式替代以上的方式 */
    // plane.position.set(16,0,0)

    /* 设置平面体的旋转 */
    plane.rotation.x = -1.6
    plane.rotation.z = 0.9
    /* 将平面体加入到场景中 */
    scene.add(plane)
}

/* 创建一个正方体 */
function createCube(){
    /* 着色器 */
    var cubeGeometry = new THREE.BoxGeometry(4,4,4)

    /* 材质 */
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xA7A7A7 })

    cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    /* 打开阴影 */
    cube.castShadow = true

    /* 设置立方体的位置 */
    cube.position.x = 0
    cube.position.y = 10
    cube.position.z = 0

    /* 将立方体加入到场景 */
    scene.add(cube)
}

/* 创建一个球面体 */
function createSphere() {
    var sphereGeometry = new THREE.SphereGeometry(4,20,20)

    /* 材质 */
    var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xA7A7A7 })

    /* 生成球面体 */
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    
    /* 打开阴影效果 */
    sphere.castShadow = true

    /* 设置球面体的位置 */
    sphere.position.x = 10
    sphere.position.y = 10
    sphere.position.z = 5

    /* 将球面体加入到场景中 */
    scene.add(sphere)
}

document.querySelector('#cusThree').appendChild(renderer.domElement)

function render() {
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    cube.rotation.z += 0.01
    
    plane.rotation.z += 0.01

    camera.position.z += 0.01
    
    // requestAnimationFrame(render)
    renderer.render(scene, camera)
}

createPlane()
createCube()
createSphere()
createCamera()
createSpotLight()
render()
```