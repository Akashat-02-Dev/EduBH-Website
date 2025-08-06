/**
 * Email validation utility functions
 */

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  // Check if it's a valid Indian phone number (10 digits) or international format
  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
};

export const validateForm = (formData: Record<string, string>, requiredFields: string[]): string[] => {
  const errors: string[] = [];
  
  requiredFields.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`);
    }
  });
  
  // Validate email format if email field exists and has value
  if (formData.email && !validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Validate phone format if phone field exists and has value
  if (formData.phone && formData.phone.trim() !== '' && !validatePhone(formData.phone)) {
    errors.push('Please enter a valid phone number');
  }
  
  return errors;
};
