import prisma from '../../lib/prisma'
import Cors from 'cors'

export default async function handle(req,res){
    const {username,contact,address,recommendation} = req.body;

    const member = await prisma.member.create({
        data:{
            username,
            contact,
            address,
            recommendation,
        },
    })
    res.json(member)
}