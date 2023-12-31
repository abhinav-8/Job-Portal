const { Application } = require("../models/index");

class ApplicationRepository {
    
    async create(data) {
        try {
            const result = await Application.create(data);
            return result;
        } catch (error) {
            console.log(`ApplicationRepository : Something went wrong in repository layer`);
            throw {error};
        }
    }

    async get(applicationId) {
        try {
            const result  = await Application.findByPk(applicationId);
            return result;
        } catch (error) {
            console.log(`ApplicationRepository : Something went wrong in repository layer`);
            throw {error};
        }
    }

    async getAll() {
        try {
            const result = await Application.findAll();
            return result;
        } catch (error) {
            console.log(`ApplicationRepository : Something went wrong in repository layer`);
            throw {error};
        }
    }

    async alreadyApplied(userId,jobId){
        try {
            const result = await Application.findOne({
                where: {
                    jobId:jobId,
                    userId:userId
                }   
            });
            if(result) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(`ApplicationRepository : Something went wrong in repository layer`);
            throw {error};
        }
    }

    async destroy(applicationId) {
        try {
            await Application.destroy({
                where: {
                  id: applicationId,
                },
              });
              return true;
        } catch (error) {
            console.log(`ApplicationRepository : Something went wrong in repository layer`);
            throw {error};
        }
    }
}

module.exports = ApplicationRepository;