import passport from "passport";
import LocalStrategy from "passport-local";
import { userModel } from "../../db/index.js";
import { validatePassword } from "../helpers/password-utils.js";

const verifyCallBack = (username, password, done) => {
  userModel.findOne({ userName: username }, (err, user) => {
    if (err) {
      console.log(err);
      return done(new Error(err));
    }
    if (!user) {
      return done("Incorrect username");
    }
    const isValid = validatePassword(password, user.hash, user.salt);
    if (!isValid) {
      return done("Incorrect password");
    }
    return done(null, user);
  });
};

const strategy = new LocalStrategy(verifyCallBack);

passport.use(strategy);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  userModel.findById(id, function (err, user) {
    done(err, user);
  });
});

export default passport;
