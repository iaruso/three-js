import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas 
            // dpr={ [1, 2] }
            gl={ { 
                antialias: true, 
                toneMapping: THREE.ACESFilmicToneMapping,
                outputEncoding: THREE.sRGBEncoding
            } } 
            camera={ { fov: 60, near: 0.1, far: 100, position: [3, 2, 6] } }>
        <Experience/>
    </Canvas>
)