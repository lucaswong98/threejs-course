import './style.css'
import * as T from 'three'

//SCene
const scene = new T.Scene();

const axesHelper = new T.AxesHelper(2)
scene.add(axesHelper)

//Group
const group = new T.Group();
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group);

//Object
const cube1 = new T.Mesh(
    new T.BoxGeometry(1, 1, 1),
    new T.MeshBasicMaterial({ color: 0xff0000 })
)
const cube2 = new T.Mesh(
    new T.BoxGeometry(1, 1, 1),
    new T.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2
const cube3 = new T.Mesh(
    new T.BoxGeometry(1, 1, 1),
    new T.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 2

group.add(cube1);
group.add(cube2);
group.add(cube3);

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new T.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.set(1,1,5)
camera.position.z = 3
scene.add(camera)


//Renderer
const renderer = new T.WebGLRenderer({
    canvas: document.querySelector("canvas.webgl")
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)