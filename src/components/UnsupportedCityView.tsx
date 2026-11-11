import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Sparkles,
  Compass,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Plus,
  Trash2,
  Printer,
  Copy,
  Check,
  Heart,
} from 'lucide-react';
import { PackingListSection } from './PackingListSection';
import { UNIVERSAL_PACKING_LIST } from '../data/itineraries';

interface UnsupportedCityViewProps {
  searchedCity: string;
  onSelectCity: (cityName: string) => void;
}

interface CustomActivity {
  id: string;
  day: number;
  time: string;
  title: string;
  notes: string;
}

export const UnsupportedCityView: React.FC<UnsupportedCityViewProps> = ({
  searchedCity,
  onSelectCity,
}) => {
  const formattedCityName =
    searchedCity.charAt(0).toUpperCase() + searchedCity.slice(1);

  const [customActivities, setCustomActivities] = useState<CustomActivity[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newTime, setNewTime] = useState('09:00 AM');
  const [newDay, setNewDay] = useState<number>(1);
  const [newNotes, setNewNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [showBuilder, setShowBuilder] = useState(false);

  // Load custom notes for this city from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`wander3_custom_${searchedCity.toLowerCase()}`);
      if (saved) {
        setCustomActivities(JSON.parse(saved));
      } else {
        // Default template stops for convenience
        setCustomActivities([
          {
            id: '1',
            day: 1,
            time: '09:00 – 12:00',
            title: `Iconic Historic Center & Central Plaza in ${formattedCityName}`,
            notes: 'Orientation walk, major landmarks, and local morning coffee.'
          },
          {
            id: '2',
            day: 1,
            time: '13:00 – 16:30',
            title: 'Local Central Food Market & Architecture Walk',
            notes: 'Sample local street delicacies and photograph historic facades.'
          },
          {
            id: '3',
            day: 2,
            time: '10:00 – 14:00',
            title: 'Premier Art Museum or Historic Castle/Cathedral',
            notes: 'Pre-book timed entry tickets in advance to skip lines.'
          },
          {
            id: '4',
            day: 3,
            time: '17:00 – 21:00',
            title: 'Panoramic Sunset Viewpoint & Farewell Dinner',
            notes: 'High viewpoint overlooking the skyline, followed by traditional regional dinner.'
          }
        ]);
      }
    } catch {
      // fallback
    }
  }, [searchedCity, formattedCityName]);

  const saveActivities = (activities: CustomActivity[]) => {
    setCustomActivities(activities);
    try {
      localStorage.setItem(
        `wander3_custom_${searchedCity.toLowerCase()}`,
        JSON.stringify(activities)
      );
    } catch {
      // ignore
    }
  };

  const handleAddActivity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newAct: CustomActivity = {
      id: Date.now().toString(),
      day: newDay,
      time: newTime.trim() || '10:00 AM',
      title: newTitle.trim(),
      notes: newNotes.trim()
    };

    saveActivities([...customActivities, newAct]);
    setNewTitle('');
    setNewNotes('');
  };

  const handleRemoveActivity = (id: string) => {
    saveActivities(customActivities.filter((a) => a.id !== id));
  };

  const handleCopyCustomPlan = () => {
    const lines = [
      `3-DAY TRAVEL PLAN: ${formattedCityName.toUpperCase()}`,
      `Custom draft created with Wander3`,
      `=============================================`,
      ``
    ];

    [1, 2, 3].forEach((day) => {
      lines.push(`--- DAY ${day} ---`);
      const dayActs = customActivities.filter((a) => a.day === day);
      if (dayActs.length === 0) {
        lines.push(`(No activities scheduled)`);
      } else {
        dayActs.forEach((act) => {
          lines.push(`• [${act.time}] ${act.title}`);
          if (act.notes) lines.push(`  Notes: ${act.notes}`);
        });
      }
      lines.push(``);
    });

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2400);
    });
  };

  const featuredDestinations = [
    {
      name: 'Rome',
      country: 'Italy',
      tagline: 'Colosseum, Vatican & Trastevere trattorias',
      image: '/src/assets/images/city_rome_colosseum_1794386868191.jpg',
    },
    {
      name: 'Paris',
      country: 'France',
      tagline: 'Louvre masters, Eiffel views & Left Bank cafés',
      image: '/src/assets/images/city_paris_rooftops_1794386868477.jpg',
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      tagline: 'Senso-ji temples, Shibuya Crossing & izakaya lanes',
      image: '/src/assets/images/city_tokyo_street_1794386870677.jpg',
    },
    {
      name: 'New York',
      country: 'United States',
      tagline: 'Brooklyn Bridge walks, Central Park & Broadway',
      image: '/src/assets/images/city_newyork_skyline_1794386869297.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Friendly Notification Notice */}
      <section className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-6 sm:p-8 text-neutral-800">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wider">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>Destination In Development</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900">
            We don’t have a curated 3-day itinerary for “{formattedCityName}” yet.
          </h2>

          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
            Every itinerary on Wander3 is hand-crafted and verified without external API calls or AI hallucinations. 
            We verify precise walking arcs, museum booking lead-times, transit connections, and vetted culinary stops.
            Currently, full hour-by-hour 72-hour plans are ready for <strong>Rome</strong>, <strong>Paris</strong>, <strong>Tokyo</strong>, and <strong>New York</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectCity('Rome')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <span>Explore Rome Instead</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setShowBuilder(!showBuilder)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-neutral-600" />
              <span>{showBuilder ? 'Hide Custom Planner' : `Draft a 3-Day Plan for ${formattedCityName}`}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Curated Cities Grid */}
      <section className="space-y-4">
        <div>
          <h3 className="font-display text-xl font-bold text-neutral-900">
            Or Choose from Our Built-in 3-Day Guides
          </h3>
          <p className="text-xs text-neutral-500">
            Complete hour-by-hour schedules with neighborhood maps, budgets, and insider rules
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredDestinations.map((city) => (
            <div
              key={city.name}
              className="group bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-300">
                    {city.country}
                  </div>
                  <div className="font-display font-bold text-lg">{city.name}</div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {city.tagline}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectCity(city.name)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                >
                  <span>View 3-Day Plan</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Universal 3-Day Blueprint Strategy Guide */}
      <section className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Expert Travel Framework</span>
          </div>
          <h3 className="font-display text-xl font-bold text-neutral-900">
            How to Master {formattedCityName} in 3 Days
          </h3>
          <p className="text-xs text-neutral-600 max-w-2xl">
            A battle-tested pacing methodology used by veteran travel writers to experience any global city without burnout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-100 space-y-2.5">
            <div className="font-mono text-xs font-bold text-neutral-500">
              DAY 01
            </div>
            <h4 className="font-display font-bold text-base text-neutral-900">
              The Anchor Monuments & Orientation Arc
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Tackle the city’s undisputed marquee landmarks first thing in the morning when crowds are thinnest. Follow with an orientation walk through the central historic core and an open-air café dinner.
            </p>
            <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-200">
              Target: 8,000–12,000 steps · Main Square & Historic Heart
            </div>
          </div>

          <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-100 space-y-2.5">
            <div className="font-mono text-xs font-bold text-neutral-500">
              DAY 02
            </div>
            <h4 className="font-display font-bold text-base text-neutral-900">
              Cultural Depths & Neighborhood Enclaves
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Dedicate the morning to the city’s premier museum or palace. Spend the afternoon getting intentionally lost in an indie bohemian quarter, sampling street markets, and dining in a local tavern.
            </p>
            <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-200">
              Target: 10,000–14,000 steps · Arts Quarter & Artisan Alleyways
            </div>
          </div>

          <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-100 space-y-2.5">
            <div className="font-mono text-xs font-bold text-neutral-500">
              DAY 03
            </div>
            <h4 className="font-display font-bold text-base text-neutral-900">
              High Viewpoints, Waterways & Farewell Feast
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Ascend the highest natural hill, tower, or rooftop terrace for a bird’s-eye perspective of {formattedCityName}. Wander a tranquil botanical park or riverside promenade, then toast with a celebratory regional dinner.
            </p>
            <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-200">
              Target: 8,000–10,000 steps · Panoramic Terrace & Celebratory Meal
            </div>
          </div>
        </div>
      </section>

      {/* 5 Universal Packing Items for 3-Day City Travel */}
      <PackingListSection
        cityName={formattedCityName}
        items={UNIVERSAL_PACKING_LIST}
      />

      {/* Interactive Custom 3-Day Plan Drafter */}
      {showBuilder && (
        <section className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-neutral-900">
                Custom 3-Day Draft: {formattedCityName}
              </h3>
              <p className="text-xs text-neutral-500">
                Add your own planned sights, reservation times, and notes. Stored locally in your browser.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyCustomPlan}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied Plan</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Activity Add Form */}
          <form
            onSubmit={handleAddActivity}
            className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 grid grid-cols-1 sm:grid-cols-12 gap-3"
          >
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-semibold text-neutral-600 uppercase mb-1">
                Day
              </label>
              <select
                value={newDay}
                onChange={(e) => setNewDay(Number(e.target.value))}
                className="w-full text-xs bg-white border border-neutral-300 rounded-lg px-2.5 py-2 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              >
                <option value={1}>Day 1</option>
                <option value={2}>Day 2</option>
                <option value={3}>Day 3</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-[11px] font-semibold text-neutral-600 uppercase mb-1">
                Time
              </label>
              <input
                type="text"
                placeholder="e.g. 09:30 AM"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-full text-xs bg-white border border-neutral-300 rounded-lg px-2.5 py-2 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <div className="sm:col-span-4">
              <label className="block text-[11px] font-semibold text-neutral-600 uppercase mb-1">
                Activity / Place Name
              </label>
              <input
                type="text"
                placeholder="e.g. Visit Central Cathedral"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full text-xs bg-white border border-neutral-300 rounded-lg px-2.5 py-2 text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
              />
            </div>

            <div className="sm:col-span-3 flex items-end">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Stop</span>
              </button>
            </div>
          </form>

          {/* Activities List for Day 1, 2, 3 */}
          <div className="space-y-6 pt-2">
            {[1, 2, 3].map((dayNum) => {
              const dayItems = customActivities.filter((a) => a.day === dayNum);

              return (
                <div key={dayNum} className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 border-b border-neutral-200 pb-1.5">
                    <span className="font-mono">DAY 0{dayNum}</span>
                    <span className="text-neutral-400 font-normal">
                      ({dayItems.length} stops)
                    </span>
                  </div>

                  {dayItems.length === 0 ? (
                    <p className="text-xs text-neutral-400 italic py-2">
                      No stops added for Day {dayNum}. Add one using the form above!
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {dayItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono font-bold text-neutral-700 bg-white border border-neutral-200 px-2 py-0.5 rounded">
                              {item.time}
                            </span>
                            <div>
                              <div className="font-semibold text-neutral-900">
                                {item.title}
                              </div>
                              {item.notes && (
                                <div className="text-neutral-500 text-[11px]">
                                  {item.notes}
                                </div>
                              )}
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveActivity(item.id)}
                            className="p-1.5 text-neutral-400 hover:text-red-600 transition-colors"
                            aria-label="Remove activity"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
