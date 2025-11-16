export class Video{
    constructor(
        public name: string,
        public slug: string,
        public embed: string,
        public image?: string,
        public featured?: boolean
    ){}
}