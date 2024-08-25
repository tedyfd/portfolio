import { useGLTF, useScroll } from "@react-three/drei";
import aquariumScene from "../assets/3d/abstract_aquarium.glb";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const FLOORHEIGHT = 0.8;
const NB_FLOORS = 3;

export default function Object3D(props) {
    const aquariumRef = useRef();
    const { scene } = useGLTF(aquariumScene) 

    const ref = useRef();
    const tl = useRef();
    const scroll = useScroll();

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());
    });

    useLayoutEffect(() =>{
        tl.current = gsap.timeline();

        //vertical
        tl.current.to(
            ref.current.position,
            {
                duration: 2,
                y: -FLOORHEIGHT * (NB_FLOORS - 1),
            },
            0
        );
    }, []);

    return (
      <> 
        <group {...props} dispose={null} ref={ref}>
            <mesh position={[0.45, 0, 0]} scale={[0.01, 0.01, 0.01]} rotation={[0, 2.2, 0]}>
                <primitive object={scene} />
            </mesh>
        </group>
      </>
    );
}

useGLTF.preload(aquariumScene);