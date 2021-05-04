const Sequelize = require('sequelize');


module.exports = class User extends Sequelize.Model{
    static init(sequelize) { //
        return super.init({
            //필드내용 
            name:{ // name varchar(20) NOT NULL UNIQUE
                type:Sequelize.STRING(20), // Varchar(20)
                allowNull:false, // NOT NULL 
                unique:true, // UNIQUE
            },
            age:{ // age INT UNSIGNED NOT NULL
                type:Sequelize.INTEGER.UNSIGNED, // 숫자만 사용할건데 양수만 사용하겠다. +내용만 사용하겠다.
                allowNull:false, // NOT NULL
            },
            married:{ // married TINYINT(1) NOT NULL
                type:Sequelize.BOOLEAN, // TINYINT 
                allowNull:false, // NOT NULL
            },
            comment:{ // commecnt TEXT NOT NULL
                type:Sequelize.TEXT, 
                allowNull: true,
            },
            created_at:{ // created_at DATETIME NOT NULL default NOW()
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            }
        },{
            //설정값 (테이블에대한)
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'User',
            tableName:'users',
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){} //
};
