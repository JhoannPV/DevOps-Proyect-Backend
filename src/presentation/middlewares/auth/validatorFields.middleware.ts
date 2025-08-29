import { Request, Response, NextFunction } from "express";
import { check } from "express-validator";



export class ValidatorFieldsMiddleware {
    static validateFieldsRegister = async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all([
            check('name', 'Name is required').not().isEmpty().run(req),
            check('email', 'Email is required').not().isEmpty().run(req),
            check('email', 'Email is not valid').isEmail().run(req),
            check('password', 'Password is required').not().isEmpty().run(req),
            check('password', 'Password must be at least 6 characters').isLength({ min: 6 }).run(req),
        ]);
        next();
    }

    static validateFieldsLogin = async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all([
            check('email', 'Email is required').not().isEmpty().run(req),
            check('email', 'Email is not valid').isEmail().run(req),
            check('password', 'Password is required').not().isEmpty().run(req),
            check('password', 'Password must be at least 6 characters').isLength({ min: 6 }).run(req),
        ]);
        next();
    }

}