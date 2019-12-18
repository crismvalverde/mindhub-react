const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/User");
const keys = require("./config/keys");
const passport = require('passport');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((id, cb) => {
  User.findById(id)
    .then(user => cb(null, user))
  cb(null, user)
})

passport.use(new GoogleStrategy({
  clientID: keys.googleClientId,
  clientSecret: keys.googleClientSecret,
  callbackURL: "http://localhost:5000/auth/google/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    User.findOne({ email: profile._json.email })
      .then(user => {
        if (!user) {
          console.log('New user');
          const newUser = new User({
            googleId: profile._json.sub,
            first_name: profile._json.given_name,
            last_name: profile._json.family_name,
            profilePic: profile._json.picture,
            email: profile._json.email
          })
          newUser.save()
          cb(null, newUser)
            .then(user => console.log(user))
            .catch(e => console.log(e))
        } else {
          console.log('El usuario ya existe');
          cb(null, user)
        }
      }),
      function (err, user) {
        return cb(err, user);
      }
  }
));