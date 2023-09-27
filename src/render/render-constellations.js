import * as THREE from 'three';
import { renderPoints } from './render-points';

const STAR_TYPE = {
  MAIN: 'main',
  SMALL: 'small',
  LARGE: 'large'
};

const Config = {
  [STAR_TYPE.MAIN]: {
    size: 0.1,
    url: '/star.svg'
  },
  [STAR_TYPE.SMALL]: {
    size: 0.04,
    url: '/common_small.svg'
  },
  [STAR_TYPE.LARGE]: {
    size: 0.04,
    url: '/common.svg'
  }
};

const getStarMaterial = (texture, size) => {
  return new THREE.PointsMaterial({
    color: 0xffffff,
    size,
    map: texture,
    blending: THREE.AdditiveBlending,
    transparent: true
  });
};

const renderStars =
  ({ url, size }) =>
  vertices => {
    const texture = new THREE.TextureLoader().load(url);
    texture.mapping = THREE.SphericalReflectionMapping;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.NearestFilter;

    const starMaterial = getStarMaterial(texture, size);
    const points = renderPoints(vertices, starMaterial);

    return points;
  };

export const renderMainStars = renderStars(Config[STAR_TYPE.MAIN]);
export const renderSmallStars = renderStars(Config[STAR_TYPE.SMALL]);
export const renderLargeStars = renderStars(Config[STAR_TYPE.LARGE]);
