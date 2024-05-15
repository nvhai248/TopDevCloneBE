const { Company1, Company2, Company3 } = require('../models/companySharding');

function getShard(companyName) {
  // get first letter of company name
  const shardLetter = companyName.charAt(0).toLowerCase();

  if (/[a-h]/.test(shardLetter)) return Company1; // [A-H] [a-h]
  else if (/[i-p]/.test(shardLetter)) return Company2; // [I-P] [i-p]
  else return Company3;
}

module.exports = { getShard };
