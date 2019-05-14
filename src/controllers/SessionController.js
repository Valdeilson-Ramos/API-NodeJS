const User = require("../models/User");

class SessionController {
    async store(req, res) {
        //Recupera email e senha do req.body
        const { email, password } = req.body;
        //Procura o usuário do email informado
        const user = await User.findOne({ email });
        // Se não encontrar, retornar erro
        if (!user) {
            return res.status(400).json({ erro: "Usuário Não Existe" });
        }
        //Valida senha
        if (!(await user.hasCompare(password))) {
            return res.status(400).json({ erro: "Senha não Confere" });
        }
        //Caso encontre o usuário e a senha esteja correta, retornará o usuário
        return res.json(user);
    }
}

module.exports = new SessionController();
