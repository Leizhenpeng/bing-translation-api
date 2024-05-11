This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Test 
    
```bash
curl -X POST http://localhost:3000/api/translate \
-H "Content-Type: application/json" \
-d '{"text": "أحتاج إلى بعض التشجيع", "to": "en"}'
```