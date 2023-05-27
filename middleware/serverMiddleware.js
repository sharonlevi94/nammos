export default function (req, res, next) {
  req.setHeader('Access-Control-Allow-Origin', 'https://nammos-front.onrender.com'); // Replace 'your-frontend-domain' with the domain of your frontend
  // Add any other necessary CORS headers
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  
  // Continue to the next middleware
  next();
}
