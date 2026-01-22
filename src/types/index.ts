export interface ContactSubmission {
    id: string;
    type: 'contact';
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: string;
    read: boolean;
}

export interface ConsultationSubmission {
    id: string;
    type: 'consultation';
    name: string;
    email: string;
    company: string;
    service: string;
    date: string;
    message: string;
    timestamp: string;
    read: boolean;
}

export type Submission = ContactSubmission | ConsultationSubmission;
