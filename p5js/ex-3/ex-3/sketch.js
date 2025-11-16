/*
 * @name Bubble Sort
 * @arialabel Dark grey bars of different heights on a light grey background are sorted from tallest to shortest from the right to the left side of the screen
 * @description Sorts the randomly distributed bars 
 * according to their height in ascending order
 * while simulating the whole sorting process.
 */

let values = [];
let i = 0;
let j = 0;

function setup() {
  createCanvas(720, 400);
  for (let n = 0; n < width / 8; n++) {
    values.push(random(height));
  }
}

function draw() {
  background(255);
  bubbleSort();
  simulateSorting();
}

function bubbleSort() {
  // Sort 8 operations per frame
  for (let k = 0; k < 8; k++) {

    // Stop BEFORE accessing j+1
    if (i < values.length - 1) {

      if (j < values.length - i - 1) {

        // Swap if needed
        if (values[j] > values[j + 1]) {
          let temp = values[j];
          values[j] = values[j + 1];
          values[j + 1] = temp;
        }

        j++;

      } else {
        // End of pass
        j = 0;
        i++;
      }
    } else {
      noLoop();   // Fully sorted
    }
  }
}

function simulateSorting() {
  for (let n = 0; n < values.length; n++) {
    stroke(100, 143, 143);
    fill(200);              // valid color
    rect(n * 8, height, 8, -values[n], 20);
  }
}
