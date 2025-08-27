/**
 * Google Apps Script for Partnership Request Form Submissions
 * This script handles data from the "Partner With Us" form and saves it to a Google Sheet
 * 
 * Setup Instructions:
 * 1. Create a new Google Sheet for partnership requests
 * 2. Open Google Apps Script (script.google.com)
 * 3. Create a new project and paste this code
 * 4. Save and deploy as a web app
 * 5. Copy the deployment URL and use it as GOOGLE_SHEETS_PARTNERSHIP_WEBHOOK_URL
 */

function doPost(e) {
  try {
    // Check if e and postData exist
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('No postData found in request');
    }

    // Use specific spreadsheet by ID
    var spreadsheetId = '1wQ7-J9aiOAKwuonG2kppZwCwE4nL3qfQv5pMMf-5o6Y';
    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheetName = "KrowdKraft Partnership Requests";
    var sheet = spreadsheet.getSheetByName(sheetName);
    
    // Create sheet with headers if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
      sheet.appendRow([
        "Timestamp",
        "Organization Name", 
        "Email",
        "Mobile",
        "Source",
        "Status",
        "Notes"
      ]);
      
      // Format the header row
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setBackground('#4285F4');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
      sheet.freezeRows(1);
    }

    // Parse the incoming data
    var requestData = JSON.parse(e.postData.contents);
    var data = requestData.data;
    
    // Log the received data for debugging
    console.log('Received partnership data:', requestData);
    
    // Prepare row data
    var timestamp = requestData.timestamp ? new Date(requestData.timestamp) : new Date();
    var organizationName = data.organizationName || '';
    var email = data.email || '';
    var mobile = data.mobile || '';
    var source = requestData.source || 'website_partnership_form';
    var status = 'New';
    var notes = '';

    // Append the data to the sheet
    var newRow = [
      timestamp,
      organizationName,
      email, 
      mobile,
      source,
      status,
      notes
    ];
    
    sheet.appendRow(newRow);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 7);
    
    // Log success with more details
    console.log('Partnership request added successfully:', {
      organizationName: organizationName,
      email: email,
      mobile: mobile,
      timestamp: timestamp,
      row: newRow
    });
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        "result": "success",
        "message": "Partnership request submitted successfully",
        "timestamp": timestamp,
        "received_data": requestData,
        "spreadsheet_id": spreadsheetId
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error
    console.error('Error processing partnership request:', error);
    
    // Return detailed error response
    return ContentService
      .createTextOutput(JSON.stringify({
        "result": "error", 
        "message": "Failed to process partnership request",
        "error": error.toString(),
        "error_name": error.name,
        "error_message": error.message,
        "timestamp": new Date()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function - you can run this to test the script
 */
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        type: 'partnership',
        timestamp: new Date().toISOString(),
        data: {
          organizationName: "Test University",
          email: "test@university.edu", 
          mobile: "+1234567890"
        },
        source: 'website_partnership_form'
      })
    }
  };
  
  var result = doPost(testData);
  console.log('Test result:', result.getContent());
}

/**
 * Simple GET handler for testing webhook deployment
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      "status": "success",
      "message": "Partnership webhook is working",
      "timestamp": new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
