import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// Scene
const scene = new THREE.Scene()

// Object
// BufferGeometry
const geometry = new THREE.BufferGeometry()
const count = 50
const positionsArray = new Float32Array(count * 3 * 3)
for (let i = 0; i < count * 3 * 3; i++){
    positionsArray[i] = (Math.random() - 0.5)
}
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)
/*const positionsArray = new Float32Array([
    0, 0, 0,
    0, 1, 0,
    1, 0, 0
])

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)*/

/* Geometry
const geometry = new THREE.Geometry()
for(let i = 0; i < 50; i++){
    for(let j = 0; j < 3; j++){
        geometry.vertices.push(new THREE.Vector3(
            4 * (Math.random() - 0.5),
            4 * (Math.random() - 0.5),
            4 * (Math.random() - 0.5)
        ))
    }
    const verticeIndex = i * 3
    geometry.faces.push(new THREE.Face3(
        verticeIndex,
        verticeIndex + 1,
        verticeIndex + 2
    ))
}/*

/*const vertex1 = new THREE.Vector3(0, 0, 0)
geometry.vertices.push(vertex1)
const vertex2 = new THREE.Vector3(0, 1, 0)
geometry.vertices.push(vertex2)
const vertex3 = new THREE.Vector3(1, 0, 0)
geometry.vertices.push(vertex3)

const face = new THREE.Face3(0, 1, 2)
geometry.faces.push(face)*/

//const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 4, 4, 4)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
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