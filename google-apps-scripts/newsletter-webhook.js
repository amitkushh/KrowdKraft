/**
 * Google Apps Script for Newsletter Subscriptions
 * 
 * Instructions:
 * 1. Create a new Google Sheet for newsletter subscriptions
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this script
 * 4. Save and deploy as web app
 * 5. Copy the web app URL to GOOGLE_SHEETS_WEBHOOK_URL in your .env file
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Extract email, timestamp, and source
    const email = data.email;
    const timestamp = data.timestamp || new Date().toISOString();
    const source = data.source || 'website';
    
    // Check if this is the first entry (add headers)
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Email', 'Source', 'Status']]);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }
    
    // Add the new subscription
    const newRow = sheet.getLastRow() + 1;
    sheet.getRange(newRow, 1, 1, 4).setValues([[
      new Date(timestamp),
      email,
      source,
      'Active'
    ]]);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 4);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Newsletter subscription recorded successfully',
        timestamp: timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    console.error('Newsletter webhook error:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Failed to record newsletter subscription',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'KrowdKraft Newsletter Webhook is active',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
