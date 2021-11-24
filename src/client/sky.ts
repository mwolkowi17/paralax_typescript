import * as THREE from 'three';

export function blueSky(): THREE.Mesh{
const geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(30,20);
    const newLocal = 0x7fbfff;
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color:  newLocal, side: THREE.DoubleSide})
const plane: THREE.Mesh = new THREE.Mesh( geometry, material);
plane.position.z=-5;
return plane;
}