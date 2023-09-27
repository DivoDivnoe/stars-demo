import * as THREE from 'three';
import { renderPoints } from './render-points';

const texture = new THREE.TextureLoader().load('/decoration.svg');
texture.mapping = THREE.SphericalReflectionMapping;
texture.magFilter = THREE.LinearFilter;
texture.minFilter = THREE.NearestFilter;

const starMaterialOptions = {
  color: 0x4c1383,
  map: texture,
  blending: THREE.AdditiveBlending,
  transparent: true
};

const Type = {
  LARGE: 0.02,
  SMALL: 0.01
};

const STARS_AMOUNT = 400;

const _renderDecorationStars = size => {
  const starMaterial = new THREE.PointsMaterial({
    size,
    ...starMaterialOptions
  });

  const vertices = [];

  for (let i = 0; i < STARS_AMOUNT / Object.values(Type).length; i++) {
    const [x, y, z] = Array.from({ length: 3 }, () => Math.random() * 2 - 1);
    const vector = new THREE.Vector3(x, y, z);
    vector.normalize();

    const [posX, posY, posZ] = [0, 1, 2].map(index => vector.getComponent(index));
    vertices.push(posX, posY, posZ);
  }

  return renderPoints(vertices, starMaterial);
};

const renderDecorationStars = () => {
  return Object.values(Type).map(_renderDecorationStars);
};

export default renderDecorationStars;
