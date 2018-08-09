module.exports = function (app , db) {
    app.post('/notes' , (req , res) => {
        // We'll create the note here
        // express can't understand the body part alone. body-parser can however. 
        console.log(req.body);
        res.send('Hello');
    })
}