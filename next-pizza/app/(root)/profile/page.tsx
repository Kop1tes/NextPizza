'use client';

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

export default  function ProfitPage() {
    const { data: session } = useSession();

    if (!session) {
        return redirect('/not-auth');
    }

    return <div>Это твой профиль</div>;
}