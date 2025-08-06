# EmailJS Setup Guide for EduBharat

This guide will help you set up EmailJS to handle form submissions from the contact and application forms, sending emails to Abhijit@edubh.com.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select Gmail and connect your Google account
   - **Other providers**: Configure SMTP settings
4. Name your service (e.g., "EduBharat-Service")
5. Copy the **Service ID** (you'll need this later)

## 3. Create Email Templates

### Contact Form Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Name it "Contact Form Template"
4. Set up the template:

**Template Settings:**
- **To Email**: Abhijit@edubh.com
- **From Name**: {{from_name}}
- **Reply To**: {{reply_to}}
- **Subject**: New Contact Message - {{subject}}

**HTML Content:**
```html
<h2>New Contact Message from EduBharat Website</h2>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><em>This message was sent from the EduBharat contact form.</em></p>
```

4. Save the template and copy the **Template ID**

### Application Form Template

1. Create another template named "Application Form Template"
2. Set up the template:

**Template Settings:**
- **To Email**: Abhijit@edubh.com
- **From Name**: {{from_name}}
- **Reply To**: {{reply_to}}
- **Subject**: New Application - {{program}} Program

**HTML Content:**
```html
<h2>New Application Submitted - EduBharat</h2>

<p><strong>Full Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Program Interest:</strong> {{program}}</p>
<p><strong>Current Qualification:</strong> {{qualification}}</p>

<hr>
<p><em>This application was submitted from the EduBharat application form.</em></p>
<p><em>Please follow up with the applicant within 24 hours.</em></p>
```

3. Save the template and copy the **Template ID**

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy this key

## 5. Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID=your_apply_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact page and application page
3. Fill out and submit the forms
4. Check Abhijit@edubh.com for incoming emails

## 7. Important Notes

- **Free Plan Limits**: EmailJS free plan allows 200 emails per month
- **Email Delivery**: Emails may take a few minutes to arrive
- **Spam Folder**: Check spam/junk folders if emails don't appear in inbox
- **Error Handling**: The forms include proper error handling and loading states
- **Form Validation**: All required fields are validated before submission

## 8. Troubleshooting

### Common Issues:

1. **Emails not being sent:**
   - Check your environment variables are correct
   - Verify your EmailJS service is active
   - Check browser console for errors

2. **Emails going to spam:**
   - Add your EmailJS service email to contacts
   - Check your email service reputation

3. **Template variables not working:**
   - Ensure template variable names match exactly (case-sensitive)
   - Check template syntax in EmailJS dashboard

### Testing in Development:

You can test the forms locally by:
1. Filling out the forms on your local development server
2. Checking the browser console for any errors
3. Verifying emails are received at Abhijit@edubh.com

## 9. Security Notes

- Environment variables with `NEXT_PUBLIC_` prefix are exposed to the client
- EmailJS public key is safe to expose as it's designed for client-side use
- Never expose your EmailJS private key or email passwords

## 10. Next Steps

After setting up EmailJS:
1. Test both forms thoroughly
2. Consider setting up email templates with your branding
3. Monitor your EmailJS usage in the dashboard
4. Consider upgrading to a paid plan if you need more than 200 emails/month

For any issues, refer to the [EmailJS Documentation](https://www.emailjs.com/docs/) or contact support.
