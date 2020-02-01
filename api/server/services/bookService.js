const db = require('../src/models');

module.exports = {
    async getAll() {
        try {
            return await db.Book.findAll(); 
        } catch (error) {
            throw error;
        }
    },

    async post(newBook) {
        try {
            return await db.Book.create(newBook);
        } catch (error) {
            throw error;
        }
    },

    async update(id, updateBook) {
        try {
            let book = await db.Book.findOne({
                where: {id: Number(id)}
            });

            if(book) {
                await db.Book.update(updateBook, {where: {id: Number(id)}});
                return updateBook;
            }
            return null;
        } catch(error) {
            throw error;
        }
    },

    async get(id) {
        try {
            let book = await db.Book.findOne({
                where: {id: Number(id)}
            });
            return book;
        } catch(error) {
            throw error;
        }
    },

    async delete(id) {
        try {
            let book = await db.Book.findOne({
                where: {id: Number(id)}
            });

            if(book) {
                let deletedBook = await db.Book.destroy({
                    where: {id: Number(id)}
                });
                return deletedBook;
            }
            return null;
        } catch(error) {
            throw error;
        }
    }
}






















