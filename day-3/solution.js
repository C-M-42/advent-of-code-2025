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
        .forEach(bank => {
            puzzleInput.push(
                bank.split('')
                    .map(rating => Number(rating))
            );
        });
    return puzzleInput;
}

function solvePuzzlePart1(puzzle_input = parsePuzzleInput()) {
    let total = 0;

    puzzle_input
        .forEach(bank => {
            const firstDigit =
                Math.max(...bank.slice(0, -1));

            const secondDigit =
                Math.max(...bank.slice(bank.indexOf(firstDigit) + 1));

            total += (firstDigit * 10 + secondDigit);
        });

    return total;
}

function solvePuzzlePart2(puzzle_input = parsePuzzleInput()) {
    // TODO: Implement solution for Step #2.
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
