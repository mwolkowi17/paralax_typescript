import * as THREE from 'three'
import { Color } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Layer1 } from './layer1';
import { Layer2 } from './layer2';
import { Layer3 } from './layer3';
import { Layer4 } from './layer4';
const scene = new THREE.Scene()
scene.background=new THREE.Color(0x7fbfff)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 14.5;

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableRotate=true;

scene.add(Layer1);
scene.add(Layer2);
scene.add(Layer3);
scene.add(Layer4);



window.addEventListener('resize', onWindowResize, false)

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    //cube.rotation.x += 0.01
    //cube.rotation.y += 0.01

    controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}

const maindocument: HTMLElement = document.body;


let x:number = 0;
let y:number = 0
maindocument.addEventListener('mousemove',e=>{
x=e.offsetX;
y=e.offsetY
console.log(x,y)
})

animate()
