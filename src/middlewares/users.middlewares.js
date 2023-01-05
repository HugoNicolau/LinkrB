export async function getUserByIdValidate ( req, res, next ) {
    const {id} = req.params;

    if (!id) {
        return res.status(401).send('The id is required');
    }

    const { error } = idSchema.validate({ id });
    if (error) {
        return res.status(422).send(error.details.map(e => e.message));
    }

    const validId = await db.query(`SELECT * FROM users WHERE id = $1;`, [id]);
    if (!validId.rows[0]?.id) {
        return res.status(401).send('This id is invalid');
    }

    res.locals.params = {user: validId.rows[0]};
    next()
};

export async function supportUserValidate ( req, res, next ) {
    res.locals.body = {};
    next()
};

export async function getMyProfileValidate ( req, res, next ) {
    res.locals.body = {};
    next()
};

export async function updateMyProfileValidate ( req, res, next ) {
    res.locals.body = {};
    next()
};

export async function getMySupportValidate ( req, res, next ) {
    res.locals.body = {};
    next()
};