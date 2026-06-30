import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const data = formData.get('data');
  const signature = formData.get('signature');

  // Тут можешь добавить логирование, проверку, сохранение в БД и т.д.
  console.log('Callback from LiqPay:', { data, signature });

  return NextResponse.json({ status: 'ok' });
}
