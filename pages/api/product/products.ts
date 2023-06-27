import connectDB from 'DB/connectDB';
import type { NextApiRequest, NextApiResponse } from 'next';
import Product from 'model/Product';


export default async (_req: NextApiRequest, res: NextApiResponse) => {
    await connectDB();
    try {
        const getData = await Product.find({}).populate('productCategory', ' categoryName categorySlug _id')
        if (getData) {
            res.json({ success: true, data: getData });
        } else {
            res.json({ status: 204, success: false, message: 'Nenhum produto encontrado.' });
        }

    } catch (error) {
        console.log('Error in getting all products:', error);
        res.json({ status: 500, success: false, message: 'Algo deu errado. Por favor, tente novamente!' });
    }
}
