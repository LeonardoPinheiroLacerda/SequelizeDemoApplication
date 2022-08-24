const SyncDatabase = require('./src/database/SyncDatabase');

const main = async () => {
    console.log('Starting the database mapping...');
    await SyncDatabase.sync(true, true, false);
    console.log('database mapping finished!');
};

main();
