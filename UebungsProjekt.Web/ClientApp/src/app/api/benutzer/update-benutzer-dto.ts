export class UpdateBenutzerDto {
    constructor(
    public readonly id: string,
    public readonly vorname: string,
    public readonly nachname: string,
    public readonly email: string | null = null
    ) {}
}
