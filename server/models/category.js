import Sequelize from "sequelize";

export default class Category extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        bigsort: { type: Sequelize.STRING(255), allowNull: true },
        middlesort: { type: Sequelize.STRING(255), allowNull: true },
        smallsort: { type: Sequelize.STRING(255), allowNull: true },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "Category",
        tableName: "category",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Category.hasMany(db.Products, {
      foreignKey: "category_id",
      sourceKey: "id",
      as: "Products",
    });
  }
}
