import {User} from './User';

User.create({
    firstName: 'John',
    lastName: 'Doe',
    birthday: '1980-08-01'
});

const users = async () => await User.findAll();
console.log(users);