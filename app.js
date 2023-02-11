//declaring port
const express = require("express", '4.18.2')
const app = express()
const port = 80
let addressBook = []
const contact = { "id": "", "firstName": "", "familyName": "", "phoneNumber": "", "email": "" }

app.listen(port, () => { })

app.get('/api/contacts', (req, res) => {
    if (req.status() == 400) {
        res.status(400).send("you're fucked clown")
    }
    res.status(200).send(addressBook)
})

app.post('/api/contacts', (req, res) => {
    if (req.status() == 201) {
        addressBook.add(req.body)
        res.status(200).send(addressBook)
    } else {
        res.status(401).send("Invalid input")
    }

})

app.delete('/api/contacts', (req, res) => {
    addressBook = []
    res.status(201).send("Successfully deleted all contacts")
})

app.get('/api/contacts/:contactId', (req, res) => {
    let contactId = req.params.id
    for (let i = 0; i < addressBook.length; i++) {
        if (addressBook.hasOwnProperty('contactId')) {
            res.status(200).send(addressBook)
        } else {
            res.status(400).send("Bad request")
        }
    }
    res.status(404).send("Contact not found")
})

app.put('/api/contacts/:contactId', (req, res) => {
    let contactId = req.params.id
    for (let i = 0; i < addressBook.length; i++) {
        if (!addressBook.hasOwnProperty('contactId')) {
            addressBook.add(contactId)
            res.status(200).send("Successfully updated contact")
            res.status(200).send(contactId)
        } else {
            res.status(400).send("Invalid input")
        }
    }
    res.status(400).send("Contact not found")
})

app.delete('/api/contacts/:contactId', (req, res) => {
    let contactId = req.params.id
    for (let i = 0; i < addressBook.length; i++) {
        if (addressBook.hasOwnProperty('contactId')) {
            delete addressBook[i]['contactId']
        } else {
            res.status(400).send("Invalid input")
        }
    }
    res.status(404).send("Contact not found")
})

