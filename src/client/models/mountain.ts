
import * as THREE from 'three'


export function Mountain(x:number,y:number, posx:number, posy:number, colormount: THREE.ColorRepresentation): THREE.Mesh {
    const geometry: THREE.ConeGeometry = new THREE.ConeGeometry(x, y, 32);

    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: colormount });
    const cone: THREE.Mesh = new THREE.Mesh(geometry, material);
    cone.position.x=posx;
    cone.position.y=posy;
    return cone
}
