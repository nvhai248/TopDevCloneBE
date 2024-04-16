const express = require(`express`);
const auth = require('../middlewares/auth');
const { CompanyTransport } = require('../transports');
const multer = require('../middlewares/multer');
const companyRouter = express.Router();
const transport = new CompanyTransport();

companyRouter.get('/:id', auth, transport.findCompanyById);
companyRouter.get('/:id/jobs', auth, transport.listJobsByCompanyId);
companyRouter.post('/', auth, multer.single('image'), transport.createCompany);

module.exports = companyRouter;
