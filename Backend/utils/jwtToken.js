export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options= {
        expires: '1h',
        httpOnly: true,
    };
    res.status(statusCode).cookie("token",token,options).json({
        success: true,
        user,
        message,
        token,
    });
};