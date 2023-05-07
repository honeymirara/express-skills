function isValidId(req, res, next) {
    const { id } = req.params;
    if (!id) throw new Error('You didnt pass id');
    if (isNaN(id)) throw new Error('id is not a number');

    next();
}

module.exports = { isValidId };