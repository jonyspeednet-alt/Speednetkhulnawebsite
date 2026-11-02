# Speed Net Khulna Website

Speed Net-এর (খুলনা) অফিশিয়াল ফ্রন্টএন্ড — Vite + React 19 + TypeScript + Tailwind CSS v4 দিয়ে বানানো, Google Drive-এর `website` ফোল্ডার থেকে আনা সোর্স কোড।

## চালু করার নিয়ম

```bash
npm install
npm run dev
```

ডিফল্টভাবে অ্যাপটি `http://localhost:3000`-এ (`--host=0.0.0.0`) চলে।

অন্যান্য কমান্ড:

| Command | কাজ |
| --- | --- |
| `npm run dev` | ডেভেলপমেন্ট সার্ভার |
| `npm run build` | প্রোডাকশন বিল্ড (`dist/`) |
| `npm run preview` | বিল্ড করা অ্যাপ প্রিভিউ |
| `npm run lint` | TypeScript টাইপ চেক (`tsc --noEmit`) |

## গঠন

```
index.html
vite.config.ts
src/
  App.tsx              # পেজ রাউটিং (home / about / career)
  main.tsx
  index.css            # Tailwind + কাস্টম অ্যানিমেশন
  types.ts
  data/ispData.ts      # প্যাকেজ, কাভারেজ এরিয়া, অফিসের তথ্য
  components/          # Navbar, Hero, Packages, Coverage Map, Chatbot, ...
```

## ব্র্যান্ড অ্যাসেট

আপলোড করা অরিজিনাল ইমেজ থেকে শুধু চারপাশের ফাঁকা সাদা জায়গা কেটে বাদ দেওয়া হয়েছে। **উপরের "Beyond your imagination" ও নিচের "Internet Service Provider" — দুটোই লোগোর অংশ, তাই দুটোই রাখা হয়েছে** (কোনো টেক্সট কাটা হয়নি)।

কোথাও সাদা বক্স/সাদা ব্যাকগ্রাউন্ড রাখা হয়নি — সব ভার্সনেই ব্যাকগ্রাউন্ড transparent, তবে ডার্ক ফুটারে কালো "Internet Service Provider" লেখা ও নীল লাইন দুটো দেখা যায় বলে সেগুলো হালকা রঙে রূপান্তর করা হয়েছে।

| ফাইল | ব্যবহার |
| --- | --- |
| `public/images/speednet-logo.png` | সম্পূর্ণ লকআপ, টাইট ক্রপ, সাদা ব্যাকগ্রাউন্ড — মাস্টার/প্রিন্ট ভার্সন |
| `public/images/speednet-logo-transparent.png` | সম্পূর্ণ লকআপ, transparent — হালকা ন্যাভবারে |
| `public/images/speednet-logo-dark.png` | সম্পূর্ণ লকআপ, transparent + সাদা caption/হালকা rule — ডার্ক ফুটারে |
| `public/favicon.png` | স্টাইলাইজড "S" থেকে বানানো স্কয়ার ফ্যাভিকন (ট্যাব আইকনে ছোট জায়গায় পুরো লকআপ মানায় না) |

## এনভায়রনমেন্ট

`.env.example`-এ `GEMINI_API_KEY` ও `APP_URL`-এর নমুনা আছে। বর্তমান বিল্ডে চ্যাটবটটি সম্পূর্ণ লোকাল (রুল-ভিত্তিক), তাই সাইট চালাতে কোনো API key লাগে না; পরে Gemini ইন্টিগ্রেশন যোগ করলে `.env.local`-এ key বসাতে হবে (`.env*` গিট-এ ইগনোর করা আছে)।

## AI Studio

মূল অ্যাপটি AI Studio-তে বানানো: https://ai.studio/apps/130d2411-719e-4e56-9c1c-59e6226e35cd
