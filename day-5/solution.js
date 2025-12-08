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
    const puzzleInput = {
        freshRanges: [],
        ids: []
    };

    let isParsingRanges = true;
    puzzleInputAsString
        .trim()
        .split(/\r?\n/)
        .forEach(line => {
            if (line.trim() === '') {
                isParsingRanges = false;
            } else if (isParsingRanges) {
                const rangeBoundaries = line.trim().split('-');
                puzzleInput.freshRanges.push({
                    min: Number(rangeBoundaries[0]),
                    max: Number(rangeBoundaries[1])
                });
            } else {
                puzzleInput.ids.push(Number(line.trim()));
            }
        });
    return puzzleInput;
}

function solvePuzzlePart1(puzzle_input = parsePuzzleInput()) {
    // TODO: Implement solution for Step #1.
}

function solvePuzzlePart2(puzzle_input = parsePuzzleInput()) {
    // TODO: Implement solution for Step #2.
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
