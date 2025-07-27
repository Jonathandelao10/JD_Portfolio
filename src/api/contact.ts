// Contact API service
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean }> => {
  // Always simulate in development (no actual backend available)
  console.log('Contact form submission:', data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate sending email to jddelao@asu.edu
  console.log(`Email would be sent to: jddelao@asu.edu with content:`, {
    from: data.email,
    name: data.name,
    message: data.message
  });
  
  // Simulate success
  return { success: true };
};