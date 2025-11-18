import {
  Heart,
  Flower2,
  Cake,
  Sparkles,
  Home as HomeIcon,
  PartyPopper,
  Baby,
  Briefcase,
  Gift,
  Camera,
  Music,
  Utensils,
  Palette,
} from 'lucide-react';

export interface Service {
  icon: typeof Heart;
  title: string;
  description: string;
  fullDescription: string;
  color: string;
  pricing: string;
  duration: string;
  teamSize: string;
  rating: number;
  reviews: number;
  image: string;
  highlights: string[];
  images: string[];
}

export const mainServices: Service[] = [
  {
    icon: Heart,
    title: 'Wedding',
    description: 'Create magical wedding celebrations with exquisite decorations, catering, and flawless coordination',
    fullDescription: 'We specialize in creating magical wedding celebrations that reflect your unique love story. From intimate gatherings to grand celebrations, our experienced team handles every detail meticulously.',
    color: 'bg-[#622e17]',
    pricing: 'Starting from ₹2,00,000',
    duration: '4-6 months planning + event day',
    teamSize: '15-20 professionals',
    rating: 4.9,
    reviews: 250,
    image: 'https://arihantdecoration.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-5.25.50-PM.jpeg',
    highlights: [
      'Complete wedding coordination and planning',
      'Venue decoration and setup',
      'Guest accommodation management',
      'Catering and menu planning',
      'Photography and videography coordination',
      'Entertainment and music arrangements',
      'Ceremony and reception management'
    ],
    images: [
      'https://cdn0.weddingwire.in/article/9780/3_2/1280/jpg/100879-wedding-stage-lead.webp',
      'https://www.jantadecorators.com/wp-content/uploads/2025/02/Wedding-Flower-Decoration.jpg',
      'https://images.unsplash.com/photo-1591203281954-23fa2ff8ef18?q=80&w=1176',
      'https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=1170',
      'https://images.unsplash.com/photo-1745573673235-5f2cee3ff9a8?q=80&w=1334',
      'https://images.unsplash.com/photo-1571983371651-221e6c0b910a?q=80&w=1170',
      'https://images.unsplash.com/photo-1601482441062-b9f13131f33a?q=80&w=2070',
      'https://images.unsplash.com/photo-1707374661682-d804856cee22?q=80&w=1976'
    ]
  },
  {
    icon: Sparkles,
    title: 'Engagement',
    description: 'Romantic engagement celebrations that capture the beginning of your beautiful journey',
    fullDescription: 'Celebrate your engagement with elegance and romance. Our engagement services create intimate, romantic settings perfect for this special milestone.',
    color: 'bg-[#622e17]',
    pricing: 'Starting from ₹75,000',
    duration: '2-3 hours',
    teamSize: '8-10 professionals',
    rating: 4.8,
    reviews: 145,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763363173/engage1_h6qstt.webp',
    highlights: [
      'Romantic venue setup and decoration',
      'Lighting and ambiance creation',
      'Ring ceremony coordination',
      'Catering and refreshments',
      'Photography and videography',
      'Music and entertainment',
      'Guest book arrangements'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763363175/engage9_ain5t5.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763363175/engage7_qzqtz2.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763363173/engage2_ktpubc.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage5_xwujwj.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage6_wnijtx.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage4_xtfsme.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage8_wxiksf.avif',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage3_zvj7k4.webp'
    ]
  },
  {
    icon: Flower2,
    title: 'Haldi Ceremony',
    description: 'Traditional haldi ceremonies with vibrant yellow decor, music, and authentic arrangements',
    fullDescription: 'Our haldi ceremony services bring traditional charm and modern elegance together. We create a vibrant, festive atmosphere with bright yellow decorations.',
    color: 'bg-[#ffc900]',
    pricing: 'Starting from ₹50,000',
    duration: '1-2 hours event',
    teamSize: '8-10 professionals',
    rating: 4.8,
    reviews: 180,
    image: 'https://static.vecteezy.com/system/resources/previews/010/978/930/non_2x/traditional-wedding-ceremony-beautiful-culture-of-india-or-decorated-for-haldi-ceremony-photo.jpg',
    highlights: [
      'Venue decoration with traditional themes',
      'Haldi paste ceremony arrangements',
      'Music and DJ services',
      'Traditional games and activities',
      'Catering and refreshments',
      'Photography coverage',
      'Guest coordination'
    ],
    images: [
      'https://i.etsystatic.com/44894996/r/il/1b6925/6135499531/il_570xN.6135499531_11ai.jpg',
      'https://i.pinimg.com/736x/ba/1c/27/ba1c270ee2ebc1f05c7546990d43666d.jpg',
      'https://i.pinimg.com/originals/59/80/1a/59801a12463d05829c622591248bf0br.jpg',
      'https://i.pinimg.com/originals/18/6a/f4/186af444e1a288c7a1823c1fb5970f39.jpg',
      'https://cdn0.weddingwire.in/article/3222/original/1920/jpg/102223-design-aqua2.jpeg',
      'https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/06/Haldi-ceremony.jpg',
      'https://wedmeplz.com/wp-content/uploads/2020/07/3-6-1-1024x1024.jpg',
      'https://cheetah.cherishx.com/uploads/1679385395_original.jpg'
    ]
  },
  {
    icon: Cake,
    title: 'Birthday Party',
    description: 'Memorable birthday celebrations with themed decorations, entertainment, and delicious cakes',
    fullDescription: 'Make birthdays special with our customized birthday party services. Whether it\'s a child\'s birthday, milestone celebration, or adult party, we create magical experiences.',
    color: 'bg-[#bc842f]',
    pricing: 'Starting from ₹30,000',
    duration: '2-4 hours',
    teamSize: '6-8 professionals',
    rating: 4.7,
    reviews: 320,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763362738/birthday7_zsx26v.webp',
    highlights: [
      'Custom theme selection and decoration',
      'Entertainment and game arrangements',
      'Cake and catering services',
      'Photography and videography',
      'Balloon and floral arrangements',
      'Sound and lighting setup',
      'Cleanup and waste management'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763362738/birthday1_niob97.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday6_oa9qtp.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday5_qjiiym.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday3_ov33si.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday2_byxamp.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday4_yotd9s.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763362864/birthday8_rqmao8.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763362864/birthday9_cugdme.jpg'
    ]
  },
  {
    icon: Gift,
    title: 'Half Saree Ceremony',
    description: 'Traditional half saree ceremonies with beautiful stage setups and cultural elements',
    fullDescription: 'Honor this important life milestone with our half saree ceremony services. We create beautiful, culturally appropriate settings that celebrate this transition.',
    color: 'bg-[#b59372]',
    pricing: 'Starting from ₹1,00,000',
    duration: '4-5 hours',
    teamSize: '12-15 professionals',
    rating: 4.9,
    reviews: 95,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763367170/Haldi_Backdrop_Stage_Decorations_hprbcq.jpg',
    highlights: [
      'Traditional stage setup and decoration',
      'Saree draping guidance and assistance',
      'Ritual arrangements and coordination',
      'Catering with traditional cuisine',
      'Photography and videography',
      'Guest reception management',
      'Jewelry and accessory coordination'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763367170/half2_qbgmy5.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763367170/half3_hiplae.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763367171/half5_tmk9pw.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763367171/half6_s8mrpv.png',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763367171/half4_xc8rzo.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763367176/half8_m5cong.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763367176/half7_nulk2e.png',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763367170/Haldi_Backdrop_Stage_Decorations_hprbcq.jpg'
    ]
  },
  {
    icon: Gift,
    title: 'Dhoti Ceremony',
    description: 'Sacred dhoti ceremonies with traditional decorations and ritual arrangements',
    fullDescription: 'We specialize in organizing meaningful dhoti ceremonies that honor tradition. From ritual coordination to traditional attire guidance.',
    color: 'bg-[#ffc900]',
    pricing: 'Starting from ₹80,000',
    duration: '4-5 hours',
    teamSize: '10-12 professionals',
    rating: 4.8,
    reviews: 78,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/dhoti5_kl4toe.jpg',
    highlights: [
      'Traditional stage and altar setup',
      'Dhoti and accessory coordination',
      'Ritual and ceremony management',
      'Brahmin priest coordination',
      'Traditional catering arrangements',
      'Photography documentation',
      'Guest management and reception'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/dhoti2_bblrvc.png',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/dhoti8_nul6h6.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/dhoti4_twsqvm.png',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379767/dhoti7_c5rcux.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/dhoti6_bi5ddw.png',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379769/dhoti8_iunjhv.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/dhoti3_a2rzyc.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/dhoti1_arozte.png'
    ]
  },
  {
    icon: HomeIcon,
    title: 'House Warming',
    description: 'Auspicious housewarming ceremonies with traditional rituals and festive decorations',
    fullDescription: 'Make your new home truly special with our house warming services. We handle all aspects including traditional rituals, auspicious ceremony arrangements.',
    color: 'bg-[#bc842f]',
    pricing: 'Starting from ₹40,000',
    duration: '3-4 hours',
    teamSize: '6-8 professionals',
    rating: 4.7,
    reviews: 110,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379775/house9_oaeukz.png',
    highlights: [
      'Auspicious day selection',
      'Ritual coordination and priest arrangement',
      'Home decoration and setup',
      'Catering and refreshments',
      'Puja material arrangements',
      'Guest coordination',
      'Photography coverage'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379784/house1_xevwv5.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/house8_x5yd9e.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379775/house2_bqlxc1.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379774/house7_bnixbf.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379774/house6_uvscyy.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379774/house3_vf4fie.png',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379773/house4_f5o9fk.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379774/house5_gyfhir.jpg'
    ]
  },
  {
    icon: PartyPopper,
    title: 'Anniversary',
    description: 'Celebrate love milestones with romantic setups, floral arrangements, and memorable experiences',
    fullDescription: 'Commemorate your special bond with our anniversary celebration services. We create intimate, romantic settings that celebrate your years together.',
    color: 'bg-[#622e17]',
    pricing: 'Starting from ₹35,000',
    duration: '2-3 hours',
    teamSize: '5-7 professionals',
    rating: 4.9,
    reviews: 200,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/anni3_j1clou.jpg',
    highlights: [
      'Romantic venue decoration',
      'Candle and lighting arrangements',
      'Special menu planning',
      'Music and entertainment setup',
      'Cake and dessert arrangements',
      'Photography and videography',
      'Personalized touches and surprises'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379763/anni1_xphazx.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/anni6_x19ssh.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/anni2_pxymad.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/anni4_ypkbeo.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/anni7_z8euql.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/anni8_npg5l0.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/anni5_eplc3f.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/anni9_tnpewp.webp'
    ]
  },
  {
    icon: Baby,
    title: 'Baby Shower',
    description: 'Adorable baby shower celebrations with cute themes, games, and delightful arrangements',
    fullDescription: 'Create magical memories celebrating the upcoming arrival of your baby. Our baby shower services include theme coordination, cute decorations, games.',
    color: 'bg-[#b59372]',
    pricing: 'Starting from ₹25,000',
    duration: '2-3 hours',
    teamSize: '5-6 professionals',
    rating: 4.8,
    reviews: 165,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/baby9_rxkzix.jpg',
    highlights: [
      'Theme selection and decoration',
      'Baby-themed games and activities',
      'Catering with special menu',
      'Cake and dessert arrangements',
      'Photography and videography',
      'Gift coordination',
      'Party favors and decorations'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/baby2_h0vzub.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379767/baby6_dz05e3.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379767/baby5_yithux.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/baby1_sfeb2p.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379767/baby3_xnzcjz.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/baby4_bqdsla.png',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379767/baby7_vzpr7d.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/baby9_rxkzix.jpg'
    ]
  },
  {
    icon: Briefcase,
    title: 'Office Inauguration',
    description: 'Professional office inauguration events with elegant setups and corporate aesthetics',
    fullDescription: 'Make a strong impression with our office inauguration services. We handle everything from venue setup, ribbon cutting ceremonies, to corporate catering.',
    color: 'bg-[#ffc900]',
    pricing: 'Starting from ₹60,000',
    duration: '2-4 hours',
    teamSize: '10-12 professionals',
    rating: 4.7,
    reviews: 92,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379802/office9_halm2b.webp',
    highlights: [
      'Venue setup and decoration',
      'Ribbon cutting ceremony coordination',
      'Sound and lighting systems',
      'Professional catering',
      'Photography and media coverage',
      'Guest management and logistics',
      'Signage and branding setup'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379802/office7_abgn9g.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379778/office4_ikrffm.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379778/office2_pmwrl3.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379803/office11_a52wtl.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379802/office8_xgcwnr.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379802/office6_f23qd6.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379803/office10_druma9.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/office1_o4xlxq.webp'
    ]
  },
  {
    icon: Baby,
    title: 'Naming Ceremony',
    description: 'Beautiful naming ceremonies with traditional elements and joyful celebrations',
    fullDescription: 'Welcome your newborn with a beautiful naming ceremony. We coordinate traditional rituals, create warm and welcoming ambiance.',
    color: 'bg-[#bc842f]',
    pricing: 'Starting from ₹30,000',
    duration: '2-3 hours',
    teamSize: '6-8 professionals',
    rating: 4.8,
    reviews: 105,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/naming7_k45mq4.jpg',
    highlights: [
      'Traditional ritual coordination',
      'Priest and astrologer arrangement',
      'Venue decoration and setup',
      'Traditional catering',
      'Photography documentation',
      'Guest coordination',
      'Thank you cards and favors'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/naming8_gpnpzc.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379775/naming2_wd4naj.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379776/naming3_dcuyuu.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/naming9_b948li.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379776/naming5_xhp75g.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/naming6_ixtgka.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379776/naming4_jloaun.png',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379775/naming1_arrn9k.jpg'
    ]
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional corporate events with seamless execution and impressive presentations',
    fullDescription: 'We specialize in creating impactful corporate events that leave lasting impressions. From conferences and seminars to team building events.',
    color: 'bg-[#622e17]',
    pricing: 'Starting from ₹1,50,000',
    duration: 'Customized duration',
    teamSize: '15-20 professionals',
    rating: 4.8,
    reviews: 128,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379770/c4_oshyiw.webp',
    highlights: [
      'Event planning and coordination',
      'Venue management and setup',
      'Audio/visual and tech support',
      'Catering and hospitality',
      'Registration and check-in systems',
      'Photography and videography',
      'Post-event management'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379769/c1_d0unrv.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379769/c3_db3vbu.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379771/c6_yrqtaf.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379770/c5_glyphm.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379769/c2_ztc2u4.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/c7_ffz4ev.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/c8_h79s83.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/c9_mmahiz.jpg'
    ]
  }
];

export const specializedServices: Service[] = [
  {
    icon: Flower2,
    title: 'Decor & Stage Design',
    description: 'Floral mandaps, theme sets, stage backdrops, and premium décor setups',
    fullDescription: 'We create visually stunning décor setups crafted with precision and creativity. From intimate ceremonies to grand celebrations, our décor team delivers theme-based designs.',
    color: 'bg-[#b59372]',
    pricing: 'Starting from ₹80,000',
    duration: '6-12 hours setup time',
    teamSize: '10-18 professionals',
    rating: 4.9,
    reviews: 182,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1170',
    highlights: [
      'Custom theme décor',
      'Floral mandaps & stage arrangements',
      'Photo booth setups',
      'Lighting design & ambience creation',
      'Entrance and pathway décor',
      'Premium high-end luxury décor options',
      'Complete stage planning and execution'
    ],
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1170',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1169',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1170',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1169',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1170',
      'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=1170',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1169',
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=1169'
    ]
  },
  {
    icon: Utensils,
    title: 'Catering Services',
    description: 'Traditional catering, sweet counters, mocktail bars, and complete food management',
    fullDescription: 'Our catering team brings authentic flavours, diverse menu options, and impeccable hospitality. From traditional meals to modern fusion counters.',
    color: 'bg-[#622e17]',
    pricing: 'Starting from ₹350 per plate',
    duration: 'Based on menu and guest count',
    teamSize: '12-25 professionals',
    rating: 4.8,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1170',
    highlights: [
      'Traditional vegetarian & non-vegetarian menus',
      'Live counters & sweet stalls',
      'Mocktail & juice bars',
      'Buffet arrangement & serving team',
      'Premium plating & presentation',
      'Customized event-specific menus'
    ],
    images: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1170',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170',
      'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?q=80&w=1169',
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1170',
      'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1170',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1074'
    ]
  },
  {
    icon: Palette,
    title: 'Design & Invitations',
    description: 'Invitations, digital reels, teaser videos, and premium event creatives',
    fullDescription: 'ShubaShree Creators bring artistic design and storytelling to your celebrations. From invitation cards to digital save-the-dates.',
    color: 'bg-[#bc842f]',
    pricing: 'Starting from ₹7,000',
    duration: '2-5 days',
    teamSize: '3-6 designers',
    rating: 4.7,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=1170',
    highlights: [
      'Printed & digital invitation cards',
      'Save-the-date videos',
      'Event teaser films & reels',
      'Theme-based design templates',
      'Custom logo & monogram creation',
      'Animated invitations & e-cards'
    ],
    images: [
      'https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=1170',
      'https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&w=1170',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169',
      'https://images.unsplash.com/photo-1606416406216-2b2abea5f909?q=80&w=1074',
      'https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1169',
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1170',
      'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1074',
      'https://images.unsplash.com/photo-1516384903227-139a8cf0ec21?q=80&w=1176'
    ]
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Wedding albums, live streaming, cinematic videography, and reels',
    fullDescription: 'ShubaShree Moments captures emotions, memories, and beautiful details through artistic photography and cinematic filmmaking.',
    color: 'bg-[#ffc900]',
    pricing: 'Starting from ₹55,000',
    duration: 'Event-based coverage',
    teamSize: '4-10 professionals',
    rating: 4.9,
    reviews: 165,
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1171',
    highlights: [
      'Candid photography',
      'Cinematic videography',
      'Drone and aerial shots',
      'Live streaming setup',
      'Premium wedding album design',
      'Event highlight reels'
    ],
    images: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1171',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1169',
      'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?q=80&w=1074',
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1170',
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1170',
      'https://images.unsplash.com/photo-1502982899975-c0b10c44b2ae?q=80&w=1170',
      'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1032',
      'https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=1170'
    ]
  },
  {
    icon: Gift,
    title: 'Hampers & Return Gifts',
    description: 'Event hampers, eco-friendly gifts, customized return gift packages',
    fullDescription: 'We offer beautifully curated hampers and return gifts for weddings, baby showers, housewarmings, and corporate events.',
    color: 'bg-[#622e17]',
    pricing: 'Starting from ₹350 per gift',
    duration: '2-7 days',
    teamSize: '3-8 professionals',
    rating: 4.6,
    reviews: 74,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763448262/g9_akfuxc.avif',
    highlights: [
      'Customizable hampers',
      'Eco-friendly gift sets',
      'Sweets, dry fruits & wellness hampers',
      'Theme-based packaging',
      'Bulk gifting for events',
      'Premium luxury gift options'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763447842/g3_vpksxf.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763447842/g5_uovltd.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763447842/g8_gzm8n9.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763447841/g7_bf7u4m.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763447841/g2_znj82z.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763447841/g6_zercqz.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763447841/g1_zyiysq.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763447841/g4_ouu4hy.webp'
    ]
  },
  {
    icon: Music,
    title: 'Music & Entertainment',
    description: 'Nadhaswaram, folk performances, DJs, MCs, and entertainment artists',
    fullDescription: 'ShubaShree Vibes delivers exceptional live music and performance experiences. From traditional ensembles to modern entertainment acts.',
    color: 'bg-[#622e17]',
    pricing: 'Starting from ₹15,000',
    duration: '1-5 hours',
    teamSize: '2-10 performers',
    rating: 4.7,
    reviews: 119,
    image: 'https://res.cloudinary.com/djhsdo5to/image/upload/v1763449202/m1_cuzcdg.jpg',
    highlights: [
      'Nadhaswaram & dhol teams',
      'Folk & cultural performances',
      'MCs and hosts',
      'DJ and sound systems',
      'Live instrumental artists',
      'Custom stage entertainment'
    ],
    images: [
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763449202/m3_azwsjc.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763449202/m6_xyom2r.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763449202/m5_bjngvu.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763449203/m9_yzbjkq.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763449203/m8_ryjxpi.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763449202/m7_knolbx.webp',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763449202/m4_dbalys.jpg',
      'https://res.cloudinary.com/djhsdo5to/image/upload/v1763449201/m2_nyiist.jpg'
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  const allServices = [...mainServices, ...specializedServices];
  return allServices.find(
    (service) => service.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
}
