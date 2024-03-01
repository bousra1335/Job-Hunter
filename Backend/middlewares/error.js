class ErrorHandler extends Error{
    constructor(message, statusbar){
        super(message);
        this.statusbar = statusCode;
    
    }
}

export const errorMiddleware = (err,req,res,next) => {
    err.message = err.message || "Internal server error";
    err.statusCode = err.statusCode || 500;

    if(err.name == "CaseError"){
        const message = 'Resource not found. Invalid ${err.path}';
        err = new ErrorHandler(message,400);

    }

    if(err.code == 11000){
        const message = 'Duplicate ${Object.keys(err.keyValue)} Entered';
        err = new ErrorHandler(message,400);
        
    }

    if(err.name == "JsonWebTokenError"){
        const message = 'Json web token is Invalid, Try again';
        err = new ErrorHandler(message,400);
        
    }

    if(err.name == "Token ExpiredError"){
        const message = 'Json web token is expired. Try again';
        err = new ErrorHandler(message,400);
        
    }
    return res.status(statusCode).json({
        success: false,
        message: err.message,
    });
};