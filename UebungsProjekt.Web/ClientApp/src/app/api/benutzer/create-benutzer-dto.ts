export class CreateBenutzerDto {
    constructor(
    public readonly vorname: string,
    public readonly nachname: string,
    public readonly email: string | null = null
    ) {}
}
