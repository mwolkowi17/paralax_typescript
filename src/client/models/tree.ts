import * as THREE from 'three'

function UpperThree():THREE.Mesh{
    const geometry: THREE.SphereGeometry = new THREE.SphereGeometry(1);
    
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x008000});
    const sphere: THREE.Mesh = new THREE.Mesh(geometry,material);
    sphere.position.y=1.2;
    //sphere.position.x=4
    return sphere;
}

export function tree(x:number):THREE.Mesh{
    const geometry: THREE.CylinderGeometry = new THREE.CylinderGeometry(0.2, 0.2,1.5, 32);
    
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x8B4513});
    const cylinder: THREE.Mesh = new THREE.Mesh(geometry,material);
    cylinder.position.x=x
    cylinder.position.y=-2.3;
    cylinder.add(UpperThree());
    return cylinder;
}