const Task = require("./../database/models/Task");

class TaskService {
    async create(task){
        return Task.create(task);
    }


    async clearTable(){
        const tasks = await Task.findAll({paranoid: false});

        tasks.forEach(task => {
            task.destroy({force: true});
        });
    }
}

module.exports = TaskService;