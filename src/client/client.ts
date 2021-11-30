import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Layer1 } from './layer1';
import { Layer2 } from './layer2';
import { Layer3 } from './layer3';
import { Layer4 } from './layer4';
import { Bird } from './models/bird';

const scene = new THREE.Scene()
scene.background=new THREE.Color(0x7fbfff)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 14.5;

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableRotate=false;

const bird1: THREE.Mesh=Bird(3,2)
const bird2: THREE.Mesh=Bird(4,3)
const bird3: THREE.Mesh=Bird(5,4)

scene.add(Layer1);
scene.add(Layer2);
scene.add(Layer3);
scene.add(Layer4);

scene.add(bird1);
scene.add(bird2);
scene.add(bird3)



window.addEventListener('resize', onWindowResize, false)

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    controls.update()

    render()
}



function render() {
    renderer.render(scene, camera)
}

renderer.setAnimationLoop( function () {
    if ( bird1.position.x < 12) {
      bird1.position.x += 0.01;
    }else{
        bird1.position.x=-14
    }

    if (bird3.position.x < 12){
        bird3.position.x+= 0.02;
    }else{
        bird3.position.x=-14
    }

    if ( bird2.position.x >-12){
        bird2.position.x-=0.01;
    }else{
        bird2.position.x=6
    }

     

    renderer.render( scene, camera );
  } );
const maindocument: HTMLElement = document.body;


let x:number = 0;
let y:number = 0
maindocument.addEventListener('mousemove',e=>{
x=e.offsetX;
y=e.offsetY
Layer2.position.x=x/1000;
Layer3.position.x=x/800;
Layer4.position.x=x/600

})

animate()
