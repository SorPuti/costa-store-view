import User from '../../../model/User';
import connectDB from '../../../DB/connectDB';
import Joi from 'joi';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';


const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().required()
});


export async function POST(req: Request) {
    await connectDB();



    const { email, password, name } = await req.json();
    const { error } = schema.validate({ email, password, name });

    if (error) return NextResponse.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });

    try {
        const ifExist = await User.findOne({ email });

        if (ifExist)
            return NextResponse.json({ success: false, message: "O utilizador já existe" });
        else {
            const hashedPassword = await hash(password, 12)
            const createUser = await User.create({ email, name, password: hashedPassword, role: 'user' });
            if (createUser) return NextResponse.json({ success: true, message: "Conta criada com sucesso" });
        }
    } catch (error) {
        console.log(`Error in register (server) => ${error}`);
        return NextResponse.json({ success: false, message: "Algo deu errado Tente novamente mais tarde!" })
    } finally {
        return NextResponse.json({ success: false, message: "Algo deu errado Tente novamente mais tarde!" })
    }
}
