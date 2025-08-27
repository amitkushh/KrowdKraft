import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { data } = body

    console.log('Partner request submission:', data)
    console.log('Environment variables check:')
    console.log('- GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL:', process.env.GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL ? 'SET' : 'NOT SET')
    console.log('- GOOGLE_SHEETS_WEBHOOK_URL:', process.env.GOOGLE_SHEETS_WEBHOOK_URL ? 'SET' : 'NOT SET')

    const webhookUrl = process.env.GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL

    if (!webhookUrl) {
      console.log('GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL not configured, logging partnership request:', data)
      return NextResponse.json({ 
        success: true, 
        message: 'Partnership request submitted successfully! (Google Sheets webhook not configured)' 
      })
    }

    try {
      const timestamp = new Date().toISOString()
      const submissionData = {
        type: 'partnership',
        timestamp,
        data,
        source: 'website_partnership_form'
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      })

      const responseText = await response.text()
      console.log('Google Sheets response:', responseText)

      if (!response.ok) {
        console.error('Failed to send partnership data to Google Sheets:', {
          status: response.status,
          statusText: response.statusText,
          response: responseText
        })
        return NextResponse.json({ 
          success: false, 
          message: 'Failed to submit partnership request. Please try again.' 
        }, { status: 500 })
      }

      console.log('Successfully added partnership request to Google Sheets:', responseText)
      return NextResponse.json({ 
        success: true, 
        message: 'Partnership request submitted successfully!' 
      })
    } catch (webhookError) {
      console.error('Google Sheets webhook error:', webhookError)
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to submit partnership request. Please try again.' 
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Partnership request API error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
