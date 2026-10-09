// Toàn bộ nội dung website nằm ở file này — sửa chữ/số tại đây, không cần đụng giao diện.

export const site = {
  name: 'luanvo.co',
  title: 'luanvo.co — Tư vấn quản trị & Giải pháp AI cho doanh nghiệp Việt',
  description:
    'luanvo.co đồng hành cùng doanh nghiệp Việt, từ SME đến Enterprise, chẩn đoán hiện trạng quản trị, chọn đúng hệ thống phần mềm và ứng dụng AI vào vận hành.',
  email: 'hi@luanvo.co',
  booking: '#booking',
  calendly: 'https://calendly.com/luanvoco/meeting',
  social: {
    youtube: 'https://www.youtube.com/c/luanvoco/',
    facebook: 'https://facebook.com/luanvoco/',
    linkedin: 'https://www.linkedin.com/in/luanvoco/',
    zalo: 'https://zalo.me/luanvoco',
    community: 'https://www.facebook.com/groups/base.vncommunity',
  },
};

export const nav = [
  { label: 'Về Luân', href: '#about' },
  { label: 'Giải pháp AI', href: '#ai' },
  { label: 'Sản phẩm', href: '#products' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Sự kiện', href: '#events' },
    { label: 'Khách hàng', href: '#customers' },
  { label: 'Liên hệ', href: '#contact' },
];

export const hero = {
  tag: 'Tư vấn quản trị & Giải pháp AI',
  titleA: 'Đồng hành cùng doanh nghiệp Việt vận hành',
  titleHL: 'thông minh hơn',
  titleB: 'với Công nghệ & AI',
  lead: 'Từ SME đến Enterprise — luanvo.co giúp doanh nghiệp chẩn đoán hiện trạng quản trị, chọn đúng hệ thống phần mềm, và xây ứng dụng, dashboard AI theo ngành — từ năng lượng, nông nghiệp đến ESG.',
  stats: [
    { n: 300, suffix: '+', label: 'Doanh nghiệp đã tư vấn' },
    { n: 7000, suffix: '+', label: 'Giờ làm việc cùng khách hàng' },
    { n: 4, suffix: '+', label: 'Ứng dụng & dashboard AI theo ngành' },
  ],
};

export const about = {
  heading: 'Xin chào! Tôi là Võ Thành Luân',
  role: 'Founder luanvo.co · Sales Consultant Manager tại Base.vn',
  paragraphs: [
    'Tôi đã đồng hành cùng hơn 300 doanh nghiệp — từ SME đến tập đoàn — trong hành trình chuyển đổi số: tối ưu vận hành, quản lý thông tin, quản trị nhân sự và tài chính bằng giải pháp công nghệ.',
    'Hiện tôi là Sales Consultant Manager tại Base.vn (công ty thành viên Tập đoàn FPT), Admin cộng đồng Base.vn – Hỏi đáp & Chia sẻ, và trực tiếp dẫn dắt đội ngũ tư vấn mới.',
    'Từ năm 2025, tôi ứng dụng AI (Claude) vào chính công việc tư vấn và triển khai. luanvo.co là nơi tôi đóng gói những gì đã kiểm chứng để mang đến cho nhiều doanh nghiệp hơn.',
  ],
  coIntro: 'Vì sao là "CO"? 4 vai trò gắn với hành trình của tôi:',
  co: [
    { word: 'COach', note: 'Đồng hành và đặt câu hỏi đúng' },
    { word: 'Customer Onboarding', note: 'Đưa khách hàng vào guồng' },
    { word: 'Customer Oriented', note: 'Tư duy trong công việc' },
    { word: 'COO', note: 'Vai trò muốn được thử thách' },
  ],
};

export const aiSolutions = [
  {
    no: '01',
    title: 'Ứng dụng tích hợp hệ thống',
    text: 'Kết nối CRM, HRM, quy trình, quản lý dự án sẵn có qua API & webhook. Tự động đồng bộ dữ liệu, báo cáo và phê duyệt — không phải thay hệ thống cũ.',
    tags: ['API', 'Webhook', 'Automation'],
  },
  {
    no: '02',
    title: 'Tài liệu & demo giải pháp tự động',
    text: 'Từ ghi chú khảo sát, tạo tài liệu giới thiệu, đề xuất giải pháp và mockup demo dạng HTML riêng cho từng doanh nghiệp — trong vài giờ thay vì vài ngày.',
    tags: ['HTML', 'Proposal', 'Mockup'],
  },
  {
    no: '03',
    title: 'Trợ lý AI cho Sales & Vận hành',
    text: 'Agent hỗ trợ nghiên cứu khách hàng, chuẩn bị buổi khảo sát, giúp nhân sự mới bắt nhịp nhanh hơn và giảm việc lặp lại cho đội ngũ.',
    tags: ['Agent', 'Sales enablement', 'Onboarding'],
  },
];

export const segments = {
  rows: ['Bài toán', 'Cách tiếp cận', 'Ứng dụng AI'],
  sme: {
    name: 'SME',
    sub: 'Doanh nghiệp vừa & nhỏ',
    cells: [
      'Quy trình thủ công, dữ liệu rời rạc, thiếu người làm công nghệ.',
      'Gói giải pháp tinh gọn, triển khai nhanh, thấy kết quả sớm.',
      'Tự động hóa tác vụ lặp lại, tài liệu và báo cáo.',
    ],
  },
  ent: {
    name: 'Enterprise',
    sub: 'Doanh nghiệp lớn & tập đoàn',
    cells: [
      'Nhiều hệ thống chồng chéo, khó đồng bộ, yêu cầu kiểm soát & bảo mật.',
      'Khảo sát chuyên sâu, thiết kế tích hợp, triển khai theo giai đoạn.',
      'Agent tích hợp hệ thống nội bộ, quản trị dữ liệu và phân quyền.',
    ],
  },
};

export const services = [
  { no: '01', title: 'Tư vấn quản trị & chuyển đổi số', text: 'Khảo sát hiện trạng quản trị, thiết kế lộ trình và chọn hệ thống phần mềm phù hợp với giai đoạn của doanh nghiệp.' },
  { no: '02', title: 'Triển khai giải pháp AI', text: 'Xây ứng dụng tích hợp và AI agent theo bài toán riêng — từ thử nghiệm nhỏ đến vận hành thực tế.' },
  { no: '03', title: 'Đào tạo & Chia sẻ', text: 'Kinh nghiệm từ hơn 200 video và 10 khóa học — workshop cho đội ngũ quản lý về quản trị và ứng dụng AI.' },
  { no: '04', title: 'Coaching', text: 'Trò chuyện, đặt câu hỏi và hỗ trợ góc nhìn cho người trẻ về những lựa chọn trong công việc và cuộc sống.' },
];

export const process = [
  { step: 'Khảo sát', text: 'Hiểu hiện trạng, con người và dữ liệu.' },
  { step: 'Chẩn đoán', text: 'Xác định điểm nghẽn ưu tiên.' },
  { step: 'Thiết kế', text: 'Lộ trình hệ thống & AI phù hợp.' },
  { step: 'Triển khai', text: 'Làm nhanh, đo được, mở rộng dần.' },
];

export const events = [
  { title: 'Hướng dẫn triển khai KPI', cat: 'Quản trị hiệu suất', with: 'Base.vn × BSS Vietnam · Luân Võ', video: '1dZnD1q2KJU' },
  { title: 'Quản lý hiệu quả công việc', cat: 'Quản trị mục tiêu', with: 'Base × BCC', video: '' },
  { title: 'Demo Tour 08: Mô hình mẫu cho Doanh nghiệp Data Driven', cat: 'Data Driven', with: 'Thắng Trương · Hà Phùng · Luân Võ', video: 'RXwnlMKvpF0' },
  { title: 'Demo Tour 07: Kiến tạo trải nghiệm làm việc hạnh phúc', cat: 'Employee Happiness', with: 'Nghĩa Trần · Luân Võ', video: '' },
  { title: 'Thiết kế quy trình tinh gọn cho SMEs', cat: 'Quy trình', with: 'Luân Võ · Phúc Đinh', video: '' },
  { title: 'LeanHR – Triệt tiêu lãng phí & tạo đà tăng trưởng bằng nhân sự tinh gọn', cat: 'Lean HR', with: 'Vương Phi · Luân Võ', video: '' },
];

export const industries = [
  'Bán lẻ – Phân phối',
  'Xây dựng – Thiết kế – Thi công',
  'Sản xuất',
  'Dịch vụ',
  'Giáo dục',
  'Công nghệ',
];

// Tên khách hàng hiển thị dạng chữ — thay bằng logo khi có file.
export const customers = ['EVNGENCO3', 'NISO Corp', 'Cao su Chư Sê', 'Cao su Tây Ninh Siêm Riệp', 'Cao su Bình Thuận', 'Nệm Thuần Việt', 'ASPS', 'GS25', 'FTU', 'Tahico', 'Nhiệt điện Phú Mỹ'];

// Video câu chuyện khách hàng (YouTube ID từ website cũ)
export const stories = ['nMHJHx3Pr9E', '0CynoDSJBCg', 'S3W6duF7Qxo', 'rJhkSu9PdGg', '9krN6PsDqqg', 'h1TORbUSUDk'];

export const numbers = [
  { n: 200, label: 'Video đào tạo' },
  { n: 30, label: 'Phần mềm đã triển khai' },
  { n: 100, label: 'Dự án' },
  { n: 10, label: 'Khóa học' },
  { n: 500, label: 'Buổi tư vấn' },
];

// Dự án tiêu biểu đã đồng hành (bài viết báo chí / câu chuyện khách hàng)
export const projects = [
  {
    org: 'EVNGENCO3-OPS',
    demo: '#product-thuy-dien',
    image: '/projects/evngenco3.jpg',
    title: 'Kickoff hành trình chuyển đổi số và ứng dụng AI vào quản trị điều hành',
    summary: 'Trung tâm Dịch vụ Vận hành thuộc Tổng Công ty Phát điện 3 triển khai theo lộ trình cuốn chiếu: chuẩn hóa nhân sự và giao việc, sau đó số hóa 10 quy trình cốt lõi (đấu thầu, mua sắm, thanh toán…) cùng AI Agent.',
    industry: 'Năng lượng',
    scale: 'Enterprise',
    ai: true,
    source: 'Base.vn · Facebook',
    date: '',
    url: 'https://www.facebook.com/share/p/1LvnC9c75V/',
  },
  {
    org: 'NISO Corporation',
    image: '/projects/niso.jpg',
    title: 'Số hóa sự hạnh phúc – hệ sinh thái nhân sự toàn diện cho chuỗi F&B cao cấp',
    summary: 'Chủ sở hữu RuNam, Maxim\'s… triển khai giai đoạn 2 cho khoảng 600 nhân sự: tập trung dữ liệu, cải thiện tuyển dụng, đơn giản hóa chấm công – tính lương cho cửa hàng và nhà máy.',
    industry: 'F&B',
    scale: 'Enterprise',
    ai: false,
    source: 'Base.vn Customers',
    date: '08/2026',
    url: 'https://customers.base.vn/niso-corporation-x-base-vn-so-hoa-su-hanh-phuc-kien-tao-he-sinh-thai-nhan-su-toan-dien-cho-chuoi-fb-cao-cap/',
  },
  {
    org: 'Cao su Bình Thuận',
    demo: '#product-cao-su',
    image: '/projects/cao-su-binh-thuan.jpg',
    title: 'Kiến tạo không gian làm việc số, tăng tốc quản trị theo định hướng Tập đoàn Cao su Việt Nam',
    summary: 'Số hóa đấu thầu, mua hàng, báo cáo sản lượng mủ và nhân sự; định hướng ứng dụng AI để tự động hóa báo cáo và tính lương từ dữ liệu vận hành.',
    industry: 'Sản xuất',
    scale: 'Enterprise',
    ai: true,
    source: 'Base.vn Customers',
    date: '08/2026',
    url: 'https://customers.base.vn/cao-su-binh-thuan-kien-tao-khong-gian-lam-viec-so-tang-toc-quan-tri-theo-dinh-huong-tap-doan-cong-nghiep-cao-su-viet-nam/',
  },
  {
    org: 'Cao su Tây Ninh Siêm Riệp',
    demo: '#product-cao-su',
    image: '/projects/tay-ninh-siem-riep.jpg',
    title: 'Bứt phá chuyển đổi số với hệ thống quản trị Base',
    summary: 'Hệ thống quản trị hợp nhất chính thức vận hành ngày 26/11/2025 sau hơn 3 tháng triển khai — bước đi chiến lược trong hiện đại hóa doanh nghiệp.',
    industry: 'Sản xuất',
    scale: 'Enterprise',
    ai: false,
    source: 'news.vrg.vn',
    date: '12/2025',
    url: 'https://news.vrg.vn/hoat-dong-co-so/cao-su-tay-ninh-siem-riep-but-pha-chuyen-doi-so-voi-he-thong-quan-tri-base/',
  },
  {
    org: 'Cao su Chư Sê',
    demo: '#product-cao-su',
    image: '/projects/chu-se.jpg',
    title: 'Công bố vận hành chính thức hệ thống Base Platform',
    summary: 'Sau 2 tháng triển khai: số hóa nhiều quy trình, hoàn tất thiết lập HRM và bảng lương, đưa nền tảng vào sử dụng cho lãnh đạo và toàn thể nhân viên.',
    industry: 'Sản xuất',
    scale: 'Enterprise',
    ai: false,
    source: 'news.vrg.vn',
    date: '08/2025',
    url: 'https://news.vrg.vn/hoat-dong-co-so/cao-su-chu-se-cong-bo-van-hanh-chinh-thuc-he-thong-base-platform/',
  },
  {
    org: 'Nệm Thuần Việt',
    image: '/projects/nem-thuan-viet.jpg',
    title: 'Giải pháp số cho "nỗi đau" trong vận hành của doanh nghiệp',
    summary: 'Chuỗi 9 showroom, hơn 20 đại lý chuyển từ quản trị thác đổ sang quản trị theo mục tiêu (MBO), gỡ tắc nghẽn quy trình và nâng hiệu suất vận hành.',
    industry: 'Bán lẻ',
    scale: 'SME',
    ai: false,
    source: 'Base.vn Customers',
    date: '06/2024',
    url: 'https://customers.base.vn/giai-phap-so-cho-noi-dau-trong-van-hanh-cua-doanh-nghiep/',
  },
];

// Sản phẩm tiêu biểu xây bằng Claude (bản demo, dữ liệu mẫu)
export const productsIntro = {
  eyebrow: 'Sản phẩm & Demo · Built with Claude',
  title: 'Một số sản phẩm tiêu biểu tôi đã xây',
  sub: 'Mỗi sản phẩm bắt đầu từ một bài toán thật trong quá trình tư vấn. Tôi dùng Claude và Claude Code để dựng nhanh bản chạy được, thử với người dùng, rồi hoàn thiện. Dưới đây là vài ví dụ tiêu biểu — ngoài ra còn nhiều công cụ khác được xây riêng cho từng khách hàng.',
  note: 'Các bản demo dùng dữ liệu mẫu để minh họa, không phải hệ thống chính thức của khách hàng.',
};

export const products = [
  {
    slug: 'thuy-dien',
    name: 'Hệ thống Báo cáo Vận hành Thủy điện',
    industry: 'Năng lượng',
    scale: 'Enterprise',
    type: 'Web app nhập liệu & báo cáo',
    image: '/products/thuy-dien.jpg',
    url: 'https://luanvoco.github.io/EVN_BaoCaoVanHanhThuyDien/',
    problem: 'Báo cáo vận hành hằng ngày của nhà máy thủy điện tổng hợp từ nhiều nguồn — công tơ từng tổ máy, số liệu thủy văn, biểu đồ công suất — thường ghi chép thủ công, mất thời gian đối chiếu và dễ sai sót.',
    features: [
      'Nhập liệu theo 5 nhóm: Thông tin & A0 · Chỉ số công tơ · Thủy văn & hồ chứa · Biểu đồ công suất · Sự kiện & ký xác nhận',
      'Quản lý sản lượng đăng ký và huy động A0, công suất khả dụng cho từng tổ máy (TM1–TM4)',
      'Chỉ số công tơ xuất tuyến, đầu cực, tự dùng; mực nước thượng lưu, lưu lượng về hồ, dung tích hữu ích và lũy kế',
      'Biểu đồ công suất 48 chu kỳ × 30 phút cho P (MW) và Q (MVAR)',
      'Tự tính chỉ số theo thời gian thực: sản lượng thương mại so với kế hoạch ngày, % dung tích hữu ích hồ chứa',
      'Xuất báo cáo tổng hợp vận hành ngày chỉ với một thao tác',
    ],
    stack: ['Claude Code', 'HTML/JS', 'GitHub Pages'],
  },
  {
    slug: 'cao-su',
    name: 'App Nhập sản lượng mủ cao su từ Nông trường',
    industry: 'Nông nghiệp – Cao su',
    scale: 'Enterprise',
    type: 'Mobile web app cho nhân sự thực địa',
    image: '/products/cao-su.jpg',
    url: 'https://nong-truong-cao-su.vercel.app/',
    problem: 'Sản lượng mủ khai thác mỗi ngày ở nông trường thường ghi sổ tay rồi mới tổng hợp, quy đổi mủ khô bằng tay — số liệu về văn phòng chậm và khó kiểm soát.',
    features: [
      'Thiết kế cho điện thoại, dùng ngay tại lô cạo: chọn nông trường → chọn nhân sự thực địa',
      'Nhập sản lượng 4 loại mủ: mủ nước, mủ tạp, mủ đông, mủ dây (kg)',
      'Tự động quy đổi mủ quy khô theo chỉ số chuẩn (70%) ngay khi nhập',
      'Ghi nhận báo cáo cạo thay cho trường hợp nhân sự vắng',
      'Xác nhận & nộp số, hiển thị trạng thái đồng bộ trực tuyến',
      'Giao diện lớn, rõ, hạn chế thao tác để công nhân dùng dễ dàng',
    ],
    stack: ['Claude Code', 'React', 'Vercel'],
  },
  {
    slug: 'esg',
    name: 'ESG Governance Dashboard',
    industry: 'ESG – Quản trị',
    scale: 'Enterprise',
    type: 'Dashboard tích hợp đa hệ thống',
    image: '/products/esg.jpg',
    url: 'https://luanvoco.github.io/ESG_Dashboard/',
    problem: 'Doanh nghiệp cần theo dõi và báo cáo ESG theo chuẩn GRI, nhưng dữ liệu môi trường, nhân sự và quản trị nằm rải rác ở nhiều phần mềm khác nhau.',
    features: [
      'Điểm sức khỏe ESG tổng hợp và điểm riêng cho từng trụ cột E · S · G',
      'E — Môi trường (từ VertZéro): phát thải Scope 1/2/3, tỷ lệ quy trình số hóa, hợp đồng ký số',
      'S — Xã hội (từ Base HRM): tỷ lệ nữ và nữ quản lý, cảnh báo OT, mức hài lòng, tỷ lệ nghỉ việc',
      'G — Quản trị (từ Base Workflow, Sign): tuân thủ luồng phê duyệt, audit trail, thời gian duyệt, ký cam kết chính sách',
      'Xu hướng điểm ESG theo quý và trạng thái sẵn sàng kiểm toán theo từng chỉ tiêu GRI (205, 301, 305, 401, 403, 405)',
      'So sánh trung bình ngành, lịch sử audit, cấu hình chỉ số và xuất báo cáo GRI',
    ],
    stack: ['Claude Code', 'HTML/JS', 'Tích hợp dữ liệu'],
  },
  {
    slug: 'baby',
    name: 'Baby Tracker',
    industry: 'Ứng dụng cá nhân',
    scale: 'Side project',
    type: 'Progressive web app',
    image: '/products/baby-tracker.jpg',
    url: 'https://luanvoco.github.io/Nac/',
    problem: 'Một dự án cá nhân để chăm con: ghi lại sinh hoạt hằng ngày của bé nhanh, gọn, ngay trên điện thoại — cũng là nơi tôi thử nghiệm cách xây sản phẩm cho người dùng cuối cùng Claude.',
    features: [
      'Ghi nhanh bằng một chạm: ăn, ngủ, chơi, tắm, tã ướt, tã bẩn',
      'Xem theo ngày, lịch sử và theo dõi sức khỏe',
      'Lịch mẫu sinh hoạt và cài đặt riêng cho từng bé',
    ],
    stack: ['Claude Code', 'PWA', 'GitHub Pages'],
  },
];

export const moreProducts = {
  title: 'Và nhiều công cụ khác',
  sub: 'Được xây riêng theo bài toán của từng khách hàng và cho chính công việc tư vấn hằng ngày:',
  items: [
    'Tài liệu đề xuất giải pháp dạng HTML tương tác theo từng doanh nghiệp',
    'Deck thuyết trình và đào tạo xuất bản tại slides.luanvo.co',
    'Mockup giao diện phần mềm dựng trên dữ liệu thật của khách hàng',
    'Công cụ tạo báo giá PDF tự động theo cấu trúc gói dịch vụ',
    'Bộ Claude Skills cho đội ngũ sales: lập kế hoạch quý, soạn email, đề án',
    'Dashboard báo cáo theo ngành: sản xuất, năng lượng, bán lẻ, nhân sự',
  ],
};

export const buildProcess = [
  { step: 'Hiểu nghiệp vụ', text: 'Khảo sát quy trình, biểu mẫu và người dùng thực tế.' },
  { step: 'Dựng bản chạy được', text: 'Dùng Claude & Claude Code tạo bản mẫu trong vài ngày, không phải vài tháng.' },
  { step: 'Thử với người dùng', text: 'Đưa vào tay người dùng thật, chỉnh theo phản hồi.' },
  { step: 'Tích hợp & vận hành', text: 'Kết nối với hệ thống sẵn có, triển khai và hỗ trợ.' },
];

export const stack = ['Claude', 'Claude Code', 'Claude API', 'Claude Skills', 'React', 'Astro', 'GitHub', 'Cloudflare', 'Vercel'];
