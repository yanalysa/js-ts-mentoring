import {User} from "../model/user";

function updateUser (user: User, name: string, age: number){
    user.age = age;
    user.name = name;
};