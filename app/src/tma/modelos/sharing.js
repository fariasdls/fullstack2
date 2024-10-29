import Sequelize from 'sequelize'
import tma from '../tma.js'
import { User } from './user.js';
import { Music } from './music.js';

const Sharing = tma.define('sharing', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    }
})

Music.belongsToMany(User, { through: 'sharing' });

export { Sharing };