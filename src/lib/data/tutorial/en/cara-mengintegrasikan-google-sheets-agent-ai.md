---
id: 28
slug: "cara-mengintegrasikan-google-sheets-agent-ai"
title: "How to Integrate Google Sheets with Agent AI"
description: "Step-by-step guide to connecting Google Sheets for automated Read (Lookup), Append new rows, Update values, and Delete spreadsheet records."
category: "Agent AI"
duration: "6 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengintegrasikan-google-sheets-agent-ai/"
---

The **Google Sheets Connector** integration empowers Agent AI to directly interact with your business spreadsheets in real time. The virtual assistant can perform lookups (*read/search*), log new rows (*append*), update cell values (*update*), and remove rows (*delete*) automatically while handling live customer chats on WhatsApp.

## Prerequisites

> **Tip**: An active Google account that owns or has access to a Google Spreadsheet.

> **Tip**: The target spreadsheet must have column headers defined in the first row (*header row*).

> **Tip**: Your account has access to a connected WhatsApp instance on the Wajom portal ([portal.wajom.co](https://portal.wajom.co)).

---

## 1. Selecting Google Sheets in the Integration Menu

Before creating a spreadsheet operation tool, open the Google Sheets connector modal:

1. Open the **Agent AI** menu in the Wajom portal ([portal.wajom.co](https://portal.wajom.co)), then click the **Tools** tab.
2. In the bottom **Integrations** section, click the **Add Integration** button.
3. In the connector options modal, choose the **Google Sheets Spreadsheet** card highlighted in the red box:

![Selecting Google Sheets Spreadsheet Connector](/images/agent-ai/gsheet-01-pilih.png)

---

## 2. Connecting Your Google Account and Selecting the Operation Type

In the **Add Google Sheets** configuration window, navigate to **1 Tool Connection & Operations**:

![Connecting Google Account and Choosing Tool Operation Type](/images/agent-ai/gsheet-02-koneksi-operasi.png)

### Connecting Your Google Account (Google OAuth)

1. Review the **Google Account** section. If no account is linked yet, click the blue **Connect Google Sheets** button.
2. The Google OAuth authorization window will open. Sign in with your Google account and grant the necessary permissions so Wajom can access your Google Drive and Spreadsheets.
3. Once connected, your Google email address will be displayed as the active account.

### Selecting the Tool Operation Type

Select the operation type you want the bot to perform from the **Tool Operation Type** dropdown:

* **Lookup / Search**: Searches and reads spreadsheet row data (e.g., checking seat availability, stock levels, or pricing).
* **Append**: Appends new rows to the very bottom of the spreadsheet (e.g., logging new registrations or order submissions).
* **Update**: Updates columns on matching rows (e.g., updating payment status).
* **Delete**: Removes rows based on unique search criteria (e.g., booking cancellations).

Fill in the **Integration Name** (e.g., `Check Umrah Quota`) and **Description for AI** outlining when the bot should call this tool.

---

## 3. Adding a Read Integration (Operation Type: Lookup / Search)

The **Lookup / Search** operation is used when AI needs to query or inspect spreadsheet records:

1. In the **Tool Operation Type** dropdown, select **Lookup / Search**.
2. **AI Input Parameters**: Click the **Add Parameter** button to define what information the AI must collect from the customer's chat (e.g., `package_name` and `departure_month`).
3. **Column Mapping & Filter Conditions**: Map input parameters to spreadsheet columns and specify filter matching rules (*Where Clause*):

![Adding AI Input Parameters and Mapping Lookup Filter Columns](/images/agent-ai/gsheet-03-operasi-lookup.png)

* The `Package` column matches the `package_name` parameter.
* The `Month` column matches the `departure_month` parameter.

---

## 4. Defining Lookup Result Columns (Output Data to AI)

In section **4 Lookup Result Columns (Output Data to AI)**, specify which spreadsheet columns should be retrieved and passed back to the AI for formulating responses:

![Defining Lookup Result Columns Output Data to AI](/images/agent-ai/gsheet-06-kolom-hasil.png)

1. Click the red-boxed **+ Result** button.
2. Add the required output columns:
   * `remaining_seats` (Spreadsheet Column: `Sisa_Seat`, type: Number).
   * `price` (Spreadsheet Column: `Harga`, type: Text/Number).
   * `registration_status` (Spreadsheet Column: `Status`, type: Text).
3. The AI model reads values from these columns and composes a warm, natural WhatsApp message for the customer.
4. Click the blue **Add Integration** button to save the Lookup tool.

---

## 5. Adding an Append Operation (Logging New Records)

The **Append** operation automatically adds new data rows to the spreadsheet when customers complete signups, bookings, or form inquiries via WhatsApp chat:

![Adding Append Operation to Google Sheets](/images/agent-ai/gsheet-04-operasi-append.png)

1. **Select the Append Operation**:
   Open the **Add Google Sheets** modal, and in the **Tool Operation Type** dropdown, choose **Append**.
2. **Define Integration Name and Description**:
   * **Integration Name:** `Log Pilgrim Registration`
   * **Function ID:** `register_pilgrim`
   * **Description for AI:** *"Call this tool after the prospective customer has provided all required details (name, WhatsApp number, package choice, and party size) to store in the spreadsheet."*
3. **Register AI Input Parameters**:
   Click **Add Parameter** for every piece of information AI must collect from the chat:
   * `full_name` (type: Text)
   * `whatsapp_number` (type: Text)
   * `chosen_package` (type: Text)
   * `group_size` (type: Number)
4. **Spreadsheet Column Mapping**:
   Map each AI input parameter to the corresponding spreadsheet column (Columns A, B, C, D) in the mapping table. AI will automatically append new entries at the bottom of the spreadsheet.
5. **Save Integration**:
   Click **Add Integration** to activate the append tool.

---

## 6. Adding a Delete Operation (Deleting Row Records)

The **Delete** operation is used when row data in the spreadsheet must be automatically deleted based on specific conditions (such as booking cancellations or unsubscribe requests):

![Adding Delete Operation to Google Sheets](/images/agent-ai/gsheet-05-operasi-delete.png)

1. **Select the Delete Operation**:
   Open the **Add Google Sheets** modal, and in the **Tool Operation Type** dropdown, choose **Delete**.
2. **Define Integration Name and Description**:
   * **Integration Name:** `Cancel Pilgrim Booking`
   * **Function ID:** `cancel_booking`
   * **Description for AI:** *"Call this tool when a customer explicitly requests to cancel their booking by providing their order number or registered WhatsApp phone number."*
3. **Register Search Key Parameters**:
   Click **Add Parameter** and register unique identifiers used to pinpoint the row to be deleted:
   * `whatsapp_number` (type: Text) or `booking_id` (type: Text).
4. **Define Deletion Conditions (Filter Clause)**:
   Click the **Key** button and match the spreadsheet column to the input parameter:
   * The `WhatsApp_Number` column matches the `whatsapp_number` parameter exactly.
5. **Save Integration**:
   Click **Add Integration** to activate the delete tool.

---

## 7. Testing Tool Execution in WhatsApp Chat / Playground

Once the integration is saved and active:

1. Open the [Playground (Test Lab)](/tutorials/simulasi-playground-agent-ai) tab.
2. Send a test message:
   > *"Hi, could you check the remaining seats for the Regular Umrah package in November 2026?"*
3. The AI intelligently:
   * Detects the need for quota verification.
   * Calls the Google Sheets `Check Umrah Quota` function.
   * Pulls real-time remaining seat numbers from your spreadsheet row.
   * Replies to the prospective customer with accurate and polite details:
   > *"Hello! For the Regular Umrah package departing in November 2026, there are currently **8 seats remaining** and registration is still open. Would you like assistance registering today? 😊"*
