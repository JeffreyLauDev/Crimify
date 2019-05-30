const User = require("../models").User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JwtSecret = "n10050256"
module.exports = {

    register(req, res) {
        if (req.body.email === undefined || req.body.password === undefined) {
            return res.status(400).send({
                message: "error creating new user - you need to supply both an email and password"
            })
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if (user) {
                    return res.status(400).send({
                        message: "oops! It looks like that user already exists :("
                    });
                }
                bcrypt.hash(req.body.password, 1).then(pass => {
                    return User.create({
                        email: req.body.email,
                        password: pass,
                    })
                        .then(user => res.status(201).send({
                            message: "yay! you've successfully registered your user account :)"
                        }))
                        .catch(error => res.status(400).send(error));
                });


            })


    },

    login(req, res) {
        if (req.body.email === undefined || req.body.password === undefined) {
            return res.status(401).send({
                message: "invalid login - you need to supply both an email and password"
            })
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        message: "invalid login - bad password"
                    });
                }
                bcrypt.compare(req.body.password, user.password).then(response => {
                    if (response !== true) {
                        return res.status(401).send({
                            message: "invalid login - bad password"
                        })
                    }
                    const expiresIn = 86400
                    const token = jwt.sign({
                        user: {
                            id: user.id,
                            email: user.email
                        }
                    }, JwtSecret, {
                            expiresIn: expiresIn
                        });
                    return res.status(200).send({
                        token: token,
                        access_token: token,
                        token_type: "Bearer",
                        expires_in: 86400
                    })
                });


            })
            .catch(err => {
                return res.status(401).send({
                    "message": "oh no! It looks like there was a database error while creating your user, give it another try..."
                })
            })


    },
    jwtCheck(req, res, next) {
        var token = req.headers.authorization !== undefined ? req.headers.authorization.replace("Bearer ", "") : ""
        jwt.verify(token, JwtSecret, function (err, decoded) {
            if (err) {
                return res.status(401).send({
                    message: "oh no! it looks like your authorization token is invalid..."
                })
            }
            else {
                next()
            }
        })

    }
}