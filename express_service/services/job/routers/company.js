const express = require(`express`);
const auth = require('../middlewares/auth');
const { CompanyTransport } = require('../transports');
const companyRouter = express.Router();
const transport = new CompanyTransport();

companyRouter.patch('/update-status', auth(['admin']), transport.updateStatusCompany);
companyRouter.get('/homepage', transport.homepage);
companyRouter.get('/listByType', transport.getListByType);
companyRouter.patch('/:id/followed', transport.follow);
companyRouter.post('/create', transport.createCompanyWithSharding);
companyRouter.get('/search', transport.filterCompanyWithSharding);
companyRouter.get('/find/:id', transport.findCompanyByIdWithSharding);
companyRouter.get('/filter', transport.filterCompany);
companyRouter.get('/info', auth(['employer']), transport.getInfoCompany);
companyRouter.get('/:id', transport.findCompanyById);
companyRouter.get('/:id/jobs', transport.listJobsByCompanyId);
companyRouter.post('/', auth(['employer', 'admin']), transport.createCompany);
companyRouter.patch('/update', auth(['employer']), transport.updateCompany);
companyRouter.get('/home/slider', transport.listCompanySlider);

module.exports = companyRouter;
