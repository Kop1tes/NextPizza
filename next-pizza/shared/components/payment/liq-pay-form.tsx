'use client';

export default function LiqPayForm({
  data,
  signature,
}: {
  data: string;
  signature: string;
}) {
  return (
    <form method="POST" action="https://www.liqpay.ua/api/3/checkout" acceptCharset="utf-8">
      <input type="hidden" name="data" value={data} />
      <input type="hidden" name="signature" value={signature} />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded-lg mt-4 hover:bg-green-700 transition"
      >
        Перейти к оплате
      </button>
    </form>
  );
}
