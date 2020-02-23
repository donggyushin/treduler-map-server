import app from './app'
import './database/mongoose'

const PORT = 4000

app.listen(PORT, () => console.log(`Zamanchu app server listening on port ${PORT}!`))