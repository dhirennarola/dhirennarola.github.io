// Prints the availability label for a set of sample dates.
// Run: node scripts/check-availability.mjs   (needs Node 22.18+ to load .ts)
import { getAvailability } from '../src/data/availability.ts';

const dates = [
  '2026-10-11', // 82 days left in Q4
  '2026-11-10', // 52 days left
  '2026-12-01', // 31 days left
  '2026-12-15', // 17 days left, crosses the year end
  '2026-12-28',
  '2027-01-05',
  '2027-02-10',
  '2027-03-01',
  '2027-03-15',
  '2027-06-20',
];

for (const date of dates) {
  const { label, short } = getAvailability(date);
  console.log(`${date}  ${label}  |  ${short}`);
}
