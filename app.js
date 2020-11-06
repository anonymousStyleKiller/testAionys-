const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const notes = require('./routes/notes.routes');
const PORT = config.get('port') || 5003;

app.use(express.json({extented: true}));
app.use('/notes', notes);

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`App started to port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();
