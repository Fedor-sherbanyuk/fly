
import * as THREE from 'three';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';


// Создайте сцену, камеру и отрисовщик
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Создайте загрузчик .PLY
const loader = new PLYLoader();
loader.load('muse.ply', function (geometry) {
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
});

// Настройте камеру и взгляд
camera.position.z = 5;

// Создайте анимацию
const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
