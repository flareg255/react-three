import React, { useRef, useState } from 'react';
import Box from './Box';
import { Canvas, useFrame } from 'react-three-fiber';
import { randBetween } from './functions';

import style from './index.css';

const App = (props) => {

    let list = [];

    for(let i = 0; i < 250; i++){

        let listChild = [];

        for(let j = 0; j < 3; j++){
            if(randBetween(1, 10) % 2 === 0){
                listChild[j] = randBetween(1, 10);
            }else{
                listChild[j] = randBetween(1, 10) * -1;
            }
        }

        list.push(listChild);
    }

    let boxList = [];

    for(let data in list){
        console.log(data);
        boxList.push(<Box position={list[data]} />)
    }

    console.log(list);
    console.log(boxList);


    return (
        <>
            <Canvas camera={{ position: [0, 0, 15] }} shadowMap>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <fog attach="fog" args={['#cc7b32', 16, 20]} />
                {boxList}
            </Canvas>
        </>
    )
}

export default App;
