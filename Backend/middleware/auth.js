const jwt = require("jsonwebtoken");

/**
 * @type {import('express').RequestHandler}
 */
const auth = async (req, res, next) => {
    try {
        const tokenHeader = req.header("Authorization");
        if (!tokenHeader)
          return res.status(401).json({ msg: "No token, access denied" });
        //Expecting "Bearer [token]"
        const split = tokenHeader.split(" ");

        if (split.length === 1) 
          return res
            .status(401)
            .json({ msg: "No token after Bearer, access denied" });

        const token = split[1]
        const idres = jwt.verify(token, process.env.JWT_SECRET); //user env var for JWT secret
        if (!idres)
          return res
            .status(401)
            .json({ msg: "Token verification failed, authorization denied" });
            
        // since the token was made out of the document id
        res.locals.userid = idres;
        next();
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = auth;
