import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Time
const clock = new THREE.Clock()

// Animations
const tick = () =>
{
    // Clock
    const elapsedTime = clock.getElapsedTime()
    console.log(clock.getElapsedTime())

    // Update objects
    mesh.rotation.y = elapsedTime * Math.PI * .1
    mesh.rotation.x = elapsedTime * Math.PI * .1
    mesh.rotation.x = elapsedTime * Math.PI * .1

    mesh.position.y = Math.sin(elapsedTime) * 1.5
    mesh.position.x = Math.cos(elapsedTime)

    camera.position.z = 3 + 2 * Math.sin(elapsedTime)
    
    renderer.render(scene, camera)


    window.requestAnimationFrame(tick)
}

tick()