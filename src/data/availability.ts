/**
 * AVAILABILITY LABEL — worked out from the date, so it never goes stale.
 *
 * The site is static, so the label is fixed at build time. The deploy
 * workflow rebuilds the site every day, which keeps it current.
 *
 * Rules (by calendar quarter: Q1 = Jan–Mar, Q2 = Apr–Jun, Q3 = Jul–Sep,
 * Q4 = Oct–Dec). "Days left" counts from today to the last day of the
 * quarter, both days included.
 *   60 days or more   -> "Accepting 3–4 new engagements · Q1 2027"
 *   36 to 59 days     -> "Accepting 2–3 new engagements · Q1 2027"
 *   21 to 35 days     -> "Accepting 1–2 new engagements · Q1 2027"
 *   20 days or fewer  -> "Accepting 3–4 new engagements · Q1–Q2 2027"
 *                        (the next quarter is shown too; across a year end
 *                        it reads "Q4 2026–Q1 2027")
 * The short form is always "Available for new projects".
 *
 * Dates are read in UTC, so a local check and the GitHub build agree.
 */

const DAY_MS = 24 * 60 * 60 * 1000;

export type Availability = { label: string; short: string };

export function getAvailability(date: Date | string = new Date()): Availability {
  const d = new Date(date);
  const year = d.getUTCFullYear();
  const quarter = Math.floor(d.getUTCMonth() / 3) + 1; // 1 to 4

  // Today at 00:00 UTC, so only the calendar date counts.
  const today = Date.UTC(year, d.getUTCMonth(), d.getUTCDate());
  // Day 0 of the month after the quarter = the quarter's last day.
  const lastDay = Date.UTC(year, quarter * 3, 0);
  const daysLeft = Math.round((lastDay - today) / DAY_MS) + 1;

  let label: string;
  if (daysLeft <= 20) {
    const period =
      quarter === 4
        ? `Q4 ${year}–Q1 ${year + 1}`
        : `Q${quarter}–Q${quarter + 1} ${year}`;
    label = `Accepting 3–4 new engagements · ${period}`;
  } else if (daysLeft <= 35) {
    label = `Accepting 1–2 new engagements · Q${quarter} ${year}`;
  } else if (daysLeft <= 59) {
    label = `Accepting 2–3 new engagements · Q${quarter} ${year}`;
  } else {
    label = `Accepting 3–4 new engagements · Q${quarter} ${year}`;
  }

  return { label, short: 'Available for new projects' };
}
