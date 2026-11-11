import React from 'react';
import { Compass, Printer, CheckSquare } from 'lucide-react';

interface TopBarProps {
  onSelectCity: (cityName: string) => void;
  currentCityName?: string;
  completedCount: number;
  totalActivitiesCount: number;
  onPrint: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onSelectCity,
  currentCityName,
  completedCount,
  totalActivitiesCount,
  onPrint,
}) => {
  const featuredCities = ['Rome', 'Paris', 'Tokyo', 'New York'];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => onSelectCity('')}
          className="flex items-center gap-2.5 text-left text-neutral-900 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0 group-hover:bg-neutral-800 transition-colors">
            <Compass className="w-4 h-4" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap">
            Wander3
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
          {featuredCities.map((city) => {
            const isActive = currentCityName?.toLowerCase() === city.toLowerCase();
            return (
              <button
                key={city}
                onClick={() => onSelectCity(city)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive
                    ? 'text-neutral-950 font-semibold border-b-2 border-neutral-900'
                    : 'hover:text-neutral-900'
                }`}
              >
                {city}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {totalActivitiesCount > 0 && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-500 font-mono tabular-nums">
              <CheckSquare className="w-3.5 h-3.5 text-neutral-400" />
              <span>
                {completedCount}/{totalActivitiesCount} done
              </span>
            </div>
          )}
          <button
            onClick={onPrint}
            aria-label="Print or export current itinerary"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save</span>
          </button>
        </div>
      </div>
    </header>
  );
};
