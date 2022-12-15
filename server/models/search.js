import Sequelize from "sequelize";

export default class Search extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        count: { type: Sequelize.INTEGER, allowNull: true },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Search",
        tableName: "search",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    Search.belongsTo(db.Products, {
      foreignKey: "products_id",
      targetKey: "id",
    });
  }
}
