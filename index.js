/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass')

const input = document.getElementById('input-field')


const convert_btn = document.getElementById("convert-btn")

convert_btn.addEventListener('click', function() {
    const value = input.value
    length.textContent = `${value} meters = ${value * 3.281} feet | ${value * 3.281} feet = ${value} meters `
    volume.textContent = `${value} liters = ${value * 0.264} gallons | ${value * 0.264} gallons = ${value} liters `
    mass.textContent = `${value} kilos = ${(value * 2.204).toFixed(2)} pounds | ${(value * 2.204).toFixed(2)} pounds = ${value} kilos `
})