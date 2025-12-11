import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    status: 'success',
    message: 'API is working!',
    timestamp: new Date().toISOString()
  });
}
