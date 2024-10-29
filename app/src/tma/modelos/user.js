import Sequelize from 'sequelize'
import tma from '../tma'

const User = tma.define('user', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dateBirth: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

export { User };