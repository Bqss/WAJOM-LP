---
id: 12
slug: "cara-integrate-google-form"
title: "How to Integrate Google Forms with Wajom"
description: "Learn how to integrate Google Forms with Wajom for full automation, from form submission to auto-reply and follow-up campaigns."
category: "Integrations"
duration: "15 min"
date: "20 September 2025"
author: "Hamizah Hamdan"
url: "https://wajom.co/tutorial/cara-integrate-google-form/"
---

## Introduction to Google Forms Integration

Integrating Google Forms with Wajom allows you to create complete automation for lead generation and follow-up. When a prospect submits a form, the system will:

-   **Auto-Add to List**: Prospects are automatically added to the Wajom List
-   **Instant Reply**: Automatically send an introductory message to the prospect
-   **Admin Notification**: Notify the admin whenever there is a new lead
-   **Follow-Up Automation**: Trigger an Evergreen Campaign for nurturing

## Benefits of Integration

### ✅ Full Automation

-   Zero manual work after setup
-   24/7 lead capture and response
-   Instant engagement with new prospects

### ✅ Anti-Ban Protection

-   Prospects who submit the form are considered "warm leads"
-   Reduces the risk of being banned because prospects expect messages from us
-   Natural conversation flow

### ✅ Lead Quality

-   Prospects who fill out the form are more qualified
-   Complete data available for personalization
-   Higher conversion rate

## Prerequisites

-   An active Wajom account
-   A prepared Google Form
-   A Google Sheet linked to the form
-   A created Wajom List
-   A setup Evergreen Campaign (optional but recommended)

## Integration Guide

### Step 1: Set Up Wajom List

1. Navigate to [https://portal.wajom.co/auth/whatsapp](https://portal.wajom.co/auth/whatsapp)

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/77429796-0ad2-44d9-84fa-d02503adddf2/user_cropped_screenshot.webp?tl_px=0,0&br_px=1352,947&force_format=jpeg&q=100&width=1120.0)

2. Click “View Details”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/7d88f1be-3307-464a-87ed-5d1d59d13fd9/user_cropped_screenshot.webp?tl_px=0,95&br_px=1352,851&force_format=jpeg&q=100&width=1120.0)

3. Click “List Management”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/57500675-eabe-459b-a6ab-34f4b76515cd/ascreenshot.jpeg?tl_px=0,153&br_px=1352,908&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=692,277)

4. Select the “List” to link with the Google Form. If you don't have a list yet, create one now.

Once the “List” is created, click “Details”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/9aa7ca12-4745-4d05-a634-12b7971faea1/ascreenshot.jpeg?tl_px=0,191&br_px=1351,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=297,283)

5. Click x

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/257f78cb-d18d-4427-9511-544cded070d5/ascreenshot.jpeg?tl_px=0,0&br_px=1352,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=723,234)

6. Click “Add Contact”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/76ead369-e502-40a5-b5d8-8e78fcf96394/user_cropped_screenshot.webp?tl_px=0,0&br_px=1352,755&force_format=jpeg&q=100&width=1120.0)

7. Click “Google Form”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/360e8523-31fb-4b1d-9054-d21a93d91455/ascreenshot.jpeg?tl_px=0,71&br_px=1351,826&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=157,277)

### Step 2: Configure Field Mapping

8. **FYI - Field Mapping** “Name Label” & “WhatsApp Number Label” text in the blank fields must match the text in the "Google Sheet" column headers exactly.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/8fd8f3d9-ce87-4ad9-99f9-e356cb519d3c/user_cropped_screenshot.webp?tl_px=0,95&br_px=1352,851&force_format=jpeg&q=100&width=1120.0)

9. FYI

Refer to Step 10 below.

No 1 - The text in the Google Sheet is “Nama Penuh”

No 2 - “No Whatsapp”

The text must match exactly. If it does not match, Wajom cannot read it. Please be careful!

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/141157fc-43cc-4692-8fdc-484d7ebf2dfb/user_cropped_screenshot.webp?tl_px=0,95&br_px=1351,851&force_format=jpeg&q=100&width=1120.0)

10. The text in Wajom must match the header in the Google Sheet exactly!

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/6549a366-5670-4249-ad4a-05e976073244/user_cropped_screenshot.webp?tl_px=0,95&br_px=1352,851&force_format=jpeg&q=100&width=1120.0)

11. Click “Simpan ke List ini” (Save to this List)

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/ca52d7d4-588c-49a8-85e4-093b77018146/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=667,380)

12. Click “Save”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/7559f8b3-7143-4f19-b458-f020dd4c7c89/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=654,430)

13. Click “Google Form Script” to expand the view

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/7456182b-8f76-4c8b-8d9f-851722252637/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=678,322)

### Step 3: Copy Integration Script

14. Click on the script text

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/b31b85d0-1ef1-4620-a7a7-3b71c65974ab/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=569,297)

15. Copy all the code

Press [[ctrl]] + [[a]] then press ctrl + c

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/f10144a4-71ac-41dc-acf2-fb860c8e1645/ascreenshot.jpeg?tl_px=101,311&br_px=1237,947&force_format=jpeg&q=100&width=1120.0)

16. Open your Google Sheet

Click “Extensions”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/20b48f49-d8a2-4147-86a1-913e969b7b26/File.jpeg?tl_px=0,0&br_px=1351,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=476,19)

### Step 4: Set Up Google Apps Script

17. Click “Apps Script”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/5539216c-850b-4d2d-af36-10cd208106e2/ascreenshot.jpeg?tl_px=0,0&br_px=1352,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=551,145)

18. Click “function”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/a3f15d58-32a4-4ce6-a4e2-86d8ec1e7670/ascreenshot.jpeg?tl_px=0,0&br_px=1351,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=399,132)

19. Click “OK”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/cba016e6-1b83-4469-a32f-7a7fc3c34982/ascreenshot.jpeg?tl_px=0,0&br_px=1352,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=1006,255)

20. Rename the Apps Script project as appropriate. This will help you easily track the purpose of this form.

No 1 - Click “Untitled project” and rename it, e.g., Prospect Form

No 2 - Delete all the existing code shown

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/adbb959b-93c2-48f2-b3e8-fc5ccda67450/user_cropped_screenshot.webp?tl_px=0,0&br_px=1352,760&force_format=jpeg&q=100&width=1120.0)

21. Paste the script copied from Step 15 into the empty area

Press ctrl + v

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/9ca1b148-2db1-4dec-81a3-1fd0df20c454/ascreenshot.jpeg?tl_px=0,0&br_px=1352,760&force_format=jpeg&q=100&width=1120.0)

22. Click “Save project to Drive”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/84f854ed-4e4d-4379-a84b-ff5db7e8b784/ascreenshot.jpeg?tl_px=0,0&br_px=1351,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=432,67)

23. Click “Trigger”

This step ensures you receive notifications whenever new leads arrive or if an error occurs

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/080b4db9-40bf-46da-b4a3-ee652e5c15c7/ascreenshot.jpeg?tl_px=0,0&br_px=1351,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=-3,228)

### Step 5: Set Up Triggers for Automation

24. Click “View Dashboard”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/cffacc84-27c2-4768-a5a8-d5e2170270c9/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=532,471)

25. Click “Add Trigger”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/425c3749-2ea9-4df1-bc24-d036e20db5b5/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=950,540)

26. Click “On open”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/87506229-8e38-4572-9d9d-5ab91a20af07/ascreenshot.jpeg?tl_px=0,191&br_px=1351,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=349,389)

27. Click “On form submit”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/4dd919a8-f1c2-46e4-9df2-166ded518170/ascreenshot.jpeg?tl_px=0,191&br_px=1351,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=228,533)

28. Click “Notify me daily”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/1f8e413b-70b9-465f-9746-a86ea5463432/ascreenshot.jpeg?tl_px=0,0&br_px=1352,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=784,244)

29. Click “Save”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/d1920636-c8a1-4b53-8698-c86f49daafae/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=872,478)

30. Select the email address you want to use to receive notifications

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/0c815414-e4f5-4e87-92f2-9507c957cc17/ascreenshot.jpeg?tl_px=0,0&br_px=912,509&force_format=jpeg&q=100&wat_scale=81&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=642,163)

31. Click “Advanced”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/3fd59811-1a8a-4eb9-9a51-707eee4f8ddf/ascreenshot.jpeg?tl_px=0,88&br_px=912,598&force_format=jpeg&q=100&wat_scale=81&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=59,393)

32. Click “Go to Untitled project (unsafe)”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/1abe7069-2ba1-447c-87a5-695354490fae/ascreenshot.jpeg?tl_px=0,0&br_px=912,693&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=191,731)

33. Click “Allow”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/d205638c-0193-45b7-8e56-de134c89a988/ascreenshot.jpeg?tl_px=0,0&br_px=912,777&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=907,727)

34. Return to the “Apps Script” section to confirm that the trigger configuration is complete

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/25d63e29-c836-4d69-8b8a-1ae8dfc87f4b/user_cropped_screenshot.webp?tl_px=0,95&br_px=1351,851&force_format=jpeg&q=100&width=1120.0)

### Step 6: Set Up Auto-Reply Actions

35. Return to the Wajom platform under the Google Form section

No 1 - Select “Simpan ke List ini” (Save to this List)

No 2 - Click “Add Action”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/2afcf6fd-5669-4d70-b06f-5fa1eeb9abf8/user_cropped_screenshot.webp?tl_px=124,315&br_px=1254,947&force_format=jpeg&q=100&width=1120.0)

36. Select “Send Message to Customer”

This option sends a message to prospects who submit the Google Form

This message will be sent instantly to the prospect as soon as they hit submit. You no longer need to send messages manually

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/7a4d0261-e45d-410f-840a-29ff19300b64/user_cropped_screenshot.webp?tl_px=194,404&br_px=1165,947&force_format=jpeg&q=100&width=971)

37. Type the initial message you want to send to the prospect in the “Enter Your Message” field

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/e01b2ca0-a2ae-4c00-8dfb-8d07b2bd87ca/user_cropped_screenshot.webp?tl_px=190,202&br_px=1161,744&force_format=jpeg&q=100&width=971)

38. Example message sent to prospects right after they submit the form:

"Thank you. I have received the information shared by [First Name]. Shortly, [First Name] will receive the link to join the AUC Champion group."

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/b2279917-f970-4625-986b-7326db658ce2/user_cropped_screenshot.webp?tl_px=111,156&br_px=1240,787&force_format=jpeg&q=100&width=1120.0)

39. Click “Add Action”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/041a4fe3-5d4a-487b-af96-827c13434230/ascreenshot.jpeg?tl_px=0,191&br_px=1351,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=374,527)

40. Click “Action”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/afc86b0b-09c6-47de-b448-8f1af42c90e6/ascreenshot.jpeg?tl_px=0,191&br_px=1351,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=504,458)

41. Click this dropdown.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/4dfa9024-75b7-4f91-b9d3-e8574e00a36f/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=655,475)

42. Select “Kirim Pesan ke Admin” (Send Message to Admin)

This step sends a notification message to the admin whenever a new lead arrives

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/b2d9683d-3a3e-445d-ae8d-13276ebd4d1c/user_cropped_screenshot.webp?tl_px=0,0&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=664,634)

43. Click on the “Admin Phone” section

Enter your personal phone number or the WhatsApp number you monitor regularly so that you receive an instant alert for every new lead

You can add multiple numbers

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/46afe402-8430-4977-8bb3-63da38849511/user_cropped_screenshot.webp?tl_px=107,404&br_px=1077,947&force_format=jpeg&q=100&width=971&wat_scale=86&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=452,168)

44. Click inside the “Enter Your Message” field

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/64395242-7211-44e2-9b08-6214ccdcdb64/ascreenshot.jpeg?tl_px=0,186&br_px=1351,941&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=479,276)

45. Example message:

Praise be to God. New lead: [Nama Penuh] [No Whatsapp]

[ xxxx ] These brackets pull data dynamically from the Google Sheet linked to the Wajom List. Make sure the spelling inside the brackets matches the Google Sheet header exactly.

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/3f5bfdbf-a796-4468-86d8-d8d9e554738b/ascreenshot.jpeg?tl_px=0,72&br_px=1351,827&force_format=jpeg&q=100&width=1120.0)

46. Click “Save”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/615c5542-1981-4f2a-88fe-eeb58deee63f/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=644,523)

47. Always remember to toggle ON to activate the integration from Google Forms to Wajom, and onwards to your WhatsApp and the prospect's WhatsApp

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/bb7114a0-b596-4c8a-bd19-a5243dac3830/ascreenshot.jpeg?tl_px=0,0&br_px=1351,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=377,107)

48. Make sure it is Active

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/5a8a3e90-2487-45a5-95a6-cf15ff5e71dd/ascreenshot.jpeg?tl_px=0,0&br_px=1351,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=399,90)

> **Alert**: Alert! Ensure the "Google Form" integration toggle is switched ON

If not enabled, the Wajom system will not send intro messages automatically

### Step 7: Finalize Integration

49. Click “Save”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/456bf3f0-a678-4462-a5bb-2edcdfacd9e5/ascreenshot.jpeg?tl_px=0,191&br_px=1352,947&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=663,531)

50. Click the “Back” button

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/49098ea8-6a36-4159-a2dc-1a3008f9f62b/ascreenshot.jpeg?tl_px=0,0&br_px=1352,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=1013,86)

51. Example of data successfully saved into the Wajom “List”

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-16/94115110-291b-4bcf-8e8f-bc3e7b6933a5/user_cropped_screenshot.webp?tl_px=0,95&br_px=1352,851&force_format=jpeg&q=100&width=1120.0)

## Tips and Best Practices

### ✅ Do’s

-   Set up your Evergreen Campaign and AI Chat before configuring integration
-   Test the integration with sample data first
-   Use consistent field naming between the form and sheet
-   Monitor notification emails to track performance
-   Back up your script code for safety

### ❌ Don’ts

-   Don't forget to toggle the integration switch ON
-   Don't use special characters in field names
-   Don't skip trigger setup—it is essential for automation
-   Don't test with real customer data during setup

## Troubleshooting

### Common Issues and Solutions

**Integration not working:**

-   Check that the trigger is set up correctly
-   Ensure the field mapping matches between the form and Wajom
-   Verify that the integration toggle is turned ON

**Messages not auto-sending:**

-   Check WhatsApp connection status
-   Check the admin phone number format
-   Verify script permissions in Google Apps

**Data not entering the List:**

-   Ensure column names are an exact match
-   Check Google Sheets connection
-   Verify Wajom API access

## Complete Automation Workflow

### Step 52: Evergreen Campaign Integration

As soon as a prospect submits the form, they can immediately receive follow-up content over several days

Click the green leaf logo to go to "Evergreen Campaign"

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/4709740f-5045-4739-827c-ac0b91123b2f/user_cropped_screenshot.webp?tl_px=0,0&br_px=1352,947&force_format=jpeg&q=100&width=1120.0)

> **Tip**: Tip! Make sure to use both the "Evergreen Campaign" & "Chat AI" features

EC is for automated follow-ups

Chat AI is for automatically replying to direct messages, handling objections, and closing deals even when you are not looking at your phone

### Implementation Example

53. Example of an "Evergreen Campaign" / drip campaign that Kak Miza has configured inside Kak Miza's Wajom

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/d8527a9b-184f-4161-8785-c910b66cecd5/ascreenshot.jpeg?tl_px=0,0&br_px=1352,755&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.png&wat_pad=562,270)

54. Wajom Chat AI helps you close prospects as easily as smiling.

Alhamdulillah… Kak Miza & team effortlessly closed a VIP package sale worth RM1,626.28 with the help of Wajom Chat AI without Kak Miza interrupting the conversation between the prospect and Wajom Chat AI

Kak Miza designed Wajom Chat AI so it doesn't look like a robot

![](https://ajeuwbhvhr.cloudimg.io/https://colony-recorder.s3.amazonaws.com/files/2025-09-07/0bb76eb3-7658-45b1-a555-276930764d7f/user_cropped_screenshot.webp?tl_px=0,0&br_px=1351,585&force_format=jpeg&q=100&width=1120.0)

## Next Steps

Once the integration is successful:

1.  **Test End-to-End**: Submit a test form and verify all automations are working
2.  **Setup Evergreen Campaign**: For automatic follow-ups (Tutorial 5)
3.  **Configure Chat AI**: To handle inquiries automatically (Tutorial 7)
4.  **Monitor Performance**: Track conversion rates and optimize

## Help and Support

If you encounter issues with the Google Forms integration:

-   Check Google Apps Script permissions
-   Verify the field mapping configuration
-   Test with sample data first
-   Contact Wajom support for technical assistance

> **Tip**: Tip! Before configuring the Google Forms Integration with Wajom, you should have already finished setting up "Evergreen Campaign" & "Chat AI"
