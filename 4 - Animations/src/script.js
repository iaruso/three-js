import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
console.log(gsap)

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = { width: 800, height: 600 }

// Camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height)
camera.position.set(-1, 1, 4)
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)

// GSAP Animation
gsap.to(mesh.position, { x: 2, duration: 1, delay: 1})

// Animations
const tick = () => {
    // Update object
    mesh.rotation.y += 0.01
    // Render
    renderer.render(scene, camera)
    // Time
    window.setTimeout( function() {
        window.requestAnimationFrame(tick);
    }, 1000 / 60 );
}
tick()