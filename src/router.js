const express = require('express')
const PageController = require('./controllers/PageController')
const InterestRateController = require('./controllers/InterestRateController') // Importo

const router = express.Router()

// Controllers
const pageController = new PageController()
const interestController = new InterestRateController() // instancio

// Routes
router.get('/', pageController.renderHome)

router.get('/form', interestController.renderForm) // uso

router.post('/form', interestController.renderTotal)

router.get('*', pageController.renderNotFound)

module.exports = router
