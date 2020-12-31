import { FirebaseType, Timestamp } from "./firebaseTypes";

export interface ImageScan_t {
	createdAt: number;
	clarifaiData: any[];
	fileName: string;
	imageURL: string;
    userId: string;
    
    id : string | undefined;
}
export type ImageScan_t_F = FirebaseType<ImageScan_t>;






export class ImageScan 
{
    constructor(opts : ImageScan_t) 
    {
        return Object.assign(this, opts);
    }
    static fromFirebase = (doc : ImageScan_t_F, id ?: string) => {
        const createdAt = doc.createdAt.toMillis();
        const obj = { ...doc, createdAt, id};
        return obj
    }
    static toFirebase = (scan : ImageScan_t) =>
    {
        const {id, ...firebaseDoc} = {...scan};
        return firebaseDoc
    }
}

export interface ImageScan extends ImageScan_t {};