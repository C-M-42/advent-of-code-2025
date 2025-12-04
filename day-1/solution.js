// noinspection JSUnresolvedReference
// noinspection DuplicatedCode

function readPuzzleInputAsString(file = 'puzzle-input.txt') {
  const fs = require('node:fs');
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (err) {
    console.error('FAILED_TO_READ_PUZZLE_INPUT', err);
  }
}

function parsePuzzleInput(puzzleInputAsString = readPuzzleInputAsString()) {
  let puzzleInput = []
  puzzleInputAsString
    .split(/\r?\n/)
    .forEach(line => {
      if (line.trim()) {
        puzzleInput.push({
          direction: line.charAt(0).toUpperCase() === 'L' ? -1 : 1,
          distance: Number(line.substring(1))
        });
      }
    });
  return puzzleInput;
}

function solvePuzzlePart1(puzzle_input = parsePuzzleInput()) {
  const RING_SIZE = 100;

  let originStopCount = 0;

  let position = 50;
  puzzle_input.forEach(({direction, distance}) => {
    position += distance * direction;
    position = ((position % RING_SIZE) + RING_SIZE) % RING_SIZE;

    if (position === 0 || position === RING_SIZE) {
      position = 0;
      ++originStopCount;
    }
  });

  return originStopCount;
}

function solvePuzzlePart2(puzzle_input = parsePuzzleInput()) {
  const RING_SIZE = 100;

  let originPassCount = 0;

  let position = 50;
  puzzle_input.forEach(({direction, distance}) => {
    for (let i = 0; i < distance; ++i) {
      position = (position + direction + RING_SIZE) % RING_SIZE;
      if (position === 0) {
        ++originPassCount;
      }
    }
  });

  return originPassCount;
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
