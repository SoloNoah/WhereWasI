const { check, validationResult } = require('express-validator');

const validateUser = [
  [
    check('email').trim().normalizeEmail().isEmail().bail().withMessage('Enter a valid email'),
    check('password').trim().not().isEmpty().bail().withMessage('Password cannot be empty!').isLength({ min: 6 }).withMessage('must be at least 6 chars long').bail(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
    next();
  },
];

module.exports = { validateUser };
