import * as THREE from 'three'
import { Mountain } from './models/mountain';



function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const Layer2: THREE.Group=new THREE.Group();
Layer2.position.z=-5
Layer2.add(Mountain(10,12,-2,2.3,'rgba(0,'+getRandomInt(1,60)+','+getRandomInt(1,60)+',' + (Math.random() * 0.5 + 0.25) + ')'));
//Layer2.add(MountainLoad());


