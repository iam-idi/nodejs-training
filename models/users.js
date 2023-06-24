const conn = require("../helpers/connection");

module.exports = {
  create: async (body) => {
    try {
      const db = await conn();
      const values = Object.values(body);
      const result = await db.query(
        "INSERT INTO users(name,email,phone,address) VALUES (?,?,?,?)",
        values
      );
      return { result };
    } catch (error) {
      return { error };
    }
  },

  find: async () => {
    try {
      const db = await conn();
      const [rows, fields] = await db.query("SELECT * FROM users");

      return { result: rows };
    } catch (error) {
      return { error };
    }
  },

  findOne: async (id) => {
    try {
      const db = await conn();
      const [rows, fields] = await db.query("SELECT * FROM users WHERE id = ?",id);

      return { result: rows };
    } catch (error) {
      return { error };
    }
  },

  update: async (id, body) => {
    try {
      const db = await conn();
      const [rows, fields] = await db.query("UPDATE users SET ? WHERE id = ?", [body,id]);

      return { result: rows };
    } catch (error) {
      return { error };
    }
  },

  delete: async (id) => {
    try {
      const db = await conn();
      const [rows, fields] = await db.query("DELETE FROM users WHERE id = ?",id);

      return { result: rows };
    } catch (error) {
      return { error };
    }
  }
};
