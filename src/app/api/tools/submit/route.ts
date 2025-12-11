import { NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

// Path to our JSON storage file
const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'tool-submissions.json');

export async function POST(request: Request) {
  try {
    // Parse the request body
    const submission = await request.json();
    
    // Basic validation
    if (!submission.name || !submission.description || !submission.category || !submission.website || !submission.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create data directory if it doesn't exist
    const fs = await import('fs');
    const dir = path.dirname(SUBMISSIONS_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing submissions
    let submissions = [];
    try {
      const fileData = await readFile(SUBMISSIONS_FILE, 'utf8');
      submissions = JSON.parse(fileData);
    } catch (error) {
      // File doesn't exist yet, we'll create it
      console.log('Creating new submissions file');
    }

    // Add new submission with timestamp and status
    const newSubmission = {
      id: Date.now().toString(),
      ...submission,
      submittedAt: new Date().toISOString(),
      status: 'pending', // pending, approved, rejected
    };

    submissions.push(newSubmission);

    // Save back to file
    await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

    // In a real app, you would also:
    // 1. Send a confirmation email
    // 2. Notify admins
    // 3. Add to a database

    return NextResponse.json({ 
      success: true, 
      message: 'Tool submitted successfully!',
      submission: newSubmission
    });

  } catch (error) {
    console.error('Error submitting tool:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: Add GET endpoint to view submissions (protected in production)
export async function GET() {
  try {
    const fileData = await readFile(SUBMISSIONS_FILE, 'utf8');
    const submissions = JSON.parse(fileData);
    return NextResponse.json(submissions);
  } catch (error) {
    return NextResponse.json([]);
  }
}
