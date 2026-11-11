export type ActivityPeriod = 'Morning' | 'Midday' | 'Afternoon' | 'Evening' | 'Night';
export type ActivityCategory = 'Landmark' | 'Culinary' | 'Culture' | 'Scenic Walk' | 'Neighborhood' | 'Leisure';

export interface Activity {
  id: string;
  time: string;
  period: ActivityPeriod;
  title: string;
  neighborhood: string;
  category: ActivityCategory;
  description: string;
  insiderTip: string;
  duration: string;
  cost: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  theme: string;
  summary: string;
  walkingEstimate: string;
  neighborhoods: string[];
  activities: Activity[];
}

export interface PackingItem {
  id: string;
  item: string;
  category: 'Clothing' | 'Footwear' | 'Electronics' | 'Essentials' | 'Gear';
  reason: string;
}

export interface CityItinerary {
  id: string;
  name: string;
  country: string;
  aliases: string[];
  tagline: string;
  coverImage: string;
  overview: string;
  logistics: {
    transit: string;
    bestSeason: string;
    budgetPerDay: string;
    currency: string;
    localTip: string;
    walkingScore: string;
  };
  highlights: string[];
  packingList: PackingItem[];
  days: ItineraryDay[];
}

export const CITIES_DATA: Record<string, CityItinerary> = {
  rome: {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    aliases: ['rome', 'roma', 'rome, italy', 'roma, italia', 'italia', 'vatican'],
    tagline: 'The Eternal City of Open-Air Antiquities & Trastevere Evenings',
    coverImage: '/src/assets/images/city_rome_colosseum_1794386868191.jpg',
    overview: 'A balanced 72-hour journey through three millennia of classical civilization, marble piazzas, baroque fountains, and authentic Roman culinary traditions.',
    logistics: {
      transit: 'Roma Pass 72H or contactless Metro cards for Line A & B',
      bestSeason: 'April–May or October–November (warm days, cooler evenings)',
      budgetPerDay: '€75 – €150 (including museum entry & trattoria dining)',
      currency: 'EUR (€)',
      localTip: 'Drink your espresso standing at the bar counter ("al banco") for €1.20 instead of table service.',
      walkingScore: '16,000 steps/day (wear supportive flat shoes for cobblestones)'
    },
    highlights: [
      'Early access to the Colosseum & Roman Forum before the heat',
      'The Pantheon oculus at midday with artisan espresso nearby',
      'St. Peter’s Basilica dome climb for 360° Vatican panoramas',
      'Evening aperitivo & hand-rolled cacio e pepe in Trastevere'
    ],
    packingList: [
      {
        id: 'rome-p1',
        item: 'Modest Scarf or Linen Shawl',
        category: 'Clothing',
        reason: 'Required for entry into St. Peter’s Basilica, Vatican Museums, and churches (shoulders and knees must be covered).'
      },
      {
        id: 'rome-p2',
        item: 'Cushioned Walking Shoes',
        category: 'Footwear',
        reason: 'Essential for Rome’s uneven cobblestones ("sampietrini") during intense 16,000-step walking days.'
      },
      {
        id: 'rome-p3',
        item: 'Refillable Metal Water Bottle',
        category: 'Essentials',
        reason: 'Rome has over 2,500 historic cast-iron "nasoni" drinking fountains with clean, ice-cold mountain water for free.'
      },
      {
        id: 'rome-p4',
        item: 'Anti-Theft Crossbody Bag',
        category: 'Gear',
        reason: 'Keeps wallet, phone, and metro pass secure on crowded Metro Line A and around the Colosseum & Termini.'
      },
      {
        id: 'rome-p5',
        item: 'Type C/F European Plug Adapter',
        category: 'Electronics',
        reason: 'Italy uses standard European two-round-pin and 3-in-line sockets (230V, 50Hz).'
      }
    ],
    days: [
      {
        day: 1,
        title: 'Imperial Rome & Historic Piazzas',
        theme: 'Antiquity & Renaissance Heart',
        summary: 'Start with the monumental Colosseum and Forum, then weave through the historic center to Trevi and the Pantheon.',
        walkingEstimate: '6.5 km · ~9,000 steps',
        neighborhoods: ['Colosseo', 'Monti', 'Centro Storico'],
        activities: [
          {
            id: 'rome-d1-1',
            time: '08:30 – 11:30',
            period: 'Morning',
            title: 'Colosseum, Roman Forum & Palatine Hill',
            neighborhood: 'Piazza del Colosseo',
            category: 'Landmark',
            description: 'Enter through the gladiator gate into the 2,000-year-old amphitheater, then stroll through the ancient political heart of the Roman Republic among triumphal arches and marble columns.',
            insiderTip: 'Book official CoopCulture or Parco Colosseo tickets exactly 30 days in advance to skip hours of queues.',
            duration: '3.0 hrs',
            cost: '€18 (skip-the-line entry)'
          },
          {
            id: 'rome-d1-2',
            time: '12:00 – 13:30',
            period: 'Midday',
            title: 'Roman Lunch & Natural Wine in Rione Monti',
            neighborhood: 'Monti',
            category: 'Culinary',
            description: 'Wander the ivy-draped alleys of Monti for lunch at a local osteria. Savor crispy carciofi alla giudìa (artichokes) and classic carbonara made with pecorino romano and guanciale.',
            insiderTip: 'Try Osteria da Fortunata or Trattoria Vecchia Roma; reserve a table or arrive at 12:15 to beat the lunch rush.',
            duration: '1.5 hrs',
            cost: '€22 – €35'
          },
          {
            id: 'rome-d1-3',
            time: '14:00 – 16:30',
            period: 'Afternoon',
            title: 'The Pantheon & Piazza Navona',
            neighborhood: 'Centro Storico',
            category: 'Culture',
            description: 'Step into the best-preserved monument of ancient Rome to gaze up through the open 9-meter oculus. Follow the cobblestone curves to Bernini’s Fountain of the Four Rivers in Piazza Navona.',
            insiderTip: 'Grab a granita di caffè con panna at historic Sant’Eustachio Il Caffè, just two minutes behind the Pantheon.',
            duration: '2.5 hrs',
            cost: '€5 (Pantheon entry)'
          },
          {
            id: 'rome-d1-4',
            time: '17:00 – 19:00',
            period: 'Evening',
            title: 'Trevi Fountain Coin Toss & Spanish Steps',
            neighborhood: 'Trevi / Spagna',
            category: 'Scenic Walk',
            description: 'Marvel at the dramatic travertine facade of the Trevi Fountain bathed in warm afternoon sun, then stroll through via dei Condotti to watch golden hour over the Spanish Steps.',
            insiderTip: 'Toss your coin with your right hand over your left shoulder to guarantee your return to Rome.',
            duration: '2.0 hrs',
            cost: 'Free'
          },
          {
            id: 'rome-d1-5',
            time: '19:30 – 22:30',
            period: 'Night',
            title: 'Aperitivo & Dinner in Campo de’ Fiori',
            neighborhood: 'Regola / Campo de’ Fiori',
            category: 'Culinary',
            description: 'Order an Aperol or Campari spritz with olives and taralli at a piazza terrace, followed by Roman-style thin-crust wood-fired pizza and artisan gelato at Frigidarium.',
            insiderTip: 'Order pizza tonno e cipolla or margherita with buffalo mozzarella; avoid restaurants with illustrated picture menus outside.',
            duration: '3.0 hrs',
            cost: '€25 – €40'
          }
        ]
      },
      {
        day: 2,
        title: 'Vatican City & Trastevere Twilight',
        theme: 'Sacred Art & Bohemian Evening',
        summary: 'Cross the Tiber for Michelangelo’s Sistine Chapel masterpieces, castle views, and an unforgettable evening in Rome’s liveliest dining quarter.',
        walkingEstimate: '7.8 km · ~11,000 steps',
        neighborhoods: ['Vaticano', 'Borgo', 'Trastevere'],
        activities: [
          {
            id: 'rome-d2-1',
            time: '08:00 – 11:30',
            period: 'Morning',
            title: 'Vatican Museums, Sistine Chapel & St. Peter’s',
            neighborhood: 'Vatican City',
            category: 'Culture',
            description: 'Explore the Gallery of Maps and Raphael Rooms before standing in silence beneath Michelangelo’s ceiling frescoes and The Last Judgment in the Sistine Chapel.',
            insiderTip: 'Strict dress code applies: knees and shoulders must be covered. Book an 08:00 early morning slot to beat tour groups.',
            duration: '3.5 hrs',
            cost: '€25 (Vatican admission)'
          },
          {
            id: 'rome-d2-2',
            time: '12:00 – 13:30',
            period: 'Midday',
            title: 'Porchetta Panini & Gelato in Borgo Pio',
            neighborhood: 'Borgo Pio',
            category: 'Culinary',
            description: 'Exit the colonnades into the quaint medieval streets of Borgo Pio. Grab a warm artisanal porchetta sandwich on crusty pizza bianca from Panificio Bonci or DuecentoGradi.',
            insiderTip: 'Pair with an Italian chinotto or craft beer from Lazio.',
            duration: '1.5 hrs',
            cost: '€8 – €14'
          },
          {
            id: 'rome-d2-3',
            time: '14:00 – 16:30',
            period: 'Afternoon',
            title: 'Castel Sant’Angelo & Ponte Sant’Angelo',
            neighborhood: 'Prati / Ponte',
            category: 'Landmark',
            description: 'Walk the ramparts of Emperor Hadrian’s cylindrical mausoleum, which was converted into a papal fortress. Enjoy sweeping rooftop views over the Tiber River and St. Peter’s Dome.',
            insiderTip: 'Stop on the pedestrian bridge to photograph Bernini’s ten expressive marble angel sculptures.',
            duration: '2.5 hrs',
            cost: '€16'
          },
          {
            id: 'rome-d2-4',
            time: '17:00 – 19:30',
            period: 'Evening',
            title: 'Janiculum Hill Sunset & Trastevere Stroll',
            neighborhood: 'Gianicolo / Trastevere',
            category: 'Scenic Walk',
            description: 'Walk up to the Piazzale Giuseppe Garibaldi on Janiculum Hill for the finest sunset vista in Rome, then wind down through cobblestone stairs into medieval Trastevere.',
            insiderTip: 'The Janiculum cannon fires a blank charge daily at noon, but the 18:30 golden hour sunset here is purely romantic.',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'rome-d2-5',
            time: '20:00 – 23:00',
            period: 'Night',
            title: 'Trastevere Trattoria Feast & Piazza Santa Maria',
            neighborhood: 'Trastevere',
            category: 'Culinary',
            description: 'Dine under string lights on authentic tonnarelli cacio e pepe and coda alla vaccinara (braised oxtail), followed by street buskers in front of the illuminated 12th-century mosaics.',
            insiderTip: 'Trattoria Da Enzo al 29 does not take reservations; queue 20 minutes before their 19:30 opening time.',
            duration: '3.0 hrs',
            cost: '€30 – €50'
          }
        ]
      },
      {
        day: 3,
        title: 'Borghese Gardens, Jewish Ghetto & Sunset Over the Forum',
        theme: 'Baroque Masterpieces & Hidden Alleys',
        summary: 'Marvel at Bernini marble sculptures in Villa Borghese, discover ancient porticos in the Jewish Quarter, and end with an unforgettable panoramic farewell.',
        walkingEstimate: '6.0 km · ~8,500 steps',
        neighborhoods: ['Villa Borghese', 'Pincio', 'Ghetto Ebraico', 'Campidoglio'],
        activities: [
          {
            id: 'rome-d3-1',
            time: '09:00 – 11:30',
            period: 'Morning',
            title: 'Galleria Borghese Masterpieces & Gardens',
            neighborhood: 'Pinciano',
            category: 'Culture',
            description: 'Admire Bernini’s breathtaking sculptures of Apollo and Daphne and Pluto and Proserpina alongside Caravaggio oil paintings in Cardinal Scipione Borghese’s private pleasure villa.',
            insiderTip: 'Mandatory reservations are timed for 2-hour blocks and frequently sell out weeks in advance.',
            duration: '2.5 hrs',
            cost: '€18 (reserved ticket)'
          },
          {
            id: 'rome-d3-2',
            time: '12:00 – 13:30',
            period: 'Midday',
            title: 'Pincian Hill Terrace & Piazza del Popolo',
            neighborhood: 'Pincio / Campo Marzio',
            category: 'Scenic Walk',
            description: 'Stroll through the shaded umbrella pines of the Borghese gardens to the Pincio terrace overlooking Piazza del Popolo and the twin baroque churches.',
            insiderTip: 'Rent a tandem surrey bike or row a wooden boat on the villa lake for €5.',
            duration: '1.5 hrs',
            cost: 'Free'
          },
          {
            id: 'rome-d3-3',
            time: '14:00 – 16:30',
            period: 'Afternoon',
            title: 'Jewish Ghetto & Teatro di Marcello',
            neighborhood: 'Sant’Angelo',
            category: 'Neighborhood',
            description: 'Explore one of the oldest Jewish quarters in Europe. Admire the Fountain of the Turtles (Fontana delle Tartarughe) and ancient arches of Teatro di Marcello, which inspired the Colosseum.',
            insiderTip: 'Stop at Pasticceria Boccione for famous ricotta and wild sour cherry cake (torta di ricotta e visciole).',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'rome-d3-4',
            time: '17:00 – 19:30',
            period: 'Evening',
            title: 'Campidoglio & Secret Forum Sunset Overlook',
            neighborhood: 'Capitoline Hill',
            category: 'Scenic Walk',
            description: 'Climb Michelangelo’s grand Cordonata staircase up to Piazza del Campidoglio. Walk around behind the Palazzo Senatorio to Rome’s best free viewpoint over the illuminated Forum ruins.',
            insiderTip: 'Watch the ruins light up as dusk settles; it is far less crowded than the Colosseum frontage.',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'rome-d3-5',
            time: '20:00 – 23:00',
            period: 'Night',
            title: 'Celebratory Roman Farewell Dinner',
            neighborhood: 'Testaccio',
            category: 'Culinary',
            description: 'Head to Testaccio, the birthplace of modern Roman cucina povera, for amatriciana with crispy cheek bacon, saltimbocca alla romana, and local Frascati white wine.',
            insiderTip: 'Book Flavio al Velavevodetto, built directly into the side of Monte Testaccio—an ancient mound of Roman amphora shards.',
            duration: '3.0 hrs',
            cost: '€35 – €55'
          }
        ]
      }
    ]
  },

  paris: {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    aliases: ['paris', 'paris, france', 'france', 'lutece', 'paname'],
    tagline: 'The City of Light: Haute Cafés, Flânerie & World-Class Salons',
    coverImage: '/src/assets/images/city_paris_rooftops_1794386868477.jpg',
    overview: 'An exquisite three-day immersion in Parisian culture: classic boulevard flânerie, royal art collections, bohemian hilltop Montmartre, and Seine riverbank twilight.',
    logistics: {
      transit: 'Navigo Easy card or contactless Paris Métro / RER tickets',
      bestSeason: 'May–June or September–October (mild sunshine and café terraces)',
      budgetPerDay: '€90 – €180 (museum passes, bistro dining & pastries)',
      currency: 'EUR (€)',
      localTip: 'Always greet shopkeepers and waiters with a polite "Bonjour Madame/Monsieur" before asking anything.',
      walkingScore: '15,000 steps/day (compact neighborhoods, great métros)'
    },
    highlights: [
      'Timed morning entry to the Louvre to see the Mona Lisa & Venus de Milo',
      'Strolling the arcades and boutiques of Le Marais & Place des Vosges',
      'Montmartre artist squares and sunset from the steps of Sacré-Cœur',
      'Evening river cruise along the Seine as the Eiffel Tower sparkles'
    ],
    packingList: [
      {
        id: 'paris-p1',
        item: 'Tailored Trench Coat or Layer',
        category: 'Clothing',
        reason: 'Parisian weather shifts quickly from sun to brisk breeze; an elegant layer blends into classic café culture.'
      },
      {
        id: 'paris-p2',
        item: 'Polished Walking Shoes or Leather Sneakers',
        category: 'Footwear',
        reason: 'Parisians do lots of walking; stylish, comfortable shoes let you walk 15,000 steps without looking like athletic gear.'
      },
      {
        id: 'paris-p3',
        item: 'Compact Telescopic Umbrella',
        category: 'Essentials',
        reason: 'Frequent brief passing rain showers occur along the Seine and while wandering the Tuileries gardens.'
      },
      {
        id: 'paris-p4',
        item: 'Zipped Crossbody Bag',
        category: 'Gear',
        reason: 'Leaves your hands free for baguettes and coffee while keeping transit cards and wallet secure on the Métro.'
      },
      {
        id: 'paris-p5',
        item: 'Type E/C European Plug Adapter',
        category: 'Electronics',
        reason: 'France uses standard European outlets with two round prongs and an earth pin (230V, 50Hz).'
      }
    ],
    days: [
      {
        day: 1,
        title: 'Historic Core, The Louvre & Saint-Germain',
        theme: 'The Royal Axis & Left Bank Bohemian Chic',
        summary: 'Explore the foundations of Paris on Île de la Cité, immerse yourself in the Louvre treasures, and cross to the intellectual Left Bank.',
        walkingEstimate: '6.8 km · ~9,500 steps',
        neighborhoods: ['Île de la Cité', '1st Arrondissement', 'Saint-Germain-des-Prés'],
        activities: [
          {
            id: 'paris-d1-1',
            time: '08:30 – 11:30',
            period: 'Morning',
            title: 'Sainte-Chapelle & Notre-Dame Forecourt',
            neighborhood: 'Île de la Cité',
            category: 'Landmark',
            description: 'Begin inside Sainte-Chapelle to gaze at 1,113 glowing 13th-century stained-glass panels reaching 15 meters high. Afterwards, walk past the restored gothic towers of Notre-Dame Cathedral.',
            insiderTip: 'Book the first 09:00 morning ticket; morning sunlight through the high stained glass produces blindingly radiant cobalt and ruby hues.',
            duration: '3.0 hrs',
            cost: '€13'
          },
          {
            id: 'paris-d1-2',
            time: '12:00 – 13:30',
            period: 'Midday',
            title: 'Classic French Bistro Lunch in Saint-Germain',
            neighborhood: 'Saint-Germain-des-Prés',
            category: 'Culinary',
            description: 'Sit at a woven wicker bistro chair at Café de Flore, Les Deux Magots, or nearby Le Comptoir du Relais. Order a warm croque-monsieur, quiche lorraine, or steak frites with Dijon mustard.',
            insiderTip: 'People-watching on boulevard Saint-Germain is legendary; order café crème and pain au chocolat.',
            duration: '1.5 hrs',
            cost: '€20 – €35'
          },
          {
            id: 'paris-d1-3',
            time: '14:00 – 17:00',
            period: 'Afternoon',
            title: 'Musée du Louvre & Tuileries Garden Stroll',
            neighborhood: '1st Arrondissement',
            category: 'Culture',
            description: 'Enter beneath I.M. Pei’s glass pyramid to discover the Winged Victory of Samothrace, the Venus de Milo, and the Mona Lisa. Follow with a tranquil walk among sculptures in the Jardin des Tuileries.',
            insiderTip: 'Enter via the Carrousel du Louvre underground mall entrance (via 99 rue de Rivoli) for much shorter security lines than the main pyramid plaza.',
            duration: '3.0 hrs',
            cost: '€22 (reserved ticket)'
          },
          {
            id: 'paris-d1-4',
            time: '17:30 – 19:30',
            period: 'Evening',
            title: 'Place Vendôme & Palais-Royal Courtyard',
            neighborhood: 'Opéra / Palais-Royal',
            category: 'Scenic Walk',
            description: 'Wander between the black-and-white striped Buren columns in the tranquil Cour d’Honneur of Palais-Royal, then stroll toward the grand jewelry houses of Place Vendôme.',
            insiderTip: 'Pick up a box of signature salted-butter macarons from Pierre Hermé nearby on rue Cambon.',
            duration: '2.0 hrs',
            cost: 'Free'
          },
          {
            id: 'paris-d1-5',
            time: '20:00 – 23:00',
            period: 'Night',
            title: 'Candlelit Dinner by the River Seine',
            neighborhood: 'Latin Quarter / Odéon',
            category: 'Culinary',
            description: 'Dine in an authentic candlelit cave or classic brass-railed Parisian brasserie. Savor French onion soup gratinée, duck confit with sarladaise potatoes, and tarte tatin.',
            insiderTip: 'Try Brasserie Lipp or Polidor; reservations are recommended 2 to 3 days in advance.',
            duration: '3.0 hrs',
            cost: '€35 – €60'
          }
        ]
      },
      {
        day: 2,
        title: 'Impressionism, The Eiffel Tower & Seine Cruise',
        theme: 'Gilded Boulevards & Riverfront Glow',
        summary: 'From Monet’s brushstrokes at Musée d’Orsay to the sweeping lawns of Champ de Mars and an illuminated cruise on the Seine.',
        walkingEstimate: '7.2 km · ~10,500 steps',
        neighborhoods: ['7th Arrondissement', 'Musée d’Orsay', 'Trocadéro'],
        activities: [
          {
            id: 'paris-d2-1',
            time: '09:00 – 12:00',
            period: 'Morning',
            title: 'Musée d’Orsay Impressionist Masters',
            neighborhood: '7th Arrondissement',
            category: 'Culture',
            description: 'Housed in a magnificent Beaux-Arts railway station from 1900, d’Orsay holds the world’s greatest collection of Impressionist masterpieces by Monet, Van Gogh, Renoir, Degas, and Cézanne.',
            insiderTip: 'Head straight to the 5th floor gallery behind the giant railway clock face for the best Monet water lilies and a vista across the Seine to Montmartre.',
            duration: '3.0 hrs',
            cost: '€16'
          },
          {
            id: 'paris-d2-2',
            time: '12:30 – 14:00',
            period: 'Midday',
            title: 'Epicurean Market Lunch on Rue Cler',
            neighborhood: 'Gros-Caillou / 7th Arr.',
            category: 'Culinary',
            description: 'Stroll down one of Paris’s most famous pedestrian market streets. Pick up aged Comté cheese, warm crusty baguettes, rotisserie chicken, and fresh raspberries for a street-side lunch.',
            insiderTip: 'Fromagerie Cler has exceptional raw milk cheeses; ask the monger for "prêt à manger aujourd’hui" (ready to eat today).',
            duration: '1.5 hrs',
            cost: '€15 – €25'
          },
          {
            id: 'paris-d2-3',
            time: '14:30 – 17:30',
            period: 'Afternoon',
            title: 'Champ de Mars & Eiffel Tower Summit / 2nd Floor',
            neighborhood: 'Champ de Mars',
            category: 'Landmark',
            description: 'Stand beneath Gustave Eiffel’s iron lattice tower, constructed for the 1889 World’s Fair. Ride the hydraulic elevators up for breathtaking panoramas across Paris from Montmartre to La Défense.',
            insiderTip: 'Book lift tickets online 60 days in advance. If sold out, purchase stairs-to-second-floor tickets on-site with minimal wait.',
            duration: '3.0 hrs',
            cost: '€19 – €29'
          },
          {
            id: 'paris-d2-4',
            time: '18:00 – 19:30',
            period: 'Evening',
            title: 'Trocadéro Viewpoint & Sunset Photographs',
            neighborhood: 'Trocadéro / 16th Arr.',
            category: 'Scenic Walk',
            description: 'Cross the Pont d’Iéna to the Esplanade du Trocadéro for the most iconic postcard angle of the Eiffel Tower framed against the evening sunset sky.',
            insiderTip: 'Arrive 30 minutes before dusk to catch the transition from golden light to blue hour.',
            duration: '1.5 hrs',
            cost: 'Free'
          },
          {
            id: 'paris-d2-5',
            time: '20:00 – 22:30',
            period: 'Night',
            title: 'Vedettes de Paris Seine Cruise & Sparkling Tower',
            neighborhood: 'Port de Suffren / Seine',
            category: 'Leisure',
            description: 'Board an open-deck boat gliding along the Seine past illuminated bridges, Notre-Dame, the Conciergerie, and the Louvre. Watch the Eiffel Tower burst into sparkling white lights on the hour.',
            insiderTip: 'The sparkle happens for 5 minutes at the beginning of each hour after sunset until 23:00.',
            duration: '2.5 hrs',
            cost: '€18 – €24'
          }
        ]
      },
      {
        day: 3,
        title: 'Le Marais Mansions & Montmartre Hilltop',
        theme: 'Aristocratic History & Bohemian Artists',
        summary: 'Explore 17th-century aristocratic courtyards in Le Marais, indulge in Jewish quarter bakeries, and end with bohemian romance atop Montmartre.',
        walkingEstimate: '6.5 km · ~9,200 steps',
        neighborhoods: ['Le Marais', 'Place des Vosges', 'Montmartre'],
        activities: [
          {
            id: 'paris-d3-1',
            time: '09:00 – 11:30',
            period: 'Morning',
            title: 'Place des Vosges & Le Marais Private Mansions',
            neighborhood: '4th Arrondissement',
            category: 'Neighborhood',
            description: 'Stroll under the uniform red-brick and stone arcades of Paris’s oldest planned square (built by Henri IV in 1612). Discover hidden garden courtyards inside the Musée Carnavalet and Hôtel de Sully.',
            insiderTip: 'Victor Hugo lived at Maison de Victor Hugo in the corner of the square while writing Les Misérables (free permanent collection).',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'paris-d3-2',
            time: '12:00 – 13:30',
            period: 'Midday',
            title: 'Rue des Rosiers Falafel & Pastries',
            neighborhood: 'Le Marais',
            category: 'Culinary',
            description: 'Grab lunch in the historic Jewish quarter along Rue des Rosiers. Savor legendary pita stuffed with fried eggplant, cucumber salad, tahini, and chickpea falafel from L’As du Fallafel.',
            insiderTip: 'Order takeout at the street window to skip the sit-down line, and eat in the nearby Jardin des Rosiers-Joseph Migneret.',
            duration: '1.5 hrs',
            cost: '€10 – €16'
          },
          {
            id: 'paris-d3-3',
            time: '14:30 – 17:00',
            period: 'Afternoon',
            title: 'Montmartre Vineyard, Rue de l’Abreuvoir & Artist Studios',
            neighborhood: 'Montmartre / 18th Arr.',
            category: 'Scenic Walk',
            description: 'Ascend the bohemian hill where Picasso, Renoir, and Modigliani lived. Walk past Le Consulat café, La Maison Rose, and the secret Clos Montmartre vineyard dating to Roman times.',
            insiderTip: 'Avoid the crowded funicular; take the scenic stone staircases up Rue Foyatier for classic cinematic Paris vibes.',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'paris-d3-4',
            time: '17:30 – 19:30',
            period: 'Evening',
            title: 'Sacré-Cœur Basilica & Panoramic Sunset',
            neighborhood: 'Butte Montmartre',
            category: 'Landmark',
            description: 'Step into the Romano-Byzantine white travertine basilica with its sparkling apse mosaic of Christ in Majesty. Sit on the stone grand steps outside to listen to acoustic buskers as Paris lights up.',
            insiderTip: 'Entry into the basilica is free; climb the 300 steps of the dome (€7) for Paris’s highest open-air rooftop viewpoint.',
            duration: '2.0 hrs',
            cost: 'Free (or €7 dome)'
          },
          {
            id: 'paris-d3-5',
            time: '20:00 – 23:00',
            period: 'Night',
            title: 'Farewell French Natural Wine & Neo-Bistro Dinner',
            neighborhood: 'Pigalle / South Pigalle (SoPi)',
            category: 'Culinary',
            description: 'Descend to vibrant South Pigalle for a modern Parisian dinner celebrating farm-to-table seasonal small plates, natural biodynamic French wines, and warm sourdough bread.',
            insiderTip: 'Check out spots like Buvette Paris or Chez Jeannette; book ahead or drop in right at 19:45.',
            duration: '3.0 hrs',
            cost: '€40 – €70'
          }
        ]
      }
    ]
  },

  tokyo: {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    aliases: ['tokyo', 'tokyo, japan', 'japan', 'edo', 'nihon'],
    tagline: 'Hypermodern Neon Skylines, Ancient Shrines & Culinary Perfection',
    coverImage: '/src/assets/images/city_tokyo_street_1794386870677.jpg',
    overview: 'A seamless 3-day transit through Japan’s electric metropolis: serene Meiji timber shrines, buzzing Shibuya crossings, Asakusa Edo temples, and world-class culinary craft.',
    logistics: {
      transit: 'Digital Suica / Pasmo card in Apple/Google Wallet for JR & Tokyo Metro',
      bestSeason: 'March–April (cherry blossoms) or October–November (clear skies & autumn foliage)',
      budgetPerDay: '¥9,000 – ¥20,000 (~$60 – $130 USD)',
      currency: 'JPY (¥)',
      localTip: 'Keep small trash in your bag (street bins are rare); stand on the left side of escalators in Tokyo.',
      walkingScore: '18,000 steps/day (spotless, high-efficiency transit stations)'
    },
    highlights: [
      'Early morning incense ritual at Senso-ji, Tokyo’s oldest Buddhist temple',
      'Peaceful walk through 170 acres of evergreen forest at Meiji Jingu Shrine',
      'The thrilling rush of the Shibuya Scramble Crossing from Shibuya Sky rooftop',
      'Nighttime alleyway yakitori and craft beer in Shinjuku’s Omoide Yokocho'
    ],
    packingList: [
      {
        id: 'tokyo-p1',
        item: 'Slip-On Walking Shoes & Clean Socks',
        category: 'Footwear',
        reason: 'Frequent shoe removal is customary when entering temples, izakayas, tatami tea houses, and fitting rooms.'
      },
      {
        id: 'tokyo-p2',
        item: 'Dedicated Coin Purse',
        category: 'Essentials',
        reason: 'Japan’s vending machines, gachapon capsule dispensers, and temple fortune boxes require physical ¥100/¥500 coins.'
      },
      {
        id: 'tokyo-p3',
        item: 'Small Hand Towel or Tenugui',
        category: 'Essentials',
        reason: 'Restrooms in train stations and shrines rarely provide paper towels or electric hand dryers.'
      },
      {
        id: 'tokyo-p4',
        item: 'Portable Power Bank (10,000 mAh)',
        category: 'Electronics',
        reason: 'Constant subway station navigation, translation cameras, and IC card tapping drain phone batteries rapidly.'
      },
      {
        id: 'tokyo-p5',
        item: 'Type A Two-Prong Adapter (Ungrounded)',
        category: 'Electronics',
        reason: 'Japanese wall outlets use two flat parallel pins (100V, ungrounded); 3-prong plugs will not fit standard sockets.'
      }
    ],
    days: [
      {
        day: 1,
        title: 'Old Edo: Asakusa, Ueno & Akihabara Tech District',
        theme: 'Historic Temples & Pop-Culture Neon',
        summary: 'Experience Tokyo’s cultural roots at Senso-ji temple, savor street snacks on Nakamise-dori, and step into electric Akihabara.',
        walkingEstimate: '7.0 km · ~10,000 steps',
        neighborhoods: ['Asakusa', 'Ueno', 'Akihabara'],
        activities: [
          {
            id: 'tokyo-d1-1',
            time: '08:00 – 10:30',
            period: 'Morning',
            title: 'Senso-ji Temple & Kaminarimon Thunder Gate',
            neighborhood: 'Asakusa',
            category: 'Culture',
            description: 'Pass under the giant 700-kg red lantern at Kaminarimon into Nakamise-dori. Wave purifying incense smoke over yourself before praying at the main hall of Tokyo’s oldest temple (founded 628 AD).',
            insiderTip: 'Draw an "Omikuji" paper fortune for ¥100; if you draw a bad fortune, tie it to the metal rack to leave the misfortune behind.',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'tokyo-d1-2',
            time: '11:00 – 12:30',
            period: 'Midday',
            title: 'Fresh Melonpan & Soba Noodle Lunch',
            neighborhood: 'Asakusa',
            category: 'Culinary',
            description: 'Nibble on warm crispy melonpan from Asakusa Kagetsudo, followed by chilled buckwheat zaru-soba noodles dipped in dashi-mirin broth at a traditional tatami mat restaurant.',
            insiderTip: 'Slurping your noodles is encouraged in Japan—it cools the noodles and enhances the aroma.',
            duration: '1.5 hrs',
            cost: '¥1,200 – ¥2,000'
          },
          {
            id: 'tokyo-d1-3',
            time: '13:00 – 15:30',
            period: 'Afternoon',
            title: 'Ueno Park & Tokyo National Museum',
            neighborhood: 'Ueno',
            category: 'Culture',
            description: 'Walk through Ueno Park to Japan’s oldest and largest museum, housing priceless samurai katana blades, ukiyo-e woodblock prints, kimonos, and ancient Jomon ceramics.',
            insiderTip: 'The Honkan (Japanese Gallery) is the architectural jewel; visit room 2 for national treasure samurai armor.',
            duration: '2.5 hrs',
            cost: '¥1,000'
          },
          {
            id: 'tokyo-d1-4',
            time: '16:00 – 18:30',
            period: 'Evening',
            title: 'Akihabara Electric Town & Retro Gaming',
            neighborhood: 'Akihabara',
            category: 'Neighborhood',
            description: 'Dive into multi-story arcades, gachapon capsule toy alleys, and retro gaming havens like Super Potato where pristine Famicom, Game Boy, and Neo Geo classics line the walls.',
            insiderTip: 'Try the multi-floor GiGO or Taito Station to test your claw crane machine skills.',
            duration: '2.5 hrs',
            cost: 'Free to explore (¥1,000 for gachapon)'
          },
          {
            id: 'tokyo-d1-5',
            time: '19:00 – 22:00',
            period: 'Night',
            title: 'Tonkotsu Ramen & Craft Highballs',
            neighborhood: 'Kanda / Akihabara',
            category: 'Culinary',
            description: 'Order rich steaming pork-bone tonkotsu ramen via a vintage ticket vending machine at the door. Customize noodle firmness, broth richness, and garlic levels to your exact liking.',
            insiderTip: 'Ask for "kaedama" (noodle refill) when you have finished your noodles but have broth remaining (¥150).',
            duration: '2.0 hrs',
            cost: '¥1,200 – ¥2,500'
          }
        ]
      },
      {
        day: 2,
        title: 'Shinjuku & Shibuya: Modern Marvels & Night Alleyways',
        theme: 'Subculture, Fashion & High-Altitude Views',
        summary: 'From tranquil cedar groves at Meiji Jingu to youthful Harajuku street fashion, Shibuya Sky observation deck, and lantern-lit alleyways.',
        walkingEstimate: '8.2 km · ~12,000 steps',
        neighborhoods: ['Harajuku', 'Shibuya', 'Shinjuku'],
        activities: [
          {
            id: 'tokyo-d2-1',
            time: '08:30 – 10:30',
            period: 'Morning',
            title: 'Meiji Jingu Shinto Shrine & Sacred Forest',
            neighborhood: 'Yoyogi / Harajuku',
            category: 'Culture',
            description: 'Step under the towering cypress torii gate into a peaceful tranquil forest of 100,000 trees donated from across Japan. View the decorative wall of consecrated French sake and wine barrels.',
            insiderTip: 'Write your wish on a wooden "ema" tablet and hang it beneath the sacred camphor trees.',
            duration: '2.0 hrs',
            cost: 'Free'
          },
          {
            id: 'tokyo-d2-2',
            time: '11:00 – 13:00',
            period: 'Midday',
            title: 'Harajuku Takeshita Street & Omotesando Architecture',
            neighborhood: 'Jingumae / Harajuku',
            category: 'Neighborhood',
            description: 'Contrast the colorful Kawaii boutiques and strawberry crepes of Takeshita Street with the tree-lined luxury boulevard of Omotesando, designed by Pritzker prize architects Tadao Ando and SANAA.',
            insiderTip: 'Wander Cat Street (the pedestrian path between Harajuku and Shibuya) for indie Japanese denim and third-wave coffee roasters.',
            duration: '2.0 hrs',
            cost: 'Free'
          },
          {
            id: 'tokyo-d2-3',
            time: '13:30 – 15:00',
            period: 'Afternoon',
            title: 'Conveyor-Belt Sushi or Crispy Katsu Lunch',
            neighborhood: 'Shibuya',
            category: 'Culinary',
            description: 'Experience express bullet-train delivery sushi ordered on touchscreen tablets, or sit for panko-breaded Kurobuta pork tonkatsu served with shredded cabbage and roasted sesame sauce.',
            insiderTip: 'Katsu Midori in Seibu Shibuya offers remarkable quality conveyor sushi at extremely reasonable prices.',
            duration: '1.5 hrs',
            cost: '¥2,000 – ¥3,500'
          },
          {
            id: 'tokyo-d2-4',
            time: '16:00 – 18:30',
            period: 'Evening',
            title: 'Shibuya Scramble Crossing & Shibuya Sky 360° Deck',
            neighborhood: 'Shibuya',
            category: 'Landmark',
            description: 'Experience the world’s busiest pedestrian intersection where up to 3,000 people cross at each green light. Take the glass lift to Shibuya Sky’s open-air rooftop 229 meters in the clouds.',
            insiderTip: 'Book sunset time tickets 4 weeks in advance on the 1st of the month; on clear days, you can spot Mount Fuji on the horizon.',
            duration: '2.5 hrs',
            cost: '¥2,200 (Shibuya Sky ticket)'
          },
          {
            id: 'tokyo-d2-5',
            time: '19:30 – 23:00',
            period: 'Night',
            title: 'Omoide Yokocho & Golden Gai Izakayas',
            neighborhood: 'Shinjuku',
            category: 'Culinary',
            description: 'Squeeze into a 6-seat counter in Shinjuku’s narrow "Memory Lane". Watch master cooks grill chicken yakitori over smoking binchotan charcoal, then explore the historic tiny bars of Golden Gai.',
            insiderTip: 'Most Golden Gai bars charge a ¥500–¥1,000 cover fee ("otoushi" table snack); look for signs saying "No Cover Charge / English Welcome".',
            duration: '3.5 hrs',
            cost: '¥3,500 – ¥6,000'
          }
        ]
      },
      {
        day: 3,
        title: 'Tsukiji Market Delicacies, Ginza & TeamLab Digital Art',
        theme: 'Gourmet Seafood, Modern Art & Bayside Twilight',
        summary: 'Feast on sashimi at Tsukiji Outer Market, stroll Ginza’s sleek designer avenues, and lose yourself in immersive digital light installations.',
        walkingEstimate: '6.5 km · ~9,000 steps',
        neighborhoods: ['Tsukiji', 'Ginza', 'Toyosu / Odaiba'],
        activities: [
          {
            id: 'tokyo-d3-1',
            time: '08:30 – 11:00',
            period: 'Morning',
            title: 'Tsukiji Outer Market Food Crawl',
            neighborhood: 'Tsukiji',
            category: 'Culinary',
            description: 'Graze your way through hundreds of traditional seafood stalls: sweet grilled tamagoyaki omelet sticks on wooden skewers, fresh uni (sea urchin), oysters grilled over coals, and fatty tuna sashimi.',
            insiderTip: 'Yamacho serves fresh steaming tamagoyaki for just ¥150; eat inside or in front of the vendor stalls as walking while eating is discouraged.',
            duration: '2.5 hrs',
            cost: '¥2,500 – ¥4,500'
          },
          {
            id: 'tokyo-d3-2',
            time: '11:30 – 13:30',
            period: 'Midday',
            title: 'Ginza Department Stores & Art Deco Stationery',
            neighborhood: 'Ginza',
            category: 'Neighborhood',
            description: 'Stroll Tokyo’s premier luxury district. Explore the legendary 12-story Itoya stationery emporium and the subterranean "depachika" food hall inside Mitsukoshi with artisan bento boxes.',
            insiderTip: 'On weekend afternoons, Ginza’s main street is closed to motor traffic for pedestrian paradise ("Hokosha Tengoku").',
            duration: '2.0 hrs',
            cost: 'Free'
          },
          {
            id: 'tokyo-d3-3',
            time: '14:30 – 17:00',
            period: 'Afternoon',
            title: 'teamLab Planets Immersive Digital Art',
            neighborhood: 'Toyosu',
            category: 'Culture',
            description: 'Wade barefoot through crystal water rooms filled with projected koi fish, wander through an infinite galaxy of hanging crystal light strings, and lie beneath floating live orchid gardens.',
            insiderTip: 'Wear shorts or pants you can easily roll up to your knees, as water in the main pool reaches knee-depth.',
            duration: '2.5 hrs',
            cost: '¥3,800 (reserved ticket)'
          },
          {
            id: 'tokyo-d3-4',
            time: '17:30 – 19:30',
            period: 'Evening',
            title: 'Odaiba Seaside Park & Rainbow Bridge Twilight',
            neighborhood: 'Odaiba',
            category: 'Scenic Walk',
            description: 'Ride the elevated, driverless Yurikamome train across the Rainbow Bridge. Take in panoramic evening views of Tokyo Bay, the replica Statue of Liberty, and the giant life-size Unicorn Gundam.',
            insiderTip: 'Snag the front seat of the Yurikamome train for a rollercoaster-like front-window ride loop onto the bridge.',
            duration: '2.0 hrs',
            cost: '¥330 (monorail fare)'
          },
          {
            id: 'tokyo-d3-5',
            time: '20:00 – 23:00',
            period: 'Night',
            title: 'Tokyo Tower Night Vista & Roppongi Finale',
            neighborhood: 'Minato / Roppongi',
            category: 'Landmark',
            description: 'End your trip beneath the warm orange-red glow of Tokyo Tower. Celebrate with Japanese wagyu beef shabu-shabu or an omakase dining experience, toasted with Junmai Daiginjo sake.',
            insiderTip: 'Head to the Prince Park Tower hotel lawn for a tranquil, zero-crowd close-up photo of the illuminated lattice.',
            duration: '3.0 hrs',
            cost: '¥5,000 – ¥10,000'
          }
        ]
      }
    ]
  },

  'new-york': {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    aliases: ['new york', 'new york city', 'nyc', 'ny', 'manhattan', 'big apple'],
    tagline: 'The City That Never Sleeps: Iconic Skylines, Broadway & Village Brownstones',
    coverImage: '/src/assets/images/city_newyork_skyline_1794386869297.jpg',
    overview: '72 fast-paced hours through the cultural epicenter of America: soaring Art Deco skyscrapers, Brooklyn Bridge walks, historic jazz basements, and legendary corner pizza slices.',
    logistics: {
      transit: 'OMNY contactless tap-to-pay via credit card or phone at all subway turnstiles',
      bestSeason: 'September–November (crisp autumn air) or May–June (lush Central Park greenery)',
      budgetPerDay: '$110 – $220 USD (attraction tickets, subway & dining)',
      currency: 'USD ($)',
      localTip: 'Walk with purpose and keep right on sidewalks; never stop abruptly in the middle of pedestrian flow.',
      walkingScore: '17,500 steps/day (New York is best conquered on foot and via the subway)'
    },
    highlights: [
      'Early morning walk across the Brooklyn Bridge from DUMBO into Lower Manhattan',
      'Rowboats and serene tree-shaded rambles through Central Park',
      'The elevated High Line railway park and Chelsea Market food crawl',
      'Top of the Rock sunset view of the Empire State Building bathed in golden light'
    ],
    packingList: [
      {
        id: 'ny-p1',
        item: 'Durable Shock-Absorbing Sneakers',
        category: 'Footwear',
        reason: 'Hard Manhattan pavement and endless subway staircases require maximum arch support for 18,000+ steps.'
      },
      {
        id: 'ny-p2',
        item: 'Packable Windbreaker / Layer',
        category: 'Clothing',
        reason: 'Riverfront breezes across the Brooklyn Bridge, High Line, and Hudson River are noticeably brisk.'
      },
      {
        id: 'ny-p3',
        item: 'Slim RFID-Blocking Cardholder',
        category: 'Essentials',
        reason: 'Subways (OMNY tap-and-pay) and eateries are almost entirely cashless; leave bulky wallets behind.'
      },
      {
        id: 'ny-p4',
        item: 'High-Capacity Phone Power Bank',
        category: 'Electronics',
        reason: 'Subway routing apps, museum guides, and photo captures will deplete phone battery by mid-afternoon.'
      },
      {
        id: 'ny-p5',
        item: 'Foldable Reusable Tote Bag',
        category: 'Gear',
        reason: 'Single-use plastic bags are banned in NY; having a light tote is essential for deli and market stops.'
      }
    ],
    days: [
      {
        day: 1,
        title: 'Lower Manhattan, Brooklyn Bridge & The Village',
        theme: 'Harbor Origins, Historic Bridges & Bohemian Alleys',
        summary: 'Walk the cobblestones of DUMBO, cross the East River on the Brooklyn Bridge, pay tribute at the 9/11 Memorial, and end with Greenwich Village jazz.',
        walkingEstimate: '7.5 km · ~11,000 steps',
        neighborhoods: ['DUMBO', 'Financial District', 'Greenwich Village', 'SoHo'],
        activities: [
          {
            id: 'ny-d1-1',
            time: '08:00 – 10:30',
            period: 'Morning',
            title: 'DUMBO Waterfront & Brooklyn Bridge Walk',
            neighborhood: 'Brooklyn / Lower Manhattan',
            category: 'Scenic Walk',
            description: 'Snap the classic Washington Street shot of the Manhattan Bridge framed by brick warehouses, then walk west across the elevated wooden walkway of the 1883 Brooklyn Bridge into Manhattan.',
            insiderTip: 'Start on the Brooklyn side (High St subway station) and walk toward Manhattan so the skyline unfolds directly ahead of you.',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'ny-d1-2',
            time: '11:00 – 13:00',
            period: 'Midday',
            title: 'Financial District, Wall St & 9/11 Memorial Pools',
            neighborhood: 'FiDi / World Trade Center',
            category: 'Landmark',
            description: 'Pass the bronze Charging Bull and Trinity Church cemetery to the twin reflecting pools at the 9/11 Memorial, set in the footprints of the original Twin Towers beneath swamp white oak trees.',
            insiderTip: 'Walk inside the soaring white rib-like arches of Santiago Calatrava’s Oculus transportation hub for lunch or coffee.',
            duration: '2.0 hrs',
            cost: 'Free memorial grounds (Museum $33)'
          },
          {
            id: 'ny-d1-3',
            time: '13:30 – 16:30',
            period: 'Afternoon',
            title: 'SoHo Cast-Iron Architecture & Cast-Iron Pizzas',
            neighborhood: 'SoHo / Nolita',
            category: 'Neighborhood',
            description: 'Stroll along cobblestone Greene and Prince Streets lined with 19th-century cast-iron buildings, luxury flagship stores, and indie designer boutiques. Grab a classic New York dollar slice or artisan pie.',
            insiderTip: 'Prince Street Pizza is famous for its spicy Spring Street square pepperoni slice with crispy pepperoni cups.',
            duration: '3.0 hrs',
            cost: '$6 – $18'
          },
          {
            id: 'ny-d1-4',
            time: '17:00 – 19:30',
            period: 'Evening',
            title: 'Washington Square Park & West Village Brownstones',
            neighborhood: 'Greenwich Village',
            category: 'Scenic Walk',
            description: 'Relax by the marble arch and fountain in Washington Square Park surrounded by street chess players and jazz musicians, then weave through the quiet tree-lined brownstones of Perry and Bleecker Streets.',
            insiderTip: 'Look for 77 Bedford Street—the oldest surviving frame house in Greenwich Village (built 1799).',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'ny-d1-5',
            time: '20:00 – 23:00',
            period: 'Night',
            title: 'Greenwich Village Speakeasy & Live Underground Jazz',
            neighborhood: 'West Village',
            category: 'Culinary',
            description: 'Indulge in a classic pastrami sandwich on rye or wood-fired handmade pasta, followed by a subterranean set at the legendary Village Vanguard or Smalls Jazz Club.',
            insiderTip: 'Smalls Jazz Club has an intimate basement atmosphere with $20 entry and two drink minimum; book sets online.',
            duration: '3.0 hrs',
            cost: '$35 – $65'
          }
        ]
      },
      {
        day: 2,
        title: 'Midtown Icons, High Line & Broadway Glow',
        theme: 'Skyscrapers, Modern Art & The Great White Way',
        summary: 'Ascend to Top of the Rock, walk the landscaped High Line from Hudson Yards to Chelsea, and witness the incandescent energy of Times Square.',
        walkingEstimate: '8.0 km · ~12,000 steps',
        neighborhoods: ['Midtown', 'Hudson Yards', 'Chelsea', 'Theater District'],
        activities: [
          {
            id: 'ny-d2-1',
            time: '08:30 – 11:30',
            period: 'Morning',
            title: 'Top of the Rock & Grand Central Terminal',
            neighborhood: 'Rockefeller Center / Midtown',
            category: 'Landmark',
            description: 'Begin beneath the celestial ceiling of Grand Central Terminal, then take the elevator up 70 floors to Top of the Rock for unobstructed views of Central Park to the north and the Empire State Building to the south.',
            insiderTip: 'Top of the Rock offers the best Manhattan skyline views because you actually see the Empire State Building in your photos.',
            duration: '3.0 hrs',
            cost: '$40 (observation deck)'
          },
          {
            id: 'ny-d2-2',
            time: '12:00 – 13:30',
            period: 'Midday',
            title: 'Chelsea Market Food Hall Crawl',
            neighborhood: 'Meatpacking District',
            category: 'Culinary',
            description: 'Housed in the historic Nabisco factory where the Oreo was invented. Choose between fresh Maine lobster rolls, Los Tacos No. 1 handmade corn tortillas, and artisan Halva confectionery.',
            insiderTip: 'Los Tacos No. 1 has a fast-moving queue; the adobada (marinated pork with grilled pineapple) is sensational.',
            duration: '1.5 hrs',
            cost: '$15 – $28'
          },
          {
            id: 'ny-d2-3',
            time: '14:00 – 16:30',
            period: 'Afternoon',
            title: 'The High Line Elevated Park & Little Island',
            neighborhood: 'Chelsea / Meatpacking',
            category: 'Scenic Walk',
            description: 'Walk 1.45 miles along a converted elevated freight rail line hovering 30 feet above Manhattan streets, filled with native wildflowers, art installations, and Hudson River vistas.',
            insiderTip: 'Step down at 14th Street to visit Little Island, the innovative artificial tulip-pod park floating over the Hudson River pier.',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'ny-d2-4',
            time: '17:00 – 19:30',
            period: 'Evening',
            title: 'Bryant Park Reading Room & New York Public Library',
            neighborhood: 'Midtown',
            category: 'Culture',
            description: 'Visit the majestic Rose Main Reading Room inside the Stephen A. Schwarzman Building guarded by marble lions Patience and Fortitude, then grab an iced coffee on a green Parisian bistro chair in Bryant Park.',
            insiderTip: 'The library entrance is free; check the Polonsky Exhibition to see the original Winnie-the-Pooh stuffed toys and Jefferson’s handwritten Declaration draft.',
            duration: '2.5 hrs',
            cost: 'Free'
          },
          {
            id: 'ny-d2-5',
            time: '20:00 – 23:00',
            period: 'Night',
            title: 'Times Square Neon & Broadway Theater Performance',
            neighborhood: 'Theater District',
            category: 'Culture',
            description: 'Immerse yourself in the colossal digital billboards of Duffy Square, then take your seats inside an ornate century-old Broadway theatre for a world-class musical or drama.',
            insiderTip: 'Download the TodayTix app or visit the red TKTS booth under the red glass stairs at 47th St for same-day tickets at 30% to 50% off.',
            duration: '3.0 hrs',
            cost: '$50 – $150'
          }
        ]
      },
      {
        day: 3,
        title: 'Central Park Greenery & Museum Mile',
        theme: 'Gilded Age Culture & Uptown Elegance',
        summary: 'Spend your final day immersed in cultural giants: The Metropolitan Museum of Art, Central Park Bethesda Terrace, and Upper West Side bagel traditions.',
        walkingEstimate: '6.8 km · ~9,800 steps',
        neighborhoods: ['Central Park', 'Upper East Side', 'Upper West Side'],
        activities: [
          {
            id: 'ny-d3-1',
            time: '08:30 – 10:30',
            period: 'Morning',
            title: 'Upper West Side Bagel & Central Park West Stroll',
            neighborhood: 'Upper West Side',
            category: 'Culinary',
            description: 'Order a hand-rolled, wood-fired everything bagel with scallion cream cheese and smoked lox from Barney Greengrass or Absolute Bagels. Walk past the Dakota building where John Lennon lived into Central Park.',
            insiderTip: 'Strawberry Fields memorial mosaic ("Imagine") is located right inside the 72nd Street entrance.',
            duration: '2.0 hrs',
            cost: '$10 – $18'
          },
          {
            id: 'ny-d3-2',
            time: '11:00 – 14:00',
            period: 'Midday',
            title: 'The Metropolitan Museum of Art (The Met)',
            neighborhood: 'Upper East Side / Museum Mile',
            category: 'Culture',
            description: 'Explore 5,000 years of global art: step inside the ancient Egyptian Temple of Dendur overlooking reflecting water, admire European masters like Rembrandt and Vermeer, and visit the American Wing court.',
            insiderTip: 'The Cantor Roof Garden (open May–October) offers skyline cocktails and outdoor art sculptures looking directly across Central Park treetops.',
            duration: '3.0 hrs',
            cost: '$30 (general admission)'
          },
          {
            id: 'ny-d3-3',
            time: '14:30 – 16:30',
            period: 'Afternoon',
            title: 'Bethesda Terrace, Bow Bridge & The Ramble',
            neighborhood: 'Central Park',
            category: 'Scenic Walk',
            description: 'Walk down the dual grand stone staircases of Bethesda Terrace to the Angel of the Waters fountain. Cross Victorian cast-iron Bow Bridge over the lake where wooden rowboats glide by.',
            insiderTip: 'Listen to vocalists singing inside the acoustic arcade of Bethesda Terrace under the 16,000 encaustic Minton tiles.',
            duration: '2.0 hrs',
            cost: 'Free ($25 for 1-hour rowboat rental)'
          },
          {
            id: 'ny-d3-4',
            time: '17:00 – 19:00',
            period: 'Evening',
            title: 'Upper East Side Gilded Age Mansions & Madison Ave',
            neighborhood: 'Upper East Side',
            category: 'Scenic Walk',
            description: 'Stroll down Madison Avenue past chic art galleries, luxury townhouses, and French bakeries. Stop for decadent layered hot chocolate or mille-feuille at Ladurée or Maison Ladurée.',
            insiderTip: 'Check out the historic Frick Collection or Cooper Hewitt Smithsonian Design Museum gardens nearby on 91st St.',
            duration: '2.0 hrs',
            cost: 'Free ($10 for patisserie)'
          },
          {
            id: 'ny-d3-5',
            time: '19:30 – 22:30',
            period: 'Night',
            title: 'Rooftop Cocktail & Celebratory Farewell Dinner',
            neighborhood: 'Flatiron / Gramercy',
            category: 'Culinary',
            description: 'Toast your 3 days with a Manhattan cocktail on a rooftop terrace overlooking the illuminated Empire State Building, followed by dinner at Gramercy Tavern or an iconic New York steakhouse.',
            insiderTip: 'Book reservations at least 2 weeks in advance for celebrated dining rooms.',
            duration: '3.0 hrs',
            cost: '$60 – $120'
          }
        ]
      }
    ]
  }
};

/**
 * Normalizes user input city string and returns the matched itinerary or null.
 */
export function findItineraryByCity(input: string): CityItinerary | null {
  if (!input || !input.trim()) return null;
  const normalized = input.trim().toLowerCase();

  for (const city of Object.values(CITIES_DATA)) {
    if (city.name.toLowerCase() === normalized || city.id === normalized) {
      return city;
    }
    for (const alias of city.aliases) {
      if (normalized === alias || normalized.includes(alias) || alias.includes(normalized)) {
        return city;
      }
    }
  }

  return null;
}

export const UNIVERSAL_PACKING_LIST: PackingItem[] = [
  {
    id: 'univ-p1',
    item: 'Broken-In Walking Shoes',
    category: 'Footwear',
    reason: 'Exploring any historic or modern city on foot averages 12,000–18,000 steps daily.'
  },
  {
    id: 'univ-p2',
    item: 'Universal Travel Power Adapter',
    category: 'Electronics',
    reason: 'Ensures phones, cameras, and devices charge in any regional plug standard seamlessly.'
  },
  {
    id: 'univ-p3',
    item: '10,000 mAh Portable Battery Bank',
    category: 'Electronics',
    reason: 'GPS maps, digital ticketing, and transit apps deplete phone batteries rapidly on the go.'
  },
  {
    id: 'univ-p4',
    item: 'Weather-Resistant Light Outer Layer',
    category: 'Clothing',
    reason: 'Protects against microclimates, evening temperature drops, and chilly museum air conditioning.'
  },
  {
    id: 'univ-p5',
    item: 'Compact Crossbody Bag with Zippers',
    category: 'Gear',
    reason: 'Secure, hands-free carry for passport, local transit pass, and cards in crowded stations.'
  }
];
