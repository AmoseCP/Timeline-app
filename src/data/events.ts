import type { TimelineEvent } from '../types'

const rawEvents: TimelineEvent[] = [
  {
    id: 'crossing-jordan',
    title: 'Crossing the Jordan River',
    book: 'Joshua',
    scripture: 'Joshua 3:1–17',
    approximateDate: '~1406 BCE',
    dateValue: -1406,
    category: 'conquest',
    summary:
      'After forty years of wilderness wandering, Israel stands at the threshold of the Promised Land as the Jordan River runs at flood stage. God commands the priests bearing the Ark of the Covenant to step into the rushing water, and miraculously the waters halt upstream at Adam, leaving the riverbed dry for the entire nation to cross. This spectacular miracle deliberately echoes the Red Sea crossing, marking Joshua as Moses\'s true successor and inaugurating a new era for God\'s people. Twelve stones are taken from the riverbed as a memorial, ensuring that future generations would remember the day the LORD brought Israel into the land He had sworn to their ancestors. The crossing is a defining moment of covenant faithfulness — God\'s promises, deferred for a generation of unbelief, are now gloriously fulfilled.',
  },
  {
    id: 'fall-jericho',
    title: 'The Fall of Jericho',
    book: 'Joshua',
    scripture: 'Joshua 6:1–27',
    approximateDate: '~1406 BCE',
    dateValue: -1406,
    category: 'conquest',
    summary:
      'Jericho, the first fortified city of Canaan, falls not through military strategy but through an act of radical, liturgical obedience. God commands Israel to march silently around the city once a day for six days, with seven priests blowing ram\'s-horn trumpets before the Ark; on the seventh day they circle seven times, the priests give a great blast, and the people shout. At that moment the walls of Jericho collapse outward, and Israel takes the city under the ban of destruction. Only Rahab the Canaanite prostitute and her household are spared, because she had hidden the Israelite spies and tied a scarlet cord in her window — a cord that echoes the Passover blood and foreshadows redemption coming to unexpected recipients. The fall of Jericho establishes the theological pattern for the entire conquest: victory belongs to the LORD, and Israel\'s role is faith-filled obedience rather than military might.',
  },
  {
    id: 'conquest-canaan',
    title: 'Conquest of Canaan',
    book: 'Joshua',
    scripture: 'Joshua 10–11',
    approximateDate: '~1405–1400 BCE',
    dateValue: -1405,
    category: 'conquest',
    summary:
      'Following the southern and northern campaigns described in Joshua 10–11, Israel systematically dismantles the military power of Canaan\'s city-states. During the pivotal battle at Gibeon, God rains great hailstones on the fleeing Amorite coalition, and Joshua prays for the sun to stand still — an act of cosmic cooperation with Israel\'s war that the text says has no parallel before or since. The northern campaign against the coalition led by Jabin of Hazor similarly ends in decisive victory, with the Israelites burning the great fortified city of Hazor. While the conquest is presented as sweeping, Joshua 13 will later note significant areas still unconquered, showing that full possession of the land awaited continued faithfulness. The campaigns fulfil ancient promises made to Abraham, Isaac, and Jacob, demonstrating that divine purpose moves steadily forward despite centuries of waiting.',
  },
  {
    id: 'division-land',
    title: 'Division of the Promised Land',
    book: 'Joshua',
    scripture: 'Joshua 13–21',
    approximateDate: '~1398 BCE',
    dateValue: -1398,
    category: 'conquest',
    summary:
      'With the major military campaigns complete, Joshua oversees the careful allotment of Canaan among the twelve tribes by lot — a process understood as divinely guided rather than humanly calculated. Specific territorial boundaries are drawn for each tribe, with Levi receiving no territorial inheritance since the LORD Himself is their portion, and the priestly tribe instead receiving designated cities throughout all Israel. The aged Caleb receives Hebron as his inheritance, a reward for his wholehearted faithfulness at Kadesh-Barnea forty-five years earlier, demonstrating that God honors long-delayed faithfulness. Cities of refuge are established throughout the land so that anyone guilty of accidental manslaughter can flee for protection from the avenger of blood. The careful enumeration of boundaries communicates theologically that every tribe, every family, has a place in God\'s gift — the land is not an abstraction but a concrete inheritance with real borders and real towns.',
  },
  {
    id: 'joshua-farewell',
    title: "Joshua's Farewell Address",
    book: 'Joshua',
    scripture: 'Joshua 24:1–28',
    approximateDate: '~1375 BCE',
    dateValue: -1375,
    category: 'conquest',
    summary:
      'At Shechem — the place where God first appeared to Abraham in Canaan and where Jacob buried his household idols — the aging Joshua gathers all Israel for a solemn covenant renewal ceremony. He rehearses the entire sweep of redemptive history from Abraham through the conquest, grounding the people\'s identity entirely in what God has done, not what they have achieved. With prophetic urgency, Joshua challenges Israel to "choose this day whom you will serve," whether the gods of Mesopotamia, the gods of the Amorites, or the living God of the covenant. The people three times affirm their commitment to the LORD, and Joshua warns them that God is holy and jealous and will judge infidelity — a warning the book of Judges will show was not taken seriously. Joshua erects a great stone under the oak at Shechem as a witness to the covenant, creating a monument of accountability that will silently testify against any future apostasy.',
  },
  {
    id: 'deborah-barak',
    title: 'Deborah and Barak Defeat Sisera',
    book: 'Judges',
    scripture: 'Judges 4–5',
    approximateDate: '~1237 BCE',
    dateValue: -1237,
    category: 'judges',
    summary:
      'After twenty years under the brutal oppression of Jabin king of Canaan and his general Sisera — who commands nine hundred iron chariots — Israel cries out to God, and the prophetess-judge Deborah rises to lead. She summons the commander Barak and delivers God\'s battle orders: march to Mount Tabor and draw out Sisera\'s forces, for God will deliver them into Israel\'s hands. Barak agrees only if Deborah accompanies him, and she grants his request while prophesying that the honor of the final blow will go to a woman. The LORD throws Sisera\'s chariot army into a panic — the Kishon River floods, miring the iron chariots in mud — and Sisera flees on foot, only to be killed by Jael the Kenite woman who drives a tent peg through his temple while he sleeps. The triumphant Song of Deborah in Judges 5, one of the oldest Hebrew poems, celebrates God\'s cosmic intervention in the battle and stands as a masterpiece of ancient Israelite literature.',
  },
  {
    id: 'gideon-victory',
    title: "Gideon's Three Hundred",
    book: 'Judges',
    scripture: 'Judges 7:1–25',
    approximateDate: '~1191 BCE',
    dateValue: -1191,
    category: 'judges',
    summary:
      'Gideon assembles thirty-two thousand soldiers to face the Midianite horde that covers the valley like locusts, but God systematically reduces his army to just three hundred men — first dismissing the fearful twenty-two thousand, then winnowing through a water-drinking test — specifically so that Israel cannot boast that her own hand saved her. Armed only with trumpets, empty jars, and torches, Gideon\'s three hundred surround the Midianite camp at night, simultaneously smashing their jars, blowing their trumpets, and shouting, "A sword for the LORD and for Gideon!" The Midianites panic in the darkness and turn their swords on one another, then flee, and Israel pursues and destroys the remaining army and its kings. The episode enshrines one of the Bible\'s most repeated theological principles: God delights to accomplish great things through small and unlikely instruments so that glory returns undivided to Him. Gideon\'s later decline into idolatry (Judges 8) casts a shadow over this magnificent victory, illustrating the persistent fragility of Israel\'s covenant faithfulness.',
  },
  {
    id: 'jephthah-vow',
    title: "Jephthah's Tragic Vow",
    book: 'Judges',
    scripture: 'Judges 11:1–40',
    approximateDate: '~1143 BCE',
    dateValue: -1143,
    category: 'judges',
    summary:
      'Jephthah, the illegitimate son of Gilead driven away by his half-brothers, is recalled in crisis when Ammon threatens Israel, and he negotiates skillfully before resorting to battle. Before the decisive engagement, however, he makes a rash vow: if God gives him victory, whatever first comes through his door to meet him will be offered as a burnt offering. When he returns victorious, it is his only daughter who comes out dancing with tambourines, and Jephthah tears his clothes in anguish at the weight of his own words. Scholars have long debated whether Jephthah\'s vow was literally fulfilled or transformed into his daughter\'s perpetual virginity; the text\'s studied ambiguity seems designed to horrify the reader into reflection. The story serves as a dark portrait of what happens when Israel\'s leaders import the transactional religion of the surrounding nations into their relationship with the covenant God who never demanded such terrible vows.',
  },
  {
    id: 'samson-exploits',
    title: 'Samson and the Philistines',
    book: 'Judges',
    scripture: 'Judges 13–16',
    approximateDate: '~1118 BCE',
    dateValue: -1118,
    category: 'judges',
    summary:
      'Samson is the most paradoxical of the judges — consecrated as a Nazirite from birth, visited by the Spirit of God with supernatural strength, yet perpetually entangled with Philistine women and driven by personal vendettas rather than national liberation. His exploits are almost comically outlandish: killing a lion with his bare hands, slaughtering thirty men for their clothes, catching three hundred foxes to burn the Philistine fields, killing a thousand men with a donkey\'s jawbone. When he falls for Delilah and eventually discloses that his uncut hair is the sign of his Nazirite consecration, the Philistines shave him, blind him, and set him to grinding in the prison. In his final act, the humiliated and sightless Samson prays for strength one last time, pushes down the pillars of the Philistine temple at Gaza, and kills more Philistines in his death than in his life. His story is a tragedy of wasted potential that serves as the climax of Judges\' downward spiral, pointing to the desperate need for a true king who would rule not by impulse but by covenant wisdom.',
  },
  {
    id: 'ruth-naomi',
    title: "Ruth's Loyalty to Naomi",
    book: 'Ruth',
    scripture: 'Ruth 1–4',
    approximateDate: '~1100 BCE',
    dateValue: -1100,
    category: 'transition',
    summary:
      'Set against the dark backdrop of the Judges period, the book of Ruth is a luminous novella about covenant loyalty (hesed) operating through ordinary, faithful human lives. Naomi, widowed and bereft of both sons in Moab, releases her two daughters-in-law to return to their own families; but Ruth refuses with one of the most celebrated declarations of loyalty in all literature: "Where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God." In Bethlehem, Ruth gleans in the fields of the wealthy kinsman-redeemer Boaz, whose character of generous integrity mirrors the divine hesed that threads through the story. Boaz fulfills the levirate duty, marrying Ruth and redeeming Naomi\'s family land, and their son Obed becomes the grandfather of David. The genealogy closing the book reveals the stunning theological point: the ancestry of Israel\'s greatest king runs through a Moabite woman who chose the covenant God of Israel — a quiet but radical declaration that God\'s redemption overflows every ethnic and national boundary.',
  },
  {
    id: 'birth-samuel',
    title: 'Birth and Call of Samuel',
    book: '1 Samuel',
    scripture: '1 Samuel 1–3',
    approximateDate: '~1105 BCE',
    dateValue: -1105,
    category: 'united-monarchy',
    summary:
      'Hannah, barren and provoked by her rival Peninnah, pours out her anguish before the LORD at Shiloh with such intensity that Eli the priest mistakes her silent, lip-moving prayer for drunkenness. She vows to dedicate any son given to her back to the LORD for his entire life, and God opens her womb; Samuel is born and weaned, then brought to the tabernacle at Shiloh to serve under Eli. In the silence of the sanctuary, while Eli\'s corrupt sons exploit the worshippers and the word of the LORD is rare, the young Samuel hears his name called three times in the night. Eli finally instructs him to answer, "Speak, LORD, for your servant hears," and God delivers a devastating oracle of judgment against Eli\'s house. Samuel\'s birth and call mark the pivotal transition from the chaotic era of the judges to the age of the monarchy, with Samuel functioning as prophet, priest, and judge — the last of one era and the inaugurator of another.',
  },
  {
    id: 'ark-captured',
    title: 'The Ark Captured by Philistines',
    book: '1 Samuel',
    scripture: '1 Samuel 4:1–22',
    approximateDate: '~1080 BCE',
    dateValue: -1080,
    category: 'united-monarchy',
    summary:
      'After a disastrous initial defeat at the hands of the Philistines, Israel commits the catastrophic theological error of treating the Ark of the Covenant as a magical talisman and bringing it into battle. The result is catastrophic: thirty thousand Israelite soldiers fall, Eli\'s wicked sons Hophni and Phinehas are killed on the same day as prophesied, and the Ark itself is captured by the Philistines. When the news reaches the ninety-eight-year-old Eli, he falls backward off his seat and dies of a broken neck, and his daughter-in-law, dying in childbirth, names her son Ichabod — "Where is the glory?" — declaring that the glory has departed from Israel. Yet the story immediately pivots to dark comedy: the captured Ark, placed in the Philistine temple, causes Dagon\'s idol to fall prostrate before it twice, and the Philistine cities that host the Ark are afflicted with tumors until they are desperate to return it. The episode teaches that the LORD cannot be manipulated, but His sovereignty is absolute even over those who would humiliate His name.',
  },
  {
    id: 'saul-anointed',
    title: 'Saul Anointed as First King',
    book: '1 Samuel',
    scripture: '1 Samuel 10:1–27',
    approximateDate: '~1050 BCE',
    dateValue: -1050,
    category: 'united-monarchy',
    summary:
      "Israel's demand for a king like the surrounding nations is, as God tells Samuel, fundamentally a rejection of the LORD\'s own kingship — yet God graciously works through and within Israel\'s flawed request. God directs Samuel to Saul, a Benjaminite of striking physical stature, and Samuel privately anoints him with oil and delivers prophetic signs to confirm the divine choice. At the public assembly at Mizpah, Saul is selected by lot from all the tribes — the divinely guided lot confirming the private anointing — yet when he is called forward, he is found hiding among the baggage. Initially modest and spiritually energized, Saul begins his reign with a tremendous victory over the Ammonites that wins him broad national support. Sadly, his story becomes one of increasing disobedience, self-justification, and paranoid decline — a cautionary tale about the danger of trusting in human institutions rather than in the God who appointed them.",
  },
  {
    id: 'david-goliath',
    title: 'David Defeats Goliath',
    book: '1 Samuel',
    scripture: '1 Samuel 17:1–58',
    approximateDate: '~1025 BCE',
    dateValue: -1025,
    category: 'united-monarchy',
    summary:
      'For forty days the Philistine champion Goliath — standing over nine feet tall in full battle armor — taunts the armies of Israel with his daily challenge for single combat, while the Israelite army cowers in fear. Young David, sent by his father to bring provisions to his brothers, hears the challenge and asks why no one has answered this uncircumcised Philistine who dares defy the armies of the living God. Armed with only his shepherd\'s sling and five smooth stones — and the name of the LORD of hosts — David runs to meet Goliath, puts a stone into his skull, and kills him before cutting off his head with the giant\'s own sword. David\'s declaration before the battle is the theological center of the story: "the battle is the LORD\'s," a principle that both recapitulates the conquest theology and establishes the animating conviction of his entire subsequent career. The contrast between Saul — who stands head and shoulders above all Israel yet shrinks before Goliath — and the unarmored shepherd boy clarifies that the coming king of Israel must be a man after God\'s own heart, not merely a man of impressive appearance.',
  },
  {
    id: 'david-king-judah',
    title: 'David Crowned King of Judah',
    book: '2 Samuel',
    scripture: '2 Samuel 2:1–11',
    approximateDate: '~1010 BCE',
    dateValue: -1010,
    category: 'united-monarchy',
    summary:
      'Following the devastating death of Saul and Jonathan at the battle of Mount Gilboa, David inquires of the LORD where he should go, and God directs him to Hebron — the ancient city of the patriarchs, where Abraham and Sarah are buried. The men of Judah gather there and anoint David king over the house of Judah, fulfilling the private anointing Samuel had performed years earlier. North of Judah, however, Saul\'s commander Abner installs Saul\'s surviving son Ish-bosheth as king over the remaining tribes, creating a divided kingship that will persist for seven years of intermittent civil war. David\'s first royal act is to commend the men of Jabesh-Gilead who had given Saul and Jonathan an honorable burial — a gesture of political magnanimity that signals the kind of king he intends to be. The long house-of-David versus house-of-Saul conflict gradually resolves in David\'s favor, as the narrative notes that David grew stronger and stronger while the house of Saul grew weaker and weaker.',
  },
  {
    id: 'david-jerusalem',
    title: 'David Captures Jerusalem',
    book: '2 Samuel',
    scripture: '2 Samuel 5:6–16',
    approximateDate: '~1004 BCE',
    dateValue: -1004,
    category: 'united-monarchy',
    summary:
      'Once anointed king over all Israel, David sets his sights on Jerusalem — a Jebusite stronghold that had never been taken by any Israelite tribe, perched on a ridge between the tribal territories and therefore belonging to no single tribe. The Jebusites mock that the blind and lame could defend it against David, but he captures the city — apparently through the water shaft — and makes it his capital, calling it the City of David. The choice is politically and theologically brilliant: Jerusalem becomes a royal city that stands above tribal partisanship, a neutral site that will bind the twelve tribes to their king. Hiram of Tyre sends cedar timber, carpenters, and masons to build David a palace, signaling the rising prestige of the new Israelite monarchy in the eyes of surrounding nations. The narrator\'s parenthetical observation that David\'s power grew because the LORD God of hosts was with him anchors the political achievement firmly in divine providence rather than human strategy.',
  },
  {
    id: 'ark-jerusalem',
    title: 'The Ark Brought to Jerusalem',
    book: '2 Samuel',
    scripture: '2 Samuel 6:1–23',
    approximateDate: '~1003 BCE',
    dateValue: -1003,
    category: 'united-monarchy',
    summary:
      'David\'s determination to bring the Ark of the Covenant to Jerusalem transforms his political capital into a theological center, wedding the seat of royal power to the presence of the LORD. The first attempt fails tragically when a man named Uzzah reaches out to steady the Ark as the oxen stumble and is struck dead — a sobering reminder that the Ark must be transported as Moses prescribed, carried on poles by Levites, not on a cart. After three months during which the Ark rests in the house of Obed-Edom and brings blessing, David leads the Ark into Jerusalem with tremendous celebration — making sacrifices every six steps, and dancing before the LORD with abandon in a linen ephod. His wife Michal, Saul\'s daughter, despises David for this undignified display, and David\'s response — that he will be still more undignified in worship before God who chose him over her father — marks a final break between the two royal houses. The Ark\'s arrival in Jerusalem is a pivotal moment in redemptive history, establishing the city that will become the location of the Temple, the site of the Passion, and in prophecy the center of the coming Kingdom.',
  },
  {
    id: 'davidic-covenant',
    title: 'The Davidic Covenant',
    book: '2 Samuel',
    scripture: '2 Samuel 7:1–17',
    approximateDate: '~1002 BCE',
    dateValue: -1002,
    category: 'united-monarchy',
    summary:
      'When David expresses to the prophet Nathan his desire to build a permanent house for the LORD — troubled that he dwells in cedar while the Ark sits in a tent — God sends Nathan back with a stunning reversal: not David will build God a house, but God will build David a house, a dynasty. The Davidic covenant, delivered through Nathan\'s oracle, promises that David\'s son will build the Temple; that God will be a father to this son and discipline him as a son but never remove His steadfast love as He did from Saul; and most remarkably, that David\'s throne will be established forever. This "forever" promise — an eternal, unconditional dynasty — becomes one of the great pillars of Old Testament eschatology, the anchor point for the Psalms\' royal theology and the prophets\' messianic expectation. The New Testament opens with the genealogy of "Jesus Christ, the son of David," identifying Him as the ultimate fulfillment of this covenant: the son of David whose throne truly knows no end.',
  },
  {
    id: 'david-bathsheba',
    title: "David's Sin with Bathsheba",
    book: '2 Samuel',
    scripture: '2 Samuel 11–12',
    approximateDate: '~990 BCE',
    dateValue: -990,
    category: 'united-monarchy',
    summary:
      'In the spring, when kings go out to battle, David stays behind in Jerusalem — a fatal passivity that opens the door to his greatest failure. From his rooftop he sees the beautiful Bathsheba bathing, sends for her, commits adultery, and when she becomes pregnant, David summons her husband Uriah the Hittite home from battle hoping to cover the sin. When the loyal and selfless Uriah refuses to go to his home while his fellow soldiers are in the field, David compounds adultery with murder, sending Uriah back to the front with sealed orders that he be placed where the fighting is fiercest and then abandoned. The prophet Nathan confronts David through a parable about a rich man who seizes a poor man\'s beloved ewe lamb, and when David pronounces judgment on the villain, Nathan delivers the searing indictment: "You are the man." David\'s immediate, unqualified confession — "I have sinned against the LORD" — is met with forgiveness, but Nathan pronounces that the sword will never depart from David\'s house, a prophecy painfully fulfilled in the tragedies of Absalom, Amnon, and Adonijah that dominate the rest of 2 Samuel.',
  },
  {
    id: 'solomon-wisdom',
    title: "Solomon's Gift of Wisdom",
    book: '1 Kings',
    scripture: '1 Kings 3:1–15',
    approximateDate: '~970 BCE',
    dateValue: -970,
    category: 'united-monarchy',
    summary:
      'Early in his reign, Solomon goes to the great high place at Gibeon to offer a thousand burnt offerings, and that night God appears to him in a dream with a remarkable invitation: "Ask what I shall give you." Rather than requesting long life, wealth, or the death of his enemies, Solomon asks for a discerning heart to govern the people God has entrusted to him — an answer that pleases God so deeply that He grants not only wisdom but the riches and honor Solomon had not asked for. The narrative illustration of Solomon\'s wisdom follows immediately: two women claim the same living infant, and Solomon\'s threat to divide the baby in half instantly reveals the true mother through her self-sacrificial love. Throughout the ancient Near East, wisdom was understood as the divinely given capacity to bring order out of chaos, and Solomon\'s wisdom is presented as surpassing that of all the sons of the East and all the wisdom of Egypt. Sadly, the same chapter that records his request for wisdom also notes his political marriage to Pharaoh\'s daughter — a detail that hints at the compromises that will eventually unravel his legacy.',
  },
  {
    id: 'solomon-temple',
    title: 'Solomon Builds the Temple',
    book: '1 Kings',
    scripture: '1 Kings 6–8',
    approximateDate: '~966–960 BCE',
    dateValue: -966,
    category: 'united-monarchy',
    summary:
      'Four hundred and eighty years after the exodus from Egypt, in the fourth year of Solomon\'s reign, construction begins on the Temple in Jerusalem — the permanent dwelling place for the Name of the LORD that David had longed to build. The construction, described in meticulous detail, takes seven years; it is built of dressed stone and cedar from Lebanon, overlaid throughout with gold, and fitted with elaborately carved cherubim, palm trees, and open flowers. When the Ark is brought into the completed Temple and placed in the Most Holy Place beneath the wings of two great golden cherubim, a cloud so dense it fills the Temple that the priests cannot stand to minister — the same Shekinah glory that had dwelt in the tabernacle now takes up residence in the permanent structure. Solomon\'s dedicatory prayer in chapter 8 is one of the most theologically profound prayers in Scripture, encompassing forgiveness of sin, restoration from defeat, relief from drought, vindication of the innocent, and even the prayers of foreigners who come to the Temple because they have heard of the LORD\'s great name. The Temple will stand for nearly four centuries until Babylon burns it, and its destruction will be one of the great theological crises of the Hebrew Bible.',
  },
  {
    id: 'kingdom-divides',
    title: 'The Kingdom Divides',
    book: '1 Kings',
    scripture: '1 Kings 12:1–24',
    approximateDate: '~930 BCE',
    dateValue: -930,
    category: 'divided-kingdom',
    summary:
      'When Solomon\'s son Rehoboam travels to Shechem for the northern tribes to affirm his kingship, the people send Jeroboam as their representative with a simple request: lighten the heavy burden of forced labor and taxation that Solomon had imposed. Rehoboam consults the elder statesmen who counseled his father, who urge conciliation, and then the young men he has grown up with, who urge him to threaten even heavier burdens. He follows the counsel of the young men, and the northern tribes immediately defect with the battle cry: "To your tents, O Israel! Look now to your own house, David." The split is presented both as political folly — the inevitable fruit of Solomon\'s exploitative policies — and as divine judgment, fulfilling the prophecy of Ahijah the Shilonite to Jeroboam that God was tearing the kingdom for Solomon\'s idolatry. Rehoboam rules Judah and Benjamin in the south from Jerusalem; Jeroboam rules the ten northern tribes from Shechem, and immediately erects golden calves at Bethel and Dan — a decision that will define the northern kingdom\'s character unto its destruction.',
  },
  {
    id: 'elijah-baal',
    title: 'Elijah vs. the Prophets of Baal',
    book: '1 Kings',
    scripture: '1 Kings 18:20–40',
    approximateDate: '~875 BCE',
    dateValue: -875,
    category: 'divided-kingdom',
    summary:
      'After three years of divinely sent drought during which King Ahab and Jezebel have nearly succeeded in exterminating the LORD\'s prophets, Elijah stages the great confrontation on Mount Carmel between the God of Israel and Baal, the Canaanite storm-and-fertility deity. Four hundred and fifty prophets of Baal spend the morning and afternoon calling on their god to send fire on their sacrifice, cutting themselves, limping around their altar — and Elijah mocks them with relentless irony: "Call louder! Perhaps he is meditating, or has wandered away, or is on a journey, or perhaps he is asleep and must be awakened." When Elijah\'s turn comes, he drenches the altar with four jars of water three times until the trench is full, then prays a simple, dignified prayer asking God to reveal Himself so that Israel will know He is God and will return to Him. Fire falls from heaven and consumes the sacrifice, the wood, the stones, the dust, and the water in the trench; the people fall on their faces crying, "The LORD, He is God!" The four hundred and fifty prophets of Baal are executed at the Kishon, and rain ends the drought — a total reversal of fortunes accomplished entirely by divine initiative.',
  },
  {
    id: 'elijah-whirlwind',
    title: 'Elijah Taken to Heaven',
    book: '2 Kings',
    scripture: '2 Kings 2:1–18',
    approximateDate: '~845 BCE',
    dateValue: -845,
    category: 'divided-kingdom',
    summary:
      'As the end of Elijah\'s earthly ministry approaches, the prophet and his successor Elisha travel together from Gilgal to Bethel to Jericho to the Jordan, with Elijah repeatedly urging Elisha to stay behind — and Elisha repeatedly refusing with an oath of loyal attachment that mirrors Ruth\'s commitment to Naomi. At the Jordan, Elijah strikes the water with his rolled-up cloak and the two cross on dry ground, once more echoing the great crossing miracles. Elisha asks for a double portion of Elijah\'s spirit — the inheritance of a firstborn son — and Elijah says that if Elisha sees him taken up, it will be granted. A chariot of fire and horses of fire appear, Elijah is taken up into heaven in a whirlwind, and Elisha tears his own cloak in grief before picking up Elijah\'s fallen mantle and striking the Jordan, which again parts. Elijah\'s translation to heaven without death places him alongside Enoch in a unique category, and his expected return before "the great and terrible day of the LORD" (Malachi 4) becomes a defining element of Jewish and Christian eschatology, fulfilled in John the Baptist and anticipated in the Transfiguration.',
  },
  {
    id: 'fall-north-kingdom',
    title: 'Fall of the Northern Kingdom',
    book: '2 Kings',
    scripture: '2 Kings 17:1–23',
    approximateDate: '~722 BCE',
    dateValue: -722,
    category: 'divided-kingdom',
    summary:
      'In 722 BCE, after a three-year siege, the Assyrian king Shalmaneser V (and his successor Sargon II) captures Samaria and deports the population of the northern kingdom of Israel to Assyria, scattering them across Media and the cities of the Medes — the infamous "ten lost tribes." The narrator of 2 Kings provides a sustained theological autopsy in chapter 17: the deportation happened because Israel had sinned against the LORD who brought them out of Egypt, walking in the customs of the nations, building high places, erecting pillars and Asherah poles, worshipping Baal and passing their children through fire, practicing divination and omens. Despite God sending prophet after prophet urging repentance, the people had hardened their necks like their ancestors and refused to trust in the LORD their God. The Assyrian policy of population transfer — importing foreign peoples to repopulate Samaria — produces the syncretic religion of the Samaritans, who worship the LORD alongside other gods. The fall of the north stands as both historical tragedy and theological warning, raised by the narrator as a mirror for the southern kingdom of Judah.',
  },
  {
    id: 'hezekiah-deliverance',
    title: "Hezekiah's Prayer and Deliverance",
    book: '2 Kings',
    scripture: '2 Kings 19:1–37',
    approximateDate: '~701 BCE',
    dateValue: -701,
    category: 'divided-kingdom',
    summary:
      'In 701 BCE, the Assyrian emperor Sennacherib\'s field commander stands outside the walls of Jerusalem and delivers a devastating propaganda speech designed to demoralize the people: no nation\'s gods have been able to stop Assyria, so how can the LORD deliver Jerusalem? Hezekiah tears his clothes, puts on sackcloth, and goes to the Temple; he also sends to the prophet Isaiah, who responds with an oracle of calm confidence that the LORD will deal with Sennacherib. When Hezekiah receives a threatening letter from Sennacherib, he literally spreads it before the LORD in the Temple and prays with magnificent directness — acknowledging the Assyrian destruction of other nations\' gods, but noting those were gods of wood and stone, and asking God to save Jerusalem "so that all the kingdoms of the earth may know that you, LORD, are God alone." That night the angel of the LORD strikes down one hundred and eighty-five thousand in the Assyrian camp, and Sennacherib withdraws to Nineveh, where he is murdered by his own sons. The deliverance, corroborated by Sennacherib\'s own annals which boast of trapping Hezekiah "like a bird in a cage" but conspicuously omit any capture of Jerusalem, is one of the most archaeologically rich episodes in all of Kings.',
  },
  {
    id: 'josiah-reforms',
    title: "Josiah's Reforms and the Book of the Law",
    book: '2 Kings',
    scripture: '2 Kings 22–23',
    approximateDate: '~622 BCE',
    dateValue: -622,
    category: 'divided-kingdom',
    summary:
      'During repairs to the Jerusalem Temple initiated by the righteous young king Josiah, the high priest Hilkiah discovers "the Book of the Law" — almost certainly a form of Deuteronomy — which had apparently been lost or suppressed during the long wicked reigns of Manasseh and Amon. When the scroll is read to Josiah, he tears his clothes in grief, recognizing how thoroughly Judah has violated the covenant, and sends to the prophetess Huldah, who confirms that the curses of the covenant will fall on Judah — but not in Josiah\'s own days because of his responsive heart. Josiah then leads the most comprehensive religious reform in the monarchy\'s history: purging the Temple of all Baal and Asherah articles, abolishing the high places throughout Judah and even in the former northern kingdom, defiling the child-sacrifice site of Tophet in the Hinnom Valley, and celebrating a Passover of unprecedented scope. The narrator\'s commendation of Josiah is unparalleled — "no king before him turned to the LORD with all his heart and soul and might as Moses commanded, and none arose after him" — yet the tragic irony is that Josiah\'s reforms come too late to avert the judgment Manasseh\'s half-century of evil has made inevitable.',
  },
  {
    id: 'fall-jerusalem',
    title: 'The Fall of Jerusalem',
    book: '2 Kings',
    scripture: '2 Kings 25:1–21',
    approximateDate: '~586 BCE',
    dateValue: -586,
    category: 'exile',
    summary:
      'In the ninth year of King Zedekiah, Nebuchadnezzar king of Babylon lays siege to Jerusalem; eighteen months later, as famine becomes severe in the city, the walls are breached and Zedekiah and his army flee by night. They are overtaken in the plains of Jericho, Zedekiah\'s sons are slaughtered before his eyes, his own eyes are put out, and he is bound in bronze chains and taken to Babylon — the last sight of his homeland being the execution of his children. Nebuzaradan, the captain of Nebuchadnezzar\'s guard, burns the Temple, the palace, and every great house in Jerusalem, demolishes the city walls, and deports the bulk of the population to Babylon. The Temple implements — the bronze pillars, the sea, the stands, the vessels — are all dismantled and carried to Babylon, ending the sacrificial system that had centered Israelite worship for nearly four centuries. The book of 2 Kings closes not with a restoration oracle but with the simple, devastating fact of the exile, leaving the reader in the darkness of defeat, longing for the promised mercy that must surely come if God is faithful to His covenant with David.',
  },
  {
    id: 'cyrus-decree',
    title: "Cyrus's Decree to Return",
    book: 'Ezra',
    scripture: 'Ezra 1:1–11',
    approximateDate: '~538 BCE',
    dateValue: -538,
    category: 'restoration',
    summary:
      'In the first year of Cyrus king of Persia, God stirs the spirit of the great conqueror to issue a proclamation throughout his empire: the LORD God of heaven has given him all the kingdoms of the earth, and has charged him to build a temple in Jerusalem, and any of His people among the Persians may go up. Isaiah had prophesied Cyrus by name nearly two centuries earlier, calling him the LORD\'s "anointed" (messiah) who would authorize the rebuilding of Jerusalem and the Temple — a breathtaking example of specific predictive prophecy. Cyrus not only permits the return but restores the Temple vessels that Nebuchadnezzar had taken, and the Jewish nobles of Babylon give silver, gold, goods, and animals for the journey. Forty-two thousand three hundred and sixty people, plus seven thousand three hundred and thirty-seven servants, set out for the land of their ancestors — the beginning of the great restoration. The decree of Cyrus is God\'s answer to seventy years of exile and the specific prophecy of Jeremiah, demonstrating that the pagan king of the world\'s greatest empire is, despite his intentions, an instrument in the hand of the God of Israel.',
  },
  {
    id: 'temple-rebuilt',
    title: 'The Second Temple Completed',
    book: 'Ezra',
    scripture: 'Ezra 6:13–22',
    approximateDate: '~516 BCE',
    dateValue: -516,
    category: 'restoration',
    summary:
      'After decades of opposition that had halted construction, the Second Temple is finally completed in Jerusalem in the sixth year of the Persian king Darius — exactly seventy years after the destruction of Solomon\'s Temple, fulfilling Jeremiah\'s prophecy. The completion comes through the prophetic urgency of Haggai and Zechariah, who had challenged the returned exiles to stop neglecting the House of God while they built their own paneled houses. At the dedication, the people offer six hundred bulls, twelve hundred rams, twelve hundred lambs, and a hundred male goats as a sin offering for all Israel — notably far fewer animals than at Solomon\'s dedication, a quiet acknowledgment of the diminished glory of the Second Temple compared to the First. Yet the Passover celebrated in the following month with great joy suggests that the essential continuity of covenant and worship is restored, even if the Shekinah glory has not visibly returned. The prophets Haggai and Zechariah promise that the glory of the Second Temple will surpass that of the First — a promise the New Testament understands as fulfilled when Jesus, the true Temple, enters it.',
  },
  {
    id: 'esther-saves-jews',
    title: 'Esther Saves the Jewish People',
    book: 'Esther',
    scripture: 'Esther 4–9',
    approximateDate: '~480 BCE',
    dateValue: -480,
    category: 'restoration',
    summary:
      'In the Persian court of Ahasuerus (Xerxes I), the arrogant courtier Haman plots the extermination of all Jews throughout the empire because the Jew Mordecai refuses to bow to him, and he secures a royal edict authorizing a pogrom on a date chosen by lot — Purim. When Mordecai learns of the decree, he tears his clothes, puts on sackcloth and ashes, and sends word to his cousin Esther, now Queen of Persia, insisting that she intercede with the king — and delivering the famous challenge: "Who knows whether you have not come to the kingdom for such a time as this?" Esther fasts three days, then approaches the king unsummoned at mortal risk, invites both the king and Haman to two successive banquets, and at the second reveals her identity as a Jew and Haman as the architect of her people\'s genocide. Haman is hanged on the very gallows he had built for Mordecai, and a new royal edict permits the Jews throughout the empire to defend themselves, resulting in their deliverance. The book of Esther is remarkable for never mentioning God by name, yet the entire narrative pulsates with divine providence working through human courage, coincidence, and timing.',
  },
  {
    id: 'ezra-reforms',
    title: "Ezra's Return and Reforms",
    book: 'Ezra',
    scripture: 'Ezra 7–10',
    approximateDate: '~458 BCE',
    dateValue: -458,
    category: 'restoration',
    summary:
      'In the seventh year of Artaxerxes, the priest and scribe Ezra leads a second wave of returnees to Jerusalem, carrying with him a royal commission that gives him extraordinary authority to teach the Law of God and appoint judges throughout the Trans-Euphrates region. Ezra\'s great qualification is captured in the single verse: "Ezra had set his heart to study the Law of the LORD and to do it and to teach his statutes and rules in Israel" — placing formation before proclamation, obedience before instruction. Upon arrival, Ezra is confronted with a crisis that horrifies him: many of the returned exiles, including priests and Levites, have intermarried with the surrounding pagan peoples in violation of the Mosaic law. Ezra tears his garment and cloak, pulls hair from his head and beard, and sits appalled until the evening sacrifice, then offers a great prayer of corporate confession. The community undertakes the painful process of dissolving these marriages, recognizing that the covenant purity of the restored community is essential if the exile\'s central lesson — that syncretism leads to destruction — is to be learned and not merely endured.',
  },
  {
    id: 'nehemiah-walls',
    title: 'Nehemiah Rebuilds the Walls',
    book: 'Nehemiah',
    scripture: 'Nehemiah 2–6',
    approximateDate: '~445 BCE',
    dateValue: -445,
    category: 'restoration',
    summary:
      'Nehemiah, cupbearer to the Persian king Artaxerxes, weeps and prays for days when he hears that Jerusalem\'s walls remain broken down and its gates burned — a state of vulnerability and shame that has persisted for over a century and a half since Babylon\'s destruction. Armed with letters from the king, he travels to Jerusalem, secretly inspects the ruins by night, then rallies the community with the famous words: "You see the trouble we are in... Come, let us build the wall of Jerusalem, that we may no longer suffer derision." Against fierce opposition from Sanballat the Horonite and Tobiah the Ammonite — who mock, threaten, and plot violence — the builders work with a trowel in one hand and a sword in the other, never changing their clothes except to wash. The entire wall is completed in the astonishing span of fifty-two days, and the surrounding nations perceive that the work had been accomplished with the help of Israel\'s God. When Ezra then reads the Book of the Law publicly to the assembled community and the people weep at its words, Nehemiah and Ezra together declare "the joy of the LORD is your strength" — a fitting capstone to the long story of exile and return, discipline and restoration.',
  },
]

// Sort by dateValue ascending (most negative / earliest BCE date first)
export const timelineEvents: TimelineEvent[] = [...rawEvents].sort(
  (a, b) => a.dateValue - b.dateValue
)
