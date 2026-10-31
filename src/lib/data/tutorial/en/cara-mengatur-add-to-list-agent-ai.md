---
id: 23
slug: "cara-mengatur-add-to-list-agent-ai"
title: "How to Configure Add to Contact List"
description: "Configure automation that adds customer numbers to the Wajom contact database based on conversation situations."
category: "Agent AI"
duration: "3 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-add-to-list-agent-ai/"
---

The **Add to contact list** (_Add to list_) feature allows the AI Agent to intelligently segment customers into specific contact databases in Wajom automatically when conversation conditions are met. For example, customers who have just made an inquiry are added to the _"Cold Leads"_ list, while customers who complete a transaction are added to the _"New Customers"_ list.

This collected database list can later be used for promotional broadcast campaigns, sequential messaging (_drip campaigns_), or retargeting.

## Prerequisites

✅ You have at least one **Contact List** under the **Database** > **Contact List** menu in Wajom.

✅ Your account has access to a WhatsApp instance in the Wajom portal.

---

## 1. Locating the Add to Contact List Card

1.  Open the **AI Agent** menu in the Wajom portal, then click the **Automation** tab.
2.  Scroll down until you find the **Add to contact list** card (_"the agent saves the customer to a specific contact list when conditions are met, for example after placing an order"_).
3.  Click the **Configure** button marked with a red box on the card to open the configuration form.

![Menemukan Kartu Masukkan ke senarai kenalan dan butang Atur](/images/agent-ai/add-list-01-card.png)

1.  If there are no rules yet, click the **+ Add rule** button to create a new rule (_Rule 1_).

---

## 2. Defining When the Customer Is Added

In the **When customer is added** field, describe the conversation condition or scenario using plain natural language. The AI model will read this description when processing customer chats to determine when the contact should be added to the list:

![ruangan Input Kapan Pelanggan Dimasukkan](/images/agent-ai/add-list-02-kapan.png)

_Example Trigger Sentences:_ - _"customer has confirmed the order and sent proof of payment"_ - _"customer is interested in the Arabica coffee product and asked for the bank account number"_ - _"prospective pilgrim inquires about the departure schedule for the budget Umrah package"_

---

## 3. Selecting the Target Contact List

From the **Target contact list** dropdown, select the database list in Wajom that will store the customer's contact number:

![Pemilihan Dropdown senarai kenalan Tujuan](/images/agent-ai/add-list-03-tujuan.png)

1.  Click the dropdown menu and select your list name (for example, the `Coffee Buyers`, `Webinar Leads`, or `VIP Customer` list).
2.  Every time the condition in step 2 is met, the customer's WhatsApp number will automatically be saved to this list.

---

## 4. Adding Additional Saved Data (Optional)

If you want the AI Agent to extract specific data from the customer chat (such as a shipping address, customer name, or item size):

![Bagian Penambahan Data Tambahan Kontak](/images/agent-ai/add-list-04-extra.png)

1.  Click the **+ Add data** button.
2.  Enter the custom field name (_custom field_ key) and specify where the value should be retrieved from (for example, extracted from customer messages or AI intent).
3.  This information will automatically be saved to complete the customer's contact profile in the Wajom database.

---

## 5. Setting Contact Update Options

At the bottom of the form, note the **Update data if contact already exists** checkbox:

![Data Update Options if Contact Already Exists](/images/agent-ai/add-list-05-checkbox.png)

-   **Checked**: If the customer's number is already registered in the list, their profile data will be updated with the latest information from the current conversation.
-   **Unchecked**: If the number already exists in the list, the existing data will be preserved and the bot will make no changes.

---

## 6. Saving the Configuration and Enabling Automation

1.  Click the blue **Save** button on the action bar in the lower right corner of the form.

![Menyimpan Konfigurasi Aturan Kontak](/images/agent-ai/add-list-06-save.png)

1.  Once saved, review the **Add to contact list** card again.
2.  Turn on the toggle switch on the right side of the card until it turns blue (**Active**).
3.  From now on, whenever a customer meets the conversation criteria, their number will automatically be added directly to the target database list.
