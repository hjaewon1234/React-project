import Sequelize from "sequelize";

export default class TopTen extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        rank: { type: Sequelize.INTEGER, allowNull: true },
        productName: { type: Sequelize.STRING(255), allowNull: true },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "TopTen",
        tableName: "topten",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
}
