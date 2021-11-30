import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'
import {scene} from './client'




    
     export const gltfLoader: GLTFLoader = new GLTFLoader()
    //gltfLoader2.load('./zawor_kulowy_three_move3.glb', (gltf) => {
    gltfLoader.load('./mountain_model1.glb', (gltf) => {
      const root = gltf.scene;
      const anim = gltf.animations;
      scene.add(root); //co zrobic z tym?
     // mixer = new THREE.AnimationMixer(root);
      
      //action = mixer.clipAction( anim[ 0 ])
     
      //action.play();

     
    })
 
