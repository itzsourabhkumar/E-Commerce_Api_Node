const productCreateValidator = (req,res,next)=> {
    if(!req.body.name || !req.body.cost) {
        return res.status(400).json({
            message: 'Invalid request body',
            success: false,
            data: {},
            err: 'Either name or cost is missing from the request object'
        });
    }
    next(); 
}

const productUpdateValidater = (req,res,next)=> {
    if(!req.body.name || !req.body.description || !req.body.cost) {
        return res.status(400).json({
            message: 'Invalid request body',
            success: false,
            data: {},
            err: 'Either name, description or cost is missing from the request object'
        });
    }
    next();
}

const productPatchValidator = (req,res,next) => {
    if(!(req.body.name || req.body.description || req.body.cost)) {
        return res.status(400).json({
            message: 'Invalid request body',
            success: false,
            data: {},
            err: 'At least one parameter among cost, name and description is expected'     
        })
    }
    next();
}

module.exports = {
    productCreateValidator ,
    productUpdateValidater ,
    productPatchValidator 
}