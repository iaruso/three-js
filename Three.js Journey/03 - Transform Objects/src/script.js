import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Objects
const group = new THREE.Group()
group.position.set(1, -1, 1)
group.scale.set(1, 2, 1)
group.rotation.set(0, 0.2, 0)
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000})
)
cube1.position.set(-2, 0, 0)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00})
)
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff})
)
cube3.position.set(2, 0, 0)
group.add(cube3)

// Sizes
const sizes = { width: 800, height: 600 }

// Camera
const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height)
camera.position.set(1, 1, 10)
scene.add(camera)

// Axes Helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
