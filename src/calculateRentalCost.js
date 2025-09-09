/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const DAILY_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  const MID_TERM_DAYS = 3;
  const LONG_TERM_DAYS = 7;

  const basePrice = days * DAILY_RATE

  if (days < MID_TERM_DAYS) return basePrice;
  if (days >= MID_TERM_DAYS && days < LONG_TERM_DAYS) return basePrice - MID_TERM_DISCOUNT;
  if (days >= LONG_TERM_DAYS) return basePrice - LONG_TERM_DISCOUNT;

  return basePrice;
}

module.exports = calculateRentalCost;
