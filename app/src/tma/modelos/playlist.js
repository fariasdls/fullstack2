import Sequelize from 'sequelize'
import tma from '../tma.js'
import { Music } from './music.js';
import { User } from './user.js';

const Playlist = tma.define('playlist', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    musicId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Music,
            key: 'id'
        }
    }
})

User.belongsToMany(Music, { through: Playlist });
Music.belongsToMany(User, { through: Playlist });

export { Playlist };