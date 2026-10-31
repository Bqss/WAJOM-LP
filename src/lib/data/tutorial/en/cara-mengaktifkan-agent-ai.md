---
id: 16
slug: "cara-mengaktifkan-agent-ai"
title: "How to Activate & Configure Agent AI Basics"
description: "Learn to activate Agent AI, set business identity, response depth, conversation scope, operating hours and response intervals."
category: "Agent AI"
duration: "5 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengaktifkan-agent-ai/"
---

This guide walks you through activating Agent AI from scratch: turning on the activation toggle switch in Summary, configuring your business identity in Persona, setting operational parameters in the Rules tab (_Scope_, _Activation Mode_, _Operating Hours_, _Response Delay_, _Exclude Lists_, and _Control Keywords_), and adjusting response characteristics in the Settings tab (_AI Accuracy Level_, _Reply in Multiple Messages_, and _Admin Notifications_).

## Prerequisites

✅ Your WhatsApp device has a **Connected** status in the Wajom portal.

✅ Your account has a sufficient balance of AI tokens.

> **Alert**: The same WhatsApp number cannot run AI Chat and Agent AI simultaneously. Make sure the AI Chat feature is disabled first if you are switching to Agent AI.

---

## 1. Turning on the Agent AI Toggle Switch

1.  Open the **Agent AI** menu in the Wajom portal and select the **Summary** tab.
2.  On the main **Agent AI** card, locate the status toggle switch located on the right side of the card.
3.  Click the switch to turn on Agent AI until the toggle slides active to the right.
4.  Once active, the card status will change to **Active** and Agent AI is immediately ready to handle incoming customer chats.

![Enable Agent AI Toggle Switch on Summary Tab](/images/agent-ai/aktivasi-01-toggle.png)

---

## 2. Setting Business Identity (Company Name)

Open the **Persona** tab in the Agent AI navigation bar:

1.  In the **01 Identity** section, find the two main input fields:
2.  - **Business Name**: Enter your brand or store name (example: `Senja Coffee Shop` or `Wajom`). This name is used by the AI when greeting customers.
3.  - **Company Name**: Enter your registered legal entity name (example: `PT Senja Makmur Mandiri`).
4.  Review the preview in the **Preview** panel on the right side of the screen.
5.  Click the blue **Save** button to save your identity changes.

![Business Identity Settings in Persona](/images/agent-ai/aktivasi-02-identitas.png)

---

## 3. Selecting AI Accuracy Level (Engine Version)

Open the **Settings** tab in the Agent AI navigation:

In the **01 AI Accuracy Level** section, choose the artificial intelligence reasoning model that fits your business needs:

![Pilihan Tingkat Ketelitian AI](/images/agent-ai/aktivasi-03-ketelitian.png)

-   **Economy (0.8×)**: Most economical on token balance. Best suited for online stores with standard FAQ question-and-answer flows.
-   **Default (1×)**: A balanced ratio between response intelligence and token efficiency. The recommended choice for daily operations.
-   **Smart (1.5×)**: More precise in analyzing long questions, complaints, or multi-step consultations.
-   **Max (2×)**: Highest reasoning level for complex cases, document analysis, or specialized negotiations.

---

## 4. Configuring Message Splitting (Response Settings)

Still in the **Settings** tab, scroll down to the **02 Reply in Multiple Messages** section:

This feature splits long AI replies into several sequential short chat bubbles, mimicking how a human types on WhatsApp.

![tetapan Balas dalam Beberapa mesej](/images/agent-ai/aktivasi-04-split-pesan.png)

1.  Enable the **Reply in multiple messages** toggle switch.
2.  Set the following parameters:
3.  - **Maximum number of messages**: Maximum limit of chat splits (options from 1 to 5 messages, default is `3`).
4.  - **Maximum characters per message**: Text length limit per chat bubble (options from 100 to 1,000 characters, default is `500`).
5.  - **Delay between messages (seconds)**: Pause time before the next chat bubble is sent (0 to 10 seconds, default is `2` seconds).
6.  - **Show "typing..."**: When active, your WhatsApp number status will display a typing indicator while the AI composes its reply.

---

## 5. Defining Conversation Scope (Scope)

Open the **Rules** tab in the Agent AI navigation bar:

In the **01 Where the agent replies** section, determine which conversation spaces the bot is allowed to reply to automatically:

![Pemilihan Scope perbualan Agent AI](/images/agent-ai/aktivasi-05-scope.png)

-   **Private chats**: The bot only replies to one-on-one direct messages. This is the safest default option.
-   **Groups**: The bot only responds to conversations within designated WhatsApp groups.
-   **All**: The bot actively responds to both private chats AND WhatsApp groups simultaneously.

---

## 6. Setting When to Start Replying (Activation Mode)

In the **02 When the agent starts replying** section of the **Rules** tab:

![Mode Aktivasi Agent AI](/images/agent-ai/aktivasi-06-mode.png)

-   **Always**: Agent AI immediately replies to every incoming message automatically without requiring trigger keywords. The best choice for 24/7 automated customer service.
-   **With keyword**: The agent only starts responding after a customer sends a specific trigger keyword (e.g., `hello support`, `ask bot`, `menu`).

---

## 7. Setting Operating Hours (Schedule)

Restrict Agent AI operations so it only replies to conversations during your business's official operating hours:

1.  In the **Rules** tab, locate the **03 Operating Hours** section.
2.  Click the toggle switch until it turns active blue.
3.  The operating hours form fields will appear below:
4.  - **Open**: Enter the opening business hour (example: `08:00`).
5.  - **Close**: Enter the closing business hour (example: `21:00`).
6.  - **Time zone**: Select your account's time zone (`Asia/Jakarta (WIB)`, `Asia/Makassar (WITA)`, or `Asia/Jayapura (WIT)`).
7.  Outside of the specified operating hours, Agent AI will not send automatic replies.

![tetapan waktu operasi Agent AI](/images/agent-ai/aktivasi-07-jam-kerja.png)

---

## 8. Setting Delay Before Replying (Chatbot Limit / Batch Delay)

Customers often type messages in fragments (for example, 3 short chats in a row). The response delay feature ensures Agent AI waits a few seconds to gather all of the customer's messages before replying to them all at once as a single complete response:

1.  Find the **04 Delay before replying (seconds)** section in the **Rules** tab.
2.  Enter the waiting duration value in the input field (range 0–60 seconds, recommended `3` to `5` seconds).
3.  The bot will hold back replies for this duration before processing its response.

![Response delay settings before replying](/images/agent-ai/aktivasi-07-jeda-membalas.png)

---

## 9. Excluding Contacts (Exclude Lists)

Prevent the AI Agent from replying to internal admin numbers, supervisors, or vendor partners:

1.  Find the **05 Exclude contacts from list** section in the **Rules** tab.
2.  Turn on the toggle switch until it turns active.
3.  Click on the contact list selection field to choose an exclusion list database (for example, the `Internal Admin` or `Management Team` list).
4.  Numbers registered in that contact list will never be automatically replied to by the bot.

![tetapan senarai kenalan yang Dikecualikan](/images/agent-ai/aktivasi-08-exclude-lists.png)

---

## 10. Setting Control Keywords (Pause, Resume, and Ignore)

Control keywords give your team instant control to pause, resume, or ignore the bot directly from within the WhatsApp chat:

### Keyword Action Types:

- **Pause**: The bot temporarily stops replying to this customer's chat. Very useful when a human admin is handling the customer manually so the bot does not interrupt the conversation. - **Resume**: Reactivates the bot to continue replying to that customer's chat after the admin is done handling it. - **Ignore**: Specific messages containing this keyword are skipped by the bot and will not receive a response.

### Steps to Add Control Keywords:

1. In the **06 Control keywords** section, fill out the add keyword form: - **Keyword**: Enter the control keyword phrase (example: `stop bot` or `talk to cs`). - **Action**: Select `Pause`, `Resume`, or `Ignore`. - **Match type**: Select `Exact match` (only applies if the chat contains only that word) or `Contains word` (applies if the chat sentence contains that word). 2. Click the **Add** button.

![borang Penambahan Kata Kunci Kontrol](/images/agent-ai/aturan-08-tambah-kata-kunci.png)

1.  Successfully added keywords will appear in the active keyword list below the form:

![Daftar Kata Kunci Kontrol Aktif](/images/agent-ai/aturan-09-daftar-kata-kunci.png)

---

## 11. Setting Fallback Messages and Admin Notifications to WhatsApp

Return to the **Settings** tab:

![Admin Notification and Fallback Handover Settings](/images/agent-ai/handover-04-settings-cadangan.png)

### Fallback Message

Write a reassuring sentence in the **04 Fallback message** section that is automatically sent if a network interruption occurs or the AI runs out of tokens (default: _"Sorry, I cannot answer right now. Our admin will assist you shortly 🙏"_).

### Admin Notifications to WhatsApp

On the **Admin notification** card: 1. Enter the admin's WhatsApp number in **Admin WhatsApp number** (country code format without the + sign, example `6281234567890`). 2. Enable the required alerts: - **Low balance**: Notification when the token balance falls below the safe limit. - **Balance depleted**: Emergency notification when the balance runs out and the bot stops replying. - **Consecutive reply failures**: Notification if 3 consecutive response failures occur. - **Engine/WhatsApp disconnected**: Notification if the WhatsApp connection status is disconnected. - **Daily summary**: Activity report for the last 24 hours sent daily at a specific hour (e.g., `21:00`). - **Handover fallback**: Automatic chat transfer notifications are sent to this number if no other admin is assigned. 3. Click the blue **Save notifications** button.
