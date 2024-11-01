#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const testResultsDir = './cypress/test-results';
 
fs.rmdir(testResultsDir, { recursive: true }, (err) => {
  if (err) {
    console.error('Error deleting former test results:', err);
  } else {
    console.log('Deleted former test results');
  }
});