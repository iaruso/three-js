import * as THREE from 'three'
import Sizes from './utils/Sizes.js'
import Time from './utils/Time.js'
import Camera from './Camera.js'

let instance  = null

export default class Experience {
    constructor(canvas) {
        if(instance){
            return instance
        }
        instance = this

        window.experience = this

        this.canvas = canvas

        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()

        this.sizes.on('resize', () => {
            this.resize()
        })

        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
        this.camera.resize()
    }

    update() {
        this.camera.update()
    }
}