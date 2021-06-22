# three.js 

示例项目 `threejs-typescript/three`

- Three中的物体包括 Mesh,Line,Points等，它们都继承自Object3D类

- Mesh 网格： 3D世界由点组成，两个点能组成一条直线，三个不在一条直线上的点，就能组成一个三角面，无数的三角面就能组成各种各样的物体，通常把这种网络模型叫做Mesh模型
Mesh(要用三角面创建的形状【一般的形状threejs已经提供】, 材质)


- 视锥体，指的看起来像一个被削掉顶部的金字塔。这个形状是可以被透视camera看见和渲染的区域

- Fog(name: 可选, color : Integer, near : Float, far : Float) 雾，在一定的距离内设置雾

- renderer.domElement  返回的是 canvas 元素

- WebGL可以看做是将OpenGL ES（OpenGL for Embedded Systems，OpenGL嵌入式版本，针对手机、游戏机等设备相对较轻量级的版本）移植到了网页平台,是一个底层的标准

- Three.js 封装了底层的图形接口

## 坐标轴的一些描述

- AxesHelper( size : Number )  模拟3个坐标轴 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴. size 代表轴的线段长度. 默认为 1

- 默认原点就在canvas的中心位置

- 如果导入的3D模型，其因为占用一定的长宽高  它的原心不一定和canvas的中心位置重合

- 坐标轴的各轴的走向会随摄像机的位置不同而不同

- 世界坐标系: 世界坐标系位于屏幕的中心(0,0,0),往右侧是x轴,往上是y轴,垂直屏幕朝向的是z轴.所以屏幕的左下角是(-1,-1),右上角是(1,1);

- https://segmentfault.com/a/1190000010490845  世界坐标的计算推演过程
```js
mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
```

- 屏幕坐标系: webgl会将三维的坐标经过计算,在屏幕里正常显示

## 摄像机

- 先设置好相机位置.position(眼睛位置)，然后通过.lookAt()方法设置相机目标观察点

- 相机默认是由正z轴看像-z轴（相机镜头对着-z轴方向拍）

- PerspectiveCamera ( fov : Number, aspect : Number, near : Number, far : Number ) 
fov(fieldOfView) — 摄像机视锥体垂直视野角度, 从视图的底部到顶部,默认值是50，越大视图越小; 参考https://www.ituring.com.cn/book/miniarticle/49446
aspect — 摄像机视锥体长宽比,通常是使用画布的宽/画布的高。默认值是1（正方形画布）; 
near — 摄像机视锥体近端面; far — 摄像机视锥体远端面

透视相机， 这一投影模式被用来模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式

## 渲染器

- renderer = WebGLRenderer({ 配置项 }) 用 WebGL(一种3D渲染协议) 渲染出制作的场景
```
alpha - canvas是否包含alpha (透明度)。默认为 false
antialias - 是否执行抗锯齿。默认为false.

renderer.shadowMap.enabled : Boolean 如果设置开启，允许在场景中使用阴影贴图。默认是 false。
```

## 灯光

- SpotLight ( color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float ) 聚光灯
光线从一个点沿一个方向射出，随着光线照射的变远，光线圆锥体的尺寸也逐渐增大

- HemisphereLight(skyColor : Integer, groundColor : Integer, intensity : Float) 
半球光，光源直接放置于场景之上，光照颜色从天空光线颜色渐变到地面光线颜色。半球光不能投射阴影。
skyColor - (可选参数) 天空中发出光线的颜色。 缺省值 0xffffff。 
groundColor - (可选参数) 地面发出光线的颜色。 缺省值 0xffffff。 
intensity - (可选参数) 光照强度。 缺省值 1。

- DirectionalLight( color : Integer, intensity : Float ) 平行光, 可以投射阴影
color - (可选参数) 16进制颜色。 缺省值为 0xffffff (白色)。
intensity - (可选参数) 光照的强度。缺省值为1。

- AmbientLight( color : Integer, intensity : Float )环境光会均匀的照亮场景中的所有物体
color - (参数可选）颜色的rgb数值。缺省值为 0xffffff。
intensity - (参数可选)光照的强度。缺省值为 1


## 控制

- OrbitControls( object : Camera, domElement : HTMLDOMElement )  轨道控制器, 可以使得相机围绕目标进行轨道运动。
Camera 将要被控制的相机。该相机不允许是其他任何对象的子级，除非该对象是场景自身
domElement: 用于事件监听的HTML元素。

---

## 载入3D模型 加载器

官方文档 https://threejs.org/docs/index.html#manual/zh/introduction/Loading-3D-models

官方推荐使用glTF（gl传输格式）。.GLB和.GLTF是这种格式的这两种不同版本

- GLTFLoader 实例.loader('xx.gltf', ()=>{ 加载成功后的回调 })


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