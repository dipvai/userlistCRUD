var logged = true;
var logged = true;
var logged = true;


const session = function await(req, res, next) {
  try {
    if (!logged) {
      res.redirect("http://localhost:3000/");
    } else {
      next();
    }
  } catch (err) {
    console.log(`No session found`)
    res.redirect("http://localhost:3000/");
  }
};

module.exports = session;
