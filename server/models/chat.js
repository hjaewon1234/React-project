import Sequelize from "sequelize";

export default class Chat extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: { type: Sequelize.STRING(255), allowNull: true },
        text: { type: Sequelize.STRING(255), allowNull: true },
        importance: { type: Sequelize.STRING(255), allowNull: true },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Chat",
        tableName: "chat",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {}
}
