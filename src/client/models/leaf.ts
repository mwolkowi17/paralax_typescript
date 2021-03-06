import * as THREE from 'three';

export function Leaf(x:number, z:number): THREE.Mesh{
    const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(0.02,0.5,0.02);
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color:0x003333});
    const tetrahedron: THREE.Mesh = new THREE.Mesh(geometry,material)
    tetrahedron.position.y=-2.7;
    tetrahedron.position.x=x;
    tetrahedron.position.z=z
    return tetrahedron;
}