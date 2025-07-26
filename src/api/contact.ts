// Contact API service
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean }> => {
  // In development, simulate API call
  if (import.meta.env.DEV) {
    console.log('Contact form submission:', data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success (you can modify this to test error scenarios)
    return { success: true };
  }
  
  // In production, make actual API call
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      to: 'jddelao@asu.edu'
    }),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
};