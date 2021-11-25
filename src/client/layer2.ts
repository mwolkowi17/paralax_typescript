import * as THREE from 'three'
import { Mountain1 } from './mountain';



export const Layer2: THREE.Group=new THREE.Group();
Layer2.position.z=-5
Layer2.add(Mountain1());


