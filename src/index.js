const express = require("express")
const app = express()
const port =  process.env.PORT || 3000

//middlewares 
app.use(express.json())
app.use(express.urlencoded({ extended: false})) // from form to object


//routes
app.use(require("./routes/routes"))

app.listen(port, () => console.log("listening on port %s", port))
