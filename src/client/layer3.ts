import * as THREE from 'three'
import { Mountain } from './mountain';

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const Layer3: THREE.Group = new THREE.Group
Layer3.position.z=5;
Layer3.add(Mountain(5,6,6.5,0,'rgba(0,'+getRandomInt(1,60)+','+getRandomInt(1,60)+',' + (Math.random() * 0.5 + 0.25) + ')'))
Layer3.add(Mountain(4.5,6,-7.5,0,'rgba(0,'+getRandomInt(1,60)+','+getRandomInt(1,60)+',' + (Math.random() * 0.5 + 0.25) + ')'))