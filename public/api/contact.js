// Simple contact form handler
// This is a placeholder implementation
// In production, replace with a proper backend service

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Simulate processing the contact form
    const { name, email, message } = req.body;
    
    // Here you would typically:
    // - Validate the input
    // - Send an email notification
    // - Store in a database
    // - Send confirmation emails
    
    console.log('Contact form submission:', { name, email, message });
    
    // Simulate success response
    res.status(200).json({ 
      success: true, 
      message: 'Message received successfully' 
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}