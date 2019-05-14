const mongoose = require("mongoose");
const User = mongoose.model("User");

class UserController {
    async store(req, res) {
        const { email } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).json({ error: "Usuário já existe" });
        }
        const user = await User.create(req.body);
        return res.json(user);
    }
    async list(req, res) {
        const users = await User.find();
        return res.json(users);
    }
    async delete(re, res) {
        await User.findOneAndDelete(req.params.id);
        return res.json({ message: "Usuário Excluido com Sucesso" });
    }
    async update(req, res) {
        const user = await User.findOneAndUpdate(req.params.id, req.body, {
            new: true
        });
        return res.json(user);
    }
}

module.exports = new UserController();
