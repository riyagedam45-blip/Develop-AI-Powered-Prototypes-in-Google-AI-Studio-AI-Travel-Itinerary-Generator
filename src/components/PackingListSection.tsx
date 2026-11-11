import React, { useState, useEffect } from 'react';
import { PackingItem } from '../data/itineraries';
import {
  Luggage,
  CheckCircle2,
  Circle,
  Sparkles,
  RotateCcw,
  CheckCheck,
} from 'lucide-react';

interface PackingListSectionProps {
  cityName: string;
  items: PackingItem[];
}

export const PackingListSection: React.FC<PackingListSectionProps> = ({
  cityName,
  items,
}) => {
  const [packedIds, setPackedIds] = useState<Set<string>>(new Set());

  // Load packed items from localStorage keyed by city
  useEffect(() => {
    try {
      const storageKey = `wander3_packed_${cityName.toLowerCase()}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setPackedIds(new Set(JSON.parse(saved)));
      } else {
        setPackedIds(new Set());
      }
    } catch {
      // fallback
    }
  }, [cityName]);

  const togglePacked = (id: string) => {
    setPackedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        const storageKey = `wander3_packed_${cityName.toLowerCase()}`;
        localStorage.setItem(storageKey, JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const markAllPacked = () => {
    const allIds = new Set(items.map((i) => i.id));
    setPackedIds(allIds);
    try {
      const storageKey = `wander3_packed_${cityName.toLowerCase()}`;
      localStorage.setItem(storageKey, JSON.stringify(Array.from(allIds)));
    } catch {
      // ignore
    }
  };

  const resetPacked = () => {
    setPackedIds(new Set());
    try {
      const storageKey = `wander3_packed_${cityName.toLowerCase()}`;
      localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
  };

  const packedCount = items.filter((i) => packedIds.has(i.id)).length;
  const progressPercent = Math.round((packedCount / items.length) * 100);

  return (
    <section className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
            <Luggage className="w-4 h-4 text-neutral-700" />
            <span>Essential Gear</span>
            <span aria-hidden="true">·</span>
            <span>Built-In Checklist</span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
            5 Must-Pack Items for {cityName}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
            Tailored to {cityName}’s walking terrain, local customs, sockets, and climate dynamics.
          </p>
        </div>

        {/* Progress & Quick Actions */}
        <div className="flex flex-col sm:items-end gap-2 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-neutral-500">Packed:</span>
            <span className="font-bold text-neutral-900 tabular-nums">
              {packedCount}/{items.length} items ({progressPercent}%)
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full sm:w-36 bg-neutral-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-neutral-900 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center gap-3 pt-1 text-[11px] text-neutral-500 no-print">
            <button
              type="button"
              onClick={markAllPacked}
              className="hover:text-neutral-900 transition-colors inline-flex items-center gap-1"
            >
              <CheckCheck className="w-3 h-3" />
              <span>Mark all packed</span>
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={resetPacked}
              className="hover:text-neutral-900 transition-colors inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5 Packing Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => {
          const isPacked = packedIds.has(item.id);

          return (
            <article
              key={item.id}
              onClick={() => togglePacked(item.id)}
              className={`cursor-pointer rounded-xl border p-4 transition-all select-none text-left flex flex-col justify-between ${
                isPacked
                  ? 'bg-neutral-50 border-neutral-200 text-neutral-500'
                  : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                    <span className="font-bold text-neutral-600">0{index + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.category}</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePacked(item.id);
                    }}
                    className={`p-1 rounded-md transition-colors ${
                      isPacked
                        ? 'text-emerald-600 hover:text-emerald-700'
                        : 'text-neutral-300 hover:text-neutral-600'
                    }`}
                    aria-label={
                      isPacked
                        ? `Mark ${item.item} as unpacked`
                        : `Mark ${item.item} as packed`
                    }
                  >
                    {isPacked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <h4
                  className={`text-sm font-bold text-neutral-900 mb-1.5 ${
                    isPacked ? 'line-through text-neutral-500 font-medium' : ''
                  }`}
                >
                  {item.item}
                </h4>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.reason}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span>{isPacked ? 'Packed in luggage' : 'Ready to pack'}</span>
                <span className="font-mono text-[10px] uppercase">
                  {isPacked ? '✓ Packed' : 'Tap to toggle'}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
