import './style.css'
import * as T from 'three'
import gsap from 'gsap';

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

//Clock
const clock = new T.Clock();

//using gsap
gsap.to(mesh.position, {
    x:2,
    duration: 1,
    delay:1
})

//Animations
const tick = () => {
    
    const elapsedTime = clock.getElapsedTime()

    //Update mesh positions/rotations
    // mesh.position.x += 0.02
    // mesh.rotation.y = elapsedTime * (Math.PI * 2 /*one full rotation */) //rotate once per second
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)
    
    //Update camera positions
    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)
    // camera.lookAt(mesh.position)

    //Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()