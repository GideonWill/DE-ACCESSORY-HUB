# Vercel Deployment Guide — THE CURTAIN ACCESSORIES WHOLESALE HUB

This project is fully optimized and configured for seamless zero-downtime deployment on [Vercel](https://vercel.com).

---

## 🚀 How to Deploy on Vercel (3 Simple Steps)

### Step 1: Push Project Code to GitHub
1. Make sure all changes are committed to your GitHub repository:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

---

### Step 2: Import Project in Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard) and log in.
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub repository **`DE-ACCESSORY-HUB`** and click **"Import"**.

---

### Step 3: Configure & Deploy
1. **Framework Preset**: Vercel will automatically detect **Next.js**.
2. **Root Directory**: Leave as `./`.
3. **Build & Output Settings**:
   - Build Command: `npm run build` *(Auto-filled)*
   - Output Directory: `.next` *(Auto-filled)*
4. **Environment Variables** *(Optional for Paystack)*:
   - Expand **Environment Variables** section if you wish to configure live Paystack API keys:
     - `NEXT_PUBLIC_PAYSTACK_KEY`: `pk_live_xxxxxxxx`
5. Click **"Deploy"**.

---

## ⚙️ Created Vercel Configuration Files

| File | Purpose |
|------|---------|
| [vercel.json](file:///c:/Users/gideo/Documents/GitHub/DE-ACCESSORY-HUB/vercel.json) | Configures Vercel Next.js builder, clean URLs, and build execution scripts |
| [.env.example](file:///c:/Users/gideo/Documents/GitHub/DE-ACCESSORY-HUB/.env.example) | Provides environment variable templates for Paystack & WhatsApp contact details |
| [package.json](file:///c:/Users/gideo/Documents/GitHub/DE-ACCESSORY-HUB/package.json) | Project metadata updated to `de-accessory-hub` with Next.js 16 build scripts |
| [next.config.mjs](file:///c:/Users/gideo/Documents/GitHub/DE-ACCESSORY-HUB/next.config.mjs) | Configured Next.js image optimization & static build preferences |

---

## 🌐 Custom Domain Setup (Optional)
1. Once deployed, go to your project settings in Vercel: **Settings -> Domains**.
2. Type your custom domain (e.g. `curtainaccessorieshub.com` or `theinteriorhub.com`).
3. Point your DNS CNAME / A records to Vercel as instructed on the Vercel dashboard. SSL certificate will be generated automatically.
