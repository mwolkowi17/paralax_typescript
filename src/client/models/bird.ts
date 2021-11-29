import * as THREE from 'three';

export function Bird(x:number, y:number): THREE.Mesh {
    const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(0.2, 1, 0.2);

    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const box: THREE.Mesh = new THREE.Mesh(geometry, material);

    box.position.y = x;
    box.position.z = y;
    box.rotation.z = Math.PI / 3;

    const box2: THREE.Mesh = new THREE.Mesh(geometry, material);
    box2.rotation.z = Math.PI / 3;
    box2.position.x = 0.4;
    box2.position.y = -0.668;
    //box2.position.z=3;

    box.add(box2);
    return box;
}