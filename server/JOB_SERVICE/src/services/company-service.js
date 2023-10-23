const CrudService = require("./crud-service");
const { CompanyRepository } = require("../repositories/index");

class CompanyService extends CrudService {
    constructor() {
        const companyRepository = new CompanyRepository();
        super(companyRepository,"CompanyService");
    }
}

module.exports = CompanyService;