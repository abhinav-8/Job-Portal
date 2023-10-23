const CrudRepository = require("./crud-repository");
const { Company } = require("../models/index");

class CompanyRepository extends CrudRepository {
    constructor() {
        super(Company,"CompanyRepository");
    }}

module.exports = CompanyRepository;