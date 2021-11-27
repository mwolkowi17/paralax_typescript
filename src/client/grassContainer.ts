import * as THREE from 'three'
import { grass } from './grass';
import { Leaf } from './leaf';
import { tree } from './tree';

export function grassContainer(): THREE.Object3D {
    const object: THREE.Object3D = new THREE.Object3D;
    object.add(grass());

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let r: number = 1
    while (r < 5000) {
        object.add(Leaf((getRandomInt(-10, 8)+getRandomInt(-100,100)/100), (getRandomInt(-1, 4)+getRandomInt(-100,100)/100)));
        r++
    }
    object.add(tree(2));
    object.add(tree(4))
    return object;
}