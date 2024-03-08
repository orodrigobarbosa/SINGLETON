//criando database com js

import { User } from "../interface/user";

const users: User[]= [];


export class MyDatabaseClassic {

add(user: User): void {
    users.push(user)
}

show(): void{
    for(const user of users){
        console.log(user)
    }
}



}