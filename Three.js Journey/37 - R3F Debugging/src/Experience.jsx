import { OrbitControls } from '@react-three/drei'
import { button, useControls } from 'leva'
import { Perf } from 'r3f-perf'
import Cube from './Cube.jsx'

export default function Experience()
{
    const { position, color, visible } = useControls('sphere', {
        position: { 
            value: { x: 0, y: 0 }, 
            // min: - 5, 
            // max: 5, 
            step: 0.1,
            joystick: 'invertY'
        },
        color: '#ff0000',
        visible: true,
        myInterval: {
            min: 0,
            max: 10,
            value: [4, 5],
        },
        clickMe: button(() => {console.log('clicked')}),
        choice: { options: ['a', 'b', 'c'] },
    })

    const { scale } = useControls('plane', {
        scale: { value: 1, min: 1, max: 10, step: 0.1 },
    })

    const { perfVisible } = useControls({
        perfVisible: true
    })
    return <>
        { perfVisible && <Perf position='top-left'/> }
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh position={ [position.x, position.y, 0]} visible={ visible }>
            <sphereGeometry />
            <meshStandardMaterial color={ color } />
        </mesh>

        <Cube scale={ scale }/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}