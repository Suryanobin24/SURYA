# Zoho KYCFlow

A full-stack Next.js demo for a B2B KYC workflow platform with:
- modern enterprise UI
- dashboard, customer list, customer profile, verification workspace, alerts, settings, and mobile upload flow
- backend API routes for photo verification and AI compliance review
- OpenAI Responses API integration for compliance notes and reviewer summaries
- ready to push to GitHub and deploy on Vercel

## Stack
- Next.js App Router
- React
- Recharts
- Lucide icons
- OpenAI JavaScript SDK

## 1. Create the repo locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## 2. Add environment variables

Create `.env.local`:

```env
OPENAI_API_KEY=your_real_openai_key
OPENAI_MODEL=gpt-5.4
CHATAPI_BASE_URL=https://your-real-chatapi-base-url
CHATAPI_API_KEY=your_real_chatapi_key
```

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial Zoho KYCFlow app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zohokycflow-next.git
git push -u origin main
```

## 4. Deploy to Vercel

### Vercel dashboard flow
1. Import the GitHub repository into Vercel.
2. Add the same environment variables from `.env.local` to Vercel Project Settings.
3. Deploy.

### Vercel CLI flow
```bash
npm i -g vercel
vercel
```

If you add or change environment variables later, redeploy so the updated values take effect.

## 5. Backend endpoints

### POST `/api/verify-photo`
Payload:
```json
{
  "customerId": "ZKF-1003",
  "selfieImageUrl": "https://...",
  "idImageUrl": "https://..."
}
```

This route proxies your ChatAPI-compatible verification provider.

### POST `/api/ai-review`
Payload:
```json
{
  "customerName": "Arjun Narayanan",
  "riskLevel": "High",
  "status": "Pending",
  "ocrRows": [...],
  "verificationResult": {...}
}
```

This route asks OpenAI to generate concise compliance review notes and a recommended decision.

## 6. Security notes
- Keep `OPENAI_API_KEY` and `CHATAPI_API_KEY` server-side only.
- Do not expose secret keys in client code.
- Revoke and rotate any key that was pasted into chat or committed accidentally.
- Use signed URLs for document images in production.
- Persist audit logs in a database before moving this to live KYC operations.

## 7. Production upgrades you may want next
- PostgreSQL with Prisma for customers, documents, audit history, and alerts
- Auth with role-based access control
- object storage for documents
- webhook callbacks from OCR and face-match providers
- queueing for bulk verification jobs
