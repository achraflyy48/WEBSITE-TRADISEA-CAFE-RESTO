/* =========================================================
   TRADISEA — Main JavaScript
   - Multi-language (ID / EN)
   - Sticky navbar with scroll
   - Active nav links
   - Mobile hamburger menu
   - Scroll reveal animations
   ========================================================= */

// -------- LANGUAGE DATA --------
const LANG = {
  id: {
    nav_about:    'Tentang Kami',
    nav_resto:    'Resto',
    nav_kamar:    'Kamar',
    nav_kebun:    'Kebun',
    nav_komitmen: 'Komitmen Kami',
    nav_kunjungi: 'Kunjungi Kami',

    hero_eyebrow: 'Situbondo, Jawa Timur',
    hero_tagline: 'Berawal dari Tradisi\nMenuju Inovasi Berkelanjutan',
    hero_sub:     'Cafe & Resto · Penginapan · Kebun · Keberlanjutan',
    hero_cta1:    'Jelajahi Layanan',
    hero_cta2:    'Kunjungi Kami',

    about_label:  'Tentang Kami',
    about_title:  'Tradisi & Laut,\nSatu Nama',
    about_p1:     'TradiSea lahir dari perpaduan dua kata yang sarat makna: <strong>Tradition</strong> dan <strong>Sea</strong>. Sebuah nama yang merangkum warisan keluarga, cita rasa lokal, kedekatan dengan alam pesisir, dan komitmen kami terhadap masa depan yang berkelanjutan.',
    about_p2:     'Kami bukan sekadar tempat makan dan menginap. TradiSea adalah ruang di mana tradisi bertemu inovasi di setiap hidangan yang kami sajikan, di setiap sudut kamar yang kami rawat, dan di setiap jengkal kebun yang kami jaga.',
    about_p3:     'Di sini, cerita keluarga menjadi resep, bangunan lama menjadi kenangan yang hidup, dan nilai-nilai lokal menjadi kekuatan yang membawa kami ke depan.',
    val1_title:   'Tradisi',
    val1_desc:    'Resep turun-temurun, bangunan bersejarah, dan budaya yang kami jaga dengan penuh rasa hormat.',
    val2_title:   'Keberlanjutan',
    val2_desc:    'Dari panel surya hingga kebun mandiri, setiap keputusan kami mempertimbangkan alam.',
    val3_title:   'Komunitas',
    val3_desc:    'Bersama nelayan, petani, dan UMKM lokal tumbuh bersama adalah cara kami berbisnis.',
    val4_title:   'Kehangatan',
    val4_desc:    'Suasana yang terasa seperti rumah sendiri, dengan keramahan yang tulus dari hati.',

    resto_label:       'Restoran',
    resto_title:       'Dapur yang Berakar\npada Nusantara',
    resto_p1:          'Setiap hidangan di TradiSea adalah perjalanan dari kebun dan perairan sekitar Situbondo, langsung ke meja Anda. Bahan-bahan segar kami ambil dari nelayan dan petani lokal yang telah menjadi bagian dari keluarga besar TradiSea.',
    resto_p2:          'Resep kami mengikuti jejak warisan kuliner Nusantara yang diwariskan turun-temurun, diperkaya dengan bahan dari peternakan ayam cage-free dan kebun sayuran kami sendiri.',
    farm_badge:        'Farm-to-Table',
    resto_img_caption: 'Cita rasa Nusantara dari bahan lokal',
    resto_f1:          'Bahan segar dari nelayan & petani lokal',
    resto_f2:          'Resep warisan kuliner Nusantara',
    resto_f3:          'Didukung hasil kebun & peternakan sendiri',
    resto_f4:          'Rantai nilai lokal yang berkelanjutan',
    resto_cta:         'Hubungi Kami',

    kamar_label:       'Penginapan',
    kamar_title:       'Menginap di Antara\nJejak Waktu',
    kamar_p1:          'Kamar-kamar di TradiSea bukan sekadar tempat tidur ini adalah ruang yang merawat ingatan. Bangunan lama yang dipugar dengan cermat mempertahankan karakternya yang historis, dipadukan dengan sentuhan desain modern yang nyaman.',
    kamar_p2:          'Kayu lawasan menjadi elemen utama yang menceritakan masa lalu. Batik Situbondo menghiasi setiap sudut sebagai penghormatan pada budaya lokal. Setiap malam menginap adalah bagian dari pelestarian, bukan sekadar istirahat.',
    heritage_badge:    'Heritage Stay',
    kamar_img_caption: 'Hangat, berkarakter, penuh cerita',
    kamar_f1:          'Bangunan bersejarah yang dipugar dengan karakter',
    kamar_f2:          'Elemen kayu lawasan yang autentik',
    kamar_f3:          'Dekorasi batik Situbondo terkurasi',
    kamar_f4:          'Pengalaman menginap yang personal & berkarakter',
    kamar_cta:         'Informasi Kamar',

    kebun_label:       'Kebun & Peternakan',
    kebun_title:       'Dari Kebun Kami,\nke Piring Anda',
    kebun_p1:          'Setiap hidangan yang kami sajikan memiliki cerita tentang bagaimana bahan-bahannya ditumbuhkan. Kebun sayuran kami dirawat sesuai kondisi alam setempat — sederhana, bertanggung jawab, dan selaras.',
    kebun_p2:          'Peternakan ayam petelur kami beroperasi secara <em>cage-free</em>, dan kami bangga menjadi anggota <strong>Indonesia Cage-Free Association (ICFA)</strong> komitmen nyata bahwa kesejahteraan hewan adalah bagian dari nilai kami.',
    icfa_badge:        'Anggota ICFA',
    kebun_img_caption: 'Tumbuh selaras dengan alam',
    kebun_f1:          'Peternakan ayam petelur cage-free',
    kebun_f2:          'Kebun sayuran sesuai kondisi lingkungan lokal',
    kebun_f3:          'Anggota Indonesia Cage-Free Association (ICFA)',
    kebun_f4:          'Hubungan selaras dengan alam dan komunitas sekitar',

    komitmen_label:  'Komitmen Kami',
    komitmen_title:  'Keberlanjutan Adalah Cara Kami\nMenghormati Alam dan Sesama',
    komitmen_intro:  'Setiap keputusan bisnis kami berpijak pada tiga pilar yang saling menguatkan.',
    pillar1_title:   'Lingkungan',
    pillar1_i1:      'Efisiensi energi & panel surya (PLTS atap)',
    pillar1_i2:      'Material kayu daur ulang (lawasan)',
    pillar1_i3:      'Peternakan cage-free & kebun mandiri',
    pillar1_i4:      'Bahan pangan lokal untuk mengurangi jejak karbon',
    pillar2_title:   'Sosial',
    pillar2_i1:      'Lapangan kerja & pelatihan bagi warga lokal',
    pillar2_i2:      'Upah layak untuk seluruh karyawan',
    pillar2_i3:      'Dukungan untuk nelayan, petani, dan keluarga mereka',
    pillar2_i4:      'Bantuan untuk anak yatim dan dhuafa',
    pillar3_title:   'Tata Kelola',
    pillar3_i1:      'Operasional sesuai regulasi yang berlaku',
    pillar3_i2:      'Setiap langkah dapat dipertanggungjawabkan',
    pillar3_i3:      'Transparansi sebagai pondasi kepercayaan',
    komitmen_closing: 'Setiap pembelian adalah kontribusi pada ekonomi lokal. Setiap hidangan adalah perayaan tradisi. Setiap malam menginap adalah bagian dari pelestarian budaya dan lingkungan.',

    visit_label:  'Kunjungi Kami',
    visit_title:  'Kami Menantikan\nKehadiran Anda',
    visit_intro:  'Hubungi kami untuk reservasi, informasi layanan, atau sekadar ingin tahu lebih banyak tentang TradiSea.',
    wa_label:     'WhatsApp',
    email_label:  'Email',
    loc_label:    'Lokasi',

    footer_copy: '© 2025 TradiSea. Situbondo, Jawa Timur, Indonesia.',
  },

  en: {
    nav_about:    'About Us',
    nav_resto:    'Restaurant',
    nav_kamar:    'Rooms',
    nav_kebun:    'Garden',
    nav_komitmen: 'Our Commitment',
    nav_kunjungi: 'Visit Us',

    hero_eyebrow: 'Situbondo, East Java',
    hero_tagline: 'Rooted in Tradition,\nGrowing toward Sustainable Innovation',
    hero_sub:     'Café & Restaurant · Accommodation · Garden · Sustainability',
    hero_cta1:    'Explore Our Services',
    hero_cta2:    'Visit Us',

    about_label:  'About Us',
    about_title:  'Tradition & Sea,\nOne Name',
    about_p1:     'TradiSea was born from two words rich in meaning: <strong>Tradition</strong> and <strong>Sea</strong> a name that captures family heritage, local flavors, a deep connection with coastal nature, and our commitment to a sustainable future.',
    about_p2:     'We are more than just a place to eat and stay. TradiSea is a space where tradition meets innovation in every dish we serve, in every corner of the rooms we tend, and in every inch of the garden we nurture.',
    about_p3:     'Here, family stories become recipes, old buildings become living memories, and local values become the strength that carries us forward.',
    val1_title:   'Tradition',
    val1_desc:    'Generations-old recipes, historic buildings, and a culture we preserve with deep respect.',
    val2_title:   'Sustainability',
    val2_desc:    'From solar panels to a self-sustaining garden, every decision we make considers nature.',
    val3_title:   'Community',
    val3_desc:    'Together with local fishermen, farmers, and SMEs growing together is how we do business.',
    val4_title:   'Warmth',
    val4_desc:    'An atmosphere that feels like home, with genuine hospitality from the heart.',

    resto_label:       'Restaurant',
    resto_title:       'A Kitchen Rooted\nin the Archipelago',
    resto_p1:          'Every dish at TradiSea is a journey from the gardens and waters around Situbondo, straight to your table. Our fresh ingredients come from local fishermen and farmers who have become part of the TradiSea family.',
    resto_p2:          'Our recipes follow the trail of Nusantara culinary heritage passed down through generations, enriched with produce from our own cage-free poultry farm and vegetable garden.',
    farm_badge:        'Farm-to-Table',
    resto_img_caption: 'Archipelago flavors from local ingredients',
    resto_f1:          'Fresh ingredients from local fishermen & farmers',
    resto_f2:          'Nusantara culinary heritage recipes',
    resto_f3:          'Supported by our own garden & farm produce',
    resto_f4:          'Sustainable local value chain',
    resto_cta:         'Contact Us',

    kamar_label:       'Accommodation',
    kamar_title:       'Sleep Among\nthe Traces of Time',
    kamar_p1:          'The rooms at TradiSea are more than a place to sleep they are spaces that preserve memory. Carefully restored historic buildings retain their historical character while offering modern comfort.',
    kamar_p2:          'Reclaimed wood (kayu lawasan) is the key element narrating the past. Situbondo batik adorns every corner as a tribute to local culture. Every night spent here is part of preservation, not just rest.',
    heritage_badge:    'Heritage Stay',
    kamar_img_caption: 'Warm, characterful, full of stories',
    kamar_f1:          'Historic building restored with authentic character',
    kamar_f2:          'Authentic reclaimed wood elements',
    kamar_f3:          'Curated Situbondo batik decorations',
    kamar_f4:          'Personal & characterful stay experience',
    kamar_cta:         'Room Information',

    kebun_label:       'Garden & Farm',
    kebun_title:       'From Our Garden\nto Your Plate',
    kebun_p1:          'Every dish we serve carries a story about how its ingredients were grown. Our vegetable garden is tended in harmony with the local environment simple, responsible, and in balance.',
    kebun_p2:          'Our egg-laying hens are raised <em>cage-free</em>, and we are proud members of the <strong>Indonesia Cage-Free Association (ICFA)</strong> a real commitment that animal welfare is part of our values.',
    icfa_badge:        'ICFA Member',
    kebun_img_caption: 'Growing in harmony with nature',
    kebun_f1:          'Cage-free egg-laying poultry farm',
    kebun_f2:          'Vegetable garden adapted to local conditions',
    kebun_f3:          'Member of Indonesia Cage-Free Association (ICFA)',
    kebun_f4:          'In harmony with nature and the surrounding community',

    komitmen_label:  'Our Commitment',
    komitmen_title:  'Sustainability Is How We\nHonor Nature and One Another',
    komitmen_intro:  'Every business decision we make rests on three pillars that reinforce each other.',
    pillar1_title:   'Environment',
    pillar1_i1:      'Energy efficiency & rooftop solar panels',
    pillar1_i2:      'Recycled reclaimed wood materials',
    pillar1_i3:      'Cage-free farm & self-sustaining garden',
    pillar1_i4:      'Local produce to reduce carbon footprint',
    pillar2_title:   'Social',
    pillar2_i1:      'Employment & training for local residents',
    pillar2_i2:      'Fair wages for all employees',
    pillar2_i3:      'Support for fishermen, farmers, and their families',
    pillar2_i4:      'Assistance for orphans and the underprivileged',
    pillar3_title:   'Governance',
    pillar3_i1:      'Operations in accordance with applicable regulations',
    pillar3_i2:      'Every step is fully accountable',
    pillar3_i3:      'Transparency as the foundation of trust',
    komitmen_closing: 'Every purchase is a contribution to the local economy. Every dish is a celebration of tradition. Every night spent here is part of preserving culture and the environment.',

    visit_label:  'Visit Us',
    visit_title:  'We Look Forward\nto Welcoming You',
    visit_intro:  'Contact us for reservations, service inquiries, or simply to learn more about TradiSea.',
    wa_label:     'WhatsApp',
    email_label:  'Email',
    loc_label:    'Location',

    footer_copy: '© 2025 TradiSea. Situbondo, East Java, Indonesia.',
  }
};

// -------- STATE --------
let currentLang = 'id';

// -------- APPLY LANGUAGE --------
function applyLanguage(lang) {
  currentLang = lang;
  const data = LANG[lang];

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (!data[key]) return;

    const val = data[key];

    // Handle line breaks in titles
    if (el.tagName.match(/^H[1-6]$/) || el.classList.contains('hero-tagline')) {
      el.innerHTML = val.replace(/\n/g, '<br/>');
    } else {
      el.innerHTML = val;
    }
  });

  // Update lang attribute on <html>
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';

  // Update toggle button appearance
  const idSpan = document.querySelector('.lang-id');
  const enSpan = document.querySelector('.lang-en');
  if (lang === 'id') {
    idSpan.classList.add('active-lang');
    enSpan.classList.remove('active-lang');
  } else {
    enSpan.classList.add('active-lang');
    idSpan.classList.remove('active-lang');
  }

  // Update page title
  document.title = lang === 'id'
    ? 'TradiSea'
    : 'TradiSea';
}

// -------- NAVBAR SCROLL --------
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// -------- ACTIVE NAV LINK --------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// -------- HAMBURGER MENU --------
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinksEl.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close menu on nav link click
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close on backdrop click
document.addEventListener('click', e => {
  if (navLinksEl.classList.contains('open') &&
      !navLinksEl.contains(e.target) &&
      !hamburger.contains(e.target)) {
    navLinksEl.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

// -------- SCROLL REVEAL --------
const revealEls = document.querySelectorAll(
  '.value-card, .service-text, .service-visual, .pillar-card, .contact-card, .about-text, .about-values, .komitmen-header'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// -------- LANG TOGGLE --------
document.getElementById('langToggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'id' ? 'en' : 'id');
});

// -------- SCROLL EVENT --------
window.addEventListener('scroll', () => {
  handleNavbarScroll();
  updateActiveNav();
}, { passive: true });

// (Hero background kini menggunakan video, jadi slideshow dihapus)

// -------- INIT --------

handleNavbarScroll();
updateActiveNav();
applyLanguage('id');

