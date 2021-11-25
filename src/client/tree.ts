import * as THREE from 'three'

function UpperThree():THREE.Mesh{
    const geometry: THREE.SphereGeometry = new THREE.SphereGeometry(1);
    
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x008000});
    const sphere: THREE.Mesh = new THREE.Mesh(geometry,material);
    //sphere.position.y=12.5
    //sphere.position.x=4
    return sphere;
}

export function tree():THREE.Mesh{
    const geometry: THREE.CylinderGeometry = new THREE.CylinderGeometry(5, 5, 20, 32);
    
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x008000});
    const cylinder: THREE.Mesh = new THREE.Mesh(geometry,material);
    //sphere.position.y=12.5
    //sphere.position.x=4
    return cylinder;
}