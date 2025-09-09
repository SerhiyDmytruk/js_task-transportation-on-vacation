/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const ussualCost = 40;
  const more7Days = 50;
  const specialCost = 20;

  if (days < 3) {
    return days * ussualCost;
  }

  if (days >= 3 && days < 7) {
    return days * ussualCost - specialCost;
  }

  if (days >= 7) {
    return days * ussualCost - more7Days;
  }
}

module.exports = calculateRentalCost;
