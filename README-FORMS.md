# Contact Form Configuration

The Enterprise CTA form uses [Web3Forms](https://web3forms.com/) to handle form submissions. It's free, secure, and requires no backend code.

## Setup Instructions

### 1. Get Your Access Key

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address where you want to receive form submissions
3. Click "Get Started" - it's completely free
4. You'll receive an **Access Key** via email instantly

### 2. Configure Environment Variable

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### 3. Test the Form

1. Navigate to the Enterprise CTA section (bottom of homepage)
2. Fill out the form with test data
3. Submit
4. Check your email for the form submission

## Features

- ✅ **No Backend Required** - Forms submit directly to Web3Forms API
- ✅ **Email Notifications** - Receive submissions instantly in your inbox
- ✅ **Spam Protection** - Built-in honeypot field
- ✅ **Loading States** - User-friendly UI with loading spinner
- ✅ **Success/Error Messages** - Clear feedback to users
- ✅ **Form Validation** - All fields are required
- ✅ **Free Forever** - 250 submissions/month on free plan

## Form Data Captured

Each submission includes:
- **Email** - Work email address
- **Company** - Company name
- **Company Size** - Employee count range
- **Industry** - Business vertical

## Production Deployment

The environment variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` needs to be set in your deployment platform:

### Vercel
1. Go to Project Settings → Environment Variables
2. Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = `your_key`
3. Redeploy

### Other Platforms
Add the environment variable in your platform's configuration (Netlify, Railway, etc.)

## Upgrading to Pro (Optional)

Web3Forms Pro offers:
- Unlimited submissions
- File uploads
- Webhook integrations
- Custom email templates
- API access

Visit [https://web3forms.com/pricing](https://web3forms.com/pricing) for details.

## Alternative: Using Your Own Backend

If you prefer to use your own backend, replace the form submission handler in `components/sections/EnterpriseCTA.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  const formData = new FormData(e.currentTarget)
  const data = Object.fromEntries(formData)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setSubmitStatus("success")
      e.currentTarget.reset()
    } else {
      setSubmitStatus("error")
    }
  } catch (error) {
    setSubmitStatus("error")
  } finally {
    setIsSubmitting(false)
  }
}
```
