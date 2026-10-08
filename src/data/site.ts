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
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Sự kiện', href: '#events' },
  { label: 'Dự án', href: '#projects' },
  { label: 'Khách hàng', href: '#customers' },
  { label: 'Liên hệ', href: '#contact' },
];

export const hero = {
  tag: 'Tư vấn quản trị & Giải pháp AI',
  titleA: 'Đồng hành cùng doanh nghiệp Việt vận hành',
  titleHL: 'thông minh hơn',
  titleB: 'với Công nghệ & AI',
  lead: 'Từ SME đến Enterprise — luanvo.co giúp doanh nghiệp chẩn đoán hiện trạng quản trị, chọn đúng hệ thống phần mềm và ứng dụng AI vào vận hành hằng ngày.',
  stats: [
    { n: 300, suffix: '+', label: 'Doanh nghiệp đã tư vấn' },
    { n: 7000, suffix: '+', label: 'Giờ làm việc cùng khách hàng' },
    { n: 200, suffix: '+', label: 'Video đào tạo' },
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
