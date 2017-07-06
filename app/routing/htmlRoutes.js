var path = require("path");

var fileRoutes = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // CSS & Image Paths
    app.get("/reset", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/assets/css/reset.css"));
    });

    app.get("/style", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/assets/css/style.css"));
    });

    app.get("/img", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/assets/img/friend-bg.jpg"));
    });

    // If no matching route is found default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};

module.exports = fileRoutes;