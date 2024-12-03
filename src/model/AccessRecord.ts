import { User } from "./User";

export type AccessRecord = {
    id : number, 
    user : string,
    building: string,
    status: boolean,
    time: string
}