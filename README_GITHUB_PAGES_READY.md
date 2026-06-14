# FOOD LOOP - GitHub Pages Ready

هذه النسخة مجهزة للرفع على GitHub Pages على الريبو:

`https://github.com/3okel/food---loop-`

## ماذا تم تجهيزه؟

- إصلاح `package.json` ليكون صالحًا للبناء.
- إضافة `postcss.config.js`.
- ضبط `vite.config.js` مع `base: /food---loop-/`.
- إضافة alias `@` حتى تعمل imports.
- إضافة GitHub Actions للنشر التلقائي.
- إضافة SPA fallback حتى الروابط الداخلية لا تتعطل.
- ضبط Router مع `basename`.
- تجهيز الشعار في `public/food-loop-logo.jpeg`.
- إضافة `manifest.json` و `.nojekyll`.
- تعطيل استدعاءات Base44 backend في نسخة GitHub Pages حتى لا يعلق الموقع على شاشة التحميل.

## طريقة الرفع

1. فك ضغط الملف.
2. ادخل داخل المجلد.
3. ارفع الملفات والمجلدات نفسها إلى GitHub، وليس ملف ZIP.
4. بعد الرفع ادخل Settings > Pages.
5. عند Build and deployment اختَر Source: GitHub Actions.
6. افتح تبويب Actions وانتظر علامة الصح الخضراء.

الرابط المتوقع بعد النجاح:

`https://3okel.github.io/food---loop-/`
