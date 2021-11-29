import * as THREE from 'three'

export function sun(): THREE.Mesh{
    const geometry: THREE.SphereGeometry = new THREE.SphereGeometry(1);
    
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0xffff7f});
    const sphere: THREE.Mesh = new THREE.Mesh(geometry,material);
    sphere.position.y=12.5
    sphere.position.x=4
    return sphere;
}