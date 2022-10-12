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

//Renderer
const renderer = new T.WebGLRenderer({
    canvas: document.querySelector("canvas.webgl")
})

renderer.setSize(sizes.width, sizes.height)

//Clock
const clock = new T.Clock();

//Animations
const tick = () => {
    
    const elapsedTime = clock.getElapsedTime()

    //Update mesh positions/rotations
    // mesh.rotation.y = elapsedTime 

    //Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()