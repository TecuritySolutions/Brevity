import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
  }

  const { error } = await supabase
    .from('waitlist')
    .insert({ email: email.trim().toLowerCase() });

  if (error) {
    // Unique violation — email already registered
    if (error.code === '23505') {
      return NextResponse.json({ error: 'already_registered' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to save. Try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
