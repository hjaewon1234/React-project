import Sequelize from "sequelize";

export default class Products extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING(255), allowNull: true },
        price: { type: Sequelize.INTEGER, allowNull: true },
        brand: { type: Sequelize.STRING(255), allowNull: true },
        description: { type: Sequelize.STRING(255), allowNull: true },
        img: { type: Sequelize.STRING(255), allowNull: true },
        category: { type: Sequelize.STRING(255), allowNull: true },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "Products",
        tableName: "products",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Products.belongsToMany(db.Users, {
      sourceKey: "id",
      foreignKey: "product_id",
      through: "shopping_list",
    });
    // db.Products.belongsTo(db.Category, {
    //   foreignKey: "categoryId",
    //   targetKey: "id",
    // });
    db.Products.hasMany(db.Qna, {
      foreignKey: "products_id",
      sourceKey: "id",
    });
    db.Products.hasMany(db.Search, {
      foreignKey: "products_id",
      sourceKey: "id",
    });
    db.Products.hasMany(db.Order, {
      foreignKey: "products_id",
      sourceKey: "id",
    });
    db.Products.hasMany(db.Cart, {
      foreignKey: "products_id",
      sourceKey: "id",
    });
  }
}
