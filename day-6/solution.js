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

function parsePuzzleInput1(puzzleInputAsString = readPuzzleInputAsString()) {
    const puzzleInput = [];

    puzzleInputAsString
        .trim()
        .split(/\r?\n/)
        .forEach(line => {
            puzzleInput.push(line.split(/\s+/));
        });

    return puzzleInput;
}

function parsePuzzleInput2(puzzleInputAsString = readPuzzleInputAsString()) {
    const puzzleInput = [{operands: []}];

    const raw = puzzleInputAsString.trim().split(/\r?\n/);
    for (let i = raw[0].length - 1; i >= 0; --i) {
        if (raw.filter(l => l[i] !== ' ').length === 0) {
            puzzleInput.push({operands: []});
            continue;
        }

        puzzleInput.at(-1)['operands'].push(
            Number(raw[0][i] + raw[1][i] + raw[2][i] + raw[3][i]));

        if (raw[4][i] !== ' ') {
            puzzleInput.at(-1)['operation'] = raw[4][i];
        }
    }

    return puzzleInput;
}

function solvePuzzlePart1(puzzleInput = parsePuzzleInput1()) {
    let total = 0;
    for (let p = puzzleInput[0].length - 1; p >= 0; --p) {
        let result = undefined;
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

function solvePuzzlePart2(puzzleInput = parsePuzzleInput2()) {
    let result = 0;

    puzzleInput.forEach(p => {
        let r = p.operands.pop();
        for (let o of p.operands) {
            r = p.operation === "*" ? r * o : r + o;
        }
        result += r;
    });

    return result;
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
