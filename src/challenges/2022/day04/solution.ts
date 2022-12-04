import { readFileSync } from 'fs';
import path from 'path';

const data = readFileSync(path.resolve(__dirname, './input.txt')).toString().split('\n');

let fullOverlap = 0;

const getFromTo = (input: string) => input.split('-').map((e) => Number(e));

for (const assignment of data) {
  const [first, second] = assignment.split(',');

  const [firstFrom, firstTo] = getFromTo(first);
  const [secondFrom, secondTo] = getFromTo(second);

  if (
    (firstFrom >= secondFrom && firstFrom <= secondTo && firstTo <= secondTo) ||
    (secondFrom >= firstFrom && secondFrom <= firstTo && secondTo <= firstTo)
  )
    fullOverlap += 1;
}

console.log(fullOverlap);