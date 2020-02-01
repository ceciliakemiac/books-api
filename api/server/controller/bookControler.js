const bookService = require('../services/bookService');

module.exports = {
    async getAll(req, res) {
        try {
            const allBooks = await bookService.getAll();
            return res.status(200).send({
                message: 'Books retrived',        
                data: allBooks
            });
        } catch(error) {
            return res.status(400).json({message: 'erro'});
        }
    },

    async post(req, res) {
        if(!req.body.title || !req.body.price || !req.body.description) {
            return res.status(400).json({message: 'Please provide complete details!'});
        }
        const sentBook = req.body;
        try {
            const createdBook = await bookService.post(sentBook);
            return res.status(201).json({
                message: 'Book added',
                data: createdBook
            });
        } catch(error) {
            return res.status(400).json({message: error.message});
        }
    },

    async update(req, res) {
        const alteredBook = req.body;
        const id = req.params.id;
        if(!Number(id)) {
            return res.status(400).json({message: 'Please input a valid numeric value!'});
        }
        try {
            const updatedBook = await bookService.updatedBook(id, alteredBook);
            if(!updatedBook) {
                res.status(404).json({message: 'Cannot update book!'});
            } else {
                res.status(200).json({
                    message: 'Book updated',
                    data: updatedBook
                });
            }
        } catch(error) {
            res.status(400).json({erro: error});
        }
    },

    async get(req, res) {
        const id = req.params.id;
        if(!Number(id)) {
            return res.status(400).json({message: 'Please input a valid numeric value!'});
        }
        try {
            const book = await bookService.get(id);
            if(!book) {
                return res.status(404).json({message: 'Cannot find the book!'});
            } else {
                return res.status(200).json({
                    message: 'Book finded',
                    data: book
                });
            }
        } catch(error) {
            return res.status(400).json({erro: error});
        }
    },

    async delete(req, res) {
        const id = req.params.id;
        if(!Number(id)) {
            return res.status(400).json({message: 'Please input a valid numeric value!'});
        }
        try {
            const deletedBook = await bookService.delete(id);
            if(deletedBook) {
                return res.status(200).json({
                    message: 'Book deleted!',
                    data: deletedBook
                });
            } else {
                return res.status(400).json({message: 'Cannot delete book!'});
            }
        } catch(error) {
            return res.status(400).json({erro: error});    
        }
    }
}

