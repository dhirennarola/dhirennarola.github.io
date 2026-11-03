/**
 * Call hours for the /book/ page: Monday to Saturday, 10:00 to 19:00 IST.
 * The other cities are worked out for the given day, so summer time in
 * London and Sydney is always right (IST itself never changes).
 */
export const callHours = { days: 'Monday to Saturday', start: '10:00', end: '19:00' };

export const callCities = [
  { name: 'Dubai', zone: 'Asia/Dubai' },
  { name: 'London', zone: 'Europe/London' },
  { name: 'Sydney', zone: 'Australia/Sydney' },
];

/** IST is UTC+5:30 all year. */
const istToUtc = (day: Date, hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return new Date(
    Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), h - 5, m - 30)
  );
};

const clock = (at: Date, zone: string) =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(at);

/** e.g. "Dubai 08:30 to 17:30 · London 04:30 to 13:30 · Sydney 15:30 to 00:30" */
export const otherCityHours = (day = new Date()) => {
  const from = istToUtc(day, callHours.start);
  const to = istToUtc(day, callHours.end);
  return callCities
    .map((c) => `${c.name} ${clock(from, c.zone)} to ${clock(to, c.zone)}`)
    .join(' · ');
};
