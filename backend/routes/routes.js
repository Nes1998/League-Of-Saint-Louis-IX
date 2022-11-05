const express = require('express')
const router = express.Router()
const singUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) => {
    const signedUpUser = new singUpTemplateCopy({
        name: request.body.name
    })
})

module.exports = router