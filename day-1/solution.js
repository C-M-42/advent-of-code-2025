function readPuzzleInputAsString(file = 'puzzle-input.txt') {
  const fs = require('node:fs');
  try {
    const data = fs.readFileSync(file, 'utf8');
    return data;
  } catch (err) {
    console.error('FAILED_TO_READ_PUZZLE_INPUT', err);
  }
}

function parsePuzzleInput(puzzleInputAsString = readPuzzleInputAsString()) {
  let puzzleInput = [[], []];
  puzzleInputAsString
    .split(/\r?\n/)
    .forEach(line => {
      if (line.trim()) {
        puzzleInput[0].push(Number(line.split(/[ ]+/)[0]));
        puzzleInput[1].push(Number(line.split(/[ ]+/)[1]));
      }
    });
  return puzzleInput;
}

function solvePuzzlePart1(puzzle_input = parsePuzzleInput()) {
  const A = puzzle_input[0].sort();
  const B = puzzle_input[1].sort();

  let d = 0;
  A.forEach((a, i) => {
    const b = B[i];
    d += Math.abs(a - b);
  });
  return d;
}

function solvePuzzlePart2(puzzle_input = parsePuzzleInput()) {
  // TODO: Implement solution for Step #2.
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
