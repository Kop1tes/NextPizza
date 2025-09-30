'use client';

import LiqPayForm from '@/shared/components/payment/liq-pay-form';
import { useEffect, useState } from 'react';

export default function OrderPage() {
  const [data, setData] = useState('');
  const [signature, setSignature] = useState('');

  useEffect(() => {
    fetch('/api/order/pay', {
      method: 'POST',
      body: JSON.stringify({
        amount: 200,
        orderId: 'order123',
        description: 'Оплата заказа на NextPizza',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        setData(res.data);
        setSignature(res.signature);
      });
  }, []);

  if (!data || !signature) {
    return <div className="p-8 text-center">Загрузка формы оплаты...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <LiqPayForm data={data} signature={signature} />
    </div>
  );
}
