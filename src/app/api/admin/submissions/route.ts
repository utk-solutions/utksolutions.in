import { NextResponse } from 'next/server';
import { getAllSubmissions } from '@/lib/submissions-store';

export async function GET() {
    try {
        const submissions = getAllSubmissions();

        return NextResponse.json(
            { success: true, submissions },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching submissions:', error);
        return NextResponse.json(
            { error: 'Failed to fetch submissions' },
            { status: 500 }
        );
    }
}
