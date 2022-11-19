const express = require('express')
const router = express.Router()
const singUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) => {
    const signedUpUser = new singUpTemplateCopy({
        name: request.body.name,
        email: request.body.email,
        phoneNumber: request.body.phoneNumber,
        address: request.body.address,
        occupation: request.body.occupation
    })

    signedUpUser.save().then(data => {
        response.json(data)
    }).catch(error => {
        response.json(error)
    })
})

module.exports = router