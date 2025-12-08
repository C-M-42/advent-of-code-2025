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

function solvePuzzlePart1(puzzleInput = parsePuzzleInput()) {
    return puzzleInput.ids.filter(id => {
        for (let range of puzzleInput.freshRanges) {
            if (id >= range.min && id <= range.max) {
                return true;
            }
        }
        return false;
    }).length;
}

function solvePuzzlePart2(puzzleInput = parsePuzzleInput()) {
    const ranges = puzzleInput.freshRanges.sort((a, b) => a.min - b.min);

    const unionRanges = [ranges[0]];

    for (let range of ranges) {
        const last = unionRanges[unionRanges.length - 1];

        if (range.min <= last.max) {
            last.max = Math.max(last.max, range.max);
        } else {
            unionRanges.push(range);
        }
    }

    let total = 0;
    unionRanges.forEach(r => total += (r.max - r.min + 1));

    return total;
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
