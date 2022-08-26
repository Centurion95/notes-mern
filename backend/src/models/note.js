const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    archived: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

// noteSchema.pre('save', async function (next) {
//     const document = this
//     console.log('Document saved:', document)
//     next()
// })

const Note = mongoose.model('Note', noteSchema)

module.exports = Note