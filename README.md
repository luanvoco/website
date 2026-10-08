# luanvo.co — Website (Astro)

## Sửa nội dung
Toàn bộ chữ, số liệu, link nằm trong `src/data/site.ts`. Sửa ở đó rồi build lại.

## Chạy thử trên máy
```bash
npm install
npm run dev      # mở http://localhost:4321
npm run build    # xuất ra thư mục dist/
```

## Đưa lên Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`
- Khi trỏ luanvo.co: chỉ đổi bản ghi website (A/CNAME của @ và www). KHÔNG động vào bản ghi MX/TXT của email hi@luanvo.co.
