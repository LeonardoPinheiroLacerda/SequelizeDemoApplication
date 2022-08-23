const SyncDatabase = require('./src/database/SyncDatabase');

const User = require('./src/database/models/User');
const Team = require('./src/database/models/Team');

const main = async () => {
    console.log('Starting the database mapping...');
    await SyncDatabase.sync(true, true, false);
    console.log('database mapping finished!');

    let user = await User.create({
        name: 'Leonardo',
        lastName: 'Lacerda',
        email: 'leon@gmail.com',
        telephoneNumber: '+55 (11) 9 5324-8804',
        username: 'leon',
        password: 'leon'
    });

    await Team.create({
        name: 'Main Team',
        leaderId: user.id
    });

    await Team.create({
        name: 'Secondary Team',
        leaderId: user.id
    });

    user = await User.findByPk(user.id);
    console.log(user);

    const teams = await user.getTeams({raw: true, where: {name: 'Main Team'}});
    console.log(teams);

};

main();
