const inpEl = document.querySelector("#inp-el");
const convBtn = document.querySelector("#convert-btn");
const lenEl = document.querySelector("#len-el");
const volEl = document.querySelector("#vol-el");
const masEl = document.querySelector("#mas-el");

let units = [
  (meters = {
    value: 20,
    convert: () => meters.value * 3.281,
  }),
  (feet = {
    value: 20,
    convert: () => feet.value / 3.281,
  }),
  (liters = {
    value: 20,
    convert: () => liters.value * 0.264,
  }),
  (gallons = {
    value: 20,
    convert: () => gallons.value / 0.264,
  }),
  (kilograms = {
    value: 20,
    convert: () => kilograms.value * 2.204,
  }),
  (pounds = {
    value: 20,
    convert: () => pounds.value / 2.204,
  }),
];

convBtn.addEventListener("click", () => {
  getInput();
  convertUnits();
  renderLength();
  renderVolume();
  renderMass();
});

function getInput() {
  let input = inpEl.value;
  units.forEach((unit) => {
    unit.value = input;
  });
}

function convertUnits() {
  units.forEach((unit) => {
    unit.output = unit.convert().toFixed(3);
  });
}

function renderLength() {
  lenEl.textContent = `
    ${meters.value} meters = ${meters.output} feet | ${feet.value} feet = ${feet.output} meters
  `;
}

function renderVolume() {
  volEl.textContent = `
    ${liters.value} liters = ${liters.output} gallons | ${gallons.value} gallons = ${gallons.output} liters
  `;
}

function renderMass() {
  masEl.textContent = `
    ${kilograms.value} kilograms = ${kilograms.output} pounds | ${pounds.value} pounds = ${pounds.output} kilograms
  `;
}
