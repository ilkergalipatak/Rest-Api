const customErrorHandler=(err,req,res,next)=>{
    res
    .status(400)
    .json({
        code:err.code,
        message:err
    });
}
module.exports=customErrorHandler;