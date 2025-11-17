import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, Users, Clock, DollarSign } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesData: { [key: string]: any } = {
    'wedding': {
      title: 'Wedding',
      description: 'Create the wedding of your dreams with our comprehensive wedding planning and execution services.',
      fullDescription: 'We specialize in creating magical wedding celebrations that reflect your unique love story. From intimate gatherings to grand celebrations, our experienced team handles every detail meticulously. We coordinate with the best vendors, manage logistics, create stunning decorations, and ensure your special day runs flawlessly.',
      highlights: [
        'Complete wedding coordination and planning',
        'Venue decoration and setup',
        'Guest accommodation management',
        'Catering and menu planning',
        'Photography and videography coordination',
        'Entertainment and music arrangements',
        'Ceremony and reception management'
      ],
      pricing: 'Starting from ₹2,00,000',
      duration: '4-6 months planning + event day',
      teamSize: '15-20 professionals',
      rating: 4.9,
      reviews: 250,
    images: [
  "https://cdn0.weddingwire.in/article/9780/3_2/1280/jpg/100879-wedding-stage-lead.webp",
  "https://www.jantadecorators.com/wp-content/uploads/2025/02/Wedding-Flower-Decoration.jpg",
  "https://images.unsplash.com/photo-1591203281954-23fa2ff8ef18?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1745573673235-5f2cee3ff9a8?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571983371651-221e6c0b910a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1601482441062-b9f13131f33a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707374661682-d804856cee22?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

    },
    'haldi-ceremony': {
      title: 'Haldi Ceremony',
      description: 'Traditional haldi ceremonies filled with joy, vibrant colors, and beautiful celebrations.',
      fullDescription: 'Our haldi ceremony services bring traditional charm and modern elegance together. We create a vibrant, festive atmosphere with bright yellow decorations, traditional arrangements, music, and games. Every element is designed to celebrate this auspicious occasion with your loved ones.',
      highlights: [
        'Venue decoration with traditional themes',
        'Haldi paste ceremony arrangements',
        'Music and DJ services',
        'Traditional games and activities',
        'Catering and refreshments',
        'Photography coverage',
        'Guest coordination'
      ],
      pricing: 'Starting from ₹50,000',
      duration: '1-2 hours event',
      teamSize: '8-10 professionals',
      rating: 4.8,
      reviews: 180,
   images: [
  "https://i.etsystatic.com/44894996/r/il/1b6925/6135499531/il_570xN.6135499531_11ai.jpg",
  "https://i.pinimg.com/736x/ba/1c/27/ba1c270ee2ebc1f05c7546990d43666d.jpg",
  "https://i.pinimg.com/originals/59/80/1a/59801a12463d05829c622591248bf0bf.jpg",
  "https://i.pinimg.com/originals/18/6a/f4/186af444e1a288c7a1823c1fb5970f39.jpg",
  "https://cdn0.weddingwire.in/article/3222/original/1920/jpg/102223-design-aqua2.jpeg",
  "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/06/Haldi-ceremony.jpg",
  "https://wedmeplz.com/wp-content/uploads/2020/07/3-6-1-1024x1024.jpg",
  "https://cheetah.cherishx.com/uploads/1679385395_original.jpg"
]

    },
    'birthday-party': {
      title: 'Birthday Party',
      description: 'Create unforgettable birthday celebrations with themed decorations and entertainment.',
      fullDescription: 'Make birthdays special with our customized birthday party services. Whether it\'s a child\'s birthday, milestone celebration, or adult party, we create magical experiences. From theme selection to entertainment, decorations, catering, and activities, we handle everything to make it memorable.',
      highlights: [
        'Custom theme selection and decoration',
        'Entertainment and game arrangements',
        'Cake and catering services',
        'Photography and videography',
        'Balloon and floral arrangements',
        'Sound and lighting setup',
        'Cleanup and waste management'
      ],
      pricing: 'Starting from ₹30,000',
      duration: '2-4 hours',
      teamSize: '6-8 professionals',
      rating: 4.7,
      reviews: 320,
images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763362738/birthday1_niob97.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday6_oa9qtp.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday5_qjiiym.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday3_ov33si.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday2_byxamp.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763362737/birthday4_yotd9s.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763362864/birthday8_rqmao8.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763362864/birthday9_cugdme.jpg"
]

    },
    'engagement': {
      title: 'Engagement',
      description: 'Romantic engagement celebrations that capture the beginning of your beautiful journey.',
      fullDescription: 'Celebrate your engagement with elegance and romance. Our engagement services create intimate, romantic settings perfect for this special milestone. We focus on creating memories with beautiful decorations, lighting, photography, and personalized touches that reflect your unique relationship.',
      highlights: [
        'Romantic venue setup and decoration',
        'Lighting and ambiance creation',
        'Ring ceremony coordination',
        'Catering and refreshments',
        'Photography and videography',
        'Music and entertainment',
        'Guest book arrangements'
      ],
      pricing: 'Starting from ₹75,000',
      duration: '2-3 hours',
      teamSize: '8-10 professionals',
      rating: 4.8,
      reviews: 145,
    images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763363175/engage9_ain5t5.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763363175/engage7_qzqtz2.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763363173/engage2_ktpubc.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage5_xwujwj.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage6_wnijtx.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage4_xtfsme.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage8_wxiksf.avif",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763363174/engage3_zvj7k4.webp"
]

    },
    'half-saree-ceremony': {
      title: 'Half Saree Ceremony',
      description: 'Traditional half saree ceremonies celebrating a girl\'s transition to womanhood.',
      fullDescription: 'Honor this important life milestone with our half saree ceremony services. We create beautiful, culturally appropriate settings that celebrate this transition. Our team handles all traditional arrangements, decorations, and rituals while maintaining the sanctity of the occasion.',
      highlights: [
        'Traditional stage setup and decoration',
        'Saree draping guidance and assistance',
        'Ritual arrangements and coordination',
        'Catering with traditional cuisine',
        'Photography and videography',
        'Guest reception management',
        'Jewelry and accessory coordination'
      ],
      pricing: 'Starting from ₹1,00,000',
      duration: '4-5 hours',
      teamSize: '12-15 professionals',
      rating: 4.9,
      reviews: 95,
 images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763367170/half2_qbgmy5.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763367170/half3_hiplae.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763367171/half5_tmk9pw.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763367171/half6_s8mrpv.png",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763367171/half4_xc8rzo.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763367176/half8_m5cong.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763367176/half7_nulk2e.png",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763367170/Haldi_Backdrop_Stage_Decorations_hprbcq.jpg"
]

    },
    'dhoti-ceremony': {
      title: 'Dhoti Ceremony',
      description: 'Sacred dhoti ceremonies celebrating a boy\'s transition with traditional elegance.',
      fullDescription: 'We specialize in organizing meaningful dhoti ceremonies that honor tradition. From ritual coordination to traditional attire guidance, decorations, and catering, we ensure this important occasion is celebrated beautifully with all cultural elements intact.',
      highlights: [
        'Traditional stage and altar setup',
        'Dhoti and accessory coordination',
        'Ritual and ceremony management',
        'Brahmin priest coordination',
        'Traditional catering arrangements',
        'Photography documentation',
        'Guest management and reception'
      ],
      pricing: 'Starting from ₹80,000',
      duration: '4-5 hours',
      teamSize: '10-12 professionals',
      rating: 4.8,
      reviews: 78,
   images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/dhoti2_bblrvc.png",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/dhoti8_nul6h6.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/dhoti4_twsqvm.png",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379767/dhoti7_c5rcux.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/dhoti6_bi5ddw.png",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379769/dhoti8_iunjhv.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/dhoti3_a2rzyc.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/dhoti1_arozte.png"
]

    },
    'house-warming': {
      title: 'House Warming',
      description: 'Auspicious house warming ceremonies with traditional rituals and festive celebrations.',
      fullDescription: 'Make your new home truly special with our house warming services. We handle all aspects including traditional rituals, auspicious ceremony arrangements, decorations, catering, and guest management. Let us help you start your new chapter on a blessed note.',
      highlights: [
        'Auspicious day selection',
        'Ritual coordination and priest arrangement',
        'Home decoration and setup',
        'Catering and refreshments',
        'Puja material arrangements',
        'Guest coordination',
        'Photography coverage'
      ],
      pricing: 'Starting from ₹40,000',
      duration: '3-4 hours',
      teamSize: '6-8 professionals',
      rating: 4.7,
      reviews: 110,
images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379784/house1_xevwv5.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/house8_x5yd5e.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379784/house1_xevwv5.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379774/house7_bnixbf.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379774/house6_uvscyy.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379774/house3_vf4fie.png",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379773/house4_f5o9fk.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379774/house5_gyfhir.jpg"
]

    },
    'anniversary': {
      title: 'Anniversary',
      description: 'Celebrate your love story with romantic anniversary celebrations.',
      fullDescription: 'Commemorate your special bond with our anniversary celebration services. We create intimate, romantic settings that celebrate your years together. From romantic dinners to renewing vows, we personalize every detail to make your celebration unforgettable.',
      highlights: [
        'Romantic venue decoration',
        'Candle and lighting arrangements',
        'Special menu planning',
        'Music and entertainment setup',
        'Cake and dessert arrangements',
        'Photography and videography',
        'Personalized touches and surprises'
      ],
      pricing: 'Starting from ₹35,000',
      duration: '2-3 hours',
      teamSize: '5-7 professionals',
      rating: 4.9,
      reviews: 200,
images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379763/anni1_xphazx.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/anni6_x19ssh.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/anni2_pxymad.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/anni4_ypkbeo.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/anni7_z8euql.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/anni8_npg5l0.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/anni5_eplc3f.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379765/anni9_tnpewp.webp"
]

    },
    'baby-shower': {
      title: 'Baby Shower',
      description: 'Joyful baby shower celebrations with cute themes and delightful arrangements.',
      fullDescription: 'Create magical memories celebrating the upcoming arrival of your baby. Our baby shower services include theme coordination, cute decorations, games, catering, and all arrangements to make this celebration special and memorable for the mom-to-be.',
      highlights: [
        'Theme selection and decoration',
        'Baby-themed games and activities',
        'Catering with special menu',
        'Cake and dessert arrangements',
        'Photography and videography',
        'Gift coordination',
        'Party favors and decorations'
      ],
      pricing: 'Starting from ₹25,000',
      duration: '2-3 hours',
      teamSize: '5-6 professionals',
      rating: 4.8,
      reviews: 165,
images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/baby2_h0vzub.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379767/baby6_dz05e3.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379767/baby5_yithux.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379766/baby1_sfeb2p.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379767/baby3_xnzcjz.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/baby4_bqdsla.png",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379771/engage7_yqns6j.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379768/baby7_vzpr7d.jpg"
]

    },
    'office-inauguration': {
      title: 'Office Inauguration',
      description: 'Professional office inauguration events with elegant setups and impressive presentations.',
      fullDescription: 'Make a strong impression with our office inauguration services. We handle everything from venue setup, ribbon cutting ceremonies, to corporate catering and guest management. Perfect for launching new offices, branches, or corporate facilities.',
      highlights: [
        'Venue setup and decoration',
        'Ribbon cutting ceremony coordination',
        'Sound and lighting systems',
        'Professional catering',
        'Photography and media coverage',
        'Guest management and logistics',
        'Signage and branding setup'
      ],
      pricing: 'Starting from ₹60,000',
      duration: '2-4 hours',
      teamSize: '10-12 professionals',
      rating: 4.7,
      reviews: 92,
  images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379802/office7_abgn9g.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379778/office4_ikrffm.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379778/office2_pmwrl3.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379803/office11_a52wtl.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379802/office8_xgcwnr.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379802/office6_f23qd6.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379803/office10_druma9.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/office1_o4xlxq.webp"
]

    },
    'naming-ceremony': {
      title: 'Naming Ceremony',
      description: 'Beautiful naming ceremonies celebrating the arrival of your little one.',
      fullDescription: 'Welcome your newborn with a beautiful naming ceremony. We coordinate traditional rituals, create warm and welcoming ambiance, and handle all logistics. From priest coordination to catering and photography, we ensure this milestone is celebrated meaningfully.',
      highlights: [
        'Traditional ritual coordination',
        'Priest and astrologer arrangement',
        'Venue decoration and setup',
        'Traditional catering',
        'Photography documentation',
        'Guest coordination',
        'Thank you cards and favors'
      ],
      pricing: 'Starting from ₹30,000',
      duration: '2-3 hours',
      teamSize: '6-8 professionals',
      rating: 4.8,
      reviews: 105,
    images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/naming8_gpnpzc.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379775/naming2_wd4naj.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379776/naming3_dcuyuu.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/naming9_b948li.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379776/naming5_xhp75g.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379777/naming6_ixtgka.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379776/naming4_jloaun.png",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379775/naming1_arrn9k.jpg"
]

    },
    'corporate-events': {
      title: 'Corporate Events',
      description: 'Professional corporate events with seamless execution and impressive presentations.',
      fullDescription: 'We specialize in creating impactful corporate events that leave lasting impressions. From conferences and seminars to team building events and corporate parties, our expertise ensures flawless execution and professional quality.',
      highlights: [
        'Event planning and coordination',
        'Venue management and setup',
        'Audio/visual and tech support',
        'Catering and hospitality',
        'Registration and check-in systems',
        'Photography and videography',
        'Post-event management'
      ],
      pricing: 'Starting from ₹1,50,000',
      duration: 'Customized duration',
      teamSize: '15-20 professionals',
      rating: 4.8,
      reviews: 128,
 images: [
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379769/c1_d0unrv.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379769/c3_db3vbu.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379771/c6_yrqtaf.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379770/c5_glyphm.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379769/c2_ztc2u4.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/c7_ffz4ev.jpg",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/c8_h79s83.webp",
  "https://res.cloudinary.com/djhsdo5to/image/upload/v1763379764/c9_mmahiz.jpg"
]

    }
  };

  const service = servicesData[serviceId || ''];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#f9e5b3] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3c0501] mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-[#3c0501] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#622e17] transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-linear-to-b from-[#f9e5b3] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-[#622e17] hover:text-[#3c0501] mb-8 font-semibold transition cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-[#3c0501] mb-4">{service.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'fill-[#ffc900] text-[#ffc900]' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-[#622e17] font-semibold">{service.rating} ({service.reviews} reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
              <h2 className="text-3xl font-bold text-[#3c0501] mb-4">Overview</h2>
              <p className="text-lg text-[#622e17] leading-relaxed mb-6">
                {service.fullDescription}
              </p>

              <h3 className="text-2xl font-bold text-[#3c0501] mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {service.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-start text-[#622e17]">
                    <span className="inline-block w-2 h-2 bg-[#ffc900] rounded-full mr-3 mt-2 shrink-0"></span>
                    <span className="text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-linear-to-br from-[#622e17] to-[#3c0501] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#ffc900]">Service Details</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <DollarSign className="w-6 h-6 text-[#ffc900] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#b59372]">Starting Price</p>
                    <p className="text-xl font-semibold">{service.pricing}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#ffc900] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#b59372]">Duration</p>
                    <p className="text-lg font-semibold">{service.duration}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-6 h-6 text-[#ffc900] mr-4 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#b59372]">Our Team Size</p>
                    <p className="text-lg font-semibold">{service.teamSize}</p>
                  </div>
                </div>
              </div>
{/* 
              <button className="w-full bg-[#ffc900] text-[#3c0501] py-4 rounded-lg font-semibold text-lg mt-8 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book This Service
              </button> */}
            </div>

            <div className="bg-[#bc842f] rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-lg font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mt-1.5 shrink-0"></span>
                  <span>Expert team with years of experience</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mt-1.5 shrink-0"></span>
                  <span>100% client satisfaction guaranteed</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mt-1.5 shrink-0"></span>
                  <span>Customized solutions for every occasion</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mt-1.5 shrink-0"></span>
                  <span>Attention to every detail</span>
                </li>
              </ul>
            </div>
          </div>
        </div>




        
       {/* IMAGE GALLERY – 8 IMAGES GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
  {service.images.map((image: string, idx: number) => (
    <div
      key={idx}
      className="relative w-full h-56 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      <img
        src={image}
        alt={`${service.title} ${idx + 1}`}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  ))}
</div>
{/* 
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-[#3c0501] mb-6">Client Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="border-2 border-[#f9e5b3] rounded-lg p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ffc900] text-[#ffc900]" />
                  ))}
                </div>
                <p className="text-[#622e17] mb-4">
                  "The team was absolutely wonderful! They handled every detail perfectly and made our day truly special."
                </p>
                <p className="font-semibold text-[#3c0501]">Client {idx + 1}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceDetail;
