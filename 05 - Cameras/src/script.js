import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
/*const aspectRatio = sizes.width / sizes.height
const camera = new THREE.OrthographicCamera(
    -1 * aspectRatio, 
    1 * aspectRatio, 
    1, 
    -1, 
    0, 
    10
)*/
camera.position.set(0, 0, 3)
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
//controls.target.y = 2
//controls.update()s

// Cursor
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - 0.5
    cursor.y = - (e.clientY / sizes.height - 0.5)
    console.log(cursor.x, cursor.y)
})

// Animations
const tick = () => {
    // Update object
        //mesh.rotation.y += 0.01
    // Update camera
    /*  camera.position.x = cursor.x * 10
        camera.position.y = cursor.y * 10
        camera.lookAt(new THREE.Vector3())
    
        camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
        camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
        camera.position.y = cursor.y * 4
        camera.lookAt(mesh.position)*/
    // Update controls
    controls.update()
    // Render
    renderer.render(scene, camera)
    // Time
    window.setTimeout( function() {
        window.requestAnimationFrame(tick);
    }, 1000 / 60 );
}
tick()