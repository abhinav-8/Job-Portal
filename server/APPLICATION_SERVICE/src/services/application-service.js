const { ApplicationRepository } = require("../repositories/index");

class ApplicationService {

    async create(data) {
        try {
            const response = await ApplicationRepository.create(data);
            return response;
        } catch (error) {
            console.log(`ApplicationService : Something went wrong in service layer`);
            throw {error};
        }
    }

    async get(id) {
        try {
            const response = await ApplicationRepository.get(id);
            return response;
        } catch (error) {
            console.log(`ApplicationService : Something went wrong in service layer`);
            throw {error};
        }
    }

    async getAll() {
        try {
            const response = await ApplicationRepository.getAll();
            return response;
        } catch (error) {
            console.log(`ApplicationService : Something went wrong in service layer`);
            throw {error};
        }
    }

    async destroy(id) {
        try {
            const response = await ApplicationRepository.destroy(id);
            return response;
        } catch (error) {
            console.log(`ApplicationService : Something went wrong in service layer`);
            throw {error};
        }
    }
}

module.exports = ApplicationService;