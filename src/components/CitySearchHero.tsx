import React, { useState, useEffect } from 'react';
import { Search, MapPin, X, ArrowRight, Sparkles } from 'lucide-react';

interface CitySearchHeroProps {
  currentQuery: string;
  onSearch: (city: string) => void;
  activeCityName?: string;
}

export const CitySearchHero: React.FC<CitySearchHeroProps> = ({
  currentQuery,
  onSearch,
  activeCityName,
}) => {
  const [inputValue, setInputValue] = useState(currentQuery);

  useEffect(() => {
    setInputValue(currentQuery);
  }, [currentQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  const quickCities = [
    { name: 'Rome', sub: 'Italy', id: 'rome' },
    { name: 'Paris', sub: 'France', id: 'paris' },
    { name: 'Tokyo', sub: 'Japan', id: 'tokyo' },
    { name: 'New York', sub: 'USA', id: 'new-york' },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative background image with measured scrim */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/src/assets/images/hero_travel_journal_1794386867485.jpg"
          alt="Travel journal and map background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-neutral-900/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Subtle kicker without pill enclosure */}
        <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-wider uppercase text-neutral-400 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Curated 72-Hour Travel Itineraries</span>
          <span aria-hidden="true">·</span>
          <span>Zero API Keys Required</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
          Where will your next 3 days take you?
        </h1>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed text-balance">
          Explore hour-by-hour schedules, verified walking arcs, and neighborhood dining gems designed for 3 immersive days.
        </p>

        {/* Search Input Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center bg-white rounded-xl shadow-2xl p-1.5 focus-within:ring-2 focus-within:ring-neutral-400 transition-all">
            <div className="pl-3.5 text-neutral-400 pointer-events-none shrink-0">
              <Search className="w-5 h-5" />
            </div>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a city (e.g. Rome, Paris, Tokyo, New York...)"
              className="w-full px-3 py-3 text-neutral-900 placeholder:text-neutral-400 text-sm sm:text-base focus:outline-none bg-transparent"
              aria-label="City name input"
            />

            {inputValue && (
              <button
                type="button"
                onClick={() => {
                  setInputValue('');
                }}
                className="p-1.5 text-neutral-400 hover:text-neutral-600 transition-colors shrink-0"
                aria-label="Clear city input"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 shadow-sm"
            >
              <span>Explore Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Quick select presets */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-400">
          <span className="font-medium text-neutral-300">Popular Built-in Guides:</span>
          {quickCities.map((c) => {
            const isSelected = activeCityName?.toLowerCase() === c.name.toLowerCase();
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setInputValue(c.name);
                  onSearch(c.name);
                }}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs transition-colors ${
                  isSelected
                    ? 'bg-white text-neutral-950 font-semibold shadow-sm'
                    : 'bg-white/10 hover:bg-white/20 text-neutral-200 border border-white/10'
                }`}
              >
                <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{c.name}</span>
                <span className="text-neutral-400 text-[10px]">({c.sub})</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
