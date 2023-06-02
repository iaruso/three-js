import { Float, Text, Html, PivotControls, TransformControls, OrbitControls, Sphere, MeshReflectorMaterial } from "@react-three/drei"
import { useRef } from "react"
import { MeshNormalMaterial } from "three"

export default function Experience()
{
    const sphere = useRef()
    const cube = useRef()

    return <>

        <OrbitControls makeDefault/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh ref={sphere} position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html
                position={ [ 1, 1, 0 ] }
                wrapperClass="label"
                center
                distanceFactor={ 8 }
                //occlude={ [ sphere, cube ] } not working somehow
            >
                That's a sphere 👍
            </Html>
        </mesh>
        <TransformControls object={ sphere } mode="translate" />

        <PivotControls 
            anchor={ [0, 0, 0] } 
            depthTest={false}
            lineWidth={2}
            axisColors={["pink", "purple", "salmon"]}
        >
            <mesh position-x={ 2 } scale={ 1.5 } ref={ cube }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </PivotControls>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial
                resolution={2048}
                blur={[1000, 1000]}
                mixBlur={0.5}
                mirror={0.8}
                color={0x889999}
            />
        </mesh>

        <Float
            speed={10}
            floatIntensity={0.5}
            >
            <Text
                font="./bangers-v20-latin-regular.woff"
                position={ [ 0, 2, -4 ] }
                color={ 'salmon' }
                maxWidth={6}
                textAlign="center"
            >
                I LOVE R3F AND DREI
                {/* <MeshNormalMaterial/> */}
            </Text>
        </Float>
    </>
}