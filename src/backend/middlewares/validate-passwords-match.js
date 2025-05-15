function validatePasswordsMatch(req, res, next) {
    const { body } = req;

    if (!body.repeat_main_pass) {
        const error = { message: "the field 'repeat_main_pass' is required" };
        return res.status(400).json(error);
    }

    if (body.repeat_main_pass === body.main_pass) return next();

    const error = { message: 'passwords not match' };
    return res.status(400).json(error);
}

export default validatePasswordsMatch;
