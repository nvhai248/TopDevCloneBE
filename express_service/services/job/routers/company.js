const express = require(`express`);
const auth = require('../middlewares/auth');
const { CompanyTransport } = require('../transports');
const companyRouter = express.Router();
const transport = new CompanyTransport();

companyRouter.get('/filter', auth, transport.filterCompany);
companyRouter.get('/search', auth, transport.filterCompanyWithSharding);
companyRouter.get('/find/:id', auth, transport.findCompanyByIdWithSharding);
companyRouter.get('/:id', auth, transport.findCompanyById);
companyRouter.get('/:id/jobs', auth, transport.listJobsByCompanyId);
companyRouter.post('/create', auth, transport.createCompanyWithSharding);
companyRouter.post('/', auth, transport.createCompany);
companyRouter.patch('/:id', auth, transport.updateCompany);
companyRouter.post('/:id/product', auth, transport.createProduct);
companyRouter.get('/home/slider', auth, transport.listCompanySlider);

module.exports = companyRouter;
