const express = require(`express`);
const auth = require('../middlewares/auth');
const { JobTransport } = require('../transports');
const jobRouter = express.Router();
const transport = new JobTransport();

jobRouter.patch('/:id/followed', transport.follow);
jobRouter.patch('/update-status', transport.updateStatus);
jobRouter.get('/', transport.listJobByConditions);
jobRouter.get('/:id', transport.findJob);
jobRouter.patch('/:id', transport.updateJob);
jobRouter.post('/', transport.createJob);
jobRouter.get('/admin/all', auth('admin'), transport.listAllJob);

module.exports = jobRouter;
