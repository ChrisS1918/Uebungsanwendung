export class UpdateAdresseDto {
    constructor(
        public readonly id: string,
        public readonly plz: string,
        public readonly straße: string,
        public readonly ort: string,
        public readonly nummer: string | null = null
    ) { }
}
