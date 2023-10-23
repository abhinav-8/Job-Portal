const CrudRepository = require("./crud-repository");
const { Job } = require("../models/index");
const { Op } = require("sequelize");



class JobRepository extends CrudRepository {
    constructor() {
        super(Job,"JobRepository");
    }
    async getAll(filter) {
        //Filter can be empty
        try {
          if (filter.title) {
            console.log(filter);
            const jobs = await Job.findAll({
              where: {
                title: {
                  [Op.startsWith]: filter.title,
                },
              },
            });
            return jobs;
          }
          const jobs = await Job.findAll();
          return jobs;
        } catch (error) {
          console.log("JobRepository: Something went wrong in repository layer");
          throw { error };
        }
    }
}

module.exports = JobRepository;