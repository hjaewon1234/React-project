import Sequelize from "sequelize";

export default class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        count: { type: Sequelize.INTEGER, allowNull: true },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Cart",
        tableName: "cart",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Cart.belongsTo(db.Products, {
      foreignKey: "products_id",
      targetKey: "id",
    });
    db.Cart.belongsTo(db.Users, {
      foreignKey: "products_id",
      targetKey: "id",
    });
  }
}
