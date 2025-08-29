import { AuthDatasource, AuthRepository, RegisterUserDto, UserEntity, LoginUserDto } from "../../domain";
import { RenewTokenUserDto } from '../../domain/dtos/auth/renew-token-user.dto';

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private readonly authDatasource: AuthDatasource,
    ) { }

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDatasource.register(registerUserDto);
    }

    login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.authDatasource.login(loginUserDto);
    }
    renewToken(renewTokenUserDto: RenewTokenUserDto): Promise<UserEntity> {
        return this.authDatasource.renewToken(renewTokenUserDto);
    }

}