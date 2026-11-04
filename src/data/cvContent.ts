export type Language = 'fr' | 'ar' | 'en';

export const cvTranslations = {
  fr: {
    nav: {
      profile: "Profil",
      vision: "Vision & Créativité",
      experience: "Expérience",
      education: "Formations",
      skills: "Compétences",
      contact: "Contact"
    },
    intro: {
      quote: "Creativity is the key",
      skip: "Passer"
    },
    profile: {
      name: "Younes Houari",
      nameAr: "يونس هواري",
      title: "Chef d'Atelier & Technicien Supérieur en Mécatronique Automobile",
      summary: "Professionnel de terrain rigoureux alliant expertise technique approfondie (diagnostic électronique automobile multimarque, systèmes GPL, mécanique avancée) et vision moderne de gestion d'atelier. Concepteur de solutions numériques concrètes pour éliminer la lourdeur du papier et optimiser le suivi des flottes.",
      birthDate: "11 Mars 2001 (23 ans)",
      birthPlace: "Né à Sougueur (Tiaret)",
      residence: "Alger / Baraki",
      status: "Célibataire",
      military: "Service National Accompli",
      license: "Permis de conduire Catégorie B",
      phone: "0669 00 39 59",
      email: "y.houari02@gmail.com",
      statusBadge: "En poste · EURL Innovalift",
      actions: {
        call: "Appel direct",
        pdf: "Télécharger PDF",
        email: "Envoyer un e-mail",
        exportHtml: "Exporter fichier HTML unique"
      }
    },
    vision: {
      badge: "Vision & Ambition Créative",
      title: "Créativité & Transformation Digitale d'Atelier",
      subtitle: "De la gestion papier traditionnelle à la traçabilité numérique",
      quote: "« Je suis arrivé à un stade où je souhaite libérer pleinement ma créativité dans un environnement propice. En tant que Chef d'Atelier, j'ai transformé la gestion papier traditionnelle en un système entièrement numérisé en développant une plateforme sur mesure utilisant des codes QR pour chaque véhicule de l'entreprise afin d'enregistrer instantanément les données d'entretien. J'ai conçu des solutions concrètes, et je recherche aujourd'hui l'endroit idéal où mon potentiel et mon esprit d'innovation pourront s'épanouir sans limites. »",
      keyPoints: [
        {
          title: "Numérisation Zéro-Papier",
          desc: "Remplacement des fiches d'atelier volantes par des QR codes uniques collés sur chaque véhicule pour l'enregistrement direct des interventions."
        },
        {
          title: "Traçabilité Instantanée",
          desc: "Historique mécanique complet, kilométrage, vidanges et alertes techniques accessibles en une seconde via smartphone ou tablette."
        },
        {
          title: "Orientation Innovation",
          desc: "Volonté constante de concevoir des outils opérationnels qui démultiplient l'efficacité de l'équipe et la fiabilité des équipements."
        }
      ]
    },
    experience: {
      title: "Parcours Professionnel",
      subtitle: "Expérience opérationnelle en atelier, diagnostic avancé et systèmes GPL",
      items: [
        {
          role: "Chef d'Atelier",
          company: "EURL Innovalift",
          location: "Baraki - Alger",
          period: "Du 23/08/2026 à ce jour",
          isCurrent: true,
          description: "Gestion et pilotage intégral des opérations mécaniques et maintenance des équipements. Coordination des techniciens, gestion des approvisionnements de pièces, contrôle qualité et conception de la plateforme digitale de suivi des véhicules par QR code.",
          tags: ["Management d'atelier", "Traçabilité QR Code", "Maintenance préventive"]
        },
        {
          role: "Mécanicien Assistant",
          company: "Atelier Mécanique Spécialisé",
          location: "Plateau - Oran",
          period: "2026",
          isCurrent: false,
          description: "Interventions sur moteurs thermiques, révision des trains roulants, systèmes de freinage, distribution et dépannage électrique rapide sur véhicules légers et utilitaires.",
          tags: ["Moteurs thermiques", "Freinage & Trains", "Électricité automobile"]
        },
        {
          role: "Stage Pratique GPL (Installation & Maintenance)",
          company: "Djabour GPL",
          location: "Sougueur",
          period: "2024 - 2025",
          isCurrent: false,
          description: "Montage complet de kits GPL, étalonnage des vapo-détendeurs, cartographie calculateurs gaz, contrôle de conformité sécurité et détection de fuites sous haute pression.",
          tags: ["Kits GPL", "Vapo-détendeurs", "Normes sécurité gaz"]
        },
        {
          role: "Assistant chez atelier de scanneur automobile",
          company: "Atelier Diagnostic Électronique",
          location: "Aflou",
          period: "2024",
          isCurrent: false,
          description: "Diagnostic assisté par ordinateur multimarque (OBD-II, CAN Bus), analyse des flux de données en temps réel (Live Data), identification des codes défauts (DTC) et reprogrammation de capteurs.",
          tags: ["Diagnostic OBD-II", "Bus CAN", "Codes DTC"]
        }
      ]
    },
    education: {
      title: "Diplômes & Formations",
      subtitle: "Solide socle académique technique et universitaire",
      degrees: [
        {
          year: "2025",
          title: "Technicien Supérieur en Mécatronique Automobile",
          institution: "INSFP Ziane Belkacem Senia - Tiaret",
          desc: "Formation d'excellence : électronique embarquée, multiplexage, systèmes d'injection électronique, thermodynamique et diagnostic assisté."
        },
        {
          year: "2021",
          title: "Licence en Langue Française",
          institution: "Université Ibn Khaldoun - Tiaret",
          desc: "Aisance rédactionnelle, maîtrise irréprochable de la communication professionnelle et de la documentation technique internationale."
        },
        {
          year: "2018",
          title: "Baccalauréat Scientifique",
          institution: "Lycée Scientifique",
          desc: "Rigueur analytique, mathématiques appliquées et sciences physiques."
        }
      ],
      certificationsTitle: "Certifications & Habilitations",
      certifications: [
        {
          title: "Attestation d'Anglais Niveau B1",
          org: "Certification Linguistique",
          year: "Certifié"
        },
        {
          title: "Brevet de Secourisme Volontaire",
          org: "Protection Civile / Croissant-Rouge",
          year: "2019"
        },
        {
          title: "Permis de Conduire Catégorie B",
          org: "Véhicules légers & utilitaires",
          year: "Valide"
        },
        {
          title: "Service National Accompli",
          org: "Situation militaire régulière",
          year: "Dégagé"
        }
      ]
    },
    skills: {
      title: "Compétences & Savoir-faire",
      subtitle: "Un profil hybride entre technologie automobile et ingéniosité logicielle",
      categories: [
        {
          name: "Mécatronique & Diagnostic",
          items: ["Scanneurs OBD-II multimarques", "Analyse réseau multiplexé CAN", "Oscilloscope & multimètre", "Capteurs & actionneurs", "Calculateurs moteur (ECU)"]
        },
        {
          name: "Systèmes Mécaniques & GPL",
          items: ["Kits GPL & calibration vapo", "Moteurs essence & diesel", "Systèmes de freinage & trains", "Maintenance préventive / curative", "Sécurité gaz sous pression"]
        },
        {
          name: "Management & Digitalisation",
          items: ["Gestion d'équipe d'atelier", "Plateforme QR code sur mesure", "Optimisation des flux pièces", "Élaboration de devis / rapports", "Culture de résultat & rigueur"]
        },
        {
          name: "Langues de travail",
          items: ["Arabe (Langue maternelle)", "Français (Licence universitaire)", "Anglais (Niveau B1 certifié)"]
        }
      ]
    },
    contact: {
      title: "Prise de Contact Directe",
      subtitle: "Disponible pour échanger sur des opportunités ambitieuses",
      callNow: "Appeler au 0669 00 39 59",
      sendEmail: "Écrire à y.houari02@gmail.com",
      location: "Alger / Baraki (Mobile sur le territoire national)",
      footerNotice: "Younes Houari · Chef d'Atelier & Mécatronicien © 2026"
    }
  },

  en: {
    nav: {
      profile: "Profile",
      vision: "Vision & Drive",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      contact: "Contact"
    },
    intro: {
      quote: "Creativity is the key",
      skip: "Skip"
    },
    profile: {
      name: "Younes Houari",
      nameAr: "يونس هواري",
      title: "Workshop Manager & Senior Mechatronics Technician",
      summary: "Proactive, results-driven professional combining deep hands-on automotive expertise (multi-brand electronic diagnostics, LPG/GPL systems, powertrain overhaul) with modern digital workshop management. Builder of custom digital platforms that replace paper logs with instant QR-code fleet traceability.",
      birthDate: "March 11, 2001 (Age 23)",
      birthPlace: "Born in Sougueur (Tiaret)",
      residence: "Algiers / Baraki",
      status: "Single",
      military: "Military Service Completed",
      license: "Driver's License Category B",
      phone: "0669 00 39 59",
      email: "y.houari02@gmail.com",
      statusBadge: "Currently @ EURL Innovalift",
      actions: {
        call: "Direct Call",
        pdf: "Download PDF",
        email: "Send Email",
        exportHtml: "Export Single HTML File"
      }
    },
    vision: {
      badge: "Statement of Vision & Ambition",
      title: "Creativity & Digital Workshop Transformation",
      subtitle: "Moving from traditional paper chaos to instant QR-coded fleet intelligence",
      quote: "“I have reached a point where I want to unleash my creativity in the right environment. As a Workshop Manager, I transformed traditional paper-based tracking into a fully digital system by building a custom platform utilizing QR codes for every company vehicle to instantly log data. I've built solutions, but now I'm looking for the ideal place where my potential and creativity can truly scale without limits.”",
      keyPoints: [
        {
          title: "Zero-Paper Digitalization",
          desc: "Replaced vulnerable paper sheets with durable QR codes mounted directly on vehicle dashboards for instantaneous intervention logging."
        },
        {
          title: "Instant Traceability",
          desc: "Comprehensive maintenance history, odometer telemetry, oil change schedules, and mechanical alerts accessible in 1 second via smartphone."
        },
        {
          title: "Scalable Creative Drive",
          desc: "Driven by the continuous impulse to engineer practical workflows that boost team productivity and equipment longevity."
        }
      ]
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Hands-on workshop leadership, electronic diagnostics, and powertrain engineering",
      items: [
        {
          role: "Workshop Manager (Chef d'Atelier)",
          company: "EURL Innovalift",
          location: "Baraki - Algiers",
          period: "From 23/08/2026 to Present",
          isCurrent: true,
          description: "Orchestrating daily maintenance operations, workshop logistics, and mechanical teams. Managing replacement parts inventory, enforcing rigorous safety benchmarks, and designing the proprietary QR-code vehicle data platform.",
          tags: ["Workshop Leadership", "QR Code Traceability", "Preventative Maintenance"]
        },
        {
          role: "Assistant Mechanic",
          company: "Specialized Mechanical Workshop",
          location: "Plateau - Oran",
          period: "2026",
          isCurrent: false,
          description: "Internal combustion engine servicing, running gear overhauls, brake system reconditioning, timing belt replacements, and rapid electrical troubleshooting.",
          tags: ["Combustion Engines", "Braking & Geometry", "Auto Electrics"]
        },
        {
          role: "LPG Practical Internship (Installation & Tuning)",
          company: "Djabour GPL",
          location: "Sougueur",
          period: "2024 - 2025",
          isCurrent: false,
          description: "End-to-end installation of automotive LPG systems, pressure regulator calibration, gas ECU mapping, rigorous gas-tightness testing, and high-pressure safety certification.",
          tags: ["LPG Kits", "Vaporizers / Regulators", "High Pressure Safety"]
        },
        {
          role: "Automotive Scanner Assistant",
          company: "Diagnostic Scanner Workshop",
          location: "Aflou",
          period: "2024",
          isCurrent: false,
          description: "Multi-brand computerized automotive scanning (OBD-II, CAN Bus), live sensor telemetry analysis, DTC error identification and clearing, actuator testing, and ECU module recalibration.",
          tags: ["OBD-II Diagnostics", "CAN-Bus Networks", "DTC Fault Clearing"]
        }
      ]
    },
    education: {
      title: "Education & Qualifications",
      subtitle: "Technical engineering foundation coupled with higher linguistic training",
      degrees: [
        {
          year: "2025",
          title: "Senior Technician in Automotive Mechatronics",
          institution: "INSFP Ziane Belkacem Senia - Tiaret",
          desc: "Advanced training in automotive electronics, multiplex networks, electronic fuel injection systems, hydraulics, and computerized diagnostics."
        },
        {
          year: "2021",
          title: "Bachelor's Degree in French Language & Literature",
          institution: "Ibn Khaldoun University - Tiaret",
          desc: "Precision in technical writing, cross-cultural communication, and professional documentation fluency."
        },
        {
          year: "2018",
          title: "Scientific Baccalaureate",
          institution: "Scientific High School",
          desc: "Rigorous analytical background in mathematics, applied physics, and logical reasoning."
        }
      ],
      certificationsTitle: "Certifications & Credentials",
      certifications: [
        {
          title: "English Level B1 Certificate",
          org: "Linguistic Certification",
          year: "Certified"
        },
        {
          title: "Volunteer First-Aid Certificate",
          org: "Civil Protection / Red Crescent",
          year: "2019"
        },
        {
          title: "Driver's License Category B",
          org: "Light Vehicles & Vans",
          year: "Valid"
        },
        {
          title: "Military Service Completed",
          org: "Official Clearance",
          year: "Completed"
        }
      ]
    },
    skills: {
      title: "Technical Skills & Competencies",
      subtitle: "The intersection of precision mechatronics and software-driven operational thinking",
      categories: [
        {
          name: "Mechatronics & Diagnostics",
          items: ["Multi-brand OBD-II Scanners", "CAN-Bus Multiplex Networks", "Oscilloscope Waveform Analysis", "Sensors & Actuators", "ECU Parameter Tuning"]
        },
        {
          name: "Mechanical & LPG Systems",
          items: ["Automotive LPG Kits & Regulators", "Combustion Engines & Overhauls", "Braking & Suspension Geometry", "Preventative Maintenance", "High-Pressure Gas Safety"]
        },
        {
          name: "Leadership & Digitalization",
          items: ["Workshop Team Management", "Custom QR Fleet Platform", "Parts Flow & Inventory Control", "Technical Reports & Invoicing", "Quality Assurance"]
        },
        {
          name: "Working Languages",
          items: ["Arabic (Native)", "French (Bachelor's Degree - Fluent)", "English (Certified B1 Level)"]
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Open to discussions regarding high-impact mechatronics and management opportunities",
      callNow: "Call 0669 00 39 59",
      sendEmail: "Email y.houari02@gmail.com",
      location: "Algiers / Baraki (Open to nationwide mobility)",
      footerNotice: "Younes Houari · Workshop Manager & Mechatronics © 2026"
    }
  },

  ar: {
    nav: {
      profile: "الملف الشخصي",
      vision: "الرؤية والابتكار",
      experience: "الخبرة المهنية",
      education: "المؤهلات العلمية",
      skills: "المهارات التقنية",
      contact: "اتصل بي"
    },
    intro: {
      quote: "Creativity is the key",
      skip: "تخطي"
    },
    profile: {
      name: "يونس هواري",
      nameAr: "Younes Houari",
      title: "مسؤول ورشة وتقني سامي في ميكاترونيك السيارات",
      summary: "مهني ميداني يجمع بين الكفاءة التقنية العالية في تشخيص إلكترونيك السيارات بمختلف أنواعها، وأنظمة الغاز المميع (GPL)، وصيانة المحركات، مع حس إداري رقمي متطور. مطور حلول تقنية ملموسة استبدلت السجلات الورقية التقليدية بمنظومة تتبع ذكية تعتمد رموز الاستجابة السريعة (QR Code).",
      birthDate: "11 مارس 2001 (23 سنة)",
      birthPlace: "الميلاد: سوقر (ولاية تيارت)",
      residence: "الإقامة: براقي - الجزائر العاصمة",
      status: "الحالة العائلية: أعزب",
      military: "الخدمة الوطنية: مؤدى (معفى/منهي)",
      license: "رخصة السياقة: صنف ب (B)",
      phone: "0669 00 39 59",
      email: "y.houari02@gmail.com",
      statusBadge: "يشغل حالياً منصب مسؤول ورشة لدى EURL Innovalift",
      actions: {
        call: "اتصال مباشر",
        pdf: "تحميل السيرة الذاتية PDF",
        email: "إرسال بريد إلكتروني",
        exportHtml: "تنزيل ملف HTML كامل"
      }
    },
    vision: {
      badge: "بيان الطموح والرؤية الابتكارية",
      title: "الإبداع والرقمنة الشاملة للورشات الميكانيكية",
      subtitle: "من فوضى السجلات الورقية إلى الدقة الرقمية الفورية برمز QR",
      quote: "« لقد وصلت إلى مرحلة أرغب فيها بإطلاق العنان لإبداعي ضمن البيئة المناسبة. بصفتي مسؤول ورشة، قمت بتحويل نظام التتبع الورقي التقليدي إلى منظومة رقمية متكاملة عبر ابتكار منصة مخصصة تعتمد رموز QR لكل مركبة بالشركة لتسجيل ومعالجة البيانات بشكل فوري. لقد صنعت حلولاً عملية، واليوم أبحث عن المكان المثالي الذي يتيح لإمكاناتي وشغفي بالابتكار التطور والارتقاء دون حدود. »",
      keyPoints: [
        {
          title: "رقمنة شاملة بدون أوراق",
          desc: "إلغاء أوراق الفحص المعرضة للضياع واستبدالها برمز QR فريد مثبت على كل مركبة لتسجيل الصيانة فورياً."
        },
        {
          title: "تتبع لحظي ودقيق",
          desc: "سجل صيانة متكامل، عداد الكيلومترات، مواعيد تغيير الزيت وفحوصات الأعطال بضغطة زر عبر الهاتف أو اللوحة الإلكترونية."
        },
        {
          title: "شغف متواصل بالتطوير",
          desc: "السعي المستمر لابتكار أدوات عمل ترفع إنتاجية الفريق وتقلل تكاليف التوقف غير المخطط للمركبات."
        }
      ]
    },
    experience: {
      title: "الخبرات والمسار المهني",
      subtitle: "مسار عملي قيادي في إدارة الورش، التشخيص الإلكتروني المتطور وأنظمة الغاز",
      items: [
        {
          role: "مسؤول ورشة (Chef d'Atelier)",
          company: "EURL Innovalift",
          location: "براقي - الجزائر العاصمة",
          period: "من 23/08/2026 إلى غاية اليوم",
          isCurrent: true,
          description: "الإشراف الكامل على عمليات الصيانة الميكانيكية وإصلاح المعدات. تنظيم عمل الفنيين، إدارة مخزون قطع الغيار، ومراقبة معايير الجودة، مع تطوير منصة رقمية تعتمد رموز QR لمتابعة مركبات الشركة.",
          tags: ["إدارة الورشة", "تتبع برمز QR", "صيانة وقائية"]
        },
        {
          role: "ميكانيكي مساعد",
          company: "ورشة ميكانيك متخصصة",
          location: "بلاطو - وهران",
          period: "2026",
          isCurrent: false,
          description: "صيانة محركات الاحتراق الداخلي، فحص أنظمة الفرامل ونظام التعليق، تغيير أحزمة التوقيت، وحل الأعطال الكهربائية السريعة للسيارات الخفيفة والنفعية.",
          tags: ["محركات الاحتراق", "أنظمة الفرامل", "كهرباء السيارات"]
        },
        {
          role: "تربص تطبيقي في أنظمة غاز البترول المميع (GPL)",
          company: "جبور غاز (Djabour GPL)",
          location: "سوقر",
          period: "2024 - 2025",
          isCurrent: false,
          description: "التركيب الكامل لأطقم الغاز المميع للسيارات، معايرة خافضات الضغط (Vapo-détendeurs)، برمجة كمبيوتر الغاز، وإجراء اختبارات السلامة وكشف التسريبات بدقة.",
          tags: ["أطقم GPL", "خافض الضغط", "معايير سلامة الغاز"]
        },
        {
          role: "مساعد في ورشة فحص وتشخيص السيارات بالسكانير",
          company: "ورشة التشخيص الإلكتروني",
          location: "أفلو",
          period: "2024",
          isCurrent: false,
          description: "التشخيص الإلكتروني المحوسب لمختلف أنواع المركبات (OBD-II, CAN Bus)، قراءة التدفق اللحظي للبيانات، تحديد وحذف رموز الأعطال (DTC)، واختبار المشغلات والحساسات.",
          tags: ["سكانير OBD-II", "شبكات CAN", "رموز DTC"]
        }
      ]
    },
    education: {
      title: "المؤهلات العلمية والتكوين",
      subtitle: "قاعدة تقنية هندسية متينة مع تكوين جامعي متميز في اللغات",
      degrees: [
        {
          year: "2025",
          title: "تقني سامي في ميكاترونيك السيارات",
          institution: "المعهد الوطني المتخصص في التكوين المهني زيان بلقاسم السانية - تيارت",
          desc: "تكوين تخصصي عالٍ: الإلكترونيات المدمجة، شبكات التوصيل المضاعف (Multiplexage)، أنظمة الحقن الإلكتروني، والديناميكا الحرارية والتشخيص المبرمج."
        },
        {
          year: "2021",
          title: "ليسانس في اللغة الفرنسية",
          institution: "جامعة ابن خلدون - تيارت",
          desc: "تمكن كامل من الصياغة اللغوية والتواصل المهني والتعامل مع الوثائق والكتالوجات التقنية العالمية."
        },
        {
          year: "2018",
          title: "بكالوريا شعبة علوم تجريبية",
          institution: "ثانوية علمية",
          desc: "أساس متين في الرياضيات والفيزياء التطبيقية والمنهج العلمي التحليلي."
        }
      ],
      certificationsTitle: "الشهادات الإضافية والوثائق",
      certifications: [
        {
          title: "شهادة في اللغة الإنجليزية مستوى B1",
          org: "اعتماد لغوي رسمي",
          year: "معتمد"
        },
        {
          title: "شهادة مسعف متطوع (إسعافات أولية)",
          org: "الحماية المدنية / الهلال الأحمر",
          year: "2019"
        },
        {
          title: "رخصة سياقة صنف ب (B)",
          org: "السيارات السياحية والنفعية",
          year: "صالحة"
        },
        {
          title: "الخدمة الوطنية مؤداة",
          org: "وضعية قانونية نظامية",
          year: "مؤدى"
        }
      ]
    },
    skills: {
      title: "المهارات والقدرات التقنية",
      subtitle: "تناغم بين الخبرة الميكانيكية الميدانية والفكر الابتكاري الرقمي",
      categories: [
        {
          name: "الميكاترونيك والتشخيص الإلكتروني",
          items: ["أجهزة سكانير OBD-II لجميع الماركات", "تحليل شبكات CAN Multiplex", "استخدام راسم الإشارة (Oscilloscope)", "فحص الحساسات والمشغلات", "برمجة ومعايرة كمبيوتر السيارات (ECU)"]
        },
        {
          name: "الأنظمة الميكانيكية وغاز GPL",
          items: ["تركيب وصيانة أطقم الغاز المميع GPL", "صيانة محركات البنزين والديزل", "أنظمة الفرامل وتوجيه العجلات", "الصيانة الوقائية والدورية", "معايير السلامة للغاز تحت الضغط"]
        },
        {
          name: "إدارة الورشات والحلول الرقمية",
          items: ["إدارة وتوجيه فرق العمل بالورشة", "تطوير منصات QR لمتابعة الأسطول", "إدارة مخزون قطع الغيار والطلبيات", "إعداد التقارير الفنية والفواتير", "الالتزام بأعلى معايير الجودة"]
        },
        {
          name: "اللغات",
          items: ["العربية (اللغة الأم)", "الفرنسية (شهادة ليسانس جامعية - طلاقة تامة)", "الإنجليزية (مستوى B1 معتمد)"]
        }
      ]
    },
    contact: {
      title: "التواصل المباشر",
      subtitle: "متاح لمناقشة الفرص المهنية الواعدة ومشاريع التحديث الصناعي والميكانيكي",
      callNow: "اتصال: 0669 00 39 59",
      sendEmail: "مراسلة: y.houari02@gmail.com",
      location: "الجزائر العاصمة / براقي (مع إمكانية التنقل عبر التراب الوطني)",
      footerNotice: "يونس هواري · مسؤول ورشة وتقني ميكاترونيك © 2026"
    }
  }
};
