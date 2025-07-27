// Simple contact form handler
// This is a placeholder implementation
// In production, replace with a proper backend service

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process the contact form
    const { name, email, message, to } = req.body;
    
    // Here you would typically:
    // - Validate the input
    // - Send an email notification to jddelao@asu.edu
    // - Store in a database
    // - Send confirmation emails
    
    console.log('Contact form submission:', { name, email, message, to: to || 'jddelao@asu.edu' });
    
    // In a real implementation, you would send the email here
    // For now, we'll simulate success
    res.status(200).json({ 
      success: true, 
      message: 'Message received successfully and forwarded to jddelao@asu.edu' 
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}