import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Markers from './marker';
import renderDecorationStars from './render/render-decoration-stars';
import { renderPoints, renderLines } from './render/render-points';
import { renderLargeStars, renderMainStars, renderSmallStars } from './render/render-constellations';
import renderDecorationShapedStars from './render/render_shape_stars';
import renderMeteors from './render/render_decoration-meteors';

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
// renderer.setClearColor(0x2b093a); // black background
document.querySelector('#container').appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(55, aspectRatio, 0.000001, 100000000000);

camera.position.set(0.00001, 0, 0);
camera.lookAt(new THREE.Vector3(0, -50, 0));

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);

controls.enableZoom = false;
controls.enablePan = false;
controls.minPolarAngle = Math.PI / 2;
// controls.minAzimuthAngle = (-7 * Math.PI) / 4;
// controls.maxAzimuthAngle = Math.PI + Math.PI / 4;
controls.rotateSpeed = 0.25;

controls.addEventListener('change', evt => {
  console.log('change', camera.position);
});

controls.update();

// AxesHelper
const axisHelper = new THREE.AxesHelper(3);
scene.add(axisHelper);

const sphereGeom = new THREE.SphereGeometry(1.1, 32, 32);
const texture = new THREE.TextureLoader().load('/bg.svg');
texture.magFilter = THREE.LinearFilter;
texture.minFilter = THREE.NearestFilter;
const material = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: false,
  side: THREE.BackSide
});
const universe = new THREE.Mesh(sphereGeom, material);
universe.position.set(0, 0, 0);
scene.add(universe);

const markers = new Markers();

const linesGroup = new THREE.Group();

const initConstellations = async () => {
  const result = await fetch('/constellations.json');
  const constellations = await result.json();

  const commonVertices = [];
  const commonSmallVertices = [];
  const exactVertices = [];
  const lineMaterial = new THREE.LineBasicMaterial({ color: '#40e0d0' });

  constellations.forEach(constellation => {
    const constellationVertices = { common: [], exact: [], commonSmall: [] };
    const linesVertices = [];

    constellation.stars.forEach((stars, ind) => {
      stars.forEach(({ x, y, z, rus: name }, index) => {
        const vector = new THREE.Vector3(x, y, z);
        vector.normalize();
        const [posX, posY, posZ] = [0, 1, 2].map(index => vector.getComponent(index));

        if (name) {
          constellationVertices.exact.push(posX, posY, posZ);
        } else if (Math.random() < 0.5) {
          constellationVertices.commonSmall.push(posX, posY, posZ);
        } else {
          constellationVertices.common.push(posX, posY, posZ);
        }

        if (ind === 0) {
          linesVertices.push(posX, posY, posZ);
        }

        if (name) {
          markers.add({ position: vector.clone(), name });
        }

        // if (index === 0 && ind === 0) {
        //   const constellationPosition = new THREE.Vector3(posX, posY, posZ);
        //   markers.add({ position: constellationPosition, name: constellation.name });
        // }
      });
    });

    const lines = renderLines(linesVertices, lineMaterial);
    linesGroup.add(lines);

    exactVertices.push(...constellationVertices.exact);
    commonVertices.push(...constellationVertices.common);
    commonSmallVertices.push(...constellationVertices.commonSmall);
  });

  const common = renderLargeStars(commonVertices);
  const commonSmall = renderSmallStars(commonSmallVertices);
  const exact = renderMainStars(exactVertices);

  scene.add(common);
  scene.add(commonSmall);
  scene.add(exact);
  scene.add(linesGroup);
};

const renderStars = () => {
  const decorationStars = renderDecorationStars();
  const shapedStars = renderDecorationShapedStars();
  const meteors = renderMeteors();

  [...decorationStars, shapedStars, meteors].forEach(points => {
    scene.add(points);
  });
};

function animate() {
  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render(scene, camera);
  markers.update({ camera, screen: Size });
}

animate();
renderStars();
initConstellations();

let shownLines = true;

const button = document.querySelector('.btn');
button.onclick = () => {
  if (shownLines) {
    button.textContent = 'Добавить линии';
    scene.remove(linesGroup);
  } else {
    scene.add(linesGroup);
    button.textContent = 'Убрать линии';
  }

  shownLines = !shownLines;
};
