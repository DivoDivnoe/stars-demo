import $ from 'jquery';

class Markers {
  constructor() {
    this._markers = [];
  }

  add({ position, name }) {
    const marker = {};

    const p = $('<p>').append(name);
    const textView = $('<div>').addClass('marker').append(p);

    marker.text = textView;
    marker.position = position;

    this._markers.push(marker);

    $(document.getElementById('container')).append(textView);
  }

  hideMarkers() {
    $('.marker').hide();
  }

  showMarkers() {
    $('.marker').show();
  }

  static toXYCoords({ position, camera, screen }) {
    const { width, height } = screen;

    const vector = position.clone();
    vector.project(camera);

    vector.x = Math.round(((vector.x + 1) * width) / 2);
    vector.y = Math.round(((-vector.y + 1) * height) / 2) + 15;

    return vector;
  }

  update({ camera, screen }) {
    for (var i = 0; i < this._markers.length; i++) {
      const { position, text } = this._markers[i];
      const newPos = Markers.toXYCoords({ position, camera, screen });

      text.css({ top: newPos.y, left: newPos.x });

      if (newPos.z > 1) {
        text.css({ display: 'none' });
      } else {
        text.css({ display: 'inline-block' });
      }
    }
  }
}

export default Markers;
