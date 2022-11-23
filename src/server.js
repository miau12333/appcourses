const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 4567

app.listen(PORT, () => {
    console.log(`server runnig in the ${PORT}`)
});