import { NextRequest, NextResponse } from 'next/server';
import { saveContactSubmission } from '@/lib/submissions-store';
import { ContactSubmission } from '@/types';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create submission object
        const submission: ContactSubmission = {
            id: `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            type: 'contact',
            name: body.name,
            email: body.email,
            company: body.company || '',
            message: body.message,
            timestamp: new Date().toISOString(),
            read: false,
        };

        // Save to storage
        saveContactSubmission(submission);

        return NextResponse.json(
            { success: true, message: 'Form submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Failed to process form submission' },
            { status: 500 }
        );
    }
}
