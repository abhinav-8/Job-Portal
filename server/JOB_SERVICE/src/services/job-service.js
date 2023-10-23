const CrudService = require("./crud-service");
const { JobRepository } = require("../repositories/index");

class JobService extends CrudService {
    constructor() {
        const jobRepository = new JobRepository();
        super(jobRepository,"JobService");
    }
}
module.exports = JobService;