const PubSub = require('../helpers/pub_sub.js')

const InfoView = function (element) {
  this.element = element;
}

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:chosen-family', (event) => {
    const family = event.detail;
    this.displayFamilyData(family);
  });
};

InfoView.prototype.displayFamilyData = function (family) {
  this.element.textContent = '';

  nameLine = document.createElement('h3');
  nameLine.textContent = family.name;
  this.element.appendChild(nameLine);

  descriptionLine = document.createElement('p');
  descriptionLine.textContent = family.description;
  this.element.appendChild(descriptionLine);
};

module.exports = InfoView;
