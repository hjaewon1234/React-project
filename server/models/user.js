import Sequelize from "sequelize";

export default class Users extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        userId: { type: Sequelize.STRING(255), allowNull: true },
        userPw: { type: Sequelize.STRING(255), allowNull: true },
        userName: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        phone: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        userAddress: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        userAddress1: {
          type: Sequelize.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Users",
        tableName: "users",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Users.belongsToMany(db.Products, {
      sourceKey: "id",
      foreignKey: "user_id",
      through: "shopping_list",
      // as: "Noo",
    });
  }
}
