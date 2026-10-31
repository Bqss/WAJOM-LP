import { metrics as metricsMs, problems as problemsMs, shifts as shiftsMs, pillars as pillarsMs, personas as personasMs, inclusions as inclusionsMs, faqs as faqsMs, promises as promisesMs } from './landing.ms';

export const metrics = [
	{ ...metricsMs[0], label: 'More prospects' },
	{ ...metricsMs[1], label: 'Automated replies' },
	{ ...metricsMs[2], label: 'Active leaders' },
	{ ...metricsMs[3], label: 'Satisfaction rate' }
];

export const problems = [
	{ ...problemsMs[0], title: 'Manual follow-ups are exhausting', body: 'Hundreds of prospects need individual follow-up every day. Quality leads still slip away while the downline goes untouched.' },
	{ ...problemsMs[1], title: 'Team training is inconsistent', body: 'There is not enough time to teach everyone one by one. Without a system, every team member learns a different version.' },
	{ ...problemsMs[2], title: 'The same questions, every day', body: 'Leaders spend the day handling basic questions. Strategy, coaching and team development are put on hold.' },
	{ ...problemsMs[3], title: 'The database is scattered', body: 'Some contacts are in Excel, some in a phone and some in a notebook. Team progress cannot be read clearly.' },
	{ ...problemsMs[4], title: 'The business is hard to grow', body: 'A bigger team should mean more sales. Without automation, adding team members only adds more work.' },
	{ ...problemsMs[5], title: 'The name list has run dry', body: 'When leaders do not know where to find quality leads, team members gradually stop trying.' }
];

export const shifts = [
	{ ...shiftsMs[0], label: 'Time', was: '80% of time spent on admin work', now: '80% of time spent on leadership and strategy' },
	{ ...shiftsMs[1], was: 'Manual, inconsistent and easy to miss', now: 'Automated and consistent, 24 hours a day' },
	{ ...shiftsMs[2], label: 'Duplication', was: 'Every team member works their own way', now: 'One JSON file, the same system for the whole team' },
	{ ...shiftsMs[3], was: 'Prospects are lost because replies are slow', now: 'Instant replies even when the laptop is closed' },
	{ ...shiftsMs[4], label: 'Scale', was: 'The system stalls as prospects increase', now: '10 to 10,000 prospects with the same workload' },
	{ ...shiftsMs[5], label: 'Energy', was: 'Burnout from repetitive work', now: 'Focus on growth, not admin work' }
];

export const pillars = [
	{ ...pillarsMs[0], body: 'Send unlimited follow-up content to prospects and teams without daily setup. Set it once and Wajom keeps sending non-stop.', points: ['Non-stop automated follow-up', 'Personal and group WhatsApp', 'Unlimited prospects'], alt: 'Wajom dashboard showing a 30-day drip campaign timeline and delivery analytics' },
	{ ...pillarsMs[1], body: 'AI that writes in your top leader style: answers questions, handles objections and takes prospects through closing.', points: ['Top leader response style', 'Fast objection handling', 'High-ticket closing'], alt: 'Wajom AI Chat dashboard replying to several WhatsApp customer conversations' },
	{ ...pillarsMs[2], body: 'The team enters the leader dashboard and copies settings without changing usernames or passwords. Leaders can review and fix team settings.', points: ['Controlled dashboard access', 'Copy leader settings in one click', 'Team review and coaching'], alt: 'Campaign settings duplicated from one leader account to 50 downline accounts' }
];

export const personas = [
	{ ...personasMs[0], name: 'MLM Leader', body: 'New and experienced leaders who want automated follow-up across the entire team.', tags: ['Recruitment automation', 'Consistent training', 'Team duplication'], alt: 'An MLM leader presenting strategy to a team in a meeting room' },
	{ ...personasMs[1], name: 'Real Estate Agency Leader', body: 'Manage an agent team with a standardised client follow-up process.', tags: ['Lead nurturing', 'Client follow-up', 'Performance tracking'], alt: 'A real estate agency leader holding a phone in front of a property development model' },
	{ ...personasMs[2], name: 'Insurance Team Leader', body: 'Automate client follow-up and training systems for junior agents.', tags: ['Policy follow-up', 'Agent training', 'Client retention'], alt: 'An insurance team leader reviewing policy documents at a desk' },
	{ ...personasMs[3], name: 'Gold Investment Leader', body: 'Manage investors and automate education for every prospect.', tags: ['Investor education', 'Market updates', 'Knowledge sharing'], alt: 'A gold investment leader inspecting gold bars on a desk' }
];

export const inclusions = [
	{ ...inclusionsMs[0], title: 'Live Zoom class access', body: 'Direct guidance on setting up AI Chat and automated closing.' },
	{ ...inclusionsMs[1], title: '1.5M free AI tokens', body: 'Worth RM150, transferred directly to your Wajom account.' },
	{ ...inclusionsMs[2], title: 'Class WhatsApp group', body: 'Zoom notifications and ongoing coaching discussions.' },
	{ ...inclusionsMs[3], title: '1-on-1 assistance', body: 'Account setup support before class begins.' }
];

export const faqs = [
	{ ...faqsMs[0], q: 'How long does it take to set up Wajom?', a: 'You can start using our automation system in 15 minutes. The support team will guide you step by step until everything runs smoothly.' },
	{ ...faqsMs[1], q: 'Is Wajom safe to use with WhatsApp Business?', a: 'Yes. Wajom follows WhatsApp guidelines and uses the official WhatsApp Business API. Thousands of business owners use it without issues.' },
	{ ...faqsMs[2], q: 'Can I customise messages and campaigns for my business?', a: 'Completely. You control every message, campaign flow and brand detail: set the tone of voice, add your company logo and build industry-specific campaigns.' },
	{ ...faqsMs[3], q: 'What if I am not tech-savvy?', a: 'Wajom is designed for everyone. The interface is drag-and-drop, with complete training and 24/7 support throughout the journey.' },
	{ ...faqsMs[4], q: 'Is there a trial period or money-back guarantee?', a: 'Yes. We offer a 30-day money-back guarantee. If you are not satisfied within 30 days, we refund 100% without questions.' },
	{ ...faqsMs[5], q: 'How many prospects can I handle?', a: 'There is no limit. The system scales with your business, from 100 to 100,000 prospects with the same efficiency.' }
];

export const promises = [
	{ ...promisesMs[0], text: '30-day money-back guarantee' },
	{ ...promisesMs[1], text: 'No upfront commitment' },
	{ ...promisesMs[2], text: '1-on-1 support' }
];
