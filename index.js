// clever-utils.js

const axios = require('axios');
const _ = require('lodash');

// Function to get the length of a string
function getStringLength(str) {
  return str.length;
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to fetch data from a URL using Axios
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from URL');
  }
}

// Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// Function to generate a random number within a range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getStringLength,
  capitalizeFirstLetter,
  fetchData,
  isEven,
  generateRandomNumber
};
