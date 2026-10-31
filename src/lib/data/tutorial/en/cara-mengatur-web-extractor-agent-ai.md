---
id: 27
slug: "cara-mengatur-web-extractor-agent-ai"
title: "How to Configure Web Extractor in Agent AI"
description: "Step-by-step guide to connecting Web Extractor for real-time website scraping (e.g., retrieving FAQs from a live website)."
category: "Agent AI"
duration: "5 min"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-web-extractor-agent-ai/"
---

The **Web Extractor** feature in Agent AI allows your virtual assistant to read external website content directly via *real-time scraping* during live WhatsApp chats. This feature is especially powerful if your business information (such as price lists, stock availability, departure dates, or FAQ articles) is frequently updated on your company website, eliminating the need to update your knowledge base manually one by one.

This guide walks you through connecting Web Extractor step by step, using a real-world case study of extracting FAQ data from `https://berangkatinumrah.id/faqs`.

## Prerequisites

> **Tip**: The target website URL is publicly accessible without captchas or restrictive login gates.

> **Tip**: Your account has access to a connected WhatsApp instance on the Wajom portal ([portal.wajom.co](https://portal.wajom.co)).

---

## 1. Selecting Web Extractor on the AI Tool Integration Menu

1. Open the **Agent AI** menu in the Wajom portal ([portal.wajom.co](https://portal.wajom.co)), then click the **Tools** tab.
2. In the bottom **Integrations** section, click the **Add Integration** button.
3. In the data connector selection modal, select the **Scraper - Web Extractor** card highlighted in the red box:

![Selecting Web Extractor Scraper on Connector Modal](/images/agent-ai/web-extractor-01-pilih.png)

---

## 2. Configuring URL Setup & Parameters (Step 1)

The Web Extractor configuration modal opens on **1 Setup URL & Parameters**:

![Web Extractor URL and Parameters Setup Form](/images/agent-ai/web-extractor-02-modal.png)

Fill in the following details:

1. **Integration Name**:
   Give the integration an easily recognizable name, e.g.: `Berangkatin Umrah FAQ`.
2. **Description for AI**:
   Explain when the AI should invoke this tool:
   *Example:*
   > *"Invoke this tool when prospective pilgrims ask general FAQs regarding umrah requirements, passport issuance, vaccination, payment settlements, or hotel facilities from the Berangkatin Umrah website."*
3. **Allowed Hosts (Permitted Domains)**:
   For network security and to prevent the bot from accessing unintended domains, register your official domain (without `https://`):
   ```text
   berangkatinumrah.id
   ```
4. **Website URL Mode & Target URL Template**:
   * Select **Static Page (Fixed URL)** because we are targeting a permanent FAQ page.
     *(Select dynamic mode if using parameter slugs like `{{slug}}`, e.g., for product catalogs `https://mystore.com/products/{{slug}}`).*
   * Enter the full link in the **Target URL Template**:
     ```text
     https://berangkatinumrah.id/faqs
     ```
5. **Timeout & Cache TTL**:
   * **Timeout (ms)**: `10000` (10-second timeout limit for fetching data from the web server).
   * **Cache TTL (seconds)**: `60` seconds (temporarily caches web responses so the bot doesn't overload your website during high chat volume).
6. Click the green button **Continue to JSON Mapper →**.

---

## 3. Step 2: JSON Mapper & AI Scrape

In this second stage, you define the HTML elements to extract and verify the output step by step:

### A. Fetch Sample Page

Ensures the target URL can be reached and rendered by the Wajom server:

![Fetch Sample Page](/images/agent-ai/web-extractor-03-fetch-sample.png)

1. Verify the sample target URL (`https://berangkatinumrah.id/faqs`).
2. Click the red-boxed **Fetch Page** button.
3. The system will load the target HTML and validate the document structure.

---

### B. Auto-AI Mapping Analysis

Leverage artificial intelligence to automatically detect item containers and generate selectors:

![Auto-AI Mapping Analysis](/images/agent-ai/web-extractor-04-auto-ai.png)

1. Enter the wrapper container selector for Q&A items in the **Root/Item Selector** field (e.g., `.faq-item` or `#faqs`).
2. Provide guidance in the **Additional hint for AI** field (e.g., *"Extract umrah FAQ questions and answers"*).
3. Click the blue **Analyze HTML → Generate Mapping JSON** button highlighted in the red box.

---

### C. JSON Mapper (Manual / Edit)

Review or refine extracted data field pairs:

![JSON Mapper Manual and Edit](/images/agent-ai/web-extractor-05-json-mapper.png)

1. Select the data structure type: **Array List of Objects** (since the FAQ page contains repeated question items).
2. Review the field mapping rows:
   * **JSON Key:** Data attribute name for AI (e.g., `pertanyaan` and `jawaban`).
   * **CSS Selector:** Specific HTML element selector (e.g., `h4.faq-question` and `div.faq-answer`).
   * **Attribute:** Text extraction type (`Text`).
3. Click **+ Add Manual Field** if you wish to extract additional columns.

---

### D. Preview JSON Output

Before saving the tool, test data extraction to verify accuracy:

![Preview JSON Output](/images/agent-ai/web-extractor-06-preview-json.png)

1. Click the red-boxed **Run Mapper Test** button.
2. Review the output JSON data in the preview box to ensure questions and answers are extracted cleanly:
   ```json
   [
     {
       "pertanyaan": "Berapa lama masa berlaku paspor untuk daftar umrah?",
       "jawaban": "Paspor wajib berlaku minimal 7 bulan sebelum tanggal keberangkatan."
     },
     {
       "pertanyaan": "Apakah ada syarat vaksinasi khusus?",
       "jawaban": "Wajib vaksin Meningitis dan vaksin Covid-19 dosis lengkap."
     }
   ]
   ```
3. If the data looks accurate, click the green **Add Integration** button in the bottom right corner to save the tool.

---

## 4. Testing Agent AI Response in Playground

Once the integration is saved:

1. Open the [Playground (Test Lab)](/tutorials/simulasi-playground-agent-ai) tab.
2. Send a test message as a prospective customer:
   > *"Assalamu'alaikum, if my passport only has 5 months of validity remaining, can I register for umrah?"*
3. Agent AI will automatically trigger the Web Extractor, fetch live data from `https://berangkatinumrah.id/faqs`, and formulate an accurate answer:
   > *"Wa'alaikumsalam Warahmatullahi Wabarakatuh. According to official Berangkatin Umrah requirements, passport validity must be at least **7 months** before the departure date. Since yours currently has 5 months remaining, we recommend renewing your passport first. Is there anything else we can assist you with? 😊"*
