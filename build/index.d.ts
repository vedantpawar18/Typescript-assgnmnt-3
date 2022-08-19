interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
declare let obj1: User;
declare const printPerson: ({ type }: User) => void;
