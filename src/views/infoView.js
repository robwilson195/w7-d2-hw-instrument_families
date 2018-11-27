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

  const nameLine = document.createElement('h3');
  nameLine.textContent = family.name;
  this.element.appendChild(nameLine);

  const descriptionLine = document.createElement('p');
  descriptionLine.textContent = family.description;
  this.element.appendChild(descriptionLine);

  const instList = document.createElement('ul');
  this.element.appendChild(instList);

  family.instruments.forEach((instrument) => {
    listItem = document.createElement('li');
    listItem.textContent = instrument;
    instList.appendChild(listItem);
  });

};

module.exports = InfoView;
