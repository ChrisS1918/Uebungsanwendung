export class CreateAdresseDto {
    constructor(
        public readonly ort: string,
        public readonly plz: string,
        public readonly straße: string,
        public readonly nummer: string | null = null
    ) { }
}
