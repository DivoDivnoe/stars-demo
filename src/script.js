import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Markers from './marker';

// window.addEventListener('keydown', evt => {
//   console.log('evt', evt);
//   evt.preventDefault();
// });

const Size = {
  width: 1024,
  height: 512
};

const SCALE_FACTOR = 40;
const STAR_SIZE = 32;
const RGB_MAX_VALUE = 255;

const aspectRatio = Size.width / Size.height;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(Size.width, Size.height);
renderer.setClearColor(0x2b093a); // black background
document.querySelector('#container').appendChild(renderer.domElement);

const scene = new THREE.Scene();

// const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 5, 5, 5), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
// mesh.position.set(0, 0, -2);
// scene.add(mesh);

const camera = new THREE.PerspectiveCamera(55, aspectRatio, 0.1, 100000000000);
// const camera = new THREE.OrthographicCamera(-aspectRatio, aspectRatio, 1, -1, 100000000000);

camera.position.set(-0.5, 0, 0);
camera.lookAt(new THREE.Vector3(0, -50, 0));

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);

//controls.update() must be called after any manual changes to the camera's transform
// camera.position.set(0, 0, 10);
controls.enableZoom = false;
controls.enablePan = false;

controls.update();

const commonGeometry = new THREE.BufferGeometry();
const exactGeometry = new THREE.BufferGeometry();

// AxesHelper
const axisHelper = new THREE.AxesHelper(3);
scene.add(axisHelper);

const markers = new Markers();

const initConstellations = async () => {
  const result = await fetch('./constellations.json');
  const constellations = await result.json();

  const commonVertices = [];
  const exactVertices = [];
  const lineMaterial = new THREE.LineBasicMaterial({ color: '#40e0d0' });

  constellations.forEach(constellation => {
    const constellationVertices = { common: [], exact: [] };

    constellation.stars[0].forEach(({ x, y, z, rus: name }) => {
      const vector = new THREE.Vector3(x, y, z);
      vector.normalize();
      const [posX, posY, posZ] = [0, 1, 2].map(index => vector.getComponent(index));

      // constellationVertices.push(x * SCALE_FACTOR, y * SCALE_FACTOR, z * SCALE_FACTOR);

      if (name) {
        constellationVertices.exact.push(posX * SCALE_FACTOR, posY * SCALE_FACTOR, posZ * SCALE_FACTOR);
      } else {
        constellationVertices.common.push(posX * SCALE_FACTOR, posY * SCALE_FACTOR, posZ * SCALE_FACTOR);
      }

      const position = new THREE.Vector3(x, y, z);

      if (name) {
        markers.add({ position, name });
      }
    });

    const linesGeometry = new THREE.BufferGeometry();
    const allConstellationVertices = constellationVertices.common.concat(constellationVertices.exact);
    const position = new THREE.Float32BufferAttribute(allConstellationVertices, 3);
    linesGeometry.setAttribute('position', position);

    const line = new THREE.Line(linesGeometry, lineMaterial);
    scene.add(line);

    exactVertices.push(...constellationVertices.exact);
    commonVertices.push(...constellationVertices.common);
  });

  const commonPosition = new THREE.Float32BufferAttribute(commonVertices, 3);
  const exactPosition = new THREE.Float32BufferAttribute(exactVertices, 3);
  commonGeometry.setAttribute('position', commonPosition);
  exactGeometry.setAttribute('position', exactPosition);

  const exactTexture = new THREE.TextureLoader().load('./star.svg');
  const commonTexture = new THREE.TextureLoader().load('./common.svg');

  [exactTexture, commonTexture].forEach(texture => {
    texture.mapping = THREE.SphericalReflectionMapping;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.NearestFilter;
  });

  const exactStarMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    // size: STAR_SIZE,
    size: 5,
    map: exactTexture,
    blending: THREE.AdditiveBlending,
    transparent: true
  });

  const commonStarMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    // size: STAR_SIZE,
    size: 2,
    map: commonTexture,
    blending: THREE.AdditiveBlending,
    transparent: true
  });

  const common = new THREE.Points(commonGeometry, commonStarMaterial);
  const exact = new THREE.Points(exactGeometry, exactStarMaterial);
  scene.add(common);
  scene.add(exact);
};

// const initStars = async () => {
//   const result = await fetch('./stars.json');
//   const stars = await result.json();

//   const vertices = [];

//   for (let i = 0; i < stars.length; i++) {
//     vertices.push(...stars[i].pos.map(item => item * SCALE_FACTOR));
//   }

//   const position = new THREE.Float32BufferAttribute(vertices, 3);

//   geometry.setAttribute('position', position);

//   const texture = new THREE.TextureLoader().load('./star.png');
//   texture.mapping = THREE.SphericalReflectionMapping;
//   texture.magFilter = THREE.LinearFilter;
//   texture.minFilter = THREE.NearestFilter;

//   const starMaterial = new THREE.PointsMaterial({
//     color: 0xffffff,
//     size: STAR_SIZE,
//     map: texture,
//     blending: THREE.AdditiveBlending,
//     transparent: true
//   });

//   const points = new THREE.Points(geometry, starMaterial);

//   scene.add(points);
// };

function animate() {
  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
  markers.update({ camera, screen: Size });
}

animate();
// initStars();
initConstellations();
