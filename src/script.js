import './style.css'
import * as T from 'three'

//SCene
const scene = new T.Scene();

//Object
const geometry = new T.BoxGeometry(1,1,1);
const material = new T.MeshBasicMaterial({color: 0xff0000})
const mesh = new T.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new T.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

//Renderer
const renderer = new T.WebGLRenderer({
    canvas: document.querySelector("canvas.webgl")
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)