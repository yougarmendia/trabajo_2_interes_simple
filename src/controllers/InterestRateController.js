// Acá va lo interesante.

class InterestRateController {
  renderTotal (req, res) {
    const cap = parseInt(req.body.capital)
    const int = parseFloat(req.body.interest)
    const yea = parseFloat(req.body.years)
    const total = cap * (int / 100) * yea

    res.render('total', { total })
  }

  renderForm (req, res) {
    res.render('form')
  }
}

module.exports = InterestRateController
