/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  const sum = energy.reduce((sum, e) => sum + e, 0);
  let reqEnergy = Math.max(sum - initialEnergy + 1, 0);
  let reqExperience = Math.max(experience[0] - initialExperience + 1, 0);
  let currExperience = initialExperience + experience[0] + reqExperience;

  for (let i = 1; i < energy.length; i++) {
    if (currExperience <= experience[i]) {
      const req = experience[i] - currExperience + 1;
      reqExperience += req;
      currExperience += req;
    }
    currExperience += experience[i];
  }

  return reqEnergy + reqExperience;
};
