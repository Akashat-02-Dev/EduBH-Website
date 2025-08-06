import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || 'YOUR_CONTACT_TEMPLATE_ID';
const EMAILJS_APPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID || 'YOUR_APPLY_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ApplyFormData {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  qualification: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<EmailResponse> => {
  try {
    // Prepare template parameters for contact form
    const templateParams = {
      to_email: 'Abhijit@edubh.com',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_CONTACT_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your message has been sent successfully! We\'ll respond within 2 hours.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending contact email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later or contact us directly.'
    };
  }
};

export const sendApplicationEmail = async (formData: ApplyFormData): Promise<EmailResponse> => {
  try {
    // Prepare template parameters for application form
    const templateParams = {
      to_email: 'Abhijit@edubh.com',
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      program: formData.program,
      qualification: formData.qualification,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_APPLY_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your application has been submitted successfully! Our team will contact you soon.'
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending application email:', error);
    return {
      success: false,
      message: 'Failed to submit application. Please try again later or contact us directly.'
    };
  }
};
