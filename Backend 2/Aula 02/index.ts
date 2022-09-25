import { User } from './User';

async function main() {
    await User.sync();

    // await User.create({
    //     firstName: 'Luciano',
    //     lastName: 'Gomes',
    //     birthday: '1999-07-21'
    // });

    // await User.create({
    //     firstName: 'Yuri',
    //     lastName: 'Kerber',
    //     birthday: '1999-05-08'
    // });

    // await User.create({
    //     firstName: 'Mariana',
    //     lastName: 'Rocha',
    //     birthday: '1994-07-12'
    // });

    const users = await User.findAll();
    console.log(JSON.stringify(users, null, 2));
}

main();