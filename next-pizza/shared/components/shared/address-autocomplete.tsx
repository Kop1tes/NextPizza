'use client';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  placeholder?: string;
}

export const AddressAutocomplete: React.FC<Props> = ({ name, placeholder }) => {
  const { setValue, watch } = useFormContext();
  const value = watch(name);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!value || value.length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get('https://photon.komoot.io/api/', {
          params: {
            q: value,
            // lang: 'ru',
            limit: 5,
            bbox: '30.30,50.30,30.80,50.60',
          },
        });
        setSuggestions(response.data.features);
      } catch (error) {
        console.error('Ошибка при получении предложений:', error);
      }
    };

    fetchSuggestions();
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (suggestion: any) => {
    const address = suggestion.properties.name + 
      (suggestion.properties.city ? `, ${suggestion.properties.city}` : '') +
      (suggestion.properties.country ? `, ${suggestion.properties.country}` : '');
    setValue(name, address);
    setSuggestions([]);
    setIsFocused(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(name, e.target.value)}
        onFocus={() => setIsFocused(true)}
        placeholder={placeholder || 'Введите адрес'}
        className="w-full p-3 border rounded-md"
      />
      {isFocused && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border rounded-md mt-1 max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelect(suggestion)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {suggestion.properties.name}, {suggestion.properties.city || ''}, {suggestion.properties.country || ''}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
