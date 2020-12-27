module.exports = (sequelize, type) => {
    return sequelize.define('todo', {
        _id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        action: {
            type: type.STRING,
            allowNull: false
        }

    })
}