import Show from '../models/Show.js'

class ShowService{
    async create (show) {
        const createdShow = await Show.create(show);
        return createdShow;
    }
    async getOne(id){
        if (!id) {
            throw new Error('Id не указан.')
        }
        const post = await Show.findById(id);
        return post;
    }
}
export default new ShowService;