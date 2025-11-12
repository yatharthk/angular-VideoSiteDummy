export class Video {
    constructor(
        public name: string,
        public slug: string,
        public embed: string,
        public image?: string,
        public featured?: boolean
    ) {
        if (typeof name !== 'string' || typeof slug !== 'string' || typeof embed !== 'string') {
            throw new TypeError('Invalid type for Video properties');
        }
        if (image !== undefined && typeof image !== 'string') {
            throw new TypeError('Invalid type for image');
        }
        if (featured !== undefined && typeof featured !== 'boolean') {
            throw new TypeError('Invalid type for featured');
        }
    }
}