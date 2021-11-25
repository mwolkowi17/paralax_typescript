import * as THREE from 'three'
import { Mountain2 } from './mountain2'
import { Mountain3 } from './mountain3';

export const Layer3: THREE.Group = new THREE.Group
Layer3.position.z=5;
Layer3.add(Mountain2());
Layer3.add(Mountain3());