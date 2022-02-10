import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const User = db.define('users',{
    name:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.DATE
    },
    role:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
       
export default User;