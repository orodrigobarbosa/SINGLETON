//criando database com js

import { User } from "../interface/user";

const users: User[] = [];


function MyDatabaseFunction =(function() {
    return {


       add(user: User): void {
            users.push(user)
        },

        show(): void {
            for (const user of users) {
                console.log(user)
            }
        }
    }


})