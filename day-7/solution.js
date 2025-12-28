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
    let splits = 0;

    let m = [...puzzleInput];
    for (let y = 0; y < m.length; ++y) {
        if (y < 1) {
            continue;
        }

        for (let x = 0; x < m[y].length; ++x) {
            if (!(m[y - 1][x] === 'S' || m[y - 1][x] === '|')) {
                continue;
            }

            if (m[y][x] !== '^') {
                m[y][x] = '|';
            } else {
                ++splits;

                if(x + 1 < m[y].length)
                    m[y][x + 1] = '|';
                if (!(x - 1 < 0))
                    m[y][x - 1] = '|';
            }
        }
    }

    return splits;
}

function solvePuzzlePart2(puzzleInput = parsePuzzleInput()) {
    // TODO: Implement solution for Step #2.
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
