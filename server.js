const express = require("express")
const sever = express()

//conf:
const nunjuck = require("nunjucks")
nunjuck.configure("./", {
    express: server,
    noCache: true,
})
server.user(express.static('public'))


server.user(express.urlencoded({extended: true}))

const donors = [
    {   
         name : "Diego Fernandess",
    blood : "AB+"
},
{   
    name : "Cleiton Souza",
blood : "B+"
},
{   
    name : "Robson Marques",
blood : "O+"
},
{   
    name : "Mayk Brito",
blood : "A-"
},

]


//Apresentação:
server.get("/", function(req, res){
    return res.send("Ok, cheguei aqui Com nodemon")
    return res.render("index.html", { donors})
})

server.post("/", function(res, req){
    const name = req.body.name
    const email = res.body.email
    const blood = res.body.blood

    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")
})




//Ligando servidor!
sever.listen(3000, function() {
    console.log("Iniciei o servidor!")
})
