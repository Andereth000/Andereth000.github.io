import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Find the container ---
  const container = document.getElementById('container3D');
  if (!container) {
    console.warn('⚠️ No #container3D found on this page. Skipping 3D init.');
    return;
  }

  // --- 2. Basic Scene Setup ---
  const clock = new THREE.Clock()
  const rotationSpeed = .3
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 13;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // --- 3. Lighting ---
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);

  const topLight = new THREE.DirectionalLight(0xffffff, 1);
  topLight.position.set(500, 500, 500);
  scene.add(topLight);

  // --- 4. Load Model ---
  const loader = new GLTFLoader();
  const modelPath = '/models/Brain_Organoid_Transfer.glb'; // absolute path works on all pages

  let bee, mixer;
  loader.load(
    modelPath,
    (gltf) => {
      bee = gltf.scene;
      bee.position.set(0.01, 0.3, -15);
      bee.rotation.y = -3
      bee.rotation.z = -.3
      bee.scale.x = 0.2;
      bee.scale.y = 0.2;
      bee.scale.z = 0.2;
      scene.add(bee);

      // play built-in animation if present
      mixer = new THREE.AnimationMixer(bee);
      if (gltf.animations.length > 0) {
        mixer.clipAction(gltf.animations[0]).play();
      }
    },
    undefined,
    (error) => console.error('❌ Model load error:', error)
  );

  // --- 5. Render Loop ---
  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta()
    if (mixer) mixer.update(clock.getDelta());
    if (bee) bee.rotation.y += delta * rotationSpeed;
    renderer.render(scene, camera);
  }
  animate();

  // --- 6. Handle Resize ---
  window.addEventListener('resize', () => {
    const { innerWidth: w, innerHeight: h } = window;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });
});