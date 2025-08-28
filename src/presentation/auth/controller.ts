import { Request, Response } from 'express';
import { AuthRepository, CustomError, LoginUser, LoginUserDto, RegisterUser, RegisterUserDto } from '../../domain';
import { UserModel } from '../../data/mongodb';

export class AuthController {


    constructor(
        private readonly authRepository: AuthRepository,
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    };

    registerUser = (req: Request, res: Response) => {
        const registerUserDto = RegisterUserDto.create(req.body);

        res.status(201).json({ body: registerUserDto });

        new RegisterUser(this.authRepository).execute(registerUserDto!)
            .then(data => res.status(201).json(data))
            .catch(error => this.handleError(error, res));
    }

    loginUser = (req: Request, res: Response) => {
        const loginUserDto = LoginUserDto.create(req.body);

        new LoginUser(this.authRepository).execute(loginUserDto!)
            .then(data => res.status(201).json(data))
            .catch(error => this.handleError(error, res));
    }

    renewUser = (req: Request, res: Response) => {
        res.json({ ok: true, msg: 'renew' });
    }
}