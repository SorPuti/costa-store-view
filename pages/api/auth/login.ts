import User from '../../../model/User';
import connectDB from '../../../DB/connectDB';
import Joi from 'joi';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';


const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});




export default async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB();

    const { email, password } = req.body;
    
    const { error } = schema.validate({ email, password });

    if (error) res.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

    try {
        const checkUser = await User.findOne({ email });
        if (!checkUser) res.json({ success: false, message: "Conta não encontrada" });

        const isMatch = await compare(password, checkUser.password);
        if (!isMatch) res.json({ success: false, message: "Senha incorreta" });

        const token = jwt.sign({ id: checkUser._id, email: checkUser.email, role: checkUser?.role }, process.env.JWT_SECREAT ?? 'default_secret_dumbScret', { expiresIn: '1d' });

        const finalData = { token, user: { email: checkUser.email, name: checkUser.name, _id: checkUser._id, role: checkUser?.role } }
        res.json({ success: true, message: "Login bem-sucedido", finalData })

    } catch (error) {
        console.log(`Error in register (server) => ${error}`);
        res.json({ success: false, message: "Algo deu errado Tente novamente mais tarde!" })
    }
}
