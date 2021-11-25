import * as THREE from 'three';
import { grass } from './grass';

export const Layer4: THREE.Group = new THREE.Group

Layer4.position.z=10;
Layer4.add(grass());