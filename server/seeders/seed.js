const db = require ('../config/connection');
const { User, Pet } = require ('../models');
const cleanDB = require ('../config/cleanDB');

db.once('open', async () => {
    await cleanDB ('User','users');
    await cleanDB ('Pet','pets');

    const pets = await Pet.insertMany([
    {
        name: 'Leia',
        type: 'Dog',
        isClean: '1'
    },
    {
        name: 'Bruno',
        type: 'Cat',
        isClean: '1'
    },
    {
        name: 'Bubba',
        type: 'Dog',
        isclean: '1'
    },
    {
        name: 'Tom',
        type: 'Cat',
        isClean: '1'
    }
]);

console.info('pets seeded')

await User.create({
    userName: 'HorusLupercal',
    email:'HeresyisRad@testmail.com',
    password: 'password12345',
    pets: [
        {
            pets: [pets[0]._id]
        }
    ]
});
await User.create({
    userName: 'ConradCurze',
    email:'notAphase@testmail.com',
    password: 'password12345',
    pets: [
        {
            pets: [pets[1]._id]
        }
    ]
});

console.info('users seeded');

process.exit();
});

