'use strict';

const fs = require('fs');

// module of function that reads files and stringifies

const reader = module.exports = {};

reader.readFileAsync = (path, callback) => 
  fs.readFile(path, (error, fileBuffer) => {
    if (error) {
      throw callback(error);
    }
    return callback(fileBuffer.toString('utf8'));
  });

// function that prints text of an array of files, using above function

// variable names pointing to DATA, and array in which they're arranged

const boldPath = `${__dirname}/../data/Bold.txt`;
const watPath = `${__dirname}/../data/Wat.txt`;
const activationPath = `${__dirname}/../data/Activation-Function.txt`;

const files = [boldPath, watPath, activationPath];

// sub-function for putting text in the console, also invocation callback

const printText = (text) => {
  console.log(text);
  console.log('-----------------------------------');
};

const completeMessage = () => {
  console.log('transmission complete');
};

// main part

const readFileArrayAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
    return reader.readFileAsync(currentFilePath, (error, file) => {
      printText(file);
      readFileArrayAsync(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

// invoking above function, passing in an actual file array

readFileArrayAsync(files, 0, completeMessage);
