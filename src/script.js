import * as THREE from 'three'
import { sin } from 'three/examples/jsm/nodes/Nodes.js';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry( 1, 1, 1); 
const material = new THREE.MeshBasicMaterial({ color: 0xff9900 })
const mesh = new THREE.Mesh(geometry, material)
//mesh.position.x = 0.7
//mesh.position.y = -2
//mesh.position.z = 1
//mesh.scale.x = 1
//mesh.scale.y = 2
//mesh.scale.z = 3
mesh.rotation.x = Math.PI * 1
mesh.rotation.y = Math.PI * 0.5
scene.add(mesh)




/**
 * Sizes
 */
const sizes = {
    width: 1200,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
let time = 0
const tick = () =>{
    mesh.rotation.y +=0.01
    //mesh.rotation.x +=0.01
    mesh.scale.y = Math.sin(time)*4
    mesh.rotation.z = Math.cos(time)*360*Math.PI
    renderer.render(scene, camera);
    console.log(time)
    time+=0.001
    window.requestAnimationFrame(tick)
}

tick()