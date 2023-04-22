import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { TextureLoader } from 'three'



const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 50,
            near: 0.1,
            far: 50,
            position: [ -25, -10, 0 ]
        } }
    >
   
        <Experience />
    </Canvas>
)

