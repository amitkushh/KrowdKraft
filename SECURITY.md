# Security Guide for KrowdKraft Website

## 🔒 Security Measures Implemented

### 1. Environment Variables Security
- ✅ **No hardcoded credentials** in source code
- ✅ **Sensitive data externalized** to environment variables
- ✅ **Template file only** contains placeholders
- ✅ **Production variables** set in hosting platform (not in files)

### 2. API Security
- ✅ **Input validation** on all API endpoints
- ✅ **Error handling** prevents information leakage
- ✅ **Rate limiting** through hosting platform
- ✅ **HTTPS only** in production

### 3. Form Security
- ✅ **Required field validation** on all forms
- ✅ **Client-side and server-side validation**
- ✅ **No dangerous HTML injection** (no `dangerouslySetInnerHTML`)
- ✅ **Proper email sanitization** through nodemailer

### 4. Google Apps Script Security
- ✅ **Execute as owner** (authenticated)
- ✅ **No public script execution**
- ✅ **Webhook URLs are secured**
- ✅ **Data validation** in Apps Script

## 🚨 Security Checklist for Deployment

### Environment Variables
- [ ] Never commit `.env.local` to version control
- [ ] Set all environment variables in hosting platform
- [ ] Use Gmail App Passwords (never regular passwords)
- [ ] Verify webhook URLs are private (Google Apps Script)

### Gmail Configuration
- [ ] Enable 2-Factor Authentication on Gmail account
- [ ] Generate App Password specifically for this application
- [ ] Use dedicated email account for applications
- [ ] Regularly rotate App Passwords

### Google Sheets Security
- [ ] Sheets are private (not publicly viewable)
- [ ] Apps Scripts execute as owner (not anonymous)
- [ ] Webhook URLs are not exposed publicly
- [ ] Regular backup of sheet data

## 🔧 Environment Variables Required

### Production Deployment
```env
# Email (Required for proposals & quotes)
EMAIL_USER=krowdkraft.official@gmail.com
EMAIL_PASS=your_16_character_app_password

# Google Sheets (Required for newsletter & partnerships)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec
GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec

# Social Media (Public URLs)
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/krowdkraft/
NEXT_PUBLIC_TWITTER_URL=https://x.com/KrowdKraft_
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/krowdkraft_/
NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL=https://chat.whatsapp.com/Ko9hqFs7hhtLJY1nePhkNO
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/krowdkraft-official/30min
```

## 🛡️ Security Best Practices

### 1. Regular Audits
- Review access logs monthly
- Monitor form submissions for spam
- Check Google Apps Script execution logs
- Update dependencies regularly

### 2. Access Control
- Limit access to hosting platform dashboard
- Secure Google account with strong password + 2FA
- Use different App Passwords for different applications
- Regular review of connected applications

### 3. Data Protection
- Google Sheets contain only necessary data
- Regular backups of form submissions
- No sensitive personal data stored in sheets
- GDPR compliance for EU users

### 4. Monitoring
- Set up alerts for failed API calls
- Monitor Google Apps Script execution failures
- Track unusual form submission patterns
- Regular security scans of dependencies

## ⚠️ Security Warnings

### Never Do:
- ❌ Commit `.env` files to version control
- ❌ Share webhook URLs publicly
- ❌ Use regular Gmail passwords (use App Passwords)
- ❌ Store sensitive data in client-side code
- ❌ Expose API keys in frontend code

### Always Do:
- ✅ Use HTTPS in production
- ✅ Validate all user inputs
- ✅ Keep dependencies updated
- ✅ Use environment variables for secrets
- ✅ Regular security audits

## 📞 Incident Response

If you suspect a security issue:
1. **Immediately** change Gmail App Password
2. **Revoke** Google Apps Script deployments
3. **Review** recent form submissions for suspicious activity
4. **Update** all environment variables
5. **Monitor** for unusual access patterns

## 🔄 Security Updates

This security guide should be reviewed and updated:
- After any major deployment
- Monthly security checks
- When adding new features
- After any security incidents

---

**Last Updated:** $(date)
**Next Review:** $(date + 1 month)
