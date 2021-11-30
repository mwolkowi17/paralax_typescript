import * as THREE from 'three';
import { sun } from './models/sun';



export const Layer1: THREE.Group=new THREE.Group();
Layer1.position.z=-10;

//Layer1.add(blueSky());
Layer1.add(sun());

