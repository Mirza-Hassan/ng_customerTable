import { Adress } from "./adress";

export interface Customer{
    id: number;
    firstname: string;
    lastname: string;
    birthday: Date | any;
    picture: string;
    email: string;
    adress: Adress;

}