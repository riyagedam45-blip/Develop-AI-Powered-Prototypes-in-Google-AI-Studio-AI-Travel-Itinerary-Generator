import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { CitySearchHero } from './components/CitySearchHero';
import { ItineraryView } from './components/ItineraryView';
import { UnsupportedCityView } from './components/UnsupportedCityView';
import { CITIES_DATA, CityItinerary, findItineraryByCity } from './data/itineraries';
import { Compass, Heart, ArrowUp } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('Rome');
  const [activeCity, setActiveCity] = useState<CityItinerary | null>(CITIES_DATA['rome']);
  const [unsupportedCity, setUnsupportedCity] = useState<string | null>(null);
  const [completedActivities, setCompletedActivities] = useState<Set<string>>(new Set());

  // Restore completed activities from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wander3_completed_activities');
      if (saved) {
        setCompletedActivities(new Set(JSON.parse(saved)));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleToggleActivity = (activityId: string) => {
    setCompletedActivities((prev) => {
      const next = new Set(prev);
      if (next.has(activityId)) {
        next.delete(activityId);
      } else {
        next.add(activityId);
      }
      try {
        localStorage.setItem(
          'wander3_completed_activities',
          JSON.stringify(Array.from(next))
        );
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleSearchCity = (cityName: string) => {
    if (!cityName.trim()) {
      setSearchQuery('');
      setActiveCity(null);
      setUnsupportedCity(null);
      return;
    }

    setSearchQuery(cityName);
    const matched = findItineraryByCity(cityName);

    if (matched) {
      setActiveCity(matched);
      setUnsupportedCity(null);
    } else {
      setActiveCity(null);
      setUnsupportedCity(cityName.trim());
    }

    // Smooth scroll down to the content area
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  // Compute total and completed activity counts
  const totalActivitiesCount = activeCity
    ? activeCity.days.reduce((acc, d) => acc + d.activities.length, 0)
    : 0;

  const completedCount = activeCity
    ? activeCity.days.reduce(
        (acc, d) =>
          acc + d.activities.filter((a) => completedActivities.has(a.id)).length,
        0
      )
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      {/* Top Navigation */}
      <TopBar
        onSelectCity={handleSearchCity}
        currentCityName={activeCity?.name}
        completedCount={completedCount}
        totalActivitiesCount={totalActivitiesCount}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Search Hero Section with input field */}
        <CitySearchHero
          currentQuery={searchQuery}
          onSearch={handleSearchCity}
          activeCityName={activeCity?.name}
        />

        {/* Dynamic Section: Supported Itinerary OR Unsupported City Friendly View */}
        {activeCity ? (
          <ItineraryView
            itinerary={activeCity}
            completedActivities={completedActivities}
            onToggleActivity={handleToggleActivity}
            onSwitchCity={handleSearchCity}
          />
        ) : unsupportedCity ? (
          <UnsupportedCityView
            searchedCity={unsupportedCity}
            onSelectCity={handleSearchCity}
          />
        ) : (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center text-neutral-500">
            <Compass className="w-10 h-10 mx-auto text-neutral-400 mb-3" />
            <h2 className="text-xl font-bold text-neutral-800 mb-2">
              Ready to Plan Your Next Journey?
            </h2>
            <p className="text-sm">
              Type any city above or pick one of our curated guides for Rome, Paris, Tokyo, or New York.
            </p>
          </div>
        )}
      </main>

      {/* Quiet, Human Editorial Footer */}
      <footer className="border-t border-neutral-200 bg-white py-12 px-4 sm:px-6 lg:px-8 mt-20 no-print">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-neutral-900 text-white flex items-center justify-center">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-bold text-sm tracking-tight text-neutral-900">
              Wander3
            </span>
            <span className="text-xs text-neutral-400 ml-2">
              72-Hour City Itineraries · 100% Offline Capable
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-500 font-medium">
            <button
              onClick={() => handleSearchCity('Rome')}
              className="hover:text-neutral-900 transition-colors"
            >
              Rome Guide
            </button>
            <button
              onClick={() => handleSearchCity('Paris')}
              className="hover:text-neutral-900 transition-colors"
            >
              Paris Guide
            </button>
            <button
              onClick={() => handleSearchCity('Tokyo')}
              className="hover:text-neutral-900 transition-colors"
            >
              Tokyo Guide
            </button>
            <button
              onClick={() => handleSearchCity('New York')}
              className="hover:text-neutral-900 transition-colors"
            >
              New York Guide
            </button>
          </div>

          <div className="text-xs text-neutral-400">
            Hand-curated travel timelines
          </div>
        </div>
      </footer>
    </div>
  );
}
