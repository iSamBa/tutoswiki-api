export default function makeUsersDb({ userModel }) {
    return Object.freeze({
        findAll,
        findById,
        insert,
        remove,
        update,
        register
    })

    async function insert(userInfo) {
        const userInstance = new userModel(userInfo);
        return await userInstance.save();
    }

    async function findAll() {
        return await userModel.find({});
    }

    async function findById(id) {
        const query = { _id: id }
        return await userModel.findOne(query);
    }

    async function remove(id) {
        const query = { _id: id }
        return await userModel.deleteOne(query);
    }

    async function update(id, { ...newData }) {
        const query = { _id: id }
        return await userModel.findOneAndUpdate(query, { ...newData }, {
            returnOriginal: false
        })
    }

    async function register(userInfo){
        const userInstance = new userModel(userInfo);
        return await userModel.register(userInstance, userInstance.password,(err)=>{
            if(err) {
                console.log(err);
            }
        });

    }
}