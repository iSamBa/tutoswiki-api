export default function makePostsDb({ postModel }) {
    return Object.freeze({
        findAll,
        findById,
        insert,
        remove,
        update
    })

    async function findAll({ publishedOnly = true } = {}) {
        const query = publishedOnly ? { published: true } : {}
        return await postModel.find(query);
    }

    async function insert(postInfo) {
        const postInstance = postModel(postInfo);
        return await postInstance.save();
    }

    async function findById(id) {
        const query = { _id: id }
        return await postModel.findOne(query);
    }

    async function remove(id) {
        const query = { _id: id }
        return await postModel.deleteOne(query);
    }

    async function update(id, { ...newData }) {
        const query = { _id: id }
        return await postModel.findOneAndUpdate(query, { ...newData })
    }
}