import * as THREE from 'three'


export function Mountain2(): THREE.Mesh {
    const geometry: THREE.ConeGeometry = new THREE.ConeGeometry(5, 6, 32);
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const cone: THREE.Mesh = new THREE.Mesh(geometry, material);
    cone.position.x=6.5
    return cone
}