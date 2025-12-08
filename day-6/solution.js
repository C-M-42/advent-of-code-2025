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
    const puzzleInput = [];

    puzzleInputAsString
        .trim()
        .split(/\r?\n/)
        .forEach(line => {
            puzzleInput.push(line.split(/\s+/));
        });

    return puzzleInput;
}

function solvePuzzlePart1(puzzleInput = parsePuzzleInput()) {
    let total = 0;
    for (let p = puzzleInput[0].length - 1; p >= 0; --p) {
        let result;
        for (let n = puzzleInput.length - 2; n >= 0; --n) {
            if (result === undefined) {
                result = Number(puzzleInput[n][p].trim());
            } else {
                const operation = puzzleInput[4][p].trim();
                if (operation === '+') {
                    result += Number(puzzleInput[n][p].trim());
                } else {
                    result *= Number(puzzleInput[n][p].trim());
                }
            }
        }

        total += result;
    }
    return total;
}

function solvePuzzlePart2(puzzleInput = parsePuzzleInput()) {
    // TODO: Implement solution for Step #2.
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
