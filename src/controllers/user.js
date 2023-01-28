const userModel = require('../models/user');

const createUser = async(req, res) => {
    try {
        const user = await userModel.create(req.body);
        console.log(user);
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
};

const listUser = async(req, res) => {
    try {
        const users = await userModel.find();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error);
    }
}

const deleteUser = async(req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        await user.delete();
        return res.status(200).send({
            user,
            message: 'user deleted'
        });

    } catch (error) {
        return res.status(400).send({
            message: 'User not found'
        });
    }
}

const updateUser = async(req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        await user.update(req.body);
        const updatedUser = await userModel.findById(user.id);

        return res.status(200).send({
            message: 'user updated',
            user: updatedUser
        });
    } catch (error) {
        return res.status(400).send({
            message: 'user not found'
        });
    }
}

const readUser = async(req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = {
    createUser,
    listUser,
    deleteUser,
    updateUser,
    readUser
}