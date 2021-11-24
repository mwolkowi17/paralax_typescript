import * as THREE from 'three'
import { Mountain1 } from './mountain';
import { Mountain2 } from './mountain2';

export const Layer2: THREE.Group=new THREE.Group();
Layer2.add(Mountain1());
Layer2.add(Mountain2());

