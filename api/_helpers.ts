export interface TimelineEvent {
  id: string
  title: string
  book: string
  scripture: string
  approximateDate: string
  dateValue: number
  summary: string
  category: string
}

export function buildEnhancePrompt(
  event: TimelineEvent,
  enhancementType: 'detailed' | 'theological' | 'historical'
): string {
  const base = `Event: "${event.title}"
Book: ${event.book}
Scripture: ${event.scripture}
Date: ${event.approximateDate}

Pre-written summary: ${event.summary}`

  if (enhancementType === 'detailed') {
    return `${base}

Please write 2–3 rich, engaging paragraphs about this Biblical event. Cover:
1. The vivid narrative details — what happened, who was involved, the human drama
2. The theological significance — what this event reveals about God's character and purposes
3. Its connections to the broader story of redemption and how it points forward

Write in a scholarly yet accessible tone. Do not use bullet points — write flowing paragraphs only.`
  }

  if (enhancementType === 'theological') {
    return `${base}

Please write 2–3 focused paragraphs exploring the theological themes of this event. Cover:
1. What this event reveals about God — His character, attributes, and ways of working
2. Key theological concepts illustrated (covenant, faith, judgment, mercy, sovereignty, etc.)
3. How this event fits within the metanarrative of Scripture — its typological or prophetic significance

Write in a scholarly, reverent tone. Do not use bullet points — write flowing paragraphs only.`
  }

  return `${base}

Please write 2–3 paragraphs situating this event in its ancient Near Eastern historical and archaeological context. Cover:
1. The historical setting — what was happening in the surrounding world at this time
2. Archaeological or extrabiblical evidence related to this event or period
3. How understanding the historical context deepens our appreciation of the Biblical account

Write in a scholarly yet accessible tone. Do not use bullet points — write flowing paragraphs only.`
}
