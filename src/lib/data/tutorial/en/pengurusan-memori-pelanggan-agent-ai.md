---
id: 19
slug: "pengurusan-memori-pelanggan-agent-ai"
title: "How to Manage & Delete Agent AI Customer Memory"
description: "Understand two-layer conversation memory, find customer data, correct facts and delete agent memory."
category: "Agent AI"
duration: "3 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/pengurusan-memori-pelanggan-agent-ai/"
---

Agent AI features an intelligent two-layer memory architecture: 1. **Short-Term Memory**: Agent AI reads the **last 10 messages** directly from the WhatsApp chat window to understand the ongoing conversation. 2. **Long-Term Memory (Customer Facts)**: Messages older than the last 10 chats are automatically summarized and extracted into concise facts (such as nicknames, product preferences, order statuses, and past appointments). This summary is stored in the **Memory** tab and automatically updated a few minutes after the conversation goes quiet.

When a customer requests their conversation data to be erased, or when past transactional context is no longer relevant, you can correct facts or make the agent forget the customer.

## Prerequisites

✅ The customer has previously interacted with Agent AI multiple times so that memory facts have been generated.

✅ You have administrative access to the Agent AI dashboard on the Wajom portal.

---

## 1. Understanding How Customer Memory Works

1.  Go to the **Agent AI** menu in the Wajom portal.
2.  In the top navigation bar, click the **Memory** tab.
3.  At the top of the page, view the explanation card labeled **How it works**:

![Penjelasan Cara Kerja Memori Pelanggan pada Tab Memori](/images/agent-ai/memori-01-cara-kerja.png)

> **Tip**: Broadcast campaigns, drip sequence messages, and manual replies typed directly by admins in the WhatsApp application are still factored into the agent's context. This ensures that Agent AI understands what the customer is responding to.

---

## 2. Searching for Customer Profiles and Memories

1.  On the **Customers** card, find the search field in the top right corner labeled **Search name, number, or facts...**.
2.  Enter the customer's WhatsApp number (e.g., `6281234567890`) or contact nickname (e.g., `Budi Santoso`).
3.  The system will filter and display the relevant customer memory card along with the following details:
4.  - **Contact Number & Name**.
5.  - **Quick Fact List**: Key pieces of information the AI remembers from past conversations (e.g., preferred product variants, office address, last purchase date).
6.  - **Latest Situation**: Notes on the customer's most recent context (e.g., currently waiting for item restock).
7.  - **Last Updated**: When the memory was last extracted by the system.

![Pencarian Profil dan Fakta Memori Pelanggan](/images/agent-ai/memori-02-cari-pelanggan.png)

---

## 3. Correcting Facts or Deleting Memory (Forgetting a Customer)

On each listed customer profile card:

### Correcting Facts (Edit Button)

1. If a fact has changed (for example, the customer changed their shipping address or updated their clothing size), click the **Edit** button. 2. Edit the incorrect fact statement or add a new note. 3. Click save. Agent AI will use the updated information in subsequent conversations.

### Deleting Memory (Forget Button)

1. If a customer requests their data to be cleared, or if you want to start a new interaction from scratch without any past history, click the red **Forget** button. 2. The system will delete the entire fact summary and latest situation for that customer from the AI's long-term memory database. 3. After it is deleted, Agent AI will handle the next interaction as a new customer without any preconceptions from past conversations.

---

## 4. Resetting Conversation History in the Playground Simulation

If you are testing a new conversation scenario in the **Testing** (_Playground_) tab and want to clear the simulation chat bubbles:

1.  Open the **Testing** tab in the Agent AI navigation bar.
2.  In the top right corner of the screen, locate the **Restart** button.
3.  Click the **Restart** button to clear the entire simulation chat history and start a new session with a clean context.

![Restart button on Playground Testing Page](/images/agent-ai/playground-01-simulasi.png)
