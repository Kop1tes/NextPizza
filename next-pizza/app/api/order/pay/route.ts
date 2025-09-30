import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  const body = await req.json();

  const { amount, orderId, description } = body;

  const LIQPAY_PUBLIC_KEY = process.env.LIQPAY_PUBLIC_KEY!;
  const LIQPAY_PRIVATE_KEY = process.env.LIQPAY_PRIVATE_KEY!;

  const paymentData = {
    public_key: LIQPAY_PUBLIC_KEY,
    version: '3',
    action: 'pay',
    amount,
    currency: 'UAH',
    description,
    order_id: orderId,
    result_url: 'http://localhost:3000/order/success',
    server_url: 'http://localhost:3000/api/order/callback',
  };

  const data = Buffer.from(JSON.stringify(paymentData)).toString('base64');
  const signature = crypto
    .createHash('sha1')
    .update(LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY)
    .digest('base64');

  return NextResponse.json({ data, signature });
}
