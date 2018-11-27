const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-families', (event) => {
    console.log('now in selectView');
    const families = event.detail;
    this.populate(families);
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
