---
id: 26
slug: "cara-mengatur-custom-action-agent-ai"
title: "How to Build REST API & Webhook Custom Actions in Agent AI"
description: "Step-by-step guide to connecting Agent AI with external REST APIs or webhooks to retrieve and send data in real time."
category: "Agent AI"
duration: "5 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-custom-action-agent-ai/"
---

The **Custom Action** feature in Agent AI empowers your virtual assistant to do much more than answer text queries. Agent AI can execute web requests (*API calls*) to your servers or external systems during live customer conversations—such as checking tracking numbers and order statuses, verifying hotel room availability, or forwarding new leads directly into your internal CRM.

This guide provides a comprehensive step-by-step walkthrough along with a practical example of implementing an API call to verify order status.

## Prerequisites

> **Tip**: Your REST API endpoint or webhook is active and publicly accessible over `https://`.

> **Tip**: Documentation for your API's URL parameters, request headers, and JSON response schema is ready.

> **Tip**: Your account has access to a connected WhatsApp instance on the Wajom portal ([portal.wajom.co](https://portal.wajom.co)).

---

## 1. Opening the Tools Menu and the Add Action Button

1. Open the **Agent AI** menu in the Wajom portal ([portal.wajom.co](https://portal.wajom.co)).
2. On the top navigation bar, click the **Tools** tab.
3. On the top **Custom actions** card, locate the blue **+ Add action** button highlighted in the red box:

![Custom Actions Card and Add Action Button on the Tools Menu](/images/agent-ai/custom-action-01-overview.png)

4. Click the **+ Add action** button to open the configuration modal.

---

## 2. Filling In Basic Action Information (Name, Description, and Type)

At the top of the configuration modal:

![Filling in Basic Action Name Description and Type](/images/agent-ai/custom-action-02-info.png)

1. **Action Name**:
   Enter a concise technical function name using lowercase letters and underscores (e.g., `check_order_status`).
2. **When the Agent Uses This Action (Trigger Prompt)**:
   Describe in plain sentences when this action should be called:
   *Example:*
   > *"Use when a customer inquires about their order status, package tracking, or receipt. Requires the order number from the customer."*

   > **Tip**: The AI model evaluates this description on every incoming chat message to determine whether the customer's intent requires invoking this API action.
3. **Action Type**:
   * **Fetch data (API)**: The agent retrieves information from your server and summarizes the parsed JSON data into a helpful response for the customer.
   * **Send data (webhook)**: The agent transmits data collected from the customer chat to an external system (e.g., creating a new support ticket or order).

---

## 3. Specifying the HTTP Method and Endpoint URL

In the connection configuration section:

![Specifying the HTTP Method and URL Template](/images/agent-ai/custom-action-03-url.png)

1. **Method**: Select the appropriate HTTP method: `GET`, `POST`, `PUT`, or `DELETE`.
2. **Address (URL)**: Enter the full endpoint URL starting with `https://`. You can insert dynamic variables using double curly braces `{{variable_name}}`:
   ```text
   https://api.mystore.com/orders/{{order_id}}
   ```

> **Alert**: For network security, local addresses and private IP ranges (such as `localhost` or `192.168.x.x`) are automatically blocked by the Wajom system.

---

## 4. Defining Input Parameters and Saving the Action

In the lower section of the modal:

![Defining Agent-Collected Parameters and Save Button](/images/agent-ai/custom-action-04-params.png)

1. **Headers (Optional)**:
   Click **+ Add header** if your API requires an API Key or Bearer token authorization (e.g., `Authorization`: `Bearer your_secret_api_token`).
2. **Inputs Collected by Agent (Input Parameters)**:
   Click **+ Add input** to specify what information the Agent AI must extract or ask the customer before executing the API request:
   * **Input Name**: Must match your URL placeholder exactly (e.g., `order_id`).
   * **Data Type**: Select the data type (`string`, `number`, etc.).
   * **Description for Agent**: *"Order number provided by the buyer (e.g., ORD-12345)"*.
   * If the customer has not yet mentioned the order number in the chat, Agent AI will automatically ask them for it before triggering the API call.
3. **Enable Action**:
   Ensure the **Enable this action** checkbox is checked.
4. Click the blue **Save** button in the bottom right corner of the modal.

---

## 5. Testing Action Execution in Playground

1. Navigate to the [Playground (Test Lab)](/tutorials/simulasi-playground-agent-ai) tab.
2. Send a test message as a buyer: *"Hi, could you please check the status of my order ORD-9921?"*.
3. Agent AI will automatically recognize the intent, extract `ORD-9921`, call your API, and format the JSON response into a natural, friendly WhatsApp response.
