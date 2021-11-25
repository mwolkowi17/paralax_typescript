import * as THREE from 'three'


export function Mountain1(): THREE.Mesh {
    const geometry: THREE.ConeGeometry = new THREE.ConeGeometry(10, 12, 32);
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const cone: THREE.Mesh = new THREE.Mesh(geometry, material);
    cone.position.x=-2
    cone.position.y=2.3
    return cone
}