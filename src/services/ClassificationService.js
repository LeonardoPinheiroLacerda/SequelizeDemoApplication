const Classification = require('./../database/models/Classification');

class ClassificationService {

    async findByPK(pk) {
        return Classification.findByPk(pk);
    }

    async findAll() {
        return Classification.findAll();
    }

    async findAllAndCount() {
        return Classification.findAllAndCount();
    }

    async findOneByClassificationName(classificationName) {
        return Classification.findOne({
            where: {
                classification: classificationName
            }
        });
    }

    async create(classification) {
        return Classification.create(classification);
    }

    async update(pk, classification) {
        const classificationObj = await this.findByPK(pk);

        return classificationObj.update({classification: classification.classification});
    }

    async destroy(pk) {
        return Classification.destroy({where: {id: pk}});
    }

    async clearTable(){
        const classifications = await Classification.findAll({paranoid: false});

        classifications.forEach(classification => {
            classification.destroy({force: true});
        });
    }

    async findClassificationsTasksByPk(pk) {
        const classification = await this.findByPK(pk);
        return (await classification.getTasks()).map(task => task.dataValues);
    }

}

module.exports = ClassificationService;