const express = require('express');
const path=require('path');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
//const productRoutes = require('./routes/products');
const app = express();
const PORT = process.env.PORT || 4004;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

// Routes
app.use('/auth', authRoutes);
//app.use('/products', productRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
