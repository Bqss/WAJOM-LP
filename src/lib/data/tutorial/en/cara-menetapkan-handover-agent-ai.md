---
id: 22
slug: "cara-menetapkan-handover-agent-ai"
title: "How to Configure Handover to an Admin"
description: "Move a conversation from Agent AI to a human admin when a customer requests help or the bot cannot answer."
category: "Agent AI"
duration: "4 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-menetapkan-handover-agent-ai/"
---

Even though the AI Agent can handle most questions automatically, there are situations where customers require direct assistance from human staff (for example, during complaints, special transactions, or questions outside the knowledge base).

The **Handover** feature in the AI Agent ensures conversations are transferred smoothly to your WhatsApp admin team without making customers feel ignored.

## Prerequisites

✅ The on-duty admin's WhatsApp number is prepared with country code format (example: `6281234567890`).

✅ Your account has access to the WhatsApp instance in the Wajom portal.

---

## 1. Opening the Automation Menu

1.  Open the **Agent AI** menu in the Wajom portal.
2.  In the top navigation bar, click the **Automation** tab.
3.  On this page, locate the two handover automation cards:
4.  - **Call admin**: Handover when a customer explicitly requests human assistance or is detected making a complaint.
5.  - **Call admin when agent cannot answer**: Automatic handover (_fallback handover_) when the AI cannot find an answer in the knowledge base.

![Daftar Kartu ciri Otomasi Handover](/images/agent-ai/handover-01-overview.png)

---

## 2. Configuring the Call Admin Feature (Human Request Handover)

Use this feature to detect when a customer wants to speak with a real person:

1.  On the **Call admin** card, click the **Configure** button to open the settings form.
2.  The call admin configuration modal will open:

![borang Konfigurasi Panggil Admin](/images/agent-ai/handover-02-panggil-admin.png)

1.  Configure the following important parameters:
2.  - **When admin is called**: Enter trigger situation phrases (example: _"customer complains about damaged goods"_, _"asks to speak with a human"_, or _"wants to negotiate price"_). Press the **Enter** key to add a condition. Leave empty if you want it to apply to all admin assistance requests.
3.  - **Who gets notified**:
4.  - _All admins_: All registered numbers will receive notification messages simultaneously.
5.  - _Round Robin_: Notifications are distributed fairly and in turn among the registered admin numbers.
6.  - _Based on situation_: Assign specific admin groups based on the topic of the customer's complaint.
7.  - **Admin numbers**: Register the WhatsApp numbers of CS staff who will receive notifications.
8.  - **Message for admin**: The notification message format sent to the admin's WhatsApp. You can use dynamic variables such as `{name}` (customer name), `{phone}` (customer number), `{reason}` (handover reason), `{user_message}` (customer's latest message), and `{context}` (memory facts summary).
9.  - **Message for customer**: Enter an automated reassuring message for the customer (example: _"Please wait a moment, we are connecting your message to our admin 🙏"_).
10.  - **Pause agent for this customer**: Check this box so the bot stops replying to this customer's conversation temporarily, allowing human admin staff to continue the chat without bot interruptions.
11.  Click the **Save** button, then turn on the toggle switch on the card until its status shows **Active**.

---

## 3. Configuring Call Admin when Agent Cannot Answer (Fallback Handover)

Use this feature to prevent customers from waiting uncertainly when the AI encounters questions outside its knowledge base:

1.  On the **Call admin when agent cannot answer** card, click the **Configure** button.
2.  The fallback handover settings form will open:

![borang Konfigurasi Fallback Handover](/images/agent-ai/handover-03-fallback.png)

1.  Complete the following fields:
2.  - **Admin numbers**: Leave empty if you want to use the same admin numbers as the _Call admin_ card, or enter specific numbers for technical escalation.
3.  - **Message for admin**: Enter an emergency alert format (example: _"[FALLBACK ALERT] Agent cannot answer the question from {phone}: {user_message}"_).
4.  - **Message for customer**: An apology and clarification message explaining that the issue is being coordinated with the relevant team.
5.  - **Pause agent for this customer**: Check the box to temporarily disable the bot for that chat.
6.  Click the **Save** button, then enable the toggle switch on the card.

---

## 4. Setting Up Handover Backup in the Settings Tab

To ensure every handover request always has a recipient (even if the admin numbers on the automation card are inactive):

1.  Open the **Settings** tab in the Agent AI navigation bar.
2.  Scroll down until you find the **Admin notifications** card.

![Fallback Handover Settings on Settings Tab](/images/agent-ai/handover-04-settings-cadangan.png)

1.  In the **Admin WhatsApp number** field, ensure the primary admin phone number is filled in correctly (country code format without +, e.g., `6281234567890`).
2.  Enable the **Handover backup** toggle switch:
3.  - If there is a customer conversation requiring admin assistance but the specific rule has no active recipient numbers, the notification is automatically routed to this primary admin WhatsApp number.
4.  Click the blue **Save notification** button.
