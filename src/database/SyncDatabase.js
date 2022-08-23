const Client = require('./models/Client');
const Classification = require('./models/Classification');

const Team =  require('./models/Team');
const User = require('./models/User');
const TeamPeople = require('./models/TeamPerson');

const Project = require('./models/Project');

const Task = require('./models/Task');

class SyncDatabase {
    static async sync(force, alter, logging) {

        await Client.sync({force, alter, logging});
        await Classification.sync({force, alter, logging});

        await User.sync({force, alter, logging});
        await Team.sync({force, alter, logging});
        await TeamPeople.sync({force, alter, logging});
        
        await Project.sync({force, alter, logging});

        await Task.sync({force, alter, logging});

    }
}

module.exports = SyncDatabase;