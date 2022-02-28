const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const profileRoutes = require('./routes/profile.route');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Api running'));

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
