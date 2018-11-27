const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-families', (event) => {
    const families = event.detail;
    this.populate(families);
  });

  this.element.addEventListener('change', (event) => {
    const chosenIndex = event.target.value;
    PubSub.publish('SelectView:selected-index', chosenIndex)
  });

};

SelectView.prototype.populate = function (families) {
  families.forEach((family, index) => {
    opt = document.createElement('option');
    opt.textContent = family.name;
    opt.value = index;
    this.element.appendChild(opt);
  });
};

module.exports = SelectView;
