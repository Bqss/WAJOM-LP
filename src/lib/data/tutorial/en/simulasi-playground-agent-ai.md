---
id: 17
slug: "simulasi-playground-agent-ai"
title: "How to Test Interactions in Agent AI Playground"
description: "Simulate a conversation with Agent AI in the Playground without sending messages to real WhatsApp users."
category: "Agent AI"
duration: "3 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/simulasi-playground-agent-ai/"
---

The **Playground** page is a simulation environment provided by Wajom so you can interact directly with your AI Agent just like a customer. Here, you can test response intelligence, evaluate knowledge base responses, verify the execution of custom actions (API/Google Sheets), and refine tone of voice before the bot is deployed to the public.

![Agent AI Playground Simulation View](/images/agent-ai/playground-01-simulasi.png)

## Benefits of Using the Playground

✅ **Safe & Isolated**: Messages sent in the Playground will not be sent to any customer WhatsApp numbers.

✅ **Available When Inactive**: You can still test the bot in the Playground even if the main AI Agent status is set to inactive.

✅ **Media & Image Testing**: Supports testing image attachments to evaluate the AI's visual recognition capabilities.

---

## 1. Opening the Playground Page

1.  Go to the **AI Agent** menu in the Wajom portal.
2.  In the top navigation bar, click the **Playground** tab.
3.  In the center of the screen, you will see a simulated chat window.

---

## 2. Sending a Simulated Message

1.  In the input field at the bottom (_"Write a message as a customer…"_), type the question or scenario you want to test:
2.  - FAQ questions regarding operational hours or location.
3.  - Inquiries about catalog product pricing or stock.
4.  - Requests for human agent assistance (testing the Handover feature).
5.  - Testing custom action triggers such as order status tracking or Google Sheets integration.
6.  Click the send button or press **Enter**.
7.  The AI Agent will process the message and display the reply directly on the screen.

> **Tip**: Conversations in the Playground consume AI token credits just like regular chats because the AI model is actively processing data in real time. However, playground conversation metrics are recorded separately and are not included in customer chat analytics.

---

## 3. Testing Image Attachments

If you have enabled the **Read image** option under the [Settings](/agent-ai/cara-mengaktifkan#4-menetapkan-karakteristik-balasan-response-settings) tab: 1. Click the **Attach image** button next to the message field. 2. Upload a product photo or payment receipt. 3. Send a test message, for example: _"How much is the product shown in this photo?"_ 4. Evaluate whether the AI Agent can recognize the image and answer accurately according to your knowledge base.

---

## 4. Resetting the Test Session (Restart)

If you have finished testing a topic and want to start a new scenario with a clean conversation context: 1. Click the **Restart** button in the top right corner of the screen. 2. All chat bubble history in the Playground will be cleared immediately.
