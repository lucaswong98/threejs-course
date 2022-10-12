import './style.css'
import * as T from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//Scene
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
//Perspective Camera
const camera = new T.PerspectiveCamera(100, sizes.width/sizes.height, 0.1, 100)

//Orthographic Camera
// const aspectRatio = sizes.width/sizes.height;
// const orthCam = {
//     left: -1 * aspectRatio,
//     right: 1 * aspectRatio,
//     top: -1,
//     bottom: 1,
// }
// const camera = new T.OrthographicCamera(orthCam.left, orthCam.right, orthCam.top, orthCam.bottom, 0.1, 100)

// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

const canvas = document.querySelector("canvas.webgl")

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.target.y = 2;
// controls.update();

//Renderer
const renderer = new T.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)

//Clock
const clock = new T.Clock();

//Animations
const tick = () => {
    
    const elapsedTime = clock.getElapsedTime()

    //Update controls for every frame to enable damping effect
    controls.update();

    //Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()