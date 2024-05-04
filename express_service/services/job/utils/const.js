const DBTypeJob = 'job';
const DBTypeCompany = 'company';
const DBTypeUser = 'user';

const CPN_STATUS_PENDING = 0;
const CPN_STATUS_DELETED = -1;
const CPN_STATUS_ACTIVE = 1;

const JOB_STATUS = {
  PENDING: 'PENDING',
  HIDE: 'HIDE',
  PUBLIC: 'PUBLIC',
  DELETED: 'DELETED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
};

const JOB_TYPE = {
  IN_OFFICE: 'IN_OFFICE',
  HYBRID: 'HYBRID',
  REMOTE: 'REMOTE',
  OVERSEA: 'OVERSEA',
};

const CONTRACT_TYPE = {
  FULLTIME: 'FULLTIME',
  FREELANCE: 'FREELANCE',
  PARTIME: 'PARTIME',
};

const SALARY_TYPE = {
  FROM: 'FROM',
  TO: 'TO',
  RANGE: 'RANGE',
  NEGOTIATE: 'NEGOTIATE',
};

const CURRENCY = {
  VND: 'VND',
  USD: 'USD',
};

module.exports = {
  DBTypeJob,
  DBTypeCompany,
  DBTypeUser,
  CPN_STATUS_ACTIVE,
  CPN_STATUS_DELETED,
  CPN_STATUS_PENDING,
  JOB_STATUS,
  JOB_TYPE,
  CONTRACT_TYPE,
  SALARY_TYPE,
};
