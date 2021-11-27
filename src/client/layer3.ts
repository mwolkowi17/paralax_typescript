import * as THREE from 'three'
import { Mountain } from './mountain';

export const Layer3: THREE.Group = new THREE.Group
Layer3.position.z=5;
Layer3.add(Mountain(5,6,6.5,0))
Layer3.add(Mountain(4.5,6,-7.5,0))