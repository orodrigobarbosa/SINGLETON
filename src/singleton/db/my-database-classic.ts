import { User } from "../interface/user";

export class MyDatabaseClassic {

    private static instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() { }


    static getInstance(): MyDatabaseClassic {
        if (MyDatabaseClassic.instance === null) {
            MyDatabaseClassic.instance = new MyDatabaseClassic();

        }
        return MyDatabaseClassic.instance;
    }
    add(user: User): void {
        this.users.push(user)
    }


    //criar a funcao para deletar um usuario



    show(): void {
        for (const user of this.users) {
            console.log(user)
        }
    }



}