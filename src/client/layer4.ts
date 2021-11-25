import * as THREE from 'three';
import { grass } from './grass';
import { grassContainer } from './grassContainer';

export const Layer4: THREE.Group = new THREE.Group

Layer4.position.z=10;
Layer4.add(grassContainer());