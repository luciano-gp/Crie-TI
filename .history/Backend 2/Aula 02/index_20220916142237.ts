import { User } from './User';

async function main() {
    // await User.sync();

    // await User.create({
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     birthday: '1980-08-01'
    // });

    const users = await User.findAll();
    console.log(JSON.stringify(users, null, 2));
}

main();