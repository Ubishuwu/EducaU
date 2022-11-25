import app from './app'
import './database'


// Settings
app.set('port', process.env.PORT || 3000);
/*
// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes


// Static files
app.use(express.static(path.join(__dirname, 'public')));
*/
// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});

