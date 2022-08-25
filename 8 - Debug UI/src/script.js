import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import gsap from 'gsap'

const params = { 
    color: 0xff0000,
    spin: () => {
        gsap.to(mesh.rotation, {duration: 1, y: mesh.rotation.y + Math.PI * 2})
    }
}

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 4, 4, 4)
const material = new THREE.MeshBasicMaterial({ color: params.color })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = { 
    width: window.innerWidth, 
    height: window.innerHeight
}

// Resize
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth, 
    sizes.height = window.innerHeight,
    camera.aspect = sizes.width / sizes.height,
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Fullscreen
window.addEventListener('dblclick', () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen()
        }
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
            document.exitFullscreen()
        }
    }
})

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

// Debug
const gui = new dat.GUI()
gui.add(mesh.position, 'y', -3, 3, 0.1)
gui.add(mesh.position, 'x').min(-3).max(3).step(0.1).name('x')
gui.add(mesh, 'visible')
gui.add(material, 'wireframe')
gui.addColor(params, 'color').onChange(() => {
    material.color.set(params.color)
})
gui.add(params, 'spin')