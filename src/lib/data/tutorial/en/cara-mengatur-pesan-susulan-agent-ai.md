---
id: 25
slug: "cara-mengatur-pesan-susulan-agent-ai"
title: "How to Configure Agent AI Automated Follow-up Messages"
description: "Configure automatic reminders when a customer stops replying for a defined period."
category: "Agent AI"
duration: "3 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-pesan-susulan-agent-ai/"
---

The **Follow-up Message** feature (_Follow-up Reminders / Daily List_) is designed to automatically maintain engagement with potential buyers. If a customer stops responding after the Agent AI provides information (such as pricing details, proposals, or payment links), the bot can automatically send a friendly reminder message after your specified time delay.

## Prerequisites

✅ Reminder message templates or your business follow-up strategy are already prepared.

✅ Your account has access to a WhatsApp instance in the Wajom portal.

---

## 1. Locating the Follow-up Message Card

1.  Open the **Agent AI** menu in the Wajom portal, then click the **Automation** tab.
2.  Scroll down until you find the **Follow-up Message** card (_"If the customer stops replying, the agent sends a reminder message after your specified time delay"_).
3.  Click the **Set Up** button highlighted by the red box on the card to open the configuration form.

![Menemukan Kartu mesej Susulan dan butang Atur](/images/agent-ai/daily-01-card.png)

---

## 2. Selecting the Follow-up Message Type and Last Sender

At the top of the settings form:

![Memilih Jenis mesej Susulan dan Pengirim Terakhir](/images/agent-ai/daily-02-jenis-pesan.png)

1.  **Follow-up Message Type**:
2.  - **Static text**: You write the reminder message content manually.
3.  - **Written by agent**: The AI model will intelligently and personally compose the follow-up message by adapting to the context of the customer's last conversation.
4.  **Send Follow-up If Last Message Is From**:
5.  - **Agent**: Only send a reminder if the last message in the chat was sent by the bot.
6.  - **Agent or admin**: Send a reminder whether the last message was sent by the bot or a human admin staff member.

---

## 3. Setting the Message Sequence and Send Delay

In the **Message Sequence** section, define the series of reminder messages along with their delay intervals:

![menetapkan Urutan mesej dan Jeda Waktu Follow-Up](/images/agent-ai/daily-03-urutan-pesan.png)

1.  Click the **+ Add Message** button to create a reminder sequence (_Message 1_, _Message 2_, etc.).
2.  Specify the waiting delay interval (for example, `2 hours`, `6 hours`, or `24 hours` after the last message).
3.  Write natural and friendly follow-up copy:
4.  _Example:_
5.  > _"Hi there! Just wanted to check if you had a chance to review our offer details earlier? If you need any help or adjustments to the package, please let us know! 😊"_
6.  Subsequent messages will only be sent if the customer still hasn't replied to the conversation.

---

## 4. Setting Follow-up Delivery Hours (Optional)

To prevent follow-up messages from being sent in the middle of the night or outside respectful business operating hours:

![menetapkan Jam Kirim mesej Susulan](/images/agent-ai/daily-04-jam-kirim.png)

1.  In the **Delivery Hours (Optional)** section, click the **+ Add Delivery Hours** button.
2.  Specify the permitted time range (for example, between `09:00` and `20:00`).
3.  If the reminder delay interval falls during the night, the system will hold the message and only send it once opening hours are reached the following day.

---

## 5. Saving the Configuration and Enabling Automation

1.  Scroll to the very bottom of the form and click the blue **Save** button.
2.  Return to the **Follow-up Message** card in the Automation tab.
3.  Click the toggle switch next to the card until its status shows **Active**.
4.  Agent AI will automatically monitor conversation idle durations and send follow-up messages on time according to your specified schedule.
