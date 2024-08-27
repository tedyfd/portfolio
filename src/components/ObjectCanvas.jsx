import { Canvas } from "@react-three/fiber";
import Object3D from "./Object";
import { OrbitControls } from "@react-three/drei";
import './canvas.css'

export default function ObjectCanvas() {
    return (
      <> 
        <div className="canvas">
            <Canvas camera={{ near: 0.001, far: 200, position: [0, 1, 1.05] }}>
                <ambientLight intensity={1}/>
                <OrbitControls enableZoom={false} enabled={false}/>
                <Object3D/>
            </Canvas>
        </div>
      </>
    );
}