import * as THREE from 'three'


export function grass(): THREE.Mesh {
    const geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(30, 20);
    const newLocal = 0x00ff00;
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: newLocal, side: THREE.DoubleSide })
    const plane: THREE.Mesh = new THREE.Mesh(geometry, material);
    plane.position.z = -1;
    plane.position.y = -3;
    plane.rotation.x= Math.PI/2.1
    
    return plane;

}