import { useRef } from "react"
import { useThree, extend, useFrame } from "@react-three/fiber"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from "./CustomObject"

extend({ OrbitControls })

export default function Experience() {
    const { camera, gl } = useThree()
    console.log(camera, gl)
    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) => {
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 10
        // state.camera.position.z = Math.cos(angle) * 10
        // state.camera.lookAt(0, 0, 0)
        cubeRef.current.rotation.y -= delta
        groupRef.current.rotation.y -= delta
    })

    return <>
        {/* <mesh rotation-y={ Math.PI * 0.2 } position={ [ 2, 0, 0 ] } scale={ 1.2 }>
            <sphereGeometry args={ [ 1.5, 32, 32 ] }/>
            <meshBasicMaterial color='mediumpurple' wireframe/>
        </mesh> */}
        <orbitControls args={ [ camera, gl.domElement ] } />

        <directionalLight position={ [ 1, 2, 3 ]} intensity={ 1.5}/>
        <ambientLight intensity={ 0.5 }/>

        <CustomObject/>

        <group ref={ groupRef }>
            <mesh position-x={ -2 }>
                <sphereGeometry/>
                <meshStandardMaterial color='orange'/>
            </mesh>
            <mesh ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry scale={ 1.5 }/>
                <meshStandardMaterial color='mediumpurple'/>
            </mesh>
        </group>
        <mesh rotation-x={ -Math.PI * 0.5 } position-y={ -1 } scale={ 10 }>
            <planeGeometry/>
            <meshStandardMaterial color='greenyellow'/>
        </mesh>
    </>
}