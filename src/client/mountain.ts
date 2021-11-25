import * as THREE from 'three'


export function Mountain1(): THREE.Mesh {
    const geometry: THREE.ConeGeometry = new THREE.ConeGeometry(10, 12, 32);
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const cone: THREE.Mesh = new THREE.Mesh(geometry, material);
    cone.position.x=0
    return cone
}