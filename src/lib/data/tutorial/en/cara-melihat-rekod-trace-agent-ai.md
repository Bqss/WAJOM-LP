---
id: 18
slug: "cara-melihat-rekod-trace-agent-ai"
title: "How to View Agent AI Trace Records & Analytics"
description: "Inspect every message processed by Agent AI, filter reply statuses in Trace and read token metrics in Analytics."
category: "Agent AI"
duration: "4 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-melihat-rekod-trace-agent-ai/"
---

Agent AI is equipped with a transparent monitoring system that logs every incoming message from WhatsApp customers. Through the **Trace** and **Analytics** features, you can see exactly which messages were successfully answered, which were intentionally skipped, the reasons for fallback messages, and the detailed breakdown of token balance deducted for each response.

## Prerequisites

✅ Agent AI is active or has previously received incoming messages from customers.

✅ Your account has access to the WhatsApp instance in the Wajom portal.

---

## 1. Navigate to the Trace Menu Page

1.  Open the Wajom portal at [portal.wajom.co](https://portal.wajom.co) and log in to your WhatsApp instance.
2.  In the top main navigation bar of Agent AI, click the **Trace** tab.

![Navigate to Trace Menu in Agent AI](/images/agent-ai/trace-00-navigasi.png)

1.  The system will open the message activity log page with a green **Live** status indicator, showing that message monitoring is running in real time.

---

## 2. Filter Message Records by Status

At the top of the Trace page, use the filter panel to narrow down customer interaction records:

![Message Record Filter Bar on Trace Menu](/images/agent-ai/trace-01-filter.png)

1.  **Status**: Select the reply condition you want to audit:
2.  - **All**: Displays all incoming messages without exception.
3.  - **Replied**: Messages successfully answered normally by the AI model.
4.  - **Fallback reply**: Messages redirected to a fallback message because the AI could not find an answer or encountered an issue.
5.  - **Skipped**: Messages intentionally skipped by the agent (for example, due to operating hours rules, contact exclusion lists, or pause keywords).
6.  - **Failed**: Messages that encountered technical issues during the delivery process.
7.  - **Stopped**: Conversations temporarily halted by control keywords or human admin intervention.
8.  - **Processing**: Messages currently queued for processing by the AI model.
9.  **Contact**: Enter a specific customer's WhatsApp number (example: `08123456789`) to view records specifically for that number.
10.  **From date** & **To date**: Set the time range for reviewing message records.
11.  Click the blue **Apply** button to apply the filter, or click **Clear filter** to reset the search.

---

## 3. Review Log Details and Tokens Used

Below the filter panel, the **Trace** log table presents transparent details of message interactions across several columns:

![Rincian Tabel Log mesej Masuk dan Konsumsi Token](/images/agent-ai/trace-02-log.png)

Each record row displays the following details: - **Time**: The exact hour and second the message was received by the Wajom server. - **Contact**: The WhatsApp number of the customer who sent the message. - **Status**: The processing status label (_Replied_, _Fallback reply_, or _Skipped_). - **Reason / Incoming Message**: The original sentence typed by the customer or the reason the bot skipped the message. - **Reply Time**: The bot's response speed duration (latency) in seconds (for example, `1.8s`). - **Tokens**: The amount of AI token balance deducted to generate that reply.

> **Tip**: Click on any conversation row in the Trace table to open the details side drawer. There, you can read the reasoning context, system prompt, and memory records used by the AI when formulating the answer.

---

## 4. Analyze Performance on the Analytics Tab

To view a comprehensive overview of business performance statistics over a specific period:

1.  Open the **Analytics** tab in the Agent AI navigation bar.
2.  Select the analysis time range in the top-right corner: **24 hours**, **7 days**, or **30 days**.

![Laporan Kinerja sembang dan Pemakaian Saldo Token pada Tab Analitik](/images/agent-ai/trace-03-analitik.png)

### Chat Summary Metrics:

- **Total Handled**: The cumulative number of conversations received by your business WhatsApp number. - **Replied vs Skipped vs Failed**: The effectiveness ratio of the bot in serving customers automatically. - **Average Reply Time**: The average duration taken by the bot to respond to a conversation. - **Unique Customers & New Customers**: The number of unique individual contacts interacting with your assistant.

### Token Balance Usage Breakdown:

- **Total Balance Deducted**: The accumulated tokens used across all paid replies. - **Average per Reply**: The average token consumption per single reply message (helps project future token top-up needs). - **Cache Hit**: The percentage of system prompts and knowledge base content successfully read from the server cache memory. A higher cache hit rate results in greater token cost savings. - **Token Components**: Detailed quota breakdown between _Input_, _Cached input_, _Output_, and _Reasoning_.
