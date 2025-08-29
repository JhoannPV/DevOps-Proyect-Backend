export class RenewTokenUserDto {
    constructor(
        public id: string,
    ) { }

    static create(object: { [key: string]: any }): RenewTokenUserDto {
        const { id } = object;

        return new RenewTokenUserDto(id);
    }
}