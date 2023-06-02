export default function Cube({ scale = 2 }) {
    return <mesh position-x={ 2 } scale={ scale }>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
    </mesh>
}
