const user = [{name:"calixta", emial:"calix@calix.com"},
{name:"calixta", emial:"calix@calix.com"},
{name:"calixta", emial:"calix@calix.com"}

]

const middleWare = (req, res, next) => {
    console.log('pidiendo usuarios')
    res.json({user})
    next()
}

module.exports = middleWare