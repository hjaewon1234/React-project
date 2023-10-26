import Sequelize from "sequelize";

export default class Order extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        count: { type: Sequelize.INTEGER, allowNull: true },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Order",
        tableName: "order",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.Order.belongsTo(db.Products, {
      foreignKey: "products_id",
      targetKey: "id",
    });
    db.Order.belongsTo(db.Users, {
      foreignKey: "products_id",
      targetKey: "id",
    });
  }
}
