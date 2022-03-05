const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');



const register = (req, res) => {
    const hashedPassword = bcrypt.hash(req.body.password, 8);
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    // sendEmail(req, res);
    newUser.save((err, user) => {
        if (err) throw err;
        res.json({
            success: true,
            msg: 'User registered'
        });
    });
}

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({
        username: username
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            console.log(isMatch);
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
                    expiresIn: '1h'
                });
                req.user = user;
                res.json({
                    success: true,
                    username: username,
                    password:password,
                    token: token
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Wrong password'
                });
            }
        });
    });
}



// check user info
const checkUser = (req, res) => {
    const user = (req.user) ? req.user : null;
    res.json({
        user: user
    });
}


module.exports = {
    register,
    login,
    checkUser
}