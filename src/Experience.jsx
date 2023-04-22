import { OrbitControls, Html, Text,Float } from '@react-three/drei'
import { Suspense, useRef , useState} from 'react'
import { FrontSide, LinearFilter, VideoTexture, TextureLoader } from 'three'


export default function Experience()
{
   
    //Get your video element(traer el elemento video):
    const video = document.getElementById('video')
    video.crossOrigin = 'anonymous';
    //crear el video como textura:
    const videoTexture = new VideoTexture(video);
    videoTexture.minFilter = LinearFilter;
    videoTexture.magFilter = LinearFilter;
    //videoTexture.needsUpdate = true;

    const textureRef = useRef(null);

    const fot = () => {
        textureRef.current = new TextureLoader().load(`${currentImage}.jpg`);
        textureRef.current.needsUpdate = true;
    };

    

    const playVideo = () => {
        
        video.play();
        console.log('funciono')
    };
    // Define una variable state para rastrear la imagen actual.
        const [currentImage, setCurrentImage] = useState(1);

        // Crea una función para cambiar la imagen actual y actualizar la textura.
        const toggleImage = () => {
            setCurrentImage(currentImage === 1 ? 2 : 1);
        };

        // Carga las texturas iniciales.
        const texture1 = new TextureLoader().load('1.jpg');
        const texture2 = new TextureLoader().load('2.jpg');
      

        
    
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
        <mesh position-y={-0.15} position-x={-6.1} rotation-x={-Math.PI*0.15} rotation-y={-Math.PI*0.5} scale ={4}  onPointerOver={toggleImage}>
            <planeGeometry args={[2,2]} />
            <meshBasicMaterial  map = {currentImage === 1 ? texture1 : texture2}/>
        </mesh>
        <mesh position-y={-0.15} position-x={-5} rotation-x={-Math.PI*0.15} rotation-y={-Math.PI*0.5} scale ={10}  >
            <boxGeometry args={[1,1,0.2,2,2,2]} />
            <meshBasicMaterial color='grey'  />
        </mesh>
        <mesh position-y={-0.15} position-x={3.9} rotation-x={-Math.PI*0.15} rotation-y={-Math.PI*0.5} onClick = {playVideo} scale ={4}  >
            <planeGeometry args={[2,2]} />
            <meshBasicMaterial map = {videoTexture} side={FrontSide} toneMapped={false} needsUpdate={true}  />
        </mesh>
    </>
}