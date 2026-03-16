# Torvanta Website

A professional, responsive website for torvanta.in with complete pages for privacy policy, terms and conditions, disclaimer, refund policy, and an interactive user dashboard.

## 📁 Project Structure

```
torvanta-website/
├── index.html              # Homepage
├── privacy-policy.html     # Privacy Policy page
├── terms-conditions.html   # Terms & Conditions page
├── disclaimer.html         # Disclaimer page
├── refund-policy.html      # Refund Policy page
├── dashboard.html          # User Dashboard page
├── styles.css              # Main stylesheet
├── dashboard.js            # Dashboard functionality
└── README.md               # This file
```

## 🎯 Pages Included

### 1. Homepage (index.html)
- Welcome hero section with call-to-action buttons
- Features section highlighting key benefits
- FAQ section with common questions
- Professional footer with links to all pages

### 2. Privacy Policy (privacy-policy.html)
- Information collection practices
- Data usage and purposes
- Security measures
- Third-party disclosure policies
- Contact information

### 3. Terms & Conditions (terms-conditions.html)
- User agreement and licensing
- Content disclaimer
- Liability limitations
- User account responsibilities
- Modification policies

### 4. Disclaimer (disclaimer.html)
- General disclaimer
- Medical disclaimer (if applicable)
- Financial disclaimer
- Third-party content liability
- User responsibility notice

### 5. Refund Policy (refund-policy.html)
- Refund eligibility criteria
- Non-refundable items list
- Refund process and timeline
- Partial refunds information
- Return shipping details

### 6. Dashboard (dashboard.html)
- User authentication (Sign In / Sign Up)
- Overview tab with account statistics
- Profile management tab
- Settings tab with preferences
- Transaction history tab
- Responsive design for all devices

## 🎨 Design Features

- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Professional UI**: Modern and clean interface
- **Color Scheme**: Professional blue primary color with supporting colors
- **Animations**: Smooth transitions and animations
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized CSS and lightweight JavaScript

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/parthr85-prog/torvanta-website.git
cd torvanta-website
```

2. Open the website:
   - Open `index.html` in your web browser
   - Or use a local server (e.g., Python's HTTP server):
   ```bash
   python -m http.server 8000
   ```
   - Then visit `http://localhost:8000`

### Dashboard Features

- **Sign In/Sign Up**: Create an account or sign in with any email/password (demo mode)
- **Profile Management**: Update personal information
- **Settings**: Manage notifications and change password
- **Overview**: View account statistics and status
- **Transactions**: Track transaction history

### Local Storage

The dashboard uses browser's localStorage to save user data:
- User profile information
- Preferences and settings
- Session data

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Customization

### Colors
Edit `:root` variables in `styles.css`:
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* ... more colors */
}
```

### Content
Edit HTML files directly to update:
- Company information
- Contact details
- Policy content
- FAQ items

### JavaScript
Modify `dashboard.js` to:
- Connect to backend API
- Implement real authentication
- Add more dashboard features

## 📧 Contact & Support

- Email: support@torvanta.in
- Website: torvanta.in
- Phone: +91 XXX XXX XXXX

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is owned by Torvanta. All rights reserved.

## 🔐 Security Notes

- This dashboard is for demo purposes
- In production, implement proper backend authentication
- Use HTTPS for all connections
- Validate all form inputs on the server
- Implement rate limiting for login attempts
- Use secure password hashing

## 🚀 Deployment

### GitHub Pages
1. Push to the `main` branch
2. Go to repository settings
3. Enable GitHub Pages with `main` branch
4. Your site will be available at `https://parthr85-prog.github.io/torvanta-website`

### Other Hosting Options
- Netlify
- Vercel
- Traditional web hosting (FTP/SSH)
- Your own domain (torvanta.in)

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage

## 📝 Updates & Maintenance

- Update policy pages as needed
- Keep contact information current
- Test on multiple browsers and devices
- Regular security updates

---

**Last Updated**: 2026-03-16 02:52:20  
**Version**: 1.0.0