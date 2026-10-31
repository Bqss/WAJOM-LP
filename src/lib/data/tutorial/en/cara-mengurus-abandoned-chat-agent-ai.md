---
id: 24
slug: "cara-mengurus-abandoned-chat-agent-ai"
title: "How to Manage Agent AI Abandoned Chats"
description: "Detect prospects who stop replying and automatically move them to a follow-up contact list."
category: "Agent AI"
duration: "3 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengurus-abandoned-chat-agent-ai/"
---

In business interactions via WhatsApp, potential customers who are consulting often stop replying abruptly in the middle of a conversation (for instance, after being asked for their shipping address or order details). This situation is referred to as an **Abandoned Chat**.

This feature allows the Agent AI to detect customers who leave the conversation inactive beyond a specific time limit, and then automatically adds them to a dedicated database list for re-engagement so your sales team can follow up with them.

## Prerequisites

✅ A target list to hold pending prospect contacts (e.g., `Follow-up Abandoned Chat`) has already been created in the Database menu.

✅ Your account has access to the WhatsApp instance in the Wajom portal.

---

## 1. Locating the Abandoned Chat Card

1.  Open the **Agent AI** menu in the Wajom portal, then click the **Automation** tab.
2.  Scroll down until you find the **Abandoned Chat** card (_"Customers who do not reply within a certain period are moved to a contact list so you can re-contact them"_).
3.  Click the **Configure** button highlighted in the red box on the card to open the configuration form.

![Menemukan Kartu sembang yang Terabaikan dan butang Atur](/images/agent-ai/abandoned-01-card.png)

1.  If there are no rules yet, click the **+ Add rule** button to create a new rule slot (_Rule 1_).

---

## 2. Configuring Detection and Contact Transfer Rules

The inactivity rule settings form will open below the card:

![borang Konfigurasi Aturan sembang yang Terabaikan](/images/agent-ai/abandoned-02-rule-card.png)

Fill in the following parameters:

1.  **After How Many Hours Without a Reply (Inactivity Limit)**:
2.  Enter the duration of silence to use as the threshold (options range from 1 to 8760 hours, recommended: `2` to `6` hours). If the customer does not reply to the last message within this duration, the system will trigger the contact transfer.
3.  **Move to Destination List**:
4.  Select the target database list that will store these pending prospects (e.g., the `Pending Prospects` or `Sales Team Follow-Up` list).
5.  **Exclude Contacts in This List (Optional)**:
6.  Select contact lists that should not be moved (for example, contacts already marked as `VIP Customers` or `Already Paid` so they are not disrupted).
7.  **Notes (Optional)**:
8.  Add internal context notes for the handling team.
9.  **Remove from Old List When Moved**:
10.  Check this option if you want the contact number to be automatically removed from its previous database list once it is successfully transferred to the destination list.
11.  Click the blue **Save** button.

---

## 3. Enabling the Automation Toggle Switch

1.  On the Automation tab page, check the **Abandoned Chat** card again.
2.  Click the toggle switch button next to the card until its status changes to **Active**.
3.  All prospects who do not continue the conversation will now automatically be gathered into the destination list and ready to be re-contacted using scheduled broadcast campaigns or special offer follow-up sequences.
