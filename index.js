const SyncDatabase = require('./src/database/SyncDatabase');

const ClassificationService = require('./src/services/ClassificationService');
const TaskService = require('./src/services/TaskService');

const main = async () => {
    console.log('Starting the database mapping...');
    await SyncDatabase.sync(false, false, false);
    console.log('database mapping finished!');

    const cs = new ClassificationService();
    const ts = new TaskService();
    await ts.clearTable();
    await cs.clearTable();
    

    const classification1 = await cs.create({classification: 'Suporte'});
    const classification2 = await cs.create({classification: 'Padrão'});
    const classification3 = await cs.create({classification: 'Teste'});

    await ts.create({
        status: 'New',
        classificationId: classification3.id,
        priority: 'Normal',
        projectId: null,
        startedAt: null,
        concludedAt: null,
        title: 'Task de teste do sequelize',
        description: 'Task ficticia para teste de sequelize'
    });

    await cs.update(classification1.id, {classification: 'Suporte ao cliente'});

    await cs.destroy(classification2.id);

    const destroyedClassification = await cs.findByPK(classification2.id);

    if (destroyedClassification == null) console.warn("Objeto deletado!");
    
    const classifications = (await cs.findAll()).map(classification => {
        return classification.dataValues;
    });

    console.log(classifications);

    const teste = await cs.findOneByClassificationName(classification3.classification);
    
    console.log('Teste', teste.dataValues);

    const tasks = await cs.findClassificationsTasksByPk(classification3.id);

    console.log("Tasks da classificação de teste: ", tasks);

};

main();
