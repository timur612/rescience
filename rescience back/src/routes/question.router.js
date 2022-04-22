const router = require('express-promise-router')();

const questionsController = require('../controllers/question.controller');


router.post('/questions', questionsController.createQuestion);

router.get('/questions/:post_id',questionsController.getQuestion);
router.get('/questions', questionsController.allQuestions);


module.exports = router;