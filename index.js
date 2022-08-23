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

    const team1 = await Team.create({
        name: 'Main Team',
        leaderId: user.id
    });

    const team2 = await Team.create({
        name: 'Secondary Team',
        leaderId: user.id
    });

    await user.addTeam(team1);
    await user.addTeam(team2);

    await user.removeTeam(team2);

    user = await User.findByPk(user.id);

    const teams = await user.getTeams({ raw: true });
    //console.log(teams);

    //console.log(await team1.getLeader({ raw: true }));

    const leaderedTeam = await user.getLeaderedTeam({ raw: true });

    //console.log(leaderedTeam);

};

main();
