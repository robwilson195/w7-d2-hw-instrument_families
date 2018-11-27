const InstrumentFamilies = require('./models/instrument_families');
const InfoView = require('./views/infoView.js');
const SelectView = require('./views/selectView.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  let element = document.querySelector('#instrument-families');
  const selectView = new SelectView(element);
  selectView.bindEvents();

  let container = document.querySelector('.family-info-display');
  const infoView = new InfoView(container);
  infoView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

});
