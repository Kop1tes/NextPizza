'use client';

import React, { useEffect, useRef } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '../ui';

interface Props {
  name: string;
  placeholder?: string;
}

export const AddressInput: React.FC<Props> = ({ name, placeholder = 'Введите адрес доставки' }) => {
  const { control } = useFormContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!inputRef.current || !containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@geoapify/geocoder-autocomplete@1.2.0/dist/geocoder-autocomplete.min.js';
    script.async = true;
    script.onload = () => {
      const autocomplete = new (window as any).GeocoderAutocomplete(
        containerRef.current,
        '83b02301ff9d405a9bf93811c7570b8e',
        {
          lang: 'ru',
          placeholder,
          filterByCountryCode: ['ua'],
          limit: 5,
        }
      );

      autocomplete.on('select', (result: any) => {
        const value = result?.properties?.formatted || '';
        if (inputRef.current) inputRef.current.value = value;
        inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }));
      });

      // Вставляем input внутрь geoapify div
      const geoInput = containerRef.current?.querySelector('input');
      if (geoInput && inputRef.current) {
        geoInput.replaceWith(inputRef.current);
      }
    };

    document.body.appendChild(script);
  }, [placeholder]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div ref={containerRef} className="w-full">
          <Input
            {...field}
            ref={(el) => {
              inputRef.current = el;
              field.ref(el);
            }}
            placeholder={placeholder}
          />
        </div>
      )}
    />
  );
};
