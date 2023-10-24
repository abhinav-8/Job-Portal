const { ApplicationRepository } = require("../repositories/index");
const appRepository = new ApplicationRepository();

class ApplicationService {

    async create(data) {
        try {
            const userId = data.userId;
            const jobId = data.jobId;
            if(this.alreadyApplied(userId,jobId)){
                throw ('Already Applied to this job');
            }
            const response = await appRepository.create(data);
            return response;
        } catch (error) {
            console.log(`ApplicationService : Something went wrong in service layer`);
            throw {error};
        }
    }

    async alreadyApplied(userId,jobId) {
        try {
            const response = await appRepository.alreadyApplied(userId,jobId);
            return response;
        } catch (error) {
            console.log(`ApplicationService : Something went wrong in service layer`);
            throw {error};
        }
    }

    async get(id) {
        try {
            const response = await appRepository.get(id);
            return response;
        } catch (error) {
            console.log(`ApplicationService : Something went wrong in service layer`);
            throw {error};
        }
    }

    async getAll() {
        try {
            const response = await appRepository.getAll();
            return response;
        } catch (error) {
            console.log(`ApplicationService : Something went wrong in service layer`);
            throw {error};
        }
    }

    async destroy(id) {
        try {
            const response = await appRepository.destroy(id);
            return response;
        } catch (error) {
            console.log(`ApplicationService : Something went wrong in service layer`);
            throw {error};
        }
    }
}

module.exports = ApplicationService;