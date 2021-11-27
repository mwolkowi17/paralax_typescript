import * as THREE from 'three'
import { Mountain } from './mountain';



export const Layer2: THREE.Group=new THREE.Group();
Layer2.position.z=-5
Layer2.add(Mountain(10,12,-2,2.3))


