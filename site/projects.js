const projects = [
  {
    "id": "material-request",
    "title": "Material Request",
    "category": "systems",
    "kind": [
      "COLLEGE THESIS",
      "SKRIPSI"
    ],
    "status": [
      "Academic application",
      "Aplikasi akademik"
    ],
    "stack": "LARAVEL / SQL / BLADE",
    "cover": "material",
    "source": "https://github.com/MrRobotdude/material-request",
    "summary": [
      "A clearer path from a material request to purchasing and warehouse fulfilment.",
      "Alur yang lebih jelas dari permintaan material hingga pembelian dan pemenuhan gudang."
    ],
    "story": [
      "A college thesis exploring how departments coordinate material needs, approvals, partial fulfilment, and warehouse records. I implemented the application, relational data model, permissions, master data, and reporting.",
      "Skripsi tentang koordinasi kebutuhan material, persetujuan, pemenuhan parsial, dan pencatatan gudang. Saya membangun aplikasi, model data relasional, hak akses, master data, dan laporan."
    ],
    "contribution": [
      "Request and item lifecycles; approval and cancellation; departmental roles; project/product management; dashboard aggregates. An isolated SQLite demonstration makes the academic work easier to reproduce.",
      "Siklus permintaan dan item, persetujuan dan pembatalan, peran departemen, pengelolaan proyek/produk, serta ringkasan dashboard. Demo SQLite terpisah memudahkan reproduksi aplikasi akademik."
    ],
    "evidence": [
      "Local production frontend build and 5 PHP tests passed. Checks cover guest access, permissions, seeded roles, chart endpoints, and fulfilment bounds. Screenshots use synthetic data. Production concurrency and record-level authorization need further review.",
      "Build frontend dan 5 tes PHP lulus. Pemeriksaan mencakup akses tamu, izin, peran demo, endpoint grafik, serta batas pemenuhan. Screenshot memakai data sintetis. Konkurensi dan otorisasi per rekaman masih perlu ditinjau."
    ],
    "gallery": [
      [
        "material-dashboard.png",
        "Local dashboard · synthetic demonstration records",
        "Dashboard lokal · data demo sintetis"
      ],
      [
        "material-requests.png",
        "Local request list · synthetic demonstration records",
        "Daftar permintaan lokal · data demo sintetis"
      ]
    ]
  },
  {
    "id": "riviu",
    "title": "Riviu",
    "category": "systems",
    "kind": [
      "ACADEMIC WRITING PILOT",
      "PILOT PENULISAN AKADEMIK"
    ],
    "status": [
      "Academic pilot / connected demo",
      "Pilot akademik / demo terhubung"
    ],
    "stack": "REACT / .NET / SQL SERVER",
    "cover": "riviu",
    "summary": [
      "Submission, review, and revision — organized around an academic workflow.",
      "Pengajuan, review, dan revisi dalam sebuah alur kerja akademik."
    ],
    "story": [
      "During my BINUS web development internship, I developed .NET backend and React frontend features for an academic-writing and revision-tracking pilot used by a professor. I integrated APIs and handed over the pilot to the next intern team. Quixell was an early trial before the project became Riviu, rather than a separate portfolio achievement.",
      "Saat magang pengembangan web di BINUS, saya mengembangkan backend .NET dan frontend React untuk pilot penulisan akademik dan pelacakan revisi yang digunakan seorang profesor. Saya mengintegrasikan API dan menyerahkan pilot ke tim magang berikutnya. Quixell merupakan percobaan awal sebelum bernama Riviu, sehingga ditampilkan sebagai riwayat proyek yang sama."
    ],
    "contribution": [
      "The repository family separates account, article, publication, review, and authentication responsibilities. Local configuration connects the React UI to these services without treating earlier Laravel experiments as additional microservices.",
      "Keluarga repositori memisahkan akun, artikel, publikasi, review, dan autentikasi. Konfigurasi lokal menghubungkan UI React dengan layanan tersebut; eksperimen Laravel sebelumnya merupakan implementasi alternatif."
    ],
    "evidence": [
      "Five .NET services and the React frontend build successfully. Demo login, role navigation, and authenticated master-data access work locally. A shared demo JWT is accepted across all four data services using dedicated synthetic databases. The local authentication prototype is single-user and in-memory; institutional SSO and the complete manuscript workflow are not verified, and some service controllers remain placeholders.",
      "Lima layanan .NET dan frontend React berhasil dibangun. Login demo, navigasi peran, dan akses master data berjalan secara lokal. JWT demo diterima empat layanan data dengan database sintetis terpisah. Autentikasi demo bersifat satu pengguna dalam memori; SSO institusi dan alur dokumen lengkap belum terverifikasi; beberapa controller masih berupa placeholder."
    ],
    "gallery": [
      [
        "riviu-demo.png",
        "Connected local master-data screen · synthetic records",
        "Master data lokal terhubung · data sintetis"
      ]
    ]
  },
  {
    "id": "borongboil",
    "title": "BorongBoil",
    "category": "business",
    "kind": [
      "FREELANCE WEB DELIVERY",
      "PENGEMBANGAN WEB FREELANCE"
    ],
    "status": [
      "Live website",
      "Website aktif"
    ],
    "stack": "LARAVEL BLADE / API INTEGRATION",
    "cover": "borong",
    "summary": [
      "Vehicle discovery across branches, with search, filters, and marketing referrals.",
      "Pencarian kendaraan lintas cabang dengan filter dan pelacakan referensi marketing."
    ],
    "story": [
      "A concurrent freelance engagement for BorongBoil.id, starting in October 2023. I built frontend interfaces and integrated APIs developed by a partner for the automotive website.",
      "Pekerjaan freelance untuk BorongBoil.id sejak Oktober 2023, berjalan bersamaan dengan pekerjaan lain. Saya membangun antarmuka frontend dan mengintegrasikan API yang dikembangkan mitra."
    ],
    "contribution": [
      "Vehicle search and filtering, listings across branches, referral tracking, and employee/role administration interfaces. My ownership is frontend delivery and integration; the partner backend is not claimed as my work.",
      "Pencarian dan filter kendaraan, daftar lintas cabang, referensi marketing, serta antarmuka administrasi karyawan/peran. Kontribusi saya adalah frontend dan integrasi; backend mitra bukan klaim pekerjaan saya."
    ],
    "evidence": [
      "Public homepage and vehicle catalogue verified at BorongBoil.id on 12 October 2026. The gallery shows the actual live website. My contribution is the Laravel Blade frontend and partner API integration; production administration and customer workflows are outside this public demonstration.",
      "Homepage dan katalog kendaraan publik diverifikasi di BorongBoil.id pada 12 Oktober 2026. Galeri menampilkan website live. Kontribusi saya adalah frontend Laravel Blade dan integrasi API mitra; administrasi produksi dan alur pelanggan tidak termasuk demo publik."
    ],
    "demo": "https://borongboil.id/",
    "gallery": [
      [
        "borong-live.jpg",
        "Live homepage · captured 12 October 2026",
        "Homepage live · 12 Oktober 2026"
      ],
      [
        "borong-catalogue.jpg",
        "Live public vehicle catalogue · 12 October 2026",
        "Katalog kendaraan publik live · 12 Oktober 2026"
      ]
    ]
  },
  {
    "id": "ats",
    "title": "ATS Company Website",
    "category": "business",
    "kind": [
      "COMPANY PRESENTATION",
      "WEBSITE PERUSAHAAN"
    ],
    "status": [
      "Public company presentation",
      "Website perusahaan publik"
    ],
    "stack": "REACT / STATIC HOSTING",
    "cover": "ats",
    "demo": "ats/",
    "source": "https://github.com/MrRobotdude/MrRobotdude.github.io/tree/main/site/ats",
    "summary": [
      "A public catalogue for HVAC products, services, and company experience.",
      "Katalog publik produk HVAC, layanan, dan pengalaman perusahaan."
    ],
    "story": [
      "A company-facing website for PT. Alam Tehnik Semesta, developed around its existing identity and product content. The personal portfolio and company site now have separate entry points.",
      "Website PT. Alam Tehnik Semesta dengan identitas dan konten produk perusahaan. Portofolio pribadi dan website perusahaan kini memiliki halaman masuk terpisah."
    ],
    "contribution": [
      "Company information, product and service pages, project showcase, responsive navigation, and contact integration. The interface builds on Now UI Kit React; template and company credits are preserved.",
      "Informasi perusahaan, halaman produk/layanan, proyek, navigasi responsif, serta integrasi kontak. Antarmuka memakai Now UI Kit React; kredit template dan perusahaan dipertahankan."
    ],
    "evidence": [
      "Production build and API regression tests pass. The company presentation is available under /ats/. Contact submission only becomes available with a configured backend and CAPTCHA; static hosting does not run the Go service.",
      "Build produksi dan tes regresi API lulus. Website perusahaan tersedia di /ats/. Form kontak hanya aktif jika backend dan CAPTCHA terkonfigurasi; hosting statis tidak menjalankan layanan Go."
    ],
    "gallery": [
      [
        "ats-home.png",
        "Actual company presentation homepage",
        "Homepage website perusahaan"
      ]
    ]
  },
  {
    "id": "stockmate",
    "title": "StockMate",
    "category": "mobile",
    "kind": [
      "ONGOING PERSONAL PROJECT",
      "PROYEK PRIBADI BERJALAN"
    ],
    "status": [
      "Work in progress",
      "Dalam pengembangan"
    ],
    "stack": "C# / .NET MAUI / PYTHON",
    "cover": "stock",
    "source": "https://github.com/MrRobotdude/StockMate",
    "summary": [
      "Portfolio records, market snapshots, and explainable rule-based analysis.",
      "Catatan portofolio, snapshot pasar, dan analisis berbasis aturan yang dapat dijelaskan."
    ],
    "story": [
      "An ongoing personal Android project for Indonesian stock portfolio records and market analysis. Current achievements are data import, portfolio reconciliation, scanning, recovery, and explanations.",
      "Proyek Android pribadi untuk catatan portofolio saham Indonesia dan analisis pasar. Pekerjaan saat ini meliputi impor data, rekonsiliasi, pemindaian, pemulihan, dan penjelasan."
    ],
    "contribution": [
      "CSV/TSV and supported statement import; position/cash/fee tracking; Android foreground scanning; cached snapshots and retry/checkpoint recovery; strategy versioning and a Python walk-forward trainer.",
      "Impor CSV/TSV dan format laporan yang didukung, pencatatan posisi/kas/biaya, pemindaian foreground Android, cache dan retry/checkpoint, versi strategi, serta trainer Python walk-forward."
    ],
    "evidence": [
      "Android Debug build passed, with existing warnings, and three trainer regression tests passed. A custom predictive model is a future milestone. Device behavior, model performance, and investment returns are not claimed as validated.",
      "Build Android Debug lulus dengan peringatan lama dan tiga tes regresi trainer lulus. Model prediktif sendiri masih menjadi target. Perilaku perangkat, performa model, dan hasil investasi belum diklaim tervalidasi."
    ],
    "gallery": []
  },
  {
    "id": "localez",
    "title": "Localez",
    "category": "mobile",
    "kind": [
      "ANDROID CLASS PROJECT",
      "PROYEK KELAS ANDROID"
    ],
    "status": [
      "Classroom application",
      "Aplikasi kelas"
    ],
    "stack": "JAVA / FIREBASE / RETROFIT",
    "cover": "news",
    "source": "https://github.com/MrRobotdude/Localez",
    "summary": [
      "A category-based news reader with shared loading and recovery states.",
      "Pembaca berita per kategori dengan status loading dan pemulihan yang konsisten."
    ],
    "story": [
      "A short Android programming class project exploring authentication, news APIs, article cards, and in-app reading. Historical academic documentation and attribution are retained.",
      "Proyek singkat kelas Android yang mengeksplorasi autentikasi, API berita, kartu artikel, dan pembacaan dalam aplikasi. Dokumentasi dan kredit akademik lama dipertahankan."
    ],
    "contribution": [
      "Java Android UI, Firebase sign-in, Retrofit requests, Glide images, shared loading/error/empty/retry behavior, and article navigation. API configuration stays local.",
      "UI Android Java, login Firebase, request Retrofit, gambar Glide, loading/error/kosong/retry yang konsisten, serta navigasi artikel. Konfigurasi API disimpan secara lokal."
    ],
    "evidence": [
      "Debug APK and the original JVM smoke test pass. Current on-device UI, Firebase sign-in, and live news access require separate verification with owned service configuration.",
      "APK Debug dan tes JVM awal lulus. UI perangkat, login Firebase, serta berita live perlu verifikasi dengan konfigurasi layanan sendiri."
    ],
    "gallery": []
  },
  {
    "id": "underthesea",
    "title": "UnderTheSea",
    "category": "mobile",
    "kind": [
      "DESKTOP TRAINING",
      "PELATIHAN DESKTOP"
    ],
    "status": [
      "Scoped reconstructed demo",
      "Demo rekonstruksi terbatas"
    ],
    "stack": "WPF / DAPPER / SQL SERVER",
    "cover": "tickets",
    "source": "https://github.com/MrRobotdude/UnderTheSea",
    "summary": [
      "A desktop operations exercise, with a reconstructed ticketing demonstration.",
      "Latihan operasional desktop dengan demo ticketing hasil rekonstruksi."
    ],
    "story": [
      "A WPF training project organizing views and view models for different operational departments. The original database is lost, so the portfolio demonstration is deliberately scoped.",
      "Proyek pelatihan WPF untuk memisahkan view dan view model berbagai departemen operasional. Database asli hilang, sehingga cakupan demo portofolio dibatasi dengan jelas."
    ],
    "contribution": [
      "Caliburn.Micro conventions and Dapper data access. A separate synthetic LocalDB schema supports attraction login, ticket sales, lookup, cancellation, and admission checks.",
      "Konvensi Caliburn.Micro dan akses data Dapper. Schema LocalDB sintetis mendukung login atraksi, penjualan tiket, pencarian, pembatalan, serta pemeriksaan masuk."
    ],
    "evidence": [
      "WPF build and LocalDB integration checks pass. The reconstruction covers ticketing; hotel, finance, HR, and other workflows are not restored. Desktop UI interaction still needs manual verification.",
      "Build WPF dan pemeriksaan integrasi LocalDB lulus. Rekonstruksi mencakup ticketing; hotel, keuangan, HR, dan alur lain belum dipulihkan. Interaksi UI desktop masih perlu pemeriksaan manual."
    ],
    "gallery": []
  },
  {
    "id": "correctionapp",
    "title": "CorrectionApp",
    "tag": "REACT / NODE / MONGODB",
    "summary": [
      "Course correction criteria and score workflows.",
      "Kriteria koreksi mata kuliah dan alur penilaian."
    ],
    "story": [
      "A separate assessment helper containing its frontend and backend. The standalone CorrectionApp_backend repository is an earlier subset; it is not Riviu’s .NET service layer.",
      "Aplikasi penilaian terpisah dengan frontend dan backend. CorrectionApp_backend adalah versi awal, bukan bagian layanan .NET Riviu."
    ],
    "evidence": [
      "React production demo build and synthetic MongoDB criteria create/read/delete passed. The demo interface saves and deletes criteria; legacy file-execution endpoints are disabled by default. Institutional authentication and complete correction workflows remain unverified.",
      "Build demo React serta CRUD kriteria dengan MongoDB sintetis lulus. UI menyimpan dan menghapus kriteria; endpoint eksekusi file dinonaktifkan secara default. Autentikasi institusi dan alur koreksi lengkap belum terverifikasi."
    ],
    "source": "https://github.com/MrRobotdude/CorrectionApp",
    "category": "systems",
    "kind": [
      "ASSESSMENT TOOL",
      "ALAT PENILAIAN"
    ],
    "status": [
      "Connected local demonstration",
      "Demonstrasi lokal terhubung"
    ],
    "stack": "REACT / NODE / MONGODB",
    "cover": "correction",
    "gallery": [
      [
        "correction-demo.png",
        "Local criteria create/read/delete demonstration · synthetic records",
        "Demo kriteria create/read/delete lokal · data sintetis"
      ]
    ]
  },
  {
    "id": "knights-vow",
    "title": "Knight’s Vow",
    "tag": "UNITY / C#",
    "summary": [
      "Combat, saves, UI, and map-generation scripts.",
      "Script pertarungan, save, UI, dan pembuatan peta."
    ],
    "story": [
      "A Unity game training project with C# scripts and a preserved Windows build.",
      "Proyek pelatihan game Unity dengan script C# dan build Windows yang dipertahankan."
    ],
    "evidence": [
      "The local original design PDF matches the game name and source systems. Historical Windows builds are preserved, including one named Knight’s Vow.exe on this PC. The complete Unity editor project and scenes were not found in the searched training folders. Gameplay screenshots and a reproducible editor build remain unavailable.",
      "PDF desain lokal sesuai dengan nama game dan sistem pada source. Build Windows historis tersimpan, termasuk Knight’s Vow.exe di PC. Proyek editor Unity lengkap dan scene tidak ditemukan pada folder pelatihan yang diperiksa. Screenshot gameplay dan build editor yang dapat direproduksi belum tersedia."
    ],
    "source": "https://github.com/MrRobotdude/Knights-Vow",
    "category": "systems",
    "kind": [
      "GAME DEVELOPMENT",
      "PENGEMBANGAN GAME"
    ],
    "status": [
      "Preserved Unity training project",
      "Proyek pelatihan Unity tersimpan"
    ],
    "stack": "UNITY / C#",
    "cover": "game",
    "contribution": [
      "C# scripts cover character movement and stats, sword damage, enemy behavior, item/potion UI, saves, scene transitions, and map generation. The original Knight’s Vow design PDF confirms the third-person fantasy RPG brief. Source inspection establishes feature presence, not a fresh gameplay test.",
      "Script C# mencakup gerakan/statistik karakter, damage pedang, perilaku musuh, UI item/potion, save, perpindahan scene, dan pembuatan map. PDF desain asli memastikan brief RPG fantasi third-person. Keberadaan fitur diperiksa melalui source, belum diuji ulang lewat gameplay."
    ],
    "gallery": []
  }
];
const learningProjects = [
  {
    "id": "yourjube",
    "title": "youRJube",
    "tag": "ANGULAR / GO / GRAPHQL",
    "summary": [
      "A video-platform training project.",
      "Proyek pelatihan platform video."
    ],
    "story": [
      "The TPAWeb repository includes an Angular frontend and Go GraphQL/PostgreSQL backend. The root pair is the preferred source; Rev1 is a historical snapshot.",
      "TPAWeb berisi frontend Angular dan backend Go GraphQL/PostgreSQL. Pasangan root menjadi source utama; Rev1 adalah snapshot historis."
    ],
    "evidence": [
      "Repository roles and configuration are documented. Firebase identity, database schema, and media storage remain setup requirements.",
      "Peran repositori dan konfigurasi didokumentasikan. Identitas Firebase, schema database, dan penyimpanan media masih perlu disiapkan."
    ],
    "gallery": []
  },
  {
    "id": "watchnow",
    "title": "WatchNow",
    "tag": "JAVA / ANDROID",
    "summary": [
      "Movie discovery through now-playing and coming-soon lists.",
      "Eksplorasi film melalui daftar tayang dan segera hadir."
    ],
    "story": [
      "Android movie-list and detail screens using a configurable movie API.",
      "Daftar dan detail film Android menggunakan API film yang dapat dikonfigurasi."
    ],
    "evidence": [
      "Local API configuration is required; device navigation and live API behavior need verification.",
      "Konfigurasi API lokal diperlukan; navigasi perangkat dan API live perlu diverifikasi."
    ],
    "gallery": []
  },
  {
    "id": "barengin",
    "title": "Barengin",
    "tag": "JAVA / FIREBASE",
    "summary": [
      "Profile, orders, messaging, and chatroom exploration.",
      "Eksplorasi profil, pesanan, pesan, dan chatroom."
    ],
    "story": [
      "An Android learning project with authentication and communication screens.",
      "Proyek pembelajaran Android dengan autentikasi dan layar komunikasi."
    ],
    "evidence": [
      "Requires owned Firebase configuration and on-device testing.",
      "Memerlukan konfigurasi Firebase sendiri dan pengujian perangkat."
    ],
    "gallery": []
  },
  {
    "id": "insogram",
    "title": "InSOgram",
    "tag": "REACT / SOCIAL UI",
    "summary": [
      "A photo-sharing interface built from an original training brief.",
      "Antarmuka berbagi foto berdasarkan brief pelatihan asli."
    ],
    "story": [
      "The local InSOgram.docx specification names a photo/video social platform. The repository contains the matching React interface; the brief also requests Go GraphQL, PostgreSQL, Redis, and OAuth, which must not be assumed complete from this frontend.",
      "Spesifikasi lokal InSOgram.docx menyebut platform sosial foto/video. Repositori berisi UI React yang sesuai; Go GraphQL, PostgreSQL, Redis, dan OAuth pada brief belum dapat dianggap selesai dari frontend ini."
    ],
    "evidence": [
      "Specification and frontend identity matched. Complete backend and end-to-end social features remain unverified.",
      "Identitas spesifikasi dan frontend cocok. Backend lengkap dan fitur sosial menyeluruh belum diverifikasi."
    ],
    "gallery": []
  },
  {
    "id": "creditapp",
    "title": "CreditApp",
    "tag": "JAVA / ANDROID",
    "summary": [
      "An Android prototype with login, profile, calendar, and settings.",
      "Prototipe Android dengan login, profil, kalender, dan pengaturan."
    ],
    "story": [
      "TPAAndroidDP contains CreditApp. Its Android application label and package match the local CreditApp folder. The available publishing guide is generic, so a detailed original product specification has not yet been confirmed.",
      "TPAAndroidDP berisi CreditApp. Label aplikasi Android dan package cocok dengan folder CreditApp lokal. Panduan publikasi yang ditemukan bersifat umum, sehingga spesifikasi produk asli yang detail belum dipastikan."
    ],
    "evidence": [
      "Debug APK build passed after refreshing the legacy Gradle toolchain. Fixed the profile navigation opening the calendar. Application name and activities match local source; device behavior and detailed product-specification coverage remain unverified.",
      "Build APK Debug lulus setelah pembaruan toolchain Gradle lama. Navigasi profil yang membuka kalender telah diperbaiki. Nama aplikasi dan activity sesuai source lokal; perilaku perangkat dan cakupan spesifikasi produk detail belum diverifikasi."
    ],
    "gallery": []
  }
];
