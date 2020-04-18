import React, { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

const Box = (props) =>  {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  // Rotate mesh every frame, this is outside of React without overhead
  const randBetween = (start, end) => {
    let r = 0;
    r = Math.floor(Math.random() * end) + start;

    return r;
  }
  let rotationNum = 0.01;

  if(randBetween(1, 10) % 2 === 0){
    rotationNum = rotationNum * -1;
  }

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += rotationNum))
  
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={e => setActive(!active)}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Box;
