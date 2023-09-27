import * as THREE from 'three';
import { renderPoints } from './render-points';

const texture = new THREE.TextureLoader().load('/decoration_star.svg');
texture.mapping = THREE.SphericalReflectionMapping;
texture.magFilter = THREE.LinearFilter;
texture.minFilter = THREE.NearestFilter;

const starMaterial = new THREE.PointsMaterial({
  color: 0x4c1383,
  size: 0.03,
  map: texture,
  blending: THREE.AdditiveBlending,
  transparent: true
});

const STARS_AMOUNT = 200;

const renderDecorationShapedStars = () => {
  const vertices = [];

  for (let i = 0; i < STARS_AMOUNT; i++) {
    const [x, y, z] = Array.from({ length: 3 }, () => Math.random() * 2 - 1);
    const vector = new THREE.Vector3(x, y, z);
    vector.normalize();

    const [posX, posY, posZ] = [0, 1, 2].map(index => vector.getComponent(index));
    vertices.push(posX, posY, posZ);
  }

  return renderPoints(vertices, starMaterial);
};

export default renderDecorationShapedStars;
