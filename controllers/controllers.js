const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello Daniel and zlil from the server!'
    });
};

module.exports.saySomething = saySomething;