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
        .split(/,/)
        .forEach(range => {
            puzzleInput.push({
                lowerBoundary: Number(range.split(/-/)[0]),
                upperBoundary: Number(range.split(/-/)[1])
            });
        });
    return puzzleInput;
}

function solvePuzzlePart1(puzzle_input = parsePuzzleInput()) {
    const isInvalidId = (id) => {
        const idStr = id.toString();

        if (idStr.length % 2 !== 0) {
            return false;
        }

        const patternSize = idStr.length / 2;

        return idStr.slice(0, patternSize) === idStr.slice(patternSize);
    };

    let cumulatedInvalidIds = 0;

    for (range of puzzle_input) {
        for (let idCandidate = range.lowerBoundary;
             idCandidate <= range.upperBoundary;
             ++idCandidate) {
            if (isInvalidId(idCandidate)) {
                cumulatedInvalidIds += idCandidate;
            }
        }
    }

    return cumulatedInvalidIds;
}

function solvePuzzlePart2(puzzle_input = parsePuzzleInput()) {
    // TODO: Implement solution for Step #2.
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
