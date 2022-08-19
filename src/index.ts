interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

let obj1: User={
    type: 'user',
    name: "string",
    age: 12,
    occupation: "string"
}


const printPerson = ({type}:User) =>{
    console.log(type)
}

printPerson(obj1)