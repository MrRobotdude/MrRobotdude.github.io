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
        "material-dashboard.jpg",
        "Request and item dashboard · synthetic data",
        "Dashboard permintaan/item · data sintetis"
      ],
      [
        "material-requests.jpg",
        "Searchable requests with lifecycle states",
        "Permintaan dengan pencarian dan status"
      ],
      [
        "material-items.jpg",
        "Item quantities, fulfilment and cost totals",
        "Jumlah item, pemenuhan, dan total biaya"
      ],
      [
        "material-warehouse.jpg",
        "Warehouse releases and remaining quantities",
        "Riwayat pengeluaran gudang dan sisa jumlah"
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
      "An academic workspace with role-based navigation and clear administration tools.",
      "Workspace akademik dengan navigasi peran dan alat administrasi yang jelas."
    ],
    "story": [
      "Built during my BINUS web development internship, Riviu supports an academic-writing and revision-tracking pilot. I developed React and .NET features, integrated services, and handed the project over to the next intern team.",
      "Dibangun saat magang pengembangan web di BINUS, Riviu mendukung pilot penulisan akademik dan pelacakan revisi. Saya mengembangkan fitur React dan .NET, mengintegrasikan layanan, serta menyerahkan proyek kepada tim magang berikutnya."
    ],
    "contribution": [
      "Role navigation, a searchable researcher directory, and connected user-type administration with validated forms, edit actions, duplicate handling, and deletion confirmation. The refreshed interface adapts to desktop and mobile.",
      "Navigasi peran, direktori peneliti yang dapat dicari, dan administrasi tipe pengguna terhubung dengan validasi form, pengeditan, penanganan duplikasi, serta konfirmasi penghapusan. Antarmuka diperbarui untuk desktop dan mobile."
    ],
    "evidence": [
      "The local preview connects sign-in and user-type management to .NET services and a separate SQL Server demo database. The researcher directory uses fictional profiles. Institutional SSO and the full manuscript workflow are outside this preview.",
      "Preview lokal menghubungkan login dan pengelolaan tipe pengguna ke layanan .NET dan database demo SQL Server terpisah. Direktori peneliti menggunakan profil fiktif. SSO institusi dan alur manuskrip lengkap di luar cakupan preview ini."
    ],
    "gallery": [
      [
        "riviu-master-2026.jpg",
        "User-type administration · connected demo database",
        "Administrasi tipe pengguna · database demo terhubung"
      ],
      [
        "riviu-login-2026.jpg",
        "Workspace sign-in",
        "Login workspace"
      ],
      [
        "riviu-users-2026.jpg",
        "Searchable researcher directory · sample profiles",
        "Direktori peneliti dengan pencarian · profil contoh"
      ],
      [
        "riviu-profile-2026.jpg",
        "Researcher details and expertise",
        "Detail dan keahlian peneliti"
      ],
      [
        "riviu-editor-2026.jpg",
        "Validated user-type editor",
        "Editor tipe pengguna dengan validasi"
      ],
      [
        "riviu-result-2026.jpg",
        "Saved category and filtered results",
        "Kategori tersimpan dan hasil pencarian"
      ],
      [
        "riviu-mobile-2026.jpg",
        "Mobile user-type administration",
        "Administrasi tipe pengguna pada mobile"
      ]
    ]
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
      "An assessment helper for defining course criteria and maximum scores. The React interface connects to a Node API and MongoDB, keeping grading setup in one place.",
      "Alat bantu penilaian untuk mendefinisikan kriteria mata kuliah dan skor maksimum. Antarmuka React terhubung ke API Node dan MongoDB untuk menyatukan pengaturan penilaian."
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
        "correction-criteria.jpg",
        "Assessment criteria with synthetic records",
        "Assessment criteria with synthetic records"
      ],
      [
        "correction-create.jpg",
        "Criterion creation and weight configuration",
        "Criterion creation and weight configuration"
      ],
      [
        "correction-results.jpg",
        "Saved criteria and point totals",
        "Saved criteria and point totals"
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
        "Vehicle marketplace homepage",
        "Vehicle marketplace homepage"
      ],
      [
        "borong-catalogue.jpg",
        "Vehicle catalogue and filters",
        "Vehicle catalogue and filters"
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
    "demo": "https://mrrobotdude.github.io/ats-company-website/",
    "source": "https://github.com/MrRobotdude/ats-company-website",
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
      "Production build and API regression tests pass. The company presentation is hosted independently in the ats-company-website repository. Contact submission only becomes available with a configured backend and CAPTCHA; static hosting does not run the Go service.",
      "Build produksi dan tes regresi API lulus. Website perusahaan dihost secara terpisah oleh repositori ats-company-website. Form kontak hanya aktif jika backend dan CAPTCHA terkonfigurasi; hosting statis tidak menjalankan layanan Go."
    ],
    "gallery": [
      [
        "ats-home.jpg",
        "Company presentation",
        "Company presentation"
      ],
      [
        "ats-services.jpg",
        "Service offering",
        "Service offering"
      ],
      [
        "ats-contact.jpg",
        "Contact and location",
        "Contact and location"
      ]
    ]
  }
];
const designProjects = [
  {
    "id": "fishe",
    "title": "FisHE",
    "category": "business",
    "kind": [
      "AQUARIUM STOREFRONT",
      "STOREFRONT AKUARIUM"
    ],
    "status": [
      "Completed storefront design demo",
      "Demo desain storefront selesai"
    ],
    "stack": "HTML / CSS / JAVASCRIPT / JQUERY",
    "source": "https://github.com/MrRobotdude/fishe",
    "demo": "https://mrrobotdude.github.io/fishe/",
    "summary": [
      "An aquarium storefront with a calm visual identity and an interactive shopping bag.",
      "Storefront akuarium dengan identitas visual tenang dan keranjang belanja interaktif."
    ],
    "story": [
      "FisHE brings fish, aquascaping and equipment into one browsing experience. Its five-page frontend uses an aquatic palette and custom illustrations, with a refreshed implementation completed in 2026.",
      "FisHE menyatukan ikan, aquascaping, dan peralatan dalam satu pengalaman browsing. Frontend lima halaman menggunakan palet akuatik dan ilustrasi khusus, dengan implementasi diperbarui pada 2026."
    ],
    "contribution": [
      "Home and gallery; categorized fish and equipment; live search; a persistent demo bag with quantity controls and totals; local contact validation; responsive layouts; keyboard controls, a pausable jQuery slider and new SVG illustrations.",
      "Home dan galeri; kategori ikan/peralatan; pencarian; keranjang demo persisten dengan jumlah dan total; validasi kontak lokal; layout responsif; kontrol keyboard, slider jQuery dengan pause, serta ilustrasi SVG baru."
    ],
    "evidence": [
      "Static checks and desktop/mobile browser checks passed. Verified combined category/search filtering, quantity totals, bag persistence after reload, simulated order completion, and invalid/valid contact states. Products, prices and orders are illustrative. No payment or email backend is implied.",
      "Pemeriksaan statis dan browser desktop/mobile lulus. Filter kategori/pencarian, jumlah/total, persistensi keranjang setelah reload, pesanan simulasi, dan validasi kontak diuji. Produk, harga, dan pesanan adalah ilustrasi. Tanpa backend pembayaran atau email."
    ],
    "gallery": [
      [
        "fishe-preview.jpg",
        "Aquarium storefront home",
        "Aquarium storefront home"
      ],
      [
        "fishe-fish.jpg",
        "Fish categories and product catalogue",
        "Fish categories and product catalogue"
      ],
      [
        "fishe-equipment.jpg",
        "Equipment discovery",
        "Equipment discovery"
      ],
      [
        "fishe-cart.jpg",
        "Shopping bag, quantities and totals",
        "Shopping bag, quantities and totals"
      ],
      [
        "fishe-receipt.jpg",
        "Simulated order result",
        "Simulated order result"
      ],
      [
        "fishe-contact.jpg",
        "Contact form and validation",
        "Contact form and validation"
      ]
    ]
  },
  {
    "id": "go-truck",
    "title": "Go Truck",
    "category": "business",
    "kind": [
      "PERSONAL HCI CLASS PROJECT",
      "PROYEK KELAS HCI PRIBADI"
    ],
    "status": [
      "Restored design demonstration",
      "Demonstrasi desain dipulihkan"
    ],
    "stack": "HTML / CSS / JAVASCRIPT / JQUERY",
    "source": "https://github.com/MrRobotdude/go-truck",
    "demo": "https://mrrobotdude.github.io/go-truck/",
    "summary": [
      "A five-page logistics-company design with an interactive registration demonstration.",
      "Desain perusahaan logistik lima halaman dengan demo pendaftaran interaktif."
    ],
    "story": [
      "A logistics website presenting moving services, promotions and registration in a consistent five-page design. Custom transport illustrations give the interface a clear visual theme.",
      "Website logistik yang menampilkan layanan pindahan, promosi, dan registrasi dalam desain lima halaman yang konsisten. Ilustrasi transportasi memberi tema visual yang jelas."
    ],
    "contribution": [
      "Repaired a validator that referenced a missing message field instead of the address; added password checks and useful email-domain validation; prevented submission to a nonexistent server; restored navigation, slideshow controls and responsive layouts; replaced mismatched car imagery with logistics SVG illustrations.",
      "Memperbaiki validator yang memakai field pesan yang tidak ada, menambah validasi password/email, mencegah submit ke server yang tidak ada, serta memulihkan navigasi, slider, dan layout responsif. Gambar mobil yang tidak sesuai diganti ilustrasi logistik SVG."
    ],
    "evidence": [
      "All five original pages and linked assets pass static checks. Desktop/mobile navigation, form errors and valid demo registration were verified in the browser. No account is created, no password is stored and no logistics operation is represented.",
      "Lima halaman asli dan aset lulus pemeriksaan statis. Navigasi desktop/mobile, pesan error, dan pendaftaran demo valid diuji di browser. Tidak membuat akun, menyimpan password, atau menjalankan layanan logistik."
    ],
    "gallery": [
      [
        "go-truck-preview.jpg",
        "Home and logistics services",
        "Home and logistics services"
      ],
      [
        "go-truck-services.jpg",
        "Service catalogue",
        "Service catalogue"
      ],
      [
        "go-truck-order.jpg",
        "Order form and validation",
        "Order form and validation"
      ],
      [
        "go-truck-about.jpg",
        "Company information",
        "Company information"
      ]
    ]
  },
  {
    "id": "voila",
    "title": "Voila",
    "category": "business",
    "kind": [
      "HCI TEACHING & DESIGN",
      "PENGAJARAN & DESAIN HCI"
    ],
    "status": [
      "Preserved teaching design demo",
      "Demo desain pengajaran tersimpan"
    ],
    "stack": "HTML / CSS / JAVASCRIPT / JQUERY",
    "source": "https://github.com/MrRobotdude/voila",
    "demo": "https://mrrobotdude.github.io/voila/",
    "summary": [
      "A car-company presentation preserved from HCI teaching materials.",
      "Presentasi perusahaan mobil yang dipulihkan dari materi pengajaran HCI."
    ],
    "story": [
      "A five-page automotive website created for teaching interface design. Large photography, a full-width carousel and three balanced feature columns build a clear brand presentation.",
      "Website otomotif lima halaman untuk pengajaran desain antarmuka. Foto besar, carousel lebar penuh, dan tiga kolom fitur membentuk presentasi merek yang jelas."
    ],
    "contribution": [
      "Home, gallery, model catalogue, company information and a contact form. Responsive layouts, keyboard navigation and slideshow controls preserve the original visual composition.",
      "Home, galeri, katalog model, informasi perusahaan, dan form kontak. Layout responsif, navigasi keyboard, dan kontrol slideshow mempertahankan komposisi visual asli."
    ],
    "evidence": [
      "All original pages/assets pass static checks. Navigation and valid/invalid contact behavior were verified in the browser. The fictional brand and demo form are labeled; original media and educational credits remain attributed.",
      "Halaman/aset asli lulus pemeriksaan statis. Navigasi dan validasi kontak diuji di browser. Brand fiktif serta formulir demo diberi label; media asli dan kredit pendidikan tetap dicantumkan."
    ],
    "gallery": [
      [
        "voila-preview.jpg",
        "Full-width home design",
        "Full-width home design"
      ],
      [
        "voila-models.jpg",
        "Model catalogue",
        "Model catalogue"
      ],
      [
        "voila-gallery.jpg",
        "Photography gallery",
        "Photography gallery"
      ],
      [
        "voila-contact.jpg",
        "Contact form and company details",
        "Contact form and company details"
      ]
    ]
  }
];
const learningProjects = [
  {
    "id": "insogram",
    "title": "InSOgram",
    "tag": "REACT / SOCIAL UI",
    "summary": [
      "A photo-sharing experience for small moments and good company.",
      "Pengalaman berbagi foto untuk momen kecil dan kebersamaan."
    ],
    "story": [
      "InSOgram explores everyday photo sharing through a feed, creator discovery and personal collections. The interface puts the moment first, with a calm layout and familiar social interactions.",
      "InSOgram mengeksplorasi berbagi foto melalui feed, pencarian kreator, dan koleksi pribadi. Antarmuka menonjolkan momen dengan layout tenang dan interaksi sosial yang familiar."
    ],
    "evidence": [
      "An interactive frontend demo with sample creators and browser storage. Messaging is a local composition preview; shared accounts and message delivery are outside this release.",
      "Demo frontend interaktif dengan kreator contoh dan penyimpanan browser. Pesan merupakan preview komposisi lokal; akun bersama dan pengiriman pesan di luar cakupan rilis ini."
    ],
    "gallery": [
      [
        "insogram-feed.jpg",
        "Feed and creator stories",
        "Feed dan story kreator"
      ],
      [
        "insogram-compose.jpg",
        "Photo/video composer with caption and preview",
        "Komposer foto/video dengan caption dan preview"
      ],
      [
        "insogram-profile.jpg",
        "Published post and editable creator profile",
        "Posting baru dan profil kreator"
      ],
      [
        "insogram-saved-comments.jpg",
        "Saved collection and conversation",
        "Koleksi tersimpan dan percakapan"
      ],
      [
        "insogram-explore.jpg",
        "Hashtag search across creator posts",
        "Pencarian hashtag pada posting kreator"
      ],
      [
        "insogram-story.jpg",
        "Story viewer with playback controls",
        "Story dengan kontrol pemutaran"
      ]
    ],
    "contribution": [
      "Photo and video posts, caption and hashtag search, comments, likes, saved collections, follows, editable profiles and a pausable story viewer. Posts and profile changes persist on the same device.",
      "Posting foto/video, pencarian caption dan hashtag, komentar, like, koleksi tersimpan, follow, profil yang dapat diedit, dan story dengan pause. Posting dan profil tersimpan pada perangkat yang sama."
    ],
    "demo": "https://mrrobotdude.github.io/demos/insogram/",
    "source": "https://github.com/MrRobotdude/MrRobotdude.github.io/tree/main/demo-source/insogram"
  },
  {
    "id": "lowlight-vision",
    "title": "Low-light Vision",
    "tag": "PYTHON / TENSORFLOW / MOBILENETV2",
    "status": [
      "Machine-learning experiment",
      "Eksperimen machine learning"
    ],
    "summary": [
      "Recognising five vehicle categories in low-light images.",
      "Mengenali lima kategori kendaraan dalam gambar minim cahaya."
    ],
    "story": [
      "A computer-vision experiment combining contrast enhancement, denoising and transfer learning. MobileNetV2 classifies boats, bicycles, buses, cars and motorbikes.",
      "Eksperimen computer vision yang menggabungkan peningkatan kontras, pengurangan noise, dan transfer learning. MobileNetV2 mengklasifikasikan boat, bicycle, bus, car, dan motorbike."
    ],
    "contribution": [
      "Image preprocessing, a MobileNetV2 classification head, training callbacks and class-level evaluation. Reproducible inference and evaluation tools expose the model’s strengths and common confusions.",
      "Preprocessing gambar, classification head MobileNetV2, callback training, dan evaluasi per kelas. Alat inferensi dan evaluasi menunjukkan keunggulan model dan kesalahan umumnya."
    ],
    "evidence": [
      "The saved model was rerun on 602 images: 68.6% accuracy on the existing validation split. This split was used during model selection, so it is not an independent test. Car predictions have high recall but many false positives; motorbike and bicycle recall need improvement.",
      "Model dijalankan ulang pada 602 gambar: akurasi 68.6% pada split validasi yang digunakan saat pemilihan model, bukan tes independen. Prediksi car memiliki recall tinggi tetapi banyak false positive; recall motorbike dan bicycle perlu ditingkatkan."
    ],
    "source": "https://github.com/MrRobotdude/lowlight-vision",
    "gallery": [
      [
        "lowlight-confusion-matrix.png",
        "Confusion matrix from 602 validation images",
        "Confusion matrix dari 602 gambar validasi"
      ],
      [
        "lowlight-class-results.png",
        "Precision and recall by category",
        "Precision dan recall per kategori"
      ]
    ]
  }
];
