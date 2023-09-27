import * as THREE from 'three';

export const renderPoints = (vertices, material) => {
  const geometry = new THREE.BufferGeometry();
  const position = new THREE.Float32BufferAttribute(vertices, 3);
  geometry.setAttribute('position', position);
  const points = new THREE.Points(geometry, material);

  return points;
};

export const renderLines = (vertices, material) => {
  const geometry = new THREE.BufferGeometry();
  const position = new THREE.Float32BufferAttribute(vertices, 3);
  geometry.setAttribute('position', position);
  const lines = new THREE.Line(geometry, material);

  return lines;
};
