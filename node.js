const express = require('express');
const session = require('express-session');
const passport = require('passport');
const handlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;


app.engine('hbs', handlebars({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(passport.initialize());
app.use(passport.session());
'
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect username or password.' });
    }
  })
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = usersDB.find((u) => u.id === id);
  done(null, user);
});

  }
  res.redirect('/login');
}

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/carro',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

app.get('/carro', ensureAuthenticated, (req, res) => {
  res.render('carro');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
