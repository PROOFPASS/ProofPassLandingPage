import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Add timestamp
    const submission = {
      ...data,
      timestamp: new Date().toISOString(),
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }

    // Path to store submissions
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'contact-submissions.json')

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing submissions or create empty array
    let submissions = []
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      submissions = JSON.parse(fileContent)
    }

    // Add new submission
    submissions.push(submission)

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2))

    console.log('✅ Contact form submission saved:', submission.id)

    return NextResponse.json({
      success: true,
      message: 'Submission received',
      id: submission.id
    })
  } catch (error) {
    console.error('❌ Error saving contact form:', error)
    return NextResponse.json(
      { success: false, message: 'Error processing submission' },
      { status: 500 }
    )
  }
}
