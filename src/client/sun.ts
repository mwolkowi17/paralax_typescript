import * as THREE from 'three'

export function sun(): THREE.Mesh{
    const geometry: THREE.SphereGeometry = new THREE.SphereGeometry(0.5);
    
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0xffff7f});
    const sphere: THREE.Mesh = new THREE.Mesh(geometry,material);
    return sphere;
}