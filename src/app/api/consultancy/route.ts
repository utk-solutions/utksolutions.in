import { NextRequest, NextResponse } from 'next/server';
import { saveConsultationSubmission } from '@/lib/submissions-store';
import { ConsultationSubmission } from '@/types';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.service || !body.date || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create submission object
        const submission: ConsultationSubmission = {
            id: `consultation-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            type: 'consultation',
            name: body.name,
            email: body.email,
            company: body.company || '',
            service: body.service,
            date: body.date,
            message: body.message,
            timestamp: new Date().toISOString(),
            read: false,
        };

        // Save to storage
        saveConsultationSubmission(submission);

        return NextResponse.json(
            { success: true, message: 'Consultation booked successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing consultation form:', error);
        return NextResponse.json(
            { error: 'Failed to process consultation booking' },
            { status: 500 }
        );
    }
}
