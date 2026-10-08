# Tạo 1 file HTML xem trước (nhúng font, ảnh, script) từ thư mục dist/
import re,base64,sys
d='/home/claude/luanvo-site/dist'; out=sys.argv[1]
h=open(f'{d}/index.html').read()
b64=lambda p:base64.b64encode(open(d+p,'rb').read()).decode()
h=re.sub(r'url\((/_astro/[^)]+\.woff2)\)',lambda m:'url(data:font/woff2;base64,'+b64(m.group(1))+')',h)
h=re.sub(r'url\((/_astro/[^)]+\.woff)\)',"url()",h)
h=re.sub(r'<script type="module" src="(/_astro/[^"]+)"></script>',lambda m:'<script type="module">'+open(d+m.group(1)).read()+'</script>',h)
h=re.sub(r'src="(/projects/[^"]+\.jpg)"',lambda m:'src="data:image/jpeg;base64,'+b64(m.group(1))+'"',h)
h=h.replace('href="/favicon.svg"','href="data:image/svg+xml;base64,'+b64('/favicon.svg')+'"')
open(out,'w').write(h)
