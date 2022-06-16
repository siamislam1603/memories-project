import jwt from 'jsonwebtoken';

const auth=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(' ')[1];
        const isCustomAuth=token.length<500;
        let decodedData;
        if(isCustomAuth){
            decodedData=jwt.verify(token,'test');
            req.userId=decodedData?.id;
        }
        else{
            decodedData=jwt.decode(token);
            req.userId=decodedData?.sub;
        }
        if(!req.userId) return res.status(404).json({message:'Unauthenticated'});
        next();
    } catch (error) {
        console.log(error);
    }
}
export default auth;