import { OrbitControls, Html, Text,Float } from '@react-three/drei'
import { Suspense, useRef } from 'react'


export default function Experience()
{
    return <>

        <OrbitControls maxPolarAngle = {Math.PI/2} 
        maxDistance = {40} 
        minDistance = {8} 
        makeDefault = {true} 
        mouseButtons-RIGHT = {false}/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <mesh position-y={-0.15} rotation-x={-Math.PI*0.15} position-x={5} rotation-y={-Math.PI*0.5} scale ={10}  >
            <boxGeometry args={[1,1,0.2,2,2,2]} />
            <meshBasicMaterial color='grey'/>
        </mesh>
        <mesh position-y={-0.15} position-x={-5} rotation-x={-Math.PI*0.15} rotation-y={-Math.PI*0.5} scale ={10}  >
            <boxGeometry args={[1,1,0.2,2,2,2]} />
            <meshBasicMaterial color='grey'/>
        </mesh>
    </>
}