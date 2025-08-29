import { AuthRepository, CustomError, RegisterUserDto, SignToken, Token, UserToken } from "../..";
import { JwtAdapter } from "../../../config";
import { RenewTokenUserDto } from '../../dtos/auth/renew-token-user.dto';

interface RenewUseCase {
    execute(renewTokenUserDto: RenewTokenUserDto): Promise<Token>;
}

export class RenewToken implements RenewUseCase {
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly signToken: SignToken = JwtAdapter.generateToken,
    ) { }

    async execute(renewTokenUserDto: RenewTokenUserDto): Promise<Token> {
        //Verificar que el refresh token sea valido
        const user = await this.authRepository.renewToken(renewTokenUserDto);

        //Token
        const expiredToken: number = 60 * 60 * 2; // 2 horas
        const token = await this.signToken({ id: user.id }, expiredToken);
        if (!token) throw CustomError.internalServer('Error generating token');

        return {
            token: token,
        }
    }

}