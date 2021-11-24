import * as THREE from 'three';
import { blueSky } from './sky';
import { sun } from './sun';


export const Layer1: THREE.Group=new THREE.Group();
Layer1.position.z=-5;

Layer1.add(blueSky());
Layer1.add(sun());

