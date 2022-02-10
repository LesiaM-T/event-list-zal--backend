import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Event = db.define('events',{
    title:{
        type: DataTypes.STRING
    },
    time:{
        type: DataTypes.DATE
    },
    category:{
        type: DataTypes.STRING
    },
       State:{
           type: DataTypes.STRING
    },
    place:{
        type: DataTypes.STRING
    },
    Description:{
        type: DataTypes.STRING
    },
    Picture:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});
 
export default Event;
 

