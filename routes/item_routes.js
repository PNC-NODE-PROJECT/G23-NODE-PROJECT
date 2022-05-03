const express = require('express');
const router = express.Router();

const itemModel = require('../models/quiz_models.js');
console.log(itemModel.getAllQuizes());

// Item Routes
// Get Question

router.get('/', (req, res) => {
    let data = itemModel.getAllQuizes();
    res.status(200).send(data);
})

// Create Question
router.post('/', (req, res) => {
    let question = req.body.Question;
    let answers_1 = req.body.answers1;
    let answers_2 = req.body.answers2;
    let answers_3 = req.body.answers3;
    let answers_4 = req.body.answers4;
    itemModel.createNewQuiz(question,answers_1,answers_2,answers_3,answers_4);
    res.send("SUCCESSFUL")
    console.log(question);
})

// Delete Question

router.delete('/:id', (req, res) => {
    let id = req.params.id  ;
    let isDeleteItem = itemModel.deleleQuiz(id);
    if (isDeleteItem) {
        res.status(200).send({
            "message": 'Item deleted successfully'
        })
    } else {
        res.status(404).send({
            "message": 'Item id not found'
        })
    }
})

// Update Question

router.patch('/:id', (req, res) => {
    let id = req.params.id
    let isUpdateItem = itemModel.updateQuiz(req.body,id)
    if (isUpdateItem) {
        res.status(200).send({
            "message": 'Item updated successfully'
        })
    } else {
        res.status(404).send({
            "message": 'Item id not found'
        })
    }
})

module.exports = router;