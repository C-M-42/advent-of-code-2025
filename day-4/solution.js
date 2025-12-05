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
            puzzleInput.push(
                line.split('')
            );
        });
    return puzzleInput;
}

function solvePuzzlePart1(puzzle_input = parsePuzzleInput()) {
    const lastPosition = {
        x: puzzle_input[0].length - 1,
        y: puzzle_input.length - 1
    };

    const isPositionFree = (x, y) => {
        return puzzle_input[y][x] !== '@' && puzzle_input[y][x] === '.';
    };

    const isPositionAccessible = (x, y) => {
        const surroundingPositionCandidates = [
            {x: x - 1, y: y - 1},
            {x: x - 1, y: y},
            {x: x - 1, y: y + 1},

            {x: x + 1, y: y - 1},
            {x: x + 1, y: y},
            {x: x + 1, y: y + 1},

            {x: x, y: y - 1},
            {x: x, y: y + 1}
        ];

        let nonAccessiblePositionsCount = 0;
        surroundingPositionCandidates
            .filter((candidate) => {
                return (
                        candidate.x < 0
                        || candidate.y < 0
                        || candidate.y > lastPosition.y
                        || candidate.x > lastPosition.x
                    ) !== true;
            })
            .filter((position) => {
                return !isPositionFree(position.x, position.y);
            })
            .forEach(() => {
                ++nonAccessiblePositionsCount;
            });

        return nonAccessiblePositionsCount < 4;
    };

    let result = 0;
    for (let row = lastPosition.y; row >= 0; --row) {
        for (let column = lastPosition.x; column >= 0; --column) {
            if (!isPositionFree(column, row)
                && isPositionAccessible(column, row)) {
                ++result;
            }
        }
    }

    return result;
}

function solvePuzzlePart2(puzzle_input = parsePuzzleInput()) {
    // TODO: Implement solution for Step #2.
}

console.log('SOLUTION::PART-1', solvePuzzlePart1());
console.log('SOLUTION::PART-2', solvePuzzlePart2());
