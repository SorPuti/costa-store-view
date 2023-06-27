import User from '../../../model/User';
import connectDB from '../../../DB/connectDB';
import Joi from 'joi';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';


const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
});


export async function POST (req : Request)  {
    await connectDB();

    const { email, password} = await req.json();
    const { error } = schema.validate({ email, password });

    if (error) return NextResponse.json({ success: false, message: error.details[0].message.replace(/['"]+/g, '') });
    if(email === 'mrmoiz.dev@gmail.com') return  NextResponse.json({ success: true, message: "Senha atualizada com sucesso"  });

    try {
        const ifExist = await User.findOne({ email });
        if(ifExist?.role === 'admin') return   NextResponse.json({ success: true, message: "Senha atualizada com sucesso"  });
        if(!ifExist) return NextResponse.json({ success: false, message: "Email Not Found" });
        const hashedPassword = await hash(password, 12)
        const updatePassword =  await User.findOneAndUpdate({email  , password : hashedPassword });
        console.log(`updatePassword: ${updatePassword}`);
        return NextResponse.json({ success: true, message: "Senha atualizada com sucesso"  });
        
    } catch (error) {
        console.log(`Error in register (server) => ${error}`);
        return NextResponse.json({ success: false, message: "Algo deu errado Tente novamente mais tarde!" })
    }
}

