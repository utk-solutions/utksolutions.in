import fs from 'fs';
import path from 'path';
import { ContactSubmission, ConsultationSubmission } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTACT_FILE = path.join(DATA_DIR, 'contact-submissions.json');
const CONSULTATION_FILE = path.join(DATA_DIR, 'consultation-submissions.json');

// Ensure data directory and files exist
function ensureDataFiles() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(CONTACT_FILE)) {
        fs.writeFileSync(CONTACT_FILE, JSON.stringify([], null, 2));
    }

    if (!fs.existsSync(CONSULTATION_FILE)) {
        fs.writeFileSync(CONSULTATION_FILE, JSON.stringify([], null, 2));
    }
}

// Read submissions from file
function readSubmissions<T>(filePath: string): T[] {
    ensureDataFiles();
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading submissions:', error);
        return [];
    }
}

// Write submissions to file
function writeSubmissions<T>(filePath: string, submissions: T[]): void {
    ensureDataFiles();
    try {
        fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
    } catch (error) {
        console.error('Error writing submissions:', error);
        throw error;
    }
}

// Save contact submission
export function saveContactSubmission(submission: ContactSubmission): void {
    const submissions = readSubmissions<ContactSubmission>(CONTACT_FILE);
    submissions.unshift(submission); // Add to beginning
    writeSubmissions(CONTACT_FILE, submissions);
}

// Save consultation submission
export function saveConsultationSubmission(submission: ConsultationSubmission): void {
    const submissions = readSubmissions<ConsultationSubmission>(CONSULTATION_FILE);
    submissions.unshift(submission); // Add to beginning
    writeSubmissions(CONSULTATION_FILE, submissions);
}

// Get all contact submissions
export function getAllContactSubmissions(): ContactSubmission[] {
    return readSubmissions<ContactSubmission>(CONTACT_FILE);
}

// Get all consultation submissions
export function getAllConsultationSubmissions(): ConsultationSubmission[] {
    return readSubmissions<ConsultationSubmission>(CONSULTATION_FILE);
}

// Get all submissions combined
export function getAllSubmissions() {
    const contacts = getAllContactSubmissions();
    const consultations = getAllConsultationSubmissions();

    return [...contacts, ...consultations].sort((a, b) => {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
}
