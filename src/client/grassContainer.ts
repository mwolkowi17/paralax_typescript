import * as THREE from 'three'
import { grass } from './grass';
import { Leaf } from './leaf';

export function grassContainer(): THREE.Object3D{
    const object: THREE.Object3D = new THREE.Object3D;
    object.add(grass());
    object.add(Leaf(0,0));
    return object;
}