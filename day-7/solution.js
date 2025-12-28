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
        .trim()
        .split(/\r?\n/)
        .forEach(line => {
            if (line.trim()) {
                puzzleInput.push(line.trim().split(''));
            }
        });
    return puzzleInput;
}

function solvePuzzlePart1(puzzleInput = parsePuzzleInput()) {
    // TODO: Implement solution for Step #1.
}

function solvePuzzlePart2(puzzleInput = parsePuzzleInput()) {
    // TODO: Implement solution for Step #2.
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
