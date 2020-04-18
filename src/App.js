import React, { Component } from 'react';
import Box from './Box';
import { Canvas } from 'react-three-fiber';
import style from './index.css';

class App extends Component{

    constructor(props){
        super(props);

        this.list = [];

        for(let i = 0; i < 250; i++){

            let listChild = [];

            for(let j = 0; j < 3; j++){
                if(this.randBetween(1, 10) % 2 === 0){
                    listChild[j] = this.randBetween(1, 10);
                }else{
                    listChild[j] = this.randBetween(1, 10) * -1;
                }
                
            }

            this.list.push(listChild);
        }

        this.boxList = [];

        for(let data in this.list){
            console.log(data);
            this.boxList.push(<Box position={this.list[data]} />)
        }

        console.log(this.list);
        console.log(this.boxList);
    }

    randBetween = (start, end) => {
        let r = 0;
        r = Math.floor(Math.random() * end) + start;

        return r;
    }
    
    render(){
        return (
            <>
                <Canvas camera={{ position: [0, 0, 15] }} shadowMap>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <fog attach="fog" args={['#cc7b32', 16, 20]} />
                    {this.boxList}
                </Canvas>
            </>
        )
    }
}

export default App;
