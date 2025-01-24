import express from 'express'; // ES module import
import hbs from 'hbs';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up Handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', './views');

// Serve static files (CSS, JS, images)
app.use('/assets', express.static('public'));

// Register custom Handlebars helpers
hbs.registerHelper('repeat', function(n, block) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += block.fn();
  }
  return result;
});

// Routes
app.get('/doctors', (req, res) => {
  res.render('doctors', {
    title: 'Our Expert Doctors',
    content: 'We are proud to present our skilled and dedicated dermatologists who are committed to delivering the best care for your skin.',
  });
});

app.get('/services', (req, res) => {
  const category = req.query.category || 'General';
  res.render('services', {
    category,
    content: `Explore our ${category} services that can help enhance your skin health and beauty.`,
  });
});

// Route to handle booking appointments
app.post("/book-appointment", (req, res) => {
  const { name, email, service, preferredDate, preferredTime } = req.body;
  res.render("appointments", { name, email, service, preferredDate, preferredTime });
});


// Route to display offerings
app.get('/offerings', (req, res) => {
  const offerings = [
    {
      name: 'Anti-Aging Treatment',
      price: 5000,
      duration: '60 mins',
      description: 'Advanced treatment to reduce fine lines and wrinkles',
      available: true,
    },
    {
      name: 'Acne Treatment',
      price: 3000,
      duration: '45 mins',
      description: 'Specialized treatment for acne-prone skin',
      available: true,
    },
    {
      name: 'Chemical Peel',
      price: 4000,
      duration: '30 mins',
      description: 'Skin resurfacing treatment for even tone',
      available: false,
    },
  ];
  res.render('offerings', { offerings });
});

// Route to display testimonials
app.get('/testimonials', (req, res) => {
  const testimonials = [
    { name: 'John Doe', rating: 5, comment: 'Excellent service!', date: '2024-01-20' },
    { name: 'Jane Smith', rating: 4, comment: 'Very professional staff', date: '2024-01-18' },
  ];
  res.render('testimonials', { testimonials });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: "We don't have this page yet!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});