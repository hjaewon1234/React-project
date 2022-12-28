import Sequelize from "sequelize";

export default class Review extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        text: { type: Sequelize.STRING(255) },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Review",
        tableName: "review",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Review.belongsTo(db.Products, {
      foreignKey: "products_id",
      targetKey: "id",
    });
    db.Review.belongsTo(db.Users, {
      foreignKey: "users_id",
      targetKey: "id",
    });
  }
}
