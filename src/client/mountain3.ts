import * as THREE from 'three'


export function Mountain3(): THREE.Mesh {
    const geometry: THREE.ConeGeometry = new THREE.ConeGeometry(4.5, 6, 32);
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const cone: THREE.Mesh = new THREE.Mesh(geometry, material);
    cone.position.x=-7.5
    return cone
}