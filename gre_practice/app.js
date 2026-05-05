const SECTION_BLUEPRINTS = [
  { id: "writing", title: "Analytical Writing", label: "Writing", minutes: 30, count: 1 },
  { id: "verbal1", title: "Verbal Reasoning Section 1", label: "Verbal 1", minutes: 18, count: 12 },
  { id: "quant1", title: "Quantitative Reasoning Section 1", label: "Quant 1", minutes: 21, count: 12 },
  { id: "verbal2", title: "Verbal Reasoning Section 2", label: "Verbal 2", minutes: 23, count: 15 },
  { id: "quant2", title: "Quantitative Reasoning Section 2", label: "Quant 2", minutes: 26, count: 15 }
];

const essayPrompts = [
  {
    issue: "Universities should require every graduate student to take at least one course outside the student's primary field of study.",
    outline: "Define the educational goal first, then weigh breadth against depth. A strong essay can argue that cross-field study is valuable when it supports research goals, but a universal requirement may waste time in highly specialized programs."
  },
  {
    issue: "The most effective leaders are those who are willing to change their minds when new evidence appears.",
    outline: "Separate flexibility from indecision. Discuss how evidence-based revision improves decisions, while noting that leaders also need stable principles and clear communication."
  },
  {
    issue: "Governments should invest more in public transportation than in expanding highways.",
    outline: "Consider congestion, environmental costs, access, and geography. A nuanced response can support transit investment in dense regions while allowing highway expansion where transit cannot efficiently serve demand."
  },
  {
    issue: "Success in any field depends more on disciplined practice than on natural talent.",
    outline: "Compare initial aptitude with sustained improvement. Use examples where practice transforms average ability, while acknowledging domains where physical or cognitive traits create real starting advantages."
  },
  {
    issue: "The best way to teach history is to focus on ordinary people's lives rather than on major political events.",
    outline: "Frame the issue around understanding cause and consequence. Ordinary lives reveal social impact, but political events often explain why those conditions changed."
  },
  {
    issue: "Technology has made people better informed but less capable of sustained attention.",
    outline: "Distinguish access to information from depth of understanding. Balance examples of rapid learning with the costs of distraction and shallow consumption."
  },
  {
    issue: "In business, long-term reputation is more important than short-term profit.",
    outline: "Discuss repeated trust, hiring, regulation, and customer loyalty. A strong answer can concede that short-term cash flow matters, especially for survival, without making it the primary measure."
  },
  {
    issue: "A society should judge progress by the well-being of its least advantaged members.",
    outline: "Clarify what well-being includes: income, health, safety, mobility, and dignity. Address whether aggregate growth is enough if severe deprivation remains."
  },
  {
    issue: "Students learn more from difficult failures than from easy successes.",
    outline: "Explain how failure can expose misconceptions and build resilience, then qualify that failure teaches only when feedback, reflection, and support are present."
  },
  {
    issue: "Scientific research should be guided primarily by practical benefits rather than by curiosity.",
    outline: "Contrast immediate applications with discoveries whose usefulness appears later. A balanced essay can argue for funding both applied and basic research."
  }
];

const tcItems = [
  {
    stem: "Although the committee's public statement sounded decisive, the private minutes reveal a more ___ process, with members revisiting the same assumptions several times.",
    choices: ["perfunctory", "recursive", "irrelevant", "triumphant", "illicit"],
    answer: "recursive",
    hint: "The contrast is between sounding final and repeatedly returning to prior assumptions.",
    explanation: "'Recursive' fits a process that loops back on itself; the sentence says members revisited the same assumptions."
  },
  {
    stem: "The critic admired the novel's ambition but faulted its ending as ___, because the final revelation solved every conflict with implausible convenience.",
    choices: ["cathartic", "contrived", "incisive", "austere", "diffident"],
    answer: "contrived",
    hint: "Look for a negative word tied to an overly convenient plot resolution.",
    explanation: "'Contrived' means artificially arranged, which matches an implausibly convenient ending."
  },
  {
    stem: "Far from being ___, the professor's lecture moved quickly from anecdote to data to theory, demanding close attention throughout.",
    choices: ["meandering", "brisk", "rigorous", "lucid", "empirical"],
    answer: "meandering",
    hint: "'Far from' reverses the idea that follows; the lecture was fast and focused.",
    explanation: "'Meandering' means wandering or unfocused, the opposite of moving quickly through a clear sequence."
  },
  {
    stem: "The mayor's proposal was politically ___: it satisfied environmental groups without alienating the city's largest employers.",
    choices: ["untenable", "shrewd", "opaque", "haphazard", "ceremonial"],
    answer: "shrewd",
    hint: "The colon explains why the proposal was politically skillful.",
    explanation: "'Shrewd' means astute or strategically clever, fitting a proposal that pleases competing groups."
  },
  {
    stem: "Because the archive contains only scattered letters, any biography of the poet must remain partly ___ rather than fully authoritative.",
    choices: ["speculative", "exhaustive", "redundant", "orthodox", "animated"],
    answer: "speculative",
    hint: "Incomplete evidence prevents certainty.",
    explanation: "'Speculative' fits a biography based on limited evidence and therefore not fully authoritative."
  },
  {
    stem: "The scientist was praised not for a single dramatic discovery but for years of ___ measurements that gradually changed the field's assumptions.",
    choices: ["erratic", "meticulous", "decorative", "partisan", "belated"],
    answer: "meticulous",
    hint: "The praise is for careful accumulated work.",
    explanation: "'Meticulous' means extremely careful, matching measurements that slowly persuaded a field."
  },
  {
    stem: "The documentary avoids nostalgia; its account of the old neighborhood is affectionate but never ___.",
    choices: ["sentimental", "skeptical", "visual", "regional", "brief"],
    answer: "sentimental",
    hint: "The semicolon restates the idea that the film avoids nostalgia.",
    explanation: "An affectionate account that avoids nostalgia is not 'sentimental.'"
  },
  {
    stem: "The policy was meant to be temporary, but its administrative convenience made it surprisingly ___.",
    choices: ["durable", "frail", "contentious", "minor", "secretive"],
    answer: "durable",
    hint: "The word should contrast with 'temporary.'",
    explanation: "'Durable' contrasts with temporary and explains why the policy lasted."
  },
  {
    stem: "The panel rejected the proposal not because it was too ambitious but because its budget projections were ___.",
    choices: ["precise", "unsubstantiated", "promising", "modest", "popular"],
    answer: "unsubstantiated",
    hint: "The rejection is based on weak support for the numbers.",
    explanation: "'Unsubstantiated' means unsupported by evidence, a clear reason to reject budget projections."
  },
  {
    stem: "Her argument seemed ___ at first, but each qualification ultimately made the central claim more precise.",
    choices: ["cumbersome", "elegant", "irreversible", "hostile", "obvious"],
    answer: "cumbersome",
    hint: "The first impression is negative, but the qualifications turn out to help.",
    explanation: "'Cumbersome' means awkward or unwieldy, fitting an argument that initially seems burdened by qualifications."
  },
  {
    stem: "The engineer's design was ___ rather than ornamental: every visible element served a measurable function.",
    choices: ["utilitarian", "lavish", "derivative", "fragile", "ambiguous"],
    answer: "utilitarian",
    hint: "The clue is that every element has a function.",
    explanation: "'Utilitarian' means designed for practical use, matching the function-focused description."
  },
  {
    stem: "The author's tone is not openly hostile; it is more accurately described as ___, using dry understatement to expose the plan's flaws.",
    choices: ["reverent", "satirical", "earnest", "tentative", "lyrical"],
    answer: "satirical",
    hint: "Dry understatement that exposes flaws often signals satire.",
    explanation: "'Satirical' fits criticism delivered through understated humor or irony."
  },
  {
    stem: "The study's conclusion is ___ because the sample includes only volunteers already interested in the topic.",
    choices: ["suspect", "inevitable", "comprehensive", "neutral", "redundant"],
    answer: "suspect",
    hint: "A biased sample weakens the conclusion.",
    explanation: "'Suspect' means doubtful or questionable, appropriate for a conclusion based on a biased sample."
  },
  {
    stem: "Despite the book's ___ title, its chapters offer a balanced treatment of the controversy.",
    choices: ["provocative", "pedestrian", "accurate", "technical", "concise"],
    answer: "provocative",
    hint: "'Despite' contrasts the title with the balanced chapters.",
    explanation: "A 'provocative' title could suggest one-sidedness, contrasting with balanced content."
  },
  {
    stem: "The witness gave a ___ account, correcting small details even when they did not favor her side.",
    choices: ["candid", "florid", "evasive", "comic", "remote"],
    answer: "candid",
    hint: "Correcting details against one's own interest suggests honesty.",
    explanation: "'Candid' means honest and forthright."
  },
  {
    stem: "The team's early confidence proved ___ after the prototype failed under ordinary use.",
    choices: ["premature", "justified", "contagious", "methodical", "mutual"],
    answer: "premature",
    hint: "Failure under ordinary use shows the confidence came too soon.",
    explanation: "'Premature' means occurring too early; the failure undermined early confidence."
  },
  {
    stem: "What looked like a radical departure was actually ___ with the artist's earlier experiments in scale and repetition.",
    choices: ["consistent", "incompatible", "accidental", "inferior", "marketable"],
    answer: "consistent",
    hint: "'Actually' corrects an initial impression of radical departure.",
    explanation: "'Consistent' fits something that aligns with earlier experiments."
  },
  {
    stem: "The report is ___ about the program's benefits, noting both measurable gains and unresolved costs.",
    choices: ["circumspect", "ecstatic", "dismissive", "cryptic", "absolute"],
    answer: "circumspect",
    hint: "A balanced account that notes limits is cautious.",
    explanation: "'Circumspect' means cautious and careful, matching the report's balanced tone."
  },
  {
    stem: "Because the market changed slowly, the company's decline was ___ rather than sudden.",
    choices: ["gradual", "violent", "fictional", "lucrative", "official"],
    answer: "gradual",
    hint: "The answer should contrast with 'sudden.'",
    explanation: "'Gradual' directly contrasts with sudden."
  },
  {
    stem: "The new rule was intended to simplify applications, but its exceptions made the process more ___.",
    choices: ["onerous", "transparent", "optional", "familiar", "generous"],
    answer: "onerous",
    hint: "The word should show the rule had the opposite of its intended effect.",
    explanation: "'Onerous' means burdensome, matching a process made harder by exceptions."
  },
  {
    stem: "As the study of literature expands to include multimedia texts, literary scholars commonly own film collections that are as ___ as their personal libraries, with classics, foreign films, and science fiction all frequently explored in university English courses.",
    choices: ["interesting", "erudite", "idiosyncratic", "mundane", "catholic"],
    answer: "catholic",
    hint: "The list stresses wide range, not merely that the collection is appealing.",
    explanation: "In this context, 'catholic' means broad or wide-ranging in tastes and interests; 'interesting' is too vague."
  },
  {
    stem: "The reviewer offered only ___ praise: she admired the novelist's style but questioned the plausibility of the plot.",
    choices: ["qualified", "enthusiastic", "simple", "lavish", "accidental"],
    answer: "qualified",
    hint: "The praise is limited by an objection.",
    explanation: "'Qualified' praise is praise with reservations or limits; it does not mean professionally certified here."
  },
  {
    stem: "The newly discovered invoice was ___, showing that the expedition had been funded by a rival institution.",
    choices: ["telling", "talkative", "minor", "decorative", "recent"],
    answer: "telling",
    hint: "The document reveals something important.",
    explanation: "'Telling' means revealing or significant; 'talkative' is the literal-sounding trap."
  },
  {
    stem: "The laboratory's record was ___: it produced two influential findings but also published several results that could not be replicated.",
    choices: ["checkered", "colorful", "consistent", "spotless", "ordinary"],
    answer: "checkered",
    hint: "The record includes both achievements and problems.",
    explanation: "'Checkered' means mixed, especially with both good and bad episodes; it is not about visual pattern."
  },
  {
    stem: "Because the grant committee had far more strong proposals than funds, it had to be unusually ___, supporting only projects with clear methods and realistic timelines.",
    choices: ["discriminating", "prejudiced", "generous", "indifferent", "casual"],
    answer: "discriminating",
    hint: "The committee must make fine judgments among strong options.",
    explanation: "'Discriminating' can mean selective and showing good judgment; the sentence does not suggest unfair bias."
  },
  {
    stem: "The essay's thesis was disappointingly ___, relying on familiar examples and reaching a conclusion few readers would find surprising.",
    choices: ["pedestrian", "walkable", "incisive", "novel", "technical"],
    answer: "pedestrian",
    hint: "Familiar and unsurprising points to dull ordinariness.",
    explanation: "'Pedestrian' means ordinary or unimaginative in this context; it is not about walking."
  },
  {
    stem: "The poet's early style was remarkably ___, changing shape as she absorbed influences from folk songs, sermons, and scientific prose.",
    choices: ["plastic", "synthetic", "rigid", "transparent", "fragile"],
    answer: "plastic",
    hint: "The style can be shaped by many influences.",
    explanation: "'Plastic' can mean moldable or adaptable; 'synthetic' is the modern material-related trap."
  },
  {
    stem: "The professor's comments were ___, identifying the paper's central weakness in three brief sentences.",
    choices: ["economical", "cheap", "expensive", "ornate", "excessive"],
    answer: "economical",
    hint: "The comments do a lot with few words.",
    explanation: "'Economical' can mean concise and efficient, not merely inexpensive."
  }
];

const seItems = [
  {
    stem: "The historian's prose is unusually ___; even complex institutional changes are explained without unnecessary jargon.",
    choices: ["lucid", "transparent", "ornate", "opaque", "strident", "evasive"],
    answer: ["lucid", "transparent"],
    hint: "Choose two words that both mean clear.",
    explanation: "'Lucid' and 'transparent' both describe clear explanation."
  },
  {
    stem: "The committee's reaction was ___: members praised the goal but doubted the plan's feasibility.",
    choices: ["ambivalent", "mixed", "unanimous", "hostile", "jubilant", "perfunctory"],
    answer: ["ambivalent", "mixed"],
    hint: "The sentence shows both approval and doubt.",
    explanation: "'Ambivalent' and 'mixed' both fit a reaction combining positive and negative views."
  },
  {
    stem: "The manager's explanation was ___, leaving the staff with more questions than they had before the meeting.",
    choices: ["cryptic", "opaque", "concise", "methodical", "forthright", "exhaustive"],
    answer: ["cryptic", "opaque"],
    hint: "The explanation did not clarify matters.",
    explanation: "'Cryptic' and 'opaque' both mean hard to understand."
  },
  {
    stem: "The scientist remained ___ about the preliminary result, emphasizing that replication would be needed before any claim could be accepted.",
    choices: ["cautious", "circumspect", "defiant", "careless", "exuberant", "dogmatic"],
    answer: ["cautious", "circumspect"],
    hint: "The clue is the need for replication before acceptance.",
    explanation: "'Cautious' and 'circumspect' both fit a careful response to preliminary data."
  },
  {
    stem: "The charity's records were ___, with every donation and expense documented in public reports.",
    choices: ["transparent", "open", "erratic", "suspect", "ornamental", "meager"],
    answer: ["transparent", "open"],
    hint: "Public documentation makes the records easy to inspect.",
    explanation: "'Transparent' and 'open' both describe records available for scrutiny."
  },
  {
    stem: "The two studies are not contradictory; in fact, their findings are largely ___.",
    choices: ["compatible", "consonant", "spurious", "divergent", "tentative", "redundant"],
    answer: ["compatible", "consonant"],
    hint: "The second clause rejects contradiction.",
    explanation: "'Compatible' and 'consonant' both mean in agreement."
  },
  {
    stem: "The speaker's confidence was ___, since it rested on a data set too small to support broad conclusions.",
    choices: ["unwarranted", "unjustified", "measured", "prudent", "inevitable", "constructive"],
    answer: ["unwarranted", "unjustified"],
    hint: "A small data set does not support the broad claim.",
    explanation: "'Unwarranted' and 'unjustified' both mean not supported by evidence."
  },
  {
    stem: "The painter's later canvases are ___, using only a few colors and spare geometric forms.",
    choices: ["austere", "minimal", "lavish", "chaotic", "sentimental", "baroque"],
    answer: ["austere", "minimal"],
    hint: "Few colors and spare forms point to restraint.",
    explanation: "'Austere' and 'minimal' both fit restrained visual style."
  },
  {
    stem: "The novelist treats the villain with surprising ___, giving him motives that are understandable even when his actions are not excusable.",
    choices: ["sympathy", "compassion", "derision", "impatience", "indifference", "brevity"],
    answer: ["sympathy", "compassion"],
    hint: "Understandable motives suggest humane treatment.",
    explanation: "'Sympathy' and 'compassion' both fit the generous portrayal."
  },
  {
    stem: "The old theory was not discarded because it was useless but because it had become ___: newer evidence explained the same facts more simply.",
    choices: ["obsolete", "outmoded", "indispensable", "novel", "fertile", "coherent"],
    answer: ["obsolete", "outmoded"],
    hint: "Newer evidence made the theory no longer needed.",
    explanation: "'Obsolete' and 'outmoded' both mean superseded by newer alternatives."
  },
  {
    stem: "The editor found the manuscript ___, full of claims that could not be checked against any cited source.",
    choices: ["dubious", "questionable", "meticulous", "balanced", "succinct", "elegant"],
    answer: ["dubious", "questionable"],
    hint: "Uncheckable claims undermine trust.",
    explanation: "'Dubious' and 'questionable' both describe doubtful credibility."
  },
  {
    stem: "The negotiations were ___, interrupted by repeated delays and sudden changes in demands.",
    choices: ["fitful", "erratic", "seamless", "cordial", "ceremonial", "decisive"],
    answer: ["fitful", "erratic"],
    hint: "Delays and sudden changes make progress uneven.",
    explanation: "'Fitful' and 'erratic' both mean irregular or uneven."
  },
  {
    stem: "The team's evidence is ___, drawn from interviews, financial records, and direct observation.",
    choices: ["varied", "diverse", "thin", "univocal", "accidental", "misleading"],
    answer: ["varied", "diverse"],
    hint: "The listed sources are different types of evidence.",
    explanation: "'Varied' and 'diverse' both fit evidence from multiple kinds of sources."
  },
  {
    stem: "The policy's appeal was ___, attracting support from business owners and labor organizers alike.",
    choices: ["broad", "wide", "sectarian", "narrow", "technical", "private"],
    answer: ["broad", "wide"],
    hint: "Support from groups often opposed to each other suggests breadth.",
    explanation: "'Broad' and 'wide' both describe appeal across many groups."
  },
  {
    stem: "The speaker's remarks were ___, carefully avoiding any claim that exceeded the available evidence.",
    choices: ["measured", "restrained", "flamboyant", "reckless", "absolute", "irrelevant"],
    answer: ["measured", "restrained"],
    hint: "Avoiding overclaiming shows moderation.",
    explanation: "'Measured' and 'restrained' both fit careful, moderate remarks."
  }
];

const rcPassages = [
  {
    passage: [
      "Urban tree-planting programs are often justified by the cooling effect of shade. Recent research, however, suggests that their benefits depend heavily on placement. Trees planted along narrow streets can lower pedestrian-level temperatures, but the same trees may trap vehicle emissions if airflow is already limited.",
      "The finding does not undermine tree planting as a policy; rather, it makes design more important. A city that treats canopy coverage as a single percentage target may miss local differences that determine whether residents experience cleaner air, cooler sidewalks, or both."
    ],
    questions: [
      {
        stem: "The passage mainly argues that urban tree-planting programs should",
        choices: ["be abandoned where traffic is heavy", "prioritize design details over a single coverage target", "focus only on wide streets", "measure success by air quality rather than temperature", "replace transportation policy"],
        answer: "prioritize design details over a single coverage target",
        hint: "The second paragraph states the broader policy lesson.",
        explanation: "The author says the research makes design more important and warns against relying on one canopy percentage target."
      },
      {
        stem: "According to the passage, trees on narrow streets may have which drawback?",
        choices: ["They provide too little shade for pedestrians.", "They can increase building energy use.", "They may trap vehicle emissions.", "They require more water than other trees.", "They reduce canopy coverage percentages."],
        answer: "They may trap vehicle emissions.",
        hint: "Look at the contrast in the first paragraph.",
        explanation: "The passage says trees on narrow streets may trap vehicle emissions if airflow is already limited."
      },
      {
        stem: "The author's attitude toward urban tree planting is best described as",
        choices: ["dismissive", "uncritical", "conditional", "nostalgic", "alarmed"],
        answer: "conditional",
        hint: "The author supports tree planting but emphasizes circumstances.",
        explanation: "The author does not reject tree planting, but argues that benefits depend on placement and design."
      }
    ]
  },
  {
    passage: [
      "When early radio became popular, some educators predicted that classroom lectures would soon be obsolete. A single expert could, in principle, reach thousands of students at once. Yet schools did not disappear, partly because instruction involves more than transmitting information.",
      "The history is useful when evaluating newer educational technologies. Tools that distribute explanations efficiently can be powerful, but students still need feedback, pacing, and opportunities to test their understanding."
    ],
    questions: [
      {
        stem: "The passage uses early radio primarily to",
        choices: ["show that educators usually oppose innovation", "provide a historical analogy for evaluating new tools", "argue that lectures are ineffective", "explain why schools expanded rapidly", "compare broadcast quality with classroom quality"],
        answer: "provide a historical analogy for evaluating new tools",
        hint: "The second paragraph begins by saying the history is useful for judging newer technologies.",
        explanation: "The radio example serves as an analogy: efficient distribution of information is useful but incomplete."
      },
      {
        stem: "Which statement would the author most likely support?",
        choices: ["Educational technology is valuable when paired with feedback and practice.", "The best instruction occurs when students work alone.", "Broadcast lectures should replace most teachers.", "New technologies rarely influence classrooms.", "Pacing is less important than expert presentation."],
        answer: "Educational technology is valuable when paired with feedback and practice.",
        hint: "The final sentence names what students still need.",
        explanation: "The author grants that distribution tools can be powerful but says students still need feedback, pacing, and opportunities to test understanding."
      },
      {
        stem: "The word 'obsolete' in the passage most nearly means",
        choices: ["unnecessary", "informal", "expensive", "popular", "complicated"],
        answer: "unnecessary",
        hint: "Educators predicted radio might make lectures no longer needed.",
        explanation: "'Obsolete' means no longer useful or needed."
      }
    ]
  },
  {
    passage: [
      "A museum label can make an artifact seem self-explanatory, but labels are arguments in miniature. The decision to identify an object as a ritual vessel, a trade good, or a household tool changes what visitors notice and what questions they ask.",
      "Curators therefore face a difficult balance. Too little interpretation leaves visitors adrift; too much may make uncertain scholarship appear settled."
    ],
    questions: [
      {
        stem: "The main purpose of the passage is to",
        choices: ["criticize museums for simplifying all scholarship", "explain why museum labels require careful judgment", "argue that artifacts should be displayed without labels", "compare three categories of ancient objects", "show that visitors ignore curatorial choices"],
        answer: "explain why museum labels require careful judgment",
        hint: "Both paragraphs focus on how labels shape interpretation.",
        explanation: "The author argues that labels guide interpretation and that curators must balance too little and too much explanation."
      },
      {
        stem: "The passage suggests that a label can affect visitors by",
        choices: ["making every object equally interesting", "shaping the questions they bring to an object", "eliminating uncertainty about an object's use", "reducing the need for curators", "proving that one interpretation is correct"],
        answer: "shaping the questions they bring to an object",
        hint: "The first paragraph says labels change what visitors notice and ask.",
        explanation: "The passage explicitly says the label's category changes what visitors notice and what questions they ask."
      },
      {
        stem: "Why is 'too much' interpretation a risk?",
        choices: ["It may make uncertain scholarship seem settled.", "It prevents visitors from reading labels.", "It forces museums to display fewer objects.", "It makes artifacts impossible to classify.", "It encourages visitors to ask too many questions."],
        answer: "It may make uncertain scholarship seem settled.",
        hint: "The final sentence states the risk directly.",
        explanation: "The author says too much interpretation may make uncertain scholarship appear settled."
      }
    ]
  },
  {
    passage: [
      "Economists studying remote work have found that productivity estimates vary sharply by occupation. Tasks with easily measured outputs often show little loss outside the office, while collaborative projects can suffer when informal exchanges disappear.",
      "The most interesting result is not that remote work is either good or bad. It is that organizations must identify which forms of coordination their work actually requires before deciding how often employees should share a physical space."
    ],
    questions: [
      {
        stem: "The passage's central claim is that remote-work policy should be based on",
        choices: ["employee preference alone", "the coordination needs of particular work", "the cheapest office arrangement", "national productivity averages", "strict limits on collaboration"],
        answer: "the coordination needs of particular work",
        hint: "The final sentence gives the recommendation.",
        explanation: "The author says organizations should identify required forms of coordination before setting office policies."
      },
      {
        stem: "Which work is described as most likely to show little productivity loss remotely?",
        choices: ["Work requiring frequent informal exchanges", "Work with easily measured outputs", "Work that depends on shared equipment", "Work with unclear deadlines", "Work involving new teams only"],
        answer: "Work with easily measured outputs",
        hint: "The first paragraph contrasts measured outputs with collaborative projects.",
        explanation: "The passage says tasks with easily measured outputs often show little loss outside the office."
      },
      {
        stem: "The author rejects which simplified view?",
        choices: ["Remote work has uniform effects.", "Organizations make policy decisions.", "Some work can be measured.", "Collaboration sometimes matters.", "Offices create physical proximity."],
        answer: "Remote work has uniform effects.",
        hint: "The passage emphasizes variation by occupation and coordination needs.",
        explanation: "The author argues against seeing remote work as simply good or bad in all cases."
      }
    ]
  },
  {
    passage: [
      "Many species survive seasonal scarcity by entering dormancy, a state that reduces metabolic demand. Because dormancy can delay reproduction, however, it is not simply a universal advantage.",
      "Researchers have begun to examine dormancy as a strategic response to uncertainty rather than as a fixed trait. In environments where bad years are common but unpredictable, delaying activity can preserve future reproductive chances; in stable environments, the same delay may be costly."
    ],
    questions: [
      {
        stem: "The passage mainly discusses dormancy as",
        choices: ["a response whose value depends on environmental conditions", "a trait found only in unstable environments", "a process that increases immediate reproduction", "a behavior that researchers no longer study", "a universal advantage in all species"],
        answer: "a response whose value depends on environmental conditions",
        hint: "The final contrast is between unpredictable and stable environments.",
        explanation: "The passage argues that dormancy has benefits or costs depending on environmental uncertainty."
      },
      {
        stem: "According to the passage, one cost of dormancy is that it can",
        choices: ["increase metabolic demand", "delay reproduction", "make scarcity more common", "stabilize the environment", "prevent future activity"],
        answer: "delay reproduction",
        hint: "The first paragraph names this tradeoff.",
        explanation: "The passage states that dormancy can delay reproduction."
      },
      {
        stem: "In stable environments, dormancy may be costly because",
        choices: ["bad years are always severe", "delayed activity has fewer protective benefits", "metabolism cannot be reduced", "future reproduction is impossible", "dormancy becomes a fixed trait"],
        answer: "delayed activity has fewer protective benefits",
        hint: "If bad years are not common and unpredictable, waiting is less useful.",
        explanation: "The passage implies that delaying activity is valuable under uncertainty but less beneficial when conditions are stable."
      }
    ]
  }
];

// Original GRE-style expansion. External prep materials may inform broad skill coverage,
// but publisher questions should not be copied or lightly paraphrased.
const originalQuestionBankAdditions = {
  tcItems: [
    {
      stem: "The paper's title promised a comprehensive theory, but its actual scope was ___, limited to three case studies from one region.",
      choices: ["circumscribed", "prophetic", "capricious", "ecstatic", "redundant"],
      answer: "circumscribed",
      hint: "The second clause says the scope was limited.",
      explanation: "'Circumscribed' means restricted or narrowly limited, matching a paper based on only three regional case studies."
    },
    {
      stem: "A rule intended to make grants easier to administer became ___ once every agency added its own exceptions.",
      choices: ["labyrinthine", "transparent", "ceremonial", "impartial", "momentary"],
      answer: "labyrinthine",
      hint: "Many exceptions would make the process complicated.",
      explanation: "'Labyrinthine' means complicated and maze-like, which fits a rule burdened by many exceptions."
    },
    {
      stem: "The historian rejected ___ explanations of the rebellion, arguing that drought, taxation, and local politics all contributed.",
      choices: ["monocausal", "meticulous", "ironic", "anonymous", "temporary"],
      answer: "monocausal",
      hint: "The sentence names several causes.",
      explanation: "'Monocausal' means attributing an event to one cause, the view the historian rejects."
    },
    {
      stem: "The anecdote seemed ___ at first, but it ultimately clarified why the survey question had confused respondents.",
      choices: ["digressive", "decisive", "orthodox", "durable", "lavish"],
      answer: "digressive",
      hint: "The contrast is between seeming off-topic and later proving useful.",
      explanation: "'Digressive' means straying from the main point, which fits an anecdote that initially seems tangential."
    },
    {
      stem: "Because demand for the product changed sharply from month to month, the company's forecasts were necessarily ___.",
      choices: ["volatile", "immutable", "decorative", "pious", "redundant"],
      answer: "volatile",
      hint: "Sharp month-to-month changes point to instability.",
      explanation: "'Volatile' means unstable or likely to change suddenly."
    },
    {
      stem: "The agreement was never written down, but a ___ understanding among the researchers governed how the data would be shared.",
      choices: ["tacit", "hostile", "ornate", "mechanical", "dubious"],
      answer: "tacit",
      hint: "The clue is that the agreement was not written or directly stated.",
      explanation: "'Tacit' means understood without being openly expressed."
    },
    {
      stem: "The director's praise was ___; she repeated the same generic compliments she had used for every proposal.",
      choices: ["perfunctory", "exuberant", "incisive", "novel", "restorative"],
      answer: "perfunctory",
      hint: "Generic repeated compliments suggest little care.",
      explanation: "'Perfunctory' means done routinely and without real attention."
    },
    {
      stem: "The fossil was initially dismissed as ___ because its proportions did not match those of any known specimen.",
      choices: ["anomalous", "inevitable", "lucid", "provincial", "benign"],
      answer: "anomalous",
      hint: "The fossil did not fit an expected pattern.",
      explanation: "'Anomalous' means unusual or inconsistent with what is expected."
    },
    {
      stem: "Although the editorial criticized the policy, its tone was ___ by repeated acknowledgments of the problem the policy sought to solve.",
      choices: ["tempered", "inflamed", "erased", "parodied", "accelerated"],
      answer: "tempered",
      hint: "Acknowledging the policy's goal would moderate the criticism.",
      explanation: "'Tempered' means moderated or softened."
    },
    {
      stem: "The judge's opinion was unusually ___, identifying the statute's central ambiguity in a few forceful paragraphs.",
      choices: ["trenchant", "diffuse", "sentimental", "furtive", "redundant"],
      answer: "trenchant",
      hint: "The opinion is brief, forceful, and sharply analytical.",
      explanation: "'Trenchant' means sharply effective or incisive."
    },
    {
      stem: "The committee treated the two budget categories as ___, moving money from one to the other whenever priorities shifted.",
      choices: ["fungible", "sacred", "opaque", "belated", "decorative"],
      answer: "fungible",
      hint: "Money moved freely between the categories.",
      explanation: "'Fungible' means interchangeable or mutually substitutable."
    },
    {
      stem: "The researcher was ___ about the early results, expecting replication to confirm the effect.",
      choices: ["sanguine", "morose", "equivocal", "reticent", "pedestrian"],
      answer: "sanguine",
      hint: "The researcher expects a positive outcome.",
      explanation: "'Sanguine' means optimistic or confidently hopeful."
    },
    {
      stem: "The damp storage room proved ___ to the manuscripts, accelerating mold growth and ink damage.",
      choices: ["inimical", "salient", "benign", "ornamental", "provisional"],
      answer: "inimical",
      hint: "The room harms the manuscripts.",
      explanation: "'Inimical' means harmful or hostile to something."
    },
    {
      stem: "The city's new park was not merely decorative; it had a ___ effect, reducing summer temperatures in the surrounding blocks.",
      choices: ["salutary", "spurious", "cryptic", "sectarian", "derivative"],
      answer: "salutary",
      hint: "The park produces a beneficial effect.",
      explanation: "'Salutary' means beneficial, especially in producing improvement."
    },
    {
      stem: "Because the evidence came from a pilot study, the committee treated the conclusion as ___ rather than final.",
      choices: ["provisional", "irreversible", "exhaustive", "florid", "dogmatic"],
      answer: "provisional",
      hint: "Pilot evidence supports a temporary conclusion.",
      explanation: "'Provisional' means temporary or subject to revision."
    },
    {
      stem: "The film's style is ___, borrowing so visibly from earlier directors that its few original moments are easy to miss.",
      choices: ["derivative", "lucid", "conciliatory", "irreparable", "sparse"],
      answer: "derivative",
      hint: "The film visibly borrows from earlier work.",
      explanation: "'Derivative' means imitative and lacking originality."
    },
    {
      stem: "The analyst's report was ___ in its catalog of risks, but it gave little guidance about which risks mattered most.",
      choices: ["exhaustive", "negligent", "buoyant", "ambiguous", "ceremonial"],
      answer: "exhaustive",
      hint: "The report catalogs all the risks but does not prioritize them.",
      explanation: "'Exhaustive' means thorough or complete."
    },
    {
      stem: "After weeks of bitter argument, the chair adopted a more ___ tone, emphasizing shared goals rather than past disagreements.",
      choices: ["conciliatory", "acerbic", "enigmatic", "peripheral", "inert"],
      answer: "conciliatory",
      hint: "The chair is trying to reduce conflict.",
      explanation: "'Conciliatory' means intended to placate or bring people together."
    }
  ],
  seItems: [
    {
      stem: "The result should be considered ___ until independent teams repeat the experiment.",
      choices: ["provisional", "tentative", "definitive", "ornate", "irrelevant", "lavish"],
      answer: ["provisional", "tentative"],
      hint: "Replication is still needed, so the result is not final.",
      explanation: "'Provisional' and 'tentative' both mean subject to later revision."
    },
    {
      stem: "The archivist was ___, checking every date and cross-reference before approving the catalog entry.",
      choices: ["assiduous", "diligent", "cavalier", "impulsive", "perfunctory", "casual"],
      answer: ["assiduous", "diligent"],
      hint: "The archivist works with sustained care.",
      explanation: "'Assiduous' and 'diligent' both describe careful, persistent effort."
    },
    {
      stem: "The software bug proved ___, surviving several attempts at repair.",
      choices: ["intractable", "recalcitrant", "transparent", "minor", "ornamental", "brief"],
      answer: ["intractable", "recalcitrant"],
      hint: "The problem resists correction.",
      explanation: "'Intractable' and 'recalcitrant' both fit something stubbornly difficult to fix."
    },
    {
      stem: "Despite the failed prototype, investors remained ___ about the company's long-term prospects.",
      choices: ["sanguine", "optimistic", "skeptical", "morose", "apathetic", "cryptic"],
      answer: ["sanguine", "optimistic"],
      hint: "The word must contrast with the failed prototype.",
      explanation: "'Sanguine' and 'optimistic' both mean hopeful about future success."
    },
    {
      stem: "Her presentation was ___, covering the main finding in fewer than five minutes.",
      choices: ["terse", "laconic", "verbose", "expansive", "evasive", "ornate"],
      answer: ["terse", "laconic"],
      hint: "The presentation is very brief.",
      explanation: "'Terse' and 'laconic' both describe concise expression."
    },
    {
      stem: "The critic's interests were ___, ranging from medieval drama to experimental cinema.",
      choices: ["eclectic", "catholic", "narrow", "sectarian", "parochial", "technical"],
      answer: ["eclectic", "catholic"],
      hint: "The range crosses many fields and styles.",
      explanation: "'Eclectic' and lowercase 'catholic' both describe broad, varied tastes."
    },
    {
      stem: "The inspector was ___, refusing to overlook even small inconsistencies in the records.",
      choices: ["scrupulous", "meticulous", "negligent", "haphazard", "indulgent", "diffuse"],
      answer: ["scrupulous", "meticulous"],
      hint: "The inspector pays close attention to details.",
      explanation: "'Scrupulous' and 'meticulous' both fit careful attention to accuracy."
    },
    {
      stem: "The installation was deliberately ___, designed to disappear after a single rainstorm.",
      choices: ["ephemeral", "transient", "durable", "permanent", "venerable", "rigid"],
      answer: ["ephemeral", "transient"],
      hint: "The work is designed to last only briefly.",
      explanation: "'Ephemeral' and 'transient' both mean short-lived."
    },
    {
      stem: "Reviewers were ___ of the spectacular claim because the sample size was small.",
      choices: ["skeptical", "wary", "credulous", "jubilant", "dogmatic", "reverent"],
      answer: ["skeptical", "wary"],
      hint: "Weak evidence makes reviewers cautious and doubtful.",
      explanation: "'Skeptical' and 'wary' both fit a guarded reaction to an unsupported claim."
    },
    {
      stem: "The witness's account was ___, matching the physical evidence and the timeline.",
      choices: ["plausible", "credible", "spurious", "fanciful", "equivocal", "acerbic"],
      answer: ["plausible", "credible"],
      hint: "The account is believable because evidence supports it.",
      explanation: "'Plausible' and 'credible' both mean believable."
    },
    {
      stem: "The notes were ___, filling three notebooks with observations from a single afternoon.",
      choices: ["copious", "abundant", "meager", "laconic", "cryptic", "selective"],
      answer: ["copious", "abundant"],
      hint: "Three notebooks suggests a large quantity.",
      explanation: "'Copious' and 'abundant' both describe plentiful material."
    },
    {
      stem: "The article became increasingly ___ after its clear opening, introducing technical terms without definition.",
      choices: ["abstruse", "arcane", "lucid", "transparent", "popular", "concise"],
      answer: ["abstruse", "arcane"],
      hint: "Undefined technical terms make the article difficult to understand.",
      explanation: "'Abstruse' and 'arcane' both describe material that is hard for most readers to understand."
    },
    {
      stem: "The mediator was valued for being ___, having no stake in either side's victory.",
      choices: ["impartial", "disinterested", "partisan", "zealous", "invested", "combative"],
      answer: ["impartial", "disinterested"],
      hint: "The mediator has no stake in the outcome.",
      explanation: "'Impartial' and 'disinterested' both mean unbiased in this context."
    },
    {
      stem: "Even after new evidence emerged, the theorist remained ___, refusing to revise the original claim.",
      choices: ["obdurate", "intransigent", "flexible", "equivocal", "candid", "pragmatic"],
      answer: ["obdurate", "intransigent"],
      hint: "The theorist refuses to change.",
      explanation: "'Obdurate' and 'intransigent' both mean stubbornly resistant to change."
    },
    {
      stem: "The safety check was ___, completed so quickly that several obvious defects went unnoticed.",
      choices: ["perfunctory", "cursory", "exhaustive", "painstaking", "thorough", "methodical"],
      answer: ["perfunctory", "cursory"],
      hint: "The check was too quick and superficial.",
      explanation: "'Perfunctory' and 'cursory' both describe superficial work."
    },
    {
      stem: "The review was ___, exposing the argument's weakness without wasting words.",
      choices: ["incisive", "penetrating", "sentimental", "evasive", "meandering", "ornamental"],
      answer: ["incisive", "penetrating"],
      hint: "The review is sharp and analytically effective.",
      explanation: "'Incisive' and 'penetrating' both mean sharply perceptive."
    }
  ],
  rcPassages: [
    {
      passage: [
        "Conservationists once assumed that removing roads from a forest would automatically restore wildlife movement. Recent tracking studies complicate that assumption. Some animals quickly reuse former roadbeds as travel corridors, while others avoid them for years because the cleared strips remain more exposed than surrounding vegetation.",
        "The studies do not imply that road removal is pointless. They suggest instead that restoration should be evaluated over different time scales and for different species, rather than by a single measure of forest continuity."
      ],
      questions: [
        {
          stem: "The passage mainly argues that road removal should be judged by",
          choices: ["species-specific and time-sensitive evidence", "the speed with which trees return", "whether all animals avoid cleared strips", "the total number of roads in a region", "a single continuity score"],
          answer: "species-specific and time-sensitive evidence",
          hint: "The final sentence names the recommended evaluation method.",
          explanation: "The author argues for evaluating restoration across species and time scales."
        },
        {
          stem: "Why might some animals avoid former roadbeds?",
          choices: ["The strips may remain exposed.", "The strips contain too much dense vegetation.", "Tracking devices disturb migration.", "Road removal increases traffic.", "Food becomes unavailable nearby."],
          answer: "The strips may remain exposed.",
          hint: "The first paragraph explains the avoidance.",
          explanation: "The passage says some species avoid former roadbeds because cleared strips remain more exposed."
        },
        {
          stem: "The author's attitude toward road removal is best described as",
          choices: ["qualified support", "total rejection", "uncritical enthusiasm", "nostalgic regret", "legal concern"],
          answer: "qualified support",
          hint: "The author says the practice is not pointless but needs careful evaluation.",
          explanation: "The author supports road removal conditionally, with attention to evidence and species differences."
        },
        {
          stem: "Which TWO points are supported by the passage?",
          type: "multiple",
          choices: ["Former roadbeds can affect species differently.", "A single continuity measure may be too crude.", "Road removal always prevents animal movement.", "All animals quickly reuse former roads.", "Exposure can remain after roads are removed."],
          answer: ["Former roadbeds can affect species differently.", "A single continuity measure may be too crude."],
          maxSelections: 2,
          hint: "Choose claims that reflect the author's qualified view.",
          explanation: "The passage says responses vary by species and criticizes judging restoration by one continuity measure."
        }
      ]
    },
    {
      passage: [
        "In studying nineteenth-century factory workers, historians often rely on wage ledgers because such records are abundant and quantifiable. Yet ledgers can make labor history look more orderly than it was. They rarely show informal bargaining, family strategies, or the reasons workers left one employer for another.",
        "Oral histories and letters can help fill these gaps, but they introduce difficulties of their own. Memories may be selective, and letters usually survive unevenly. The strongest accounts therefore combine sources whose weaknesses do not all point in the same direction."
      ],
      questions: [
        {
          stem: "The passage is primarily concerned with",
          choices: ["the need to combine imperfect historical sources", "the superiority of wage ledgers over letters", "the disappearance of factory employment", "the accuracy of all oral histories", "the causes of nineteenth-century wage growth"],
          answer: "the need to combine imperfect historical sources",
          hint: "Both paragraphs discuss strengths and limits of different sources.",
          explanation: "The author argues that different sources reveal different things and should be combined."
        },
        {
          stem: "According to the passage, wage ledgers may be limited because they",
          choices: ["omit informal bargaining and motives for job changes", "were never kept by factory owners", "exaggerate the survival of letters", "record only family strategies", "make wages impossible to quantify"],
          answer: "omit informal bargaining and motives for job changes",
          hint: "The first paragraph lists what ledgers rarely show.",
          explanation: "The passage says ledgers rarely show informal bargaining, family strategies, or reasons for leaving an employer."
        },
        {
          stem: "The phrase 'do not all point in the same direction' most nearly means that the sources",
          choices: ["have different limitations", "come from one archive", "support identical conclusions", "were written by employers", "avoid numerical evidence"],
          answer: "have different limitations",
          hint: "The author is discussing source weaknesses.",
          explanation: "The phrase means historians should combine sources with different kinds of weaknesses."
        },
        {
          stem: "Which TWO source types does the passage identify as useful but imperfect?",
          type: "multiple",
          choices: ["wage ledgers", "oral histories", "factory blueprints", "newspaper advertisements", "census maps"],
          answer: ["wage ledgers", "oral histories"],
          maxSelections: 2,
          hint: "Both paragraphs name source types and their limits.",
          explanation: "The passage discusses limitations of wage ledgers and oral histories as historical evidence."
        }
      ]
    },
    {
      passage: [
        "Benchmarks for machine-learning systems often reward performance on standardized data sets. Such tests are useful because they make comparison possible, but they can also narrow research. When a benchmark becomes prestigious, teams may optimize for that test even if the resulting system performs poorly in messier real-world settings.",
        "This is not an argument against benchmarks. Rather, it is an argument for regularly revising them and for reporting failures outside the benchmark environment."
      ],
      questions: [
        {
          stem: "The passage's main point is that benchmarks",
          choices: ["are useful but can distort research incentives", "should be abandoned in technical fields", "always predict real-world performance", "make comparison impossible", "are valuable only when never revised"],
          answer: "are useful but can distort research incentives",
          hint: "The author grants value and then names a risk.",
          explanation: "The author says benchmarks enable comparison but may encourage teams to optimize too narrowly."
        },
        {
          stem: "What remedy does the author suggest?",
          choices: ["revising benchmarks and reporting non-benchmark failures", "using only messy real-world data", "ending standardized comparison", "hiding test results from researchers", "rewarding speed over accuracy"],
          answer: "revising benchmarks and reporting non-benchmark failures",
          hint: "The final sentence provides the recommendation.",
          explanation: "The author calls for regular benchmark revision and reporting failures outside benchmark settings."
        },
        {
          stem: "The author's attitude toward standardized data sets is",
          choices: ["balanced", "dismissive", "reverent", "nostalgic", "indifferent"],
          answer: "balanced",
          hint: "The author sees both usefulness and risk.",
          explanation: "The passage gives a balanced assessment: standardized data sets help comparison but may narrow research."
        },
        {
          stem: "Which TWO practices would best address the concern described in the passage?",
          type: "multiple",
          choices: ["updating benchmarks periodically", "reporting failures outside benchmark conditions", "optimizing only for prestigious tests", "avoiding comparisons between systems", "using one permanent data set"],
          answer: ["updating benchmarks periodically", "reporting failures outside benchmark conditions"],
          maxSelections: 2,
          hint: "The last sentence gives both practices.",
          explanation: "The author recommends revising benchmarks and reporting failures beyond the benchmark environment."
        }
      ]
    },
    {
      passage: [
        "Pigments in ancient murals can reveal trade networks, but only if scholars distinguish local imitation from imported material. A blue pigment found far from its known mineral source may indicate commerce; however, artisans sometimes produced visually similar colors with local ingredients.",
        "Chemical analysis has therefore changed the questions art historians ask. Instead of treating color as merely stylistic, researchers increasingly use it as evidence about technology, exchange, and workshop practice."
      ],
      questions: [
        {
          stem: "The passage suggests that chemical analysis helps scholars",
          choices: ["distinguish imported pigments from local imitations", "prove that all blue pigments were traded", "ignore workshop practice", "date every mural precisely", "replace art history with geology"],
          answer: "distinguish imported pigments from local imitations",
          hint: "The first paragraph states the central distinction.",
          explanation: "The author says trade conclusions require distinguishing local imitation from imported material."
        },
        {
          stem: "Why might a blue pigment far from its mineral source not prove trade?",
          choices: ["Local artisans may have made a similar color.", "Blue pigments were never used in murals.", "Chemical analysis cannot identify minerals.", "Trade networks avoided mineral sources.", "Workshop practice left no evidence."],
          answer: "Local artisans may have made a similar color.",
          hint: "The first paragraph gives a caution.",
          explanation: "The passage says artisans sometimes produced visually similar colors with local ingredients."
        },
        {
          stem: "The passage mainly discusses a shift from seeing color as stylistic to seeing it as",
          choices: ["historical evidence", "aesthetic error", "literary symbolism", "museum decoration", "economic waste"],
          answer: "historical evidence",
          hint: "The last sentence names what color can provide evidence about.",
          explanation: "Researchers use pigment color as evidence about technology, exchange, and workshop practice."
        }
      ]
    },
    {
      passage: [
        "River restoration projects often measure success by the return of native fish. That metric is important, but it can miss earlier signs of recovery. Insects that live on the riverbed may respond quickly to improved water quality, long before fish populations are large enough to detect reliably.",
        "For this reason, some ecologists favor a layered assessment: chemical measures, insect communities, plant cover, and fish counts together provide a more sensitive picture than any single indicator."
      ],
      questions: [
        {
          stem: "The passage mainly recommends",
          choices: ["using multiple indicators to assess river restoration", "counting only native fish", "delaying all assessment until fish return", "ignoring chemical measures", "favoring plants over insects"],
          answer: "using multiple indicators to assess river restoration",
          hint: "The second paragraph gives the recommendation.",
          explanation: "The author supports a layered assessment using several kinds of evidence."
        },
        {
          stem: "According to the passage, riverbed insects are useful because they may",
          choices: ["respond quickly to improved water quality", "replace native fish permanently", "make chemical testing unnecessary", "prevent plant growth", "be easier to count than plants in every river"],
          answer: "respond quickly to improved water quality",
          hint: "The first paragraph explains why insects matter.",
          explanation: "The passage says insects may respond quickly to improved water quality."
        },
        {
          stem: "The word 'sensitive' in the final sentence most nearly means",
          choices: ["able to detect subtle change", "easily offended", "politically controversial", "unusually expensive", "based on emotion"],
          answer: "able to detect subtle change",
          hint: "The assessment notices recovery signs that one indicator might miss.",
          explanation: "Here 'sensitive' means responsive to subtle evidence of change."
        }
      ]
    },
    {
      passage: [
        "A composer's surviving manuscripts can tempt scholars to treat revisions as a map of artistic intention. Crossed-out notes and rewritten passages seem to show the path from uncertainty to final design. But manuscripts also record accidents: shortages of paper, copyist errors, and changes made for a particular performance space.",
        "The challenge is not to stop studying revisions. It is to avoid assuming that every alteration reflects purely aesthetic choice."
      ],
      questions: [
        {
          stem: "The passage warns scholars against assuming that",
          choices: ["every manuscript change reflects artistic intention", "revisions are never worth studying", "copyists never made errors", "performances did not affect musical works", "final versions are impossible to identify"],
          answer: "every manuscript change reflects artistic intention",
          hint: "The final sentence states the warning.",
          explanation: "The author cautions that not every alteration is a purely aesthetic choice."
        },
        {
          stem: "Which example is mentioned as a non-aesthetic reason for revision?",
          choices: ["a shortage of paper", "a change in musical taste", "a critic's review", "a publisher's advertisement", "a lost instrument"],
          answer: "a shortage of paper",
          hint: "The first paragraph lists accidental factors.",
          explanation: "The passage names shortages of paper as one accidental factor recorded in manuscripts."
        },
        {
          stem: "The author's position on studying revisions is best described as",
          choices: ["supportive but cautious", "wholly dismissive", "uncritically admiring", "mainly biographical", "hostile to manuscript evidence"],
          answer: "supportive but cautious",
          hint: "The author says not to stop studying revisions, but to avoid a bad assumption.",
          explanation: "The author values revision study while urging caution about interpretation."
        }
      ]
    },
    {
      passage: [
        "Some algae that darken glacier surfaces have drawn attention because darker ice absorbs more sunlight and melts faster. Yet scientists disagree about how large this effect is compared with air temperature, snowfall, and dust. The algae are part of the melt system, but they are not necessarily its dominant cause.",
        "The debate illustrates a broader point about climate feedbacks: identifying a mechanism is only the first step. Researchers must also estimate its scale relative to other mechanisms operating at the same time."
      ],
      questions: [
        {
          stem: "The passage mainly emphasizes the need to",
          choices: ["measure a mechanism's relative importance", "deny that algae affect glaciers", "study algae instead of temperature", "treat dust as irrelevant", "assume every feedback is dominant"],
          answer: "measure a mechanism's relative importance",
          hint: "The final sentence generalizes the lesson.",
          explanation: "The author says researchers must estimate a mechanism's scale relative to others."
        },
        {
          stem: "Why do the algae matter to glacier melt?",
          choices: ["They darken ice, increasing sunlight absorption.", "They increase snowfall.", "They remove dust from ice.", "They cool the surrounding air.", "They prevent all feedbacks."],
          answer: "They darken ice, increasing sunlight absorption.",
          hint: "The first sentence gives the causal link.",
          explanation: "The passage says darker ice absorbs more sunlight and melts faster."
        },
        {
          stem: "The author would most likely agree that identifying a feedback mechanism is",
          choices: ["insufficient without estimating its scale", "a reason to ignore other causes", "the final step in climate research", "impossible when several causes operate", "less useful than naming a dominant cause immediately"],
          answer: "insufficient without estimating its scale",
          hint: "The second paragraph contrasts identifying with estimating.",
          explanation: "The author says identifying a mechanism is only the first step."
        }
      ]
    },
    {
      passage: [
        "Literal translation is sometimes criticized as wooden, but the criticism assumes that fluency is always the translator's highest duty. In legal, religious, or philosophical texts, preserving awkwardness may be useful when the original wording carries technical weight.",
        "The issue is therefore not whether literal translation is good or bad in the abstract. A translator must decide what kind of fidelity the text requires: fidelity to ordinary readability, to specialized terminology, or to the strangeness of the original style."
      ],
      questions: [
        {
          stem: "The passage's central claim is that translation strategy should depend on",
          choices: ["the kind of fidelity required by the text", "the translator's desire to sound modern", "a universal preference for fluency", "the age of the original author", "avoiding all specialized terminology"],
          answer: "the kind of fidelity required by the text",
          hint: "The final sentence names the decision.",
          explanation: "The author says translators must decide what type of fidelity the text requires."
        },
        {
          stem: "In which case might awkwardness be useful?",
          choices: ["when original wording has technical weight", "when the translator wants to shorten the text", "when readers know nothing about the topic", "when ordinary readability is the only goal", "when the original style is irrelevant"],
          answer: "when original wording has technical weight",
          hint: "The first paragraph gives examples.",
          explanation: "The passage says preserving awkwardness may help when original wording carries technical weight."
        },
        {
          stem: "The author rejects which assumption?",
          choices: ["Fluency is always the translator's highest duty.", "Some texts contain specialized terminology.", "Translation involves choices.", "Literal translation can be criticized.", "Style can be strange."],
          answer: "Fluency is always the translator's highest duty.",
          hint: "The first sentence directly names the assumption.",
          explanation: "The author challenges the assumption that fluency is always the translator's highest duty."
        }
      ]
    }
  ]
};

tcItems.push(...originalQuestionBankAdditions.tcItems);
seItems.push(...originalQuestionBankAdditions.seItems);
rcPassages.push(...originalQuestionBankAdditions.rcPassages);

const pdfInferredQuestionBankAdditions = {
  tcItems: [
    {
      stem: "The experiment's results were not ___; two laboratories reported the effect, while three others found no measurable change.",
      choices: ["conclusive", "equivocal", "mechanical", "irrelevant", "ornamental"],
      answer: "conclusive",
      hint: "The mixed replication record means the results do not settle the question.",
      explanation: "'Conclusive' means settling an issue; the mixed results prevent that."
    },
    {
      stem: "The candidate's answer was ___, acknowledging the tradeoff without committing to either side of the policy dispute.",
      choices: ["noncommittal", "vehement", "meticulous", "redundant", "didactic"],
      answer: "noncommittal",
      hint: "The answer avoids taking a clear position.",
      explanation: "'Noncommittal' means not expressing a definite opinion or decision."
    },
    {
      stem: "Because the model ignored transportation costs, its prediction of regional prices was ___ despite its elegant mathematics.",
      choices: ["defective", "prescient", "decorous", "lavish", "impartial"],
      answer: "defective",
      hint: "A missing real-world cost weakens the model.",
      explanation: "'Defective' means flawed, which fits a model that omits a relevant cost."
    },
    {
      stem: "The memoir's restraint is striking: even its most painful scenes are rendered in prose that is ___ rather than overwrought.",
      choices: ["spare", "maudlin", "volatile", "grandiose", "opaque"],
      answer: "spare",
      hint: "The contrast is with emotional excess.",
      explanation: "'Spare' means restrained and plain, the opposite of overwrought."
    },
    {
      stem: "The policy's benefits were ___, appearing only after several years and only in neighborhoods that had received consistent funding.",
      choices: ["contingent", "universal", "instantaneous", "imaginary", "inevitable"],
      answer: "contingent",
      hint: "The benefits depend on time and funding conditions.",
      explanation: "'Contingent' means dependent on particular conditions."
    },
    {
      stem: "Rather than ___ the earlier theory, the new evidence refined it, showing where its assumptions held and where they failed.",
      choices: ["repudiating", "clarifying", "supporting", "illustrating", "qualifying"],
      answer: "repudiating",
      hint: "The sentence says the evidence refined the theory instead of rejecting it.",
      explanation: "'Repudiating' means rejecting, which contrasts with refining."
    },
    {
      stem: "The architect's public explanation was intentionally ___, omitting technical details that would have distracted from the project's main civic purpose.",
      choices: ["accessible", "arcane", "evasive", "polemical", "haphazard"],
      answer: "accessible",
      hint: "Omitting unnecessary technical detail can make an explanation easier to understand.",
      explanation: "'Accessible' means understandable to a broad audience."
    },
    {
      stem: "The committee's enthusiasm was ___ by the realization that the plan required more staff than the budget allowed.",
      choices: ["tempered", "magnified", "concealed", "validated", "standardized"],
      answer: "tempered",
      hint: "The budget problem moderates the enthusiasm.",
      explanation: "'Tempered' means softened or moderated."
    },
    {
      stem: "The article's conclusion is ___: it follows logically from the evidence, but it applies only to a narrow group of cases.",
      choices: ["valid", "illicit", "sentimental", "erratic", "opaque"],
      answer: "valid",
      hint: "A conclusion can be logically sound even if its scope is limited.",
      explanation: "'Valid' means logically well grounded; the second clause limits scope without denying logic."
    },
    {
      stem: "The mayor's promise to cut taxes while expanding every public service sounded ___ to budget analysts.",
      choices: ["implausible", "frugal", "measured", "orthodox", "succinct"],
      answer: "implausible",
      hint: "The promise combines lower revenue with higher spending.",
      explanation: "'Implausible' means not believable."
    },
    {
      stem: "Although the data set was large, it was not ___: almost all participants came from the same age group and city.",
      choices: ["representative", "copious", "quantitative", "recent", "documented"],
      answer: "representative",
      hint: "A large data set can still fail to reflect the broader population.",
      explanation: "'Representative' means reflecting the relevant population or group."
    },
    {
      stem: "The critic's objection was not to the novelist's ambition but to the book's ___, its tendency to explain every symbol twice.",
      choices: ["didacticism", "subtlety", "brevity", "coherence", "originality"],
      answer: "didacticism",
      hint: "Explaining every symbol too explicitly sounds overly instructional.",
      explanation: "'Didacticism' is an instructive or moralizing quality, often too obvious in art."
    }
  ],
  seItems: [
    {
      stem: "The argument was ___, depending on an assumption the author never defended.",
      choices: ["tenuous", "flimsy", "decisive", "airtight", "ornate", "transparent"],
      answer: ["tenuous", "flimsy"],
      hint: "An undefended assumption makes the argument weak.",
      explanation: "'Tenuous' and 'flimsy' both describe weak support."
    },
    {
      stem: "The professor's explanation was ___, turning a difficult proof into a sequence of manageable steps.",
      choices: ["lucid", "pellucid", "cryptic", "labyrinthine", "hostile", "diffident"],
      answer: ["lucid", "pellucid"],
      hint: "The explanation made something hard clear.",
      explanation: "'Lucid' and 'pellucid' both mean clear."
    },
    {
      stem: "The proposal was ___, designed to satisfy the immediate constraint rather than an ideal theory.",
      choices: ["pragmatic", "practical", "utopian", "dogmatic", "ornamental", "evasive"],
      answer: ["pragmatic", "practical"],
      hint: "The proposal focuses on workable constraints.",
      explanation: "'Pragmatic' and 'practical' both fit a solution based on what works."
    },
    {
      stem: "The witness was ___, giving short answers and volunteering no additional details.",
      choices: ["reticent", "reserved", "loquacious", "expansive", "florid", "effusive"],
      answer: ["reticent", "reserved"],
      hint: "The witness says little.",
      explanation: "'Reticent' and 'reserved' both describe reluctance to speak freely."
    },
    {
      stem: "The new evidence was ___, forcing researchers to reconsider a theory they had long treated as settled.",
      choices: ["disruptive", "unsettling", "confirmatory", "irrelevant", "decorative", "routine"],
      answer: ["disruptive", "unsettling"],
      hint: "The evidence disturbs an accepted view.",
      explanation: "'Disruptive' and 'unsettling' both fit evidence that disturbs settled assumptions."
    },
    {
      stem: "The writer's style is ___, avoiding excess even when the subject is dramatic.",
      choices: ["restrained", "understated", "flamboyant", "overwrought", "extravagant", "baroque"],
      answer: ["restrained", "understated"],
      hint: "The style avoids excess.",
      explanation: "'Restrained' and 'understated' both describe controlled, moderate expression."
    },
    {
      stem: "The committee found the claim ___ because it rested on anonymous testimony and missing records.",
      choices: ["dubious", "suspect", "compelling", "unassailable", "candid", "methodical"],
      answer: ["dubious", "suspect"],
      hint: "Weak evidence makes the claim doubtful.",
      explanation: "'Dubious' and 'suspect' both mean questionable."
    },
    {
      stem: "The critic admired the film's ___, noting that every scene advanced the central conflict.",
      choices: ["economy", "efficiency", "diffuseness", "redundancy", "opacity", "verbosity"],
      answer: ["economy", "efficiency"],
      hint: "Nothing is wasted in the film.",
      explanation: "'Economy' and 'efficiency' both fit a work that uses no unnecessary material."
    },
    {
      stem: "The organization's rules were ___, applied differently depending on who made the request.",
      choices: ["capricious", "arbitrary", "consistent", "equitable", "transparent", "judicious"],
      answer: ["capricious", "arbitrary"],
      hint: "Different treatment without a clear principle is arbitrary.",
      explanation: "'Capricious' and 'arbitrary' both describe inconsistent, unprincipled decisions."
    },
    {
      stem: "The scholar was ___ about the manuscript's date, using cautious language because the physical evidence was incomplete.",
      choices: ["circumspect", "guarded", "categorical", "reckless", "dogmatic", "jubilant"],
      answer: ["circumspect", "guarded"],
      hint: "Incomplete evidence requires caution.",
      explanation: "'Circumspect' and 'guarded' both describe careful, qualified judgment."
    }
  ],
  rcPassages: [
    {
      passage: [
        "Averages can conceal patterns in educational data. If a tutoring program raises scores for students who were already near proficiency but has little effect on students far below grade level, the overall mean may look encouraging while the distribution tells a more complicated story.",
        "For that reason, some researchers argue that program evaluations should report not only average gains but also changes across the score range. A policy that improves the mean without helping the students it was designed to serve may be statistically positive and educationally disappointing at the same time."
      ],
      questions: [
        {
          stem: "The passage mainly argues that program evaluations should",
          choices: ["look beyond average gains", "ignore test scores entirely", "measure only students near proficiency", "rank schools by a single statistic", "avoid distributional analysis"],
          answer: "look beyond average gains",
          hint: "The second paragraph states the recommendation.",
          explanation: "The author argues that averages should be supplemented by information about changes across the score range."
        },
        {
          stem: "According to the passage, an average gain may be misleading when",
          choices: ["improvement is concentrated among students not most in need", "all students improve by the same amount", "the test has no numerical scale", "the policy has no stated goal", "researchers report too many distributions"],
          answer: "improvement is concentrated among students not most in need",
          hint: "The first paragraph gives this example.",
          explanation: "The program can raise the mean by helping near-proficient students while leaving lower-scoring students largely unaffected."
        },
        {
          stem: "Which TWO descriptions could apply to the same policy in the passage's framework?",
          type: "multiple",
          choices: ["statistically positive", "educationally disappointing", "impossible to measure", "universally effective", "unrelated to student scores"],
          answer: ["statistically positive", "educationally disappointing"],
          maxSelections: 2,
          hint: "The final sentence explicitly pairs these descriptions.",
          explanation: "The author says a policy can improve the mean while disappointing educationally."
        }
      ]
    },
    {
      passage: [
        "In probability questions, students often count the desired outcomes but forget to define the full set of possible outcomes. This error is especially common when a problem involves restrictions, because the restrictions may change both the numerator and the denominator.",
        "A reliable approach is to describe the sample space before doing any arithmetic. Once the possible outcomes are explicit, the calculation usually becomes a matter of organized counting rather than guesswork."
      ],
      questions: [
        {
          stem: "The passage recommends that students first",
          choices: ["define the complete sample space", "estimate the final probability", "ignore restrictions temporarily", "memorize all formulas", "count only favorable outcomes"],
          answer: "define the complete sample space",
          hint: "The second paragraph names the reliable approach.",
          explanation: "The author says to describe the sample space before doing arithmetic."
        },
        {
          stem: "Why can restrictions cause errors?",
          choices: ["They may change both favorable and possible outcomes.", "They always make the probability zero.", "They eliminate the need for counting.", "They apply only to geometry questions.", "They make every outcome equally likely."],
          answer: "They may change both favorable and possible outcomes.",
          hint: "The first paragraph explains the trap.",
          explanation: "Restrictions can affect both the numerator and denominator of the probability."
        },
        {
          stem: "The author's tone is best described as",
          choices: ["practical", "dismissive", "nostalgic", "satirical", "alarmed"],
          answer: "practical",
          hint: "The passage gives a workable strategy for avoiding an error.",
          explanation: "The author offers a practical method rather than merely criticizing students."
        }
      ]
    },
    {
      passage: [
        "A line graph can make a small change look dramatic if the vertical axis begins near the data values rather than at zero. This design choice is not always deceptive: when the goal is to compare small fluctuations, a compressed axis can be useful.",
        "The difficulty is that readers often interpret steepness visually before checking scale. Responsible graph reading therefore requires two questions: what pattern is visible, and how much numerical change does that pattern actually represent?"
      ],
      questions: [
        {
          stem: "The passage's central claim is that readers should",
          choices: ["interpret graphs by checking both pattern and scale", "reject all graphs with compressed axes", "prefer tables to every graph", "assume steep lines show large changes", "ignore visual trends"],
          answer: "interpret graphs by checking both pattern and scale",
          hint: "The final sentence gives the two questions readers should ask.",
          explanation: "The author says responsible graph reading considers both visible pattern and actual numerical change."
        },
        {
          stem: "According to the passage, a compressed vertical axis can be useful when",
          choices: ["small fluctuations are being compared", "the graph has no numerical labels", "readers should ignore scale", "the data values are all zero", "the designer wants to hide the pattern"],
          answer: "small fluctuations are being compared",
          hint: "The first paragraph qualifies the criticism.",
          explanation: "The author says a compressed axis can help compare small fluctuations."
        },
        {
          stem: "The passage warns that readers may first respond to",
          choices: ["visual steepness", "footnote wording", "the color of the line", "the source of funding", "the number of variables"],
          answer: "visual steepness",
          hint: "The second paragraph describes what readers interpret before checking scale.",
          explanation: "Readers often interpret steepness visually before checking the numerical scale."
        }
      ]
    },
    {
      passage: [
        "Function notation is sometimes intimidating because it looks like a new operation. In many GRE problems, however, f(x) simply means that a rule is being applied to an input. Confusion arises when students treat f(x + 2) as f(x) + 2 without checking the rule.",
        "The safer habit is substitution: replace every occurrence of the variable in the rule with the entire input expression. This habit also prevents errors in questions that combine functions with exponents or fractions."
      ],
      questions: [
        {
          stem: "The passage mainly explains",
          choices: ["a common function-notation error and a way to avoid it", "why functions are absent from standardized tests", "how to graph every function", "why f(x) always equals x", "a shortcut for avoiding substitution"],
          answer: "a common function-notation error and a way to avoid it",
          hint: "The first paragraph names the error; the second gives the safer habit.",
          explanation: "The author warns against treating f(x + 2) as f(x) + 2 and recommends full substitution."
        },
        {
          stem: "The safer habit described in the passage is to",
          choices: ["replace every variable occurrence with the entire input", "add the input after evaluating f(x)", "ignore exponents in the rule", "use only numerical inputs", "rewrite all functions as graphs"],
          answer: "replace every variable occurrence with the entire input",
          hint: "The second paragraph defines substitution.",
          explanation: "The passage says to replace every occurrence of the variable with the entire input expression."
        },
        {
          stem: "Which error would the author most likely warn against?",
          choices: ["assuming f(x + 2) equals f(x) + 2", "checking the rule before substituting", "using parentheses around an input", "evaluating a function at a number", "rewriting x^2 with an input squared"],
          answer: "assuming f(x + 2) equals f(x) + 2",
          hint: "The first paragraph gives this exact pattern as a trap.",
          explanation: "The passage identifies that assumption as a source of confusion."
        }
      ]
    },
    {
      passage: [
        "In reading-comprehension questions, a tempting answer often uses language from the passage while changing the logical relationship among ideas. For example, an author's concession may be recast as the author's main conclusion, or a described possibility may be presented as a certainty.",
        "Careful readers therefore track the role each statement plays. The important question is not simply whether an answer mentions a familiar phrase, but whether it preserves the author's logic."
      ],
      questions: [
        {
          stem: "The passage mainly advises readers to",
          choices: ["evaluate answer choices by logical role, not familiar wording", "choose answers that repeat passage language", "avoid answers containing concessions", "treat possibilities as certainties", "read only the first sentence of each paragraph"],
          answer: "evaluate answer choices by logical role, not familiar wording",
          hint: "The final sentence contrasts familiar phrases with preserved logic.",
          explanation: "The author says readers should check whether an answer preserves the author's logic."
        },
        {
          stem: "Which trap does the passage describe?",
          choices: ["turning a concession into a main conclusion", "using a passage's topic in an answer", "rejecting every answer with familiar words", "reading the answer choices before the passage", "identifying the author's logic"],
          answer: "turning a concession into a main conclusion",
          hint: "The first paragraph gives this as an example.",
          explanation: "The passage warns that answer choices may change a concession into the main conclusion."
        },
        {
          stem: "Which TWO answer-choice flaws are mentioned in the passage?",
          type: "multiple",
          choices: ["changing a concession into a conclusion", "turning a possibility into a certainty", "using unfamiliar vocabulary", "omitting all passage language", "including a numerical comparison"],
          answer: ["changing a concession into a conclusion", "turning a possibility into a certainty"],
          maxSelections: 2,
          hint: "Both examples appear in the first paragraph.",
          explanation: "The passage names both logical distortions as tempting-answer traps."
        }
      ]
    }
  ]
};

tcItems.push(...pdfInferredQuestionBankAdditions.tcItems);
seItems.push(...pdfInferredQuestionBankAdditions.seItems);
rcPassages.push(...pdfInferredQuestionBankAdditions.rcPassages);

const TEST_FOCUSES = [
  {
    label: "Mixed Quant foundations",
    description: "Balanced practice across quantitative comparison, algebra, geometry, probability, statistics, and data interpretation.",
    quantFocus: "mixed"
  },
  {
    label: "Geometry: lines and angles",
    description: "Extra focus on line intersections, vertical angles, supplementary angles, parallel lines, and slope.",
    quantFocus: "geometry-lines"
  },
  {
    label: "Geometry: triangles",
    description: "Extra focus on triangle inequality, similar triangles, coordinate-area graphs, right-triangle altitude, and equilateral area.",
    quantFocus: "geometry-triangles"
  },
  {
    label: "Geometry: 3D shapes",
    description: "Extra focus on nested solids, inscribed spheres, cylindrical cavities, surface area, volume, and space diagonals.",
    quantFocus: "geometry-3d"
  },
  {
    label: "Algebra and equations",
    description: "Extra focus on quadratic formulas, completing the square, polynomial factors, inequalities, functions, and sequences.",
    quantFocus: "algebra"
  },
  {
    label: "Arithmetic and percents",
    description: "Extra focus on ratios, unit conversions, probability, weighted averages, overlapping sets, and number properties.",
    quantFocus: "arithmetic"
  },
  {
    label: "Data and statistics",
    description: "Extra focus on two-way tables, graphs, percent change, averages, comparisons, and statistical spread.",
    quantFocus: "data"
  },
  {
    label: "Geometry mixed review",
    description: "Heavy geometry mix covering lines, angles, triangles, coordinate geometry, and 3D figures.",
    quantFocus: "geometry-mixed"
  },
  {
    label: "Advanced mixed review",
    description: "Balanced practice with harder algebra, probability, statistics, graph interpretation, 3D geometry, rates, ratios, and unit conversions.",
    quantFocus: "mixed"
  },
  {
    label: "Full review with geometry",
    description: "Full mixed test with additional geometry reminders across both Quant sections.",
    quantFocus: "geometry-mixed"
  }
];

const OFFICIAL_STYLE_TEST_FOCUSES = [
  {
    label: "Official-style mixed practice A",
    description: "Balanced GRE-style practice with no single topic focus: verbal reasoning, quantitative comparison, problem solving, data interpretation, and writing.",
    quantFocus: "mixed"
  },
  {
    label: "Official-style mixed practice B",
    description: "A general GRE-style test built to feel like a full exam section set rather than a targeted drill.",
    quantFocus: "mixed"
  },
  {
    label: "Official-style mixed practice C",
    description: "Mixed practice across the standard GRE question formats, with quantitative topics distributed across arithmetic, algebra, geometry, and data.",
    quantFocus: "mixed"
  },
  {
    label: "Official-style mixed practice D",
    description: "Full mixed GRE-style practice emphasizing realistic section balance instead of any one content area.",
    quantFocus: "mixed"
  },
  {
    label: "Official-style mixed practice E",
    description: "General GRE-style practice with varied verbal passages, vocabulary questions, quantitative comparisons, numeric entry, and data interpretation.",
    quantFocus: "mixed"
  }
];

const vocabularyWords = [
  {
    word: "baffled",
    part: "adj.",
    category: "Confusion and clarity",
    plain: "completely confused",
    meaning: "unable to understand something after thinking about it",
    greUse: "Often describes a person, committee, or researcher facing evidence that does not make sense.",
    example: "The researchers were baffled by the experiment's inconsistent results.",
    synonyms: ["perplexed", "puzzled", "bewildered"]
  },
  {
    word: "ambivalent",
    part: "adj.",
    category: "Tone and attitude",
    plain: "having mixed feelings",
    meaning: "uncertain because of simultaneous positive and negative reactions",
    greUse: "Look for sentences that praise one part of an idea but doubt another part.",
    example: "The board was ambivalent about the proposal: useful in theory, costly in practice.",
    synonyms: ["mixed", "conflicted", "uncertain"]
  },
  {
    word: "austere",
    part: "adj.",
    category: "Style and expression",
    plain: "very plain or strict",
    meaning: "severe, simple, or without decoration",
    greUse: "Can describe a style, personality, room, budget, or argument that has little extra ornament.",
    example: "The museum's austere design used white walls and almost no decoration.",
    synonyms: ["plain", "severe", "minimal"]
  },
  {
    word: "candid",
    part: "adj.",
    category: "Tone and attitude",
    plain: "honest and direct",
    meaning: "truthful, open, and not hiding unpleasant facts",
    greUse: "Often positive when a speaker admits weaknesses or corrects details.",
    example: "Her candid report named both the project's successes and its failures.",
    synonyms: ["frank", "forthright", "honest"]
  },
  {
    word: "circumspect",
    part: "adj.",
    category: "Evidence and logic",
    plain: "careful before acting",
    meaning: "cautious and attentive to possible risks",
    greUse: "Common when early evidence is incomplete or a claim needs qualification.",
    example: "The scientist was circumspect, calling the result promising but preliminary.",
    synonyms: ["cautious", "prudent", "wary"]
  },
  {
    word: "catholic",
    part: "adj.",
    category: "Precision traps",
    plain: "broad and wide-ranging",
    meaning: "including many different types, interests, or areas",
    greUse: "Usually lowercase in this sense. Watch for lists that show breadth across categories.",
    example: "Her catholic reading habits ranged from medieval theology to contemporary science fiction.",
    synonyms: ["broad", "wide-ranging", "comprehensive"]
  },
  {
    word: "checkered",
    part: "adj.",
    category: "Precision traps",
    plain: "mixed, with good and bad parts",
    meaning: "marked by varied, often troubled, events or results",
    greUse: "Often describes a record, history, career, or past that is neither wholly good nor wholly bad.",
    example: "The agency had a checkered record: several successes, but several costly failures.",
    synonyms: ["mixed", "uneven", "varied"]
  },
  {
    word: "contrived",
    part: "adj.",
    category: "Evidence and logic",
    plain: "fake or forced",
    meaning: "artificially arranged rather than natural or convincing",
    greUse: "Frequently negative for plots, explanations, compromises, or examples that feel too convenient.",
    example: "The ending felt contrived because every conflict vanished at once.",
    synonyms: ["forced", "artificial", "staged"]
  },
  {
    word: "cryptic",
    part: "adj.",
    category: "Confusion and clarity",
    plain: "mysterious and unclear",
    meaning: "difficult to interpret because it gives too little information",
    greUse: "Watch for clues such as vague remarks, hidden meanings, or unanswered questions.",
    example: "The manager's cryptic message left the team unsure what to do next.",
    synonyms: ["obscure", "enigmatic", "puzzling"]
  },
  {
    word: "diffident",
    part: "adj.",
    category: "Character and behavior",
    plain: "shy and not confident",
    meaning: "modest or hesitant because of a lack of self-confidence",
    greUse: "Opposes assertive, bold, confident, and forceful.",
    example: "Although brilliant, the diffident student rarely volunteered answers.",
    synonyms: ["shy", "timid", "self-effacing"]
  },
  {
    word: "dogmatic",
    part: "adj.",
    category: "Tone and attitude",
    plain: "stubbornly certain",
    meaning: "expressing opinions as unquestionable truth",
    greUse: "Negative when someone refuses to revise a belief despite evidence.",
    example: "The essay criticizes dogmatic leaders who treat disagreement as ignorance.",
    synonyms: ["rigid", "doctrinaire", "unyielding"]
  },
  {
    word: "economical",
    part: "adj.",
    category: "Precision traps",
    plain: "efficient and concise",
    meaning: "using no more words, effort, or resources than necessary",
    greUse: "In writing or criticism contexts, it often means concise, not cheap.",
    example: "Her economical explanation clarified the theory in a single paragraph.",
    synonyms: ["concise", "efficient", "spare"]
  },
  {
    word: "dubious",
    part: "adj.",
    category: "Evidence and logic",
    plain: "doubtful",
    meaning: "not fully believable or reliable",
    greUse: "Often appears with weak evidence, questionable sources, or suspicious claims.",
    example: "The conclusion was dubious because the sample included only ten volunteers.",
    synonyms: ["questionable", "suspect", "doubtful"]
  },
  {
    word: "equivocal",
    part: "adj.",
    category: "Confusion and clarity",
    plain: "unclear or double-sided",
    meaning: "open to more than one interpretation",
    greUse: "Useful when evidence does not clearly support one side.",
    example: "The results were equivocal, helping neither theory decisively.",
    synonyms: ["ambiguous", "uncertain", "inconclusive"]
  },
  {
    word: "fastidious",
    part: "adj.",
    category: "Character and behavior",
    plain: "very picky and careful",
    meaning: "attentive to small details, sometimes excessively so",
    greUse: "Can be positive for precision or negative for fussiness.",
    example: "The editor was fastidious about punctuation and factual accuracy.",
    synonyms: ["meticulous", "particular", "exacting"]
  },
  {
    word: "discriminating",
    part: "adj.",
    category: "Precision traps",
    plain: "selective with good judgment",
    meaning: "able to notice fine differences and choose carefully",
    greUse: "In GRE contexts, this often means discerning rather than unfairly biased.",
    example: "The curator was discriminating, accepting only works that advanced the exhibition's argument.",
    synonyms: ["selective", "discerning", "judicious"]
  },
  {
    word: "haphazard",
    part: "adj.",
    category: "Evidence and logic",
    plain: "without a clear plan",
    meaning: "random, careless, or poorly organized",
    greUse: "Often contrasts with systematic, deliberate, or methodical.",
    example: "The haphazard survey design made the findings difficult to trust.",
    synonyms: ["random", "careless", "disorganized"]
  },
  {
    word: "inscrutable",
    part: "adj.",
    category: "Confusion and clarity",
    plain: "impossible to understand",
    meaning: "not easily interpreted, read, or explained",
    greUse: "Often describes motives, expressions, behavior, or data that resist interpretation.",
    example: "The judge's inscrutable expression gave no hint of her decision.",
    synonyms: ["unreadable", "mysterious", "opaque"]
  },
  {
    word: "laconic",
    part: "adj.",
    category: "Style and expression",
    plain: "using very few words",
    meaning: "brief in speech or writing, sometimes to the point of seeming rude",
    greUse: "Opposes verbose, wordy, expansive, and loquacious.",
    example: "His laconic reply, 'Maybe,' revealed almost nothing.",
    synonyms: ["terse", "brief", "concise"]
  },
  {
    word: "lucid",
    part: "adj.",
    category: "Confusion and clarity",
    plain: "clear and easy to understand",
    meaning: "expressed plainly and coherently",
    greUse: "Often positive for explanations of difficult ideas.",
    example: "The professor gave a lucid explanation of a complicated theory.",
    synonyms: ["clear", "coherent", "intelligible"]
  },
  {
    word: "meticulous",
    part: "adj.",
    category: "Character and behavior",
    plain: "extremely careful",
    meaning: "showing close attention to every detail",
    greUse: "Positive when accuracy, evidence, or careful measurement matters.",
    example: "The lab's meticulous records made the study easy to replicate.",
    synonyms: ["careful", "thorough", "precise"]
  },
  {
    word: "onerous",
    part: "adj.",
    category: "Change and intensity",
    plain: "burdensome",
    meaning: "difficult to do because it requires much effort, time, or responsibility",
    greUse: "Common for rules, taxes, duties, processes, or requirements.",
    example: "The new reporting rule was too onerous for small clinics.",
    synonyms: ["burdensome", "demanding", "taxing"]
  },
  {
    word: "opaque",
    part: "adj.",
    category: "Confusion and clarity",
    plain: "hard to understand",
    meaning: "unclear, not transparent, or difficult to see through",
    greUse: "Can describe writing, policies, motives, or literal materials.",
    example: "The policy was opaque, so applicants could not predict how decisions were made.",
    synonyms: ["unclear", "obscure", "murky"]
  },
  {
    word: "pedestrian",
    part: "adj.",
    category: "Precision traps",
    plain: "ordinary and dull",
    meaning: "lacking imagination, freshness, or distinction",
    greUse: "Often describes prose, arguments, examples, or taste; it usually does not mean a person walking.",
    example: "The article's evidence was sound, but its conclusions were pedestrian.",
    synonyms: ["ordinary", "commonplace", "unimaginative"]
  },
  {
    word: "perfunctory",
    part: "adj.",
    category: "Character and behavior",
    plain: "done without real care",
    meaning: "carried out as a routine duty with little interest or attention",
    greUse: "Negative for apologies, inspections, reviews, or greetings that feel automatic.",
    example: "The supervisor's perfunctory review missed several obvious errors.",
    synonyms: ["routine", "careless", "mechanical"]
  },
  {
    word: "pragmatic",
    part: "adj.",
    category: "Evidence and logic",
    plain: "practical",
    meaning: "focused on what works rather than on abstract theory",
    greUse: "Often contrasts with idealistic, theoretical, or dogmatic.",
    example: "The mayor took a pragmatic approach, choosing the plan that could be funded quickly.",
    synonyms: ["practical", "realistic", "workable"]
  },
  {
    word: "plastic",
    part: "adj.",
    category: "Precision traps",
    plain: "moldable or adaptable",
    meaning: "capable of being shaped, changed, or adapted",
    greUse: "Common in abstract contexts involving style, identity, memory, institutions, or behavior.",
    example: "The genre proved plastic enough to absorb elements of memoir, history, and criticism.",
    synonyms: ["malleable", "adaptable", "flexible"]
  },
  {
    word: "provocative",
    part: "adj.",
    category: "Tone and attitude",
    plain: "causing a strong reaction",
    meaning: "intended or likely to stir debate, anger, or interest",
    greUse: "Not always negative; it can mean intellectually stimulating.",
    example: "The book's provocative title attracted readers but overstated its argument.",
    synonyms: ["challenging", "stimulating", "controversial"]
  },
  {
    word: "recalcitrant",
    part: "adj.",
    category: "Character and behavior",
    plain: "stubbornly resistant",
    meaning: "refusing to obey, cooperate, or accept control",
    greUse: "Common for people, groups, problems, or materials that resist correction.",
    example: "The recalcitrant committee member blocked every compromise.",
    synonyms: ["stubborn", "defiant", "intractable"]
  },
  {
    word: "reticent",
    part: "adj.",
    category: "Character and behavior",
    plain: "not willing to speak",
    meaning: "reserved or reluctant to share thoughts and feelings",
    greUse: "Do not confuse with reluctant in general; reticent is usually about communication.",
    example: "The witness was reticent at first but later gave a detailed account.",
    synonyms: ["reserved", "quiet", "uncommunicative"]
  },
  {
    word: "shrewd",
    part: "adj.",
    category: "Evidence and logic",
    plain: "smart in a practical way",
    meaning: "showing sharp judgment, especially about people or strategy",
    greUse: "Often positive when someone handles competing interests well.",
    example: "The negotiator made a shrewd concession that won support from both sides.",
    synonyms: ["astute", "clever", "discerning"]
  },
  {
    word: "spurious",
    part: "adj.",
    category: "Evidence and logic",
    plain: "false or not genuine",
    meaning: "appearing valid but actually wrong, fake, or misleading",
    greUse: "Very common with correlation, evidence, logic, or claims.",
    example: "The study warned that the apparent correlation might be spurious.",
    synonyms: ["false", "bogus", "misleading"]
  },
  {
    word: "tenuous",
    part: "adj.",
    category: "Evidence and logic",
    plain: "weak or thin",
    meaning: "not strong, certain, or well supported",
    greUse: "Often describes connections, arguments, evidence, or control.",
    example: "The author's link between diet and productivity was tenuous.",
    synonyms: ["weak", "slight", "fragile"]
  },
  {
    word: "ubiquitous",
    part: "adj.",
    category: "Change and intensity",
    plain: "found everywhere",
    meaning: "present, seen, or encountered in many places",
    greUse: "Often used for technologies, trends, habits, or species that seem widespread.",
    example: "Smartphones have become ubiquitous in urban life.",
    synonyms: ["everywhere", "widespread", "pervasive"]
  },
  {
    word: "unsubstantiated",
    part: "adj.",
    category: "Evidence and logic",
    plain: "not supported by evidence",
    meaning: "claimed without proof or adequate support",
    greUse: "Important for weakening claims in Text Completion and Reading Comprehension.",
    example: "The report rejected several unsubstantiated accusations.",
    synonyms: ["unsupported", "unproven", "unverified"]
  },
  {
    word: "qualified",
    part: "adj.",
    category: "Precision traps",
    plain: "limited by reservations",
    meaning: "not complete or absolute because conditions or doubts have been added",
    greUse: "For praise, support, approval, or agreement, 'qualified' often means partial, not credentialed.",
    example: "The committee gave the plan qualified approval, endorsing its goal but doubting its cost estimates.",
    synonyms: ["limited", "conditional", "reserved"]
  },
  {
    word: "telling",
    part: "adj.",
    category: "Precision traps",
    plain: "revealing and significant",
    meaning: "showing something important clearly, often unintentionally",
    greUse: "Look for evidence that exposes a motive, weakness, cause, or hidden pattern.",
    example: "The author's omission of recent evidence was a telling weakness.",
    synonyms: ["revealing", "significant", "indicative"]
  },
  {
    word: "venerable",
    part: "adj.",
    category: "Tone and attitude",
    plain: "respected because old",
    meaning: "deserving respect because of age, tradition, or long achievement",
    greUse: "Often positive for institutions, traditions, scholars, or works.",
    example: "The venerable journal had shaped the field for more than a century.",
    synonyms: ["respected", "esteemed", "honored"]
  },
  {
    word: "wary",
    part: "adj.",
    category: "Tone and attitude",
    plain: "careful because suspicious",
    meaning: "cautious about possible danger or deception",
    greUse: "More suspicious than cautious, but less fearful than alarmed.",
    example: "Investors were wary of the company's unusually optimistic forecast.",
    synonyms: ["cautious", "guarded", "suspicious"]
  },
  {
    word: "zealous",
    part: "adj.",
    category: "Change and intensity",
    plain: "extremely enthusiastic",
    meaning: "strongly devoted to a cause or goal",
    greUse: "Can be positive or negative depending on whether the enthusiasm seems admirable or excessive.",
    example: "The zealous reformer pushed for changes faster than the agency could absorb them.",
    synonyms: ["fervent", "ardent", "enthusiastic"]
  }
];

function buildTests() {
  return Array.from({ length: 15 }, (_, index) => buildTest(index));
}

function buildTest(testIndex) {
  const oneBased = testIndex + 1;
  const focus = getTestFocus(testIndex);
    return {
      id: `test-${oneBased}`,
      name: `Practice Test ${oneBased}`,
      focus: focus.label,
      quantFocus: focus.quantFocus,
      description: focus.description,
      sections: [
      buildWritingSection(testIndex),
      buildVerbalSection(testIndex, 1, 12),
      buildQuantSection(testIndex, 1, 12, focus),
      buildVerbalSection(testIndex, 2, 15),
      buildQuantSection(testIndex, 2, 15, focus)
    ]
  };
}

function getTestFocus(testIndex) {
  if (testIndex < TEST_FOCUSES.length) return TEST_FOCUSES[testIndex];
  return OFFICIAL_STYLE_TEST_FOCUSES[(testIndex - TEST_FOCUSES.length) % OFFICIAL_STYLE_TEST_FOCUSES.length];
}

function buildWritingSection(testIndex) {
  const prompt = essayPrompts[testIndex % essayPrompts.length];
  return {
    ...SECTION_BLUEPRINTS[0],
    questions: [
      {
        id: `t${testIndex + 1}-writing-1`,
        type: "essay",
        subtype: "Analyze an Issue",
        prompt: prompt.issue,
        directions: "Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning.",
        hint: "State a clear position, qualify it where needed, and use specific examples. Spend a few minutes outlining before writing.",
        answer: null,
        explanation: prompt.outline
      }
    ]
  };
}

function buildVerbalSection(testIndex, sectionNumber, count) {
  const questions = [];
  const tcCount = sectionNumber === 1 ? 4 : 5;
  const seCount = sectionNumber === 1 ? 3 : 4;
  const rcCount = count - tcCount - seCount;
  for (let i = 0; i < tcCount; i += 1) {
    questions.push(makeTextCompletion(testIndex, sectionNumber, i));
  }
  for (let i = 0; i < seCount; i += 1) {
    questions.push(makeSentenceEquivalence(testIndex, sectionNumber, i));
  }
  for (let i = 0; i < rcCount; i += 1) {
    questions.push(makeReadingComprehension(testIndex, sectionNumber, i));
  }
  return {
    ...SECTION_BLUEPRINTS[sectionNumber === 1 ? 1 : 3],
    questions: questions.map((question, index) => ({
      ...question,
      id: `t${testIndex + 1}-v${sectionNumber}-${index + 1}`
    }))
  };
}

function selectVerbalItem(items, testIndex, sectionNumber, itemIndex, stride) {
  const seed = testIndex * stride + sectionNumber * 17 + itemIndex * 7;
  return items[seed % items.length];
}

function makeTextCompletion(testIndex, sectionNumber, itemIndex) {
  const item = selectVerbalItem(tcItems, testIndex, sectionNumber, itemIndex, 13);
  return {
    type: "single",
    subtype: "Text Completion",
    directions: "Select the choice that best completes the sentence.",
    prompt: item.stem,
    choices: rotateChoices(item.choices, testIndex + itemIndex),
    answer: item.answer,
    hint: item.hint,
    explanation: item.explanation
  };
}

function makeSentenceEquivalence(testIndex, sectionNumber, itemIndex) {
  const item = selectVerbalItem(seItems, testIndex, sectionNumber, itemIndex, 11);
  return {
    type: "multiple",
    subtype: "Sentence Equivalence",
    directions: "Select exactly two choices that complete the sentence and produce sentences alike in meaning.",
    prompt: item.stem,
    choices: rotateChoices(item.choices, testIndex + sectionNumber + itemIndex),
    answer: item.answer,
    maxSelections: 2,
    hint: item.hint,
    explanation: item.explanation
  };
}

function makeReadingComprehension(testIndex, sectionNumber, itemIndex) {
  const passageOffset = Math.floor(itemIndex / 3);
  const passage = rcPassages[(testIndex * 5 + sectionNumber * 7 + passageOffset) % rcPassages.length];
  const item = passage.questions[(itemIndex + testIndex + sectionNumber + passageOffset) % passage.questions.length];
  const isMultiple = item.type === "multiple";
  return {
    type: isMultiple ? "multiple" : "single",
    subtype: isMultiple ? "Reading Comprehension, Select One or More" : "Reading Comprehension",
    directions: isMultiple ? "Select all choices that apply based on the passage." : "Answer the question based on the passage.",
    passage: passage.passage,
    prompt: item.stem,
    choices: rotateChoices(item.choices, testIndex + itemIndex),
    answer: item.answer,
    maxSelections: item.maxSelections,
    hint: item.hint,
    explanation: item.explanation
  };
}

function buildQuantSection(testIndex, sectionNumber, count, focus) {
  const questions = [];
  const plan = sectionNumber === 1
    ? ["qc", "di", "single", "qc", "numeric", "multi", "qc", "single", "di", "numeric", "qc", "multi"]
    : ["qc", "di", "single", "numeric", "qc", "multi", "di", "single", "qc", "numeric", "multi", "qc", "di", "single", "numeric"];

  for (let i = 0; i < count; i += 1) {
    const type = plan[i % plan.length];
    const seed = testIndex * 37 + sectionNumber * 13 + i * 7;
    const question = makeQuantQuestion(type, focus, seed, testIndex, sectionNumber, i);
    questions.push({
      ...question,
      id: `t${testIndex + 1}-q${sectionNumber}-${i + 1}`
    });
  }

  return {
    ...SECTION_BLUEPRINTS[sectionNumber === 1 ? 2 : 4],
    questions
  };
}

function makeQuantQuestion(type, focus, seed, testIndex, sectionNumber, itemIndex) {
  const focusName = focus?.quantFocus || "mixed";
  const geometryTopic = selectGeometryTopic(focusName, itemIndex);
  if (geometryTopic && shouldUseGeometryFocus(focusName, itemIndex, type)) {
    return makeGeometryQuestion(geometryTopic, type, seed, testIndex, sectionNumber, itemIndex);
  }
  if (focusName === "algebra" && type !== "di") {
    return makeAdvancedAlgebraQuestion(type, seed, testIndex, sectionNumber, itemIndex);
  }
  if (focusName === "arithmetic" && type !== "di") {
    return makeAdvancedArithmeticQuestion(type, seed, testIndex, sectionNumber, itemIndex);
  }
  if (focusName === "data" && (type === "di" || itemIndex % 3 === 1)) {
    return makeAdvancedDataQuestion(type, seed, testIndex, sectionNumber, itemIndex);
  }
  if (focusName === "mixed" && (type === "di" || itemIndex % 4 === 1)) {
    return makeHardMixedQuestion(type, seed, testIndex, sectionNumber, itemIndex);
  }
  const maker = {
    qc: makeQuantComparison,
    single: makeQuantSingle,
    multi: makeQuantMultiple,
    numeric: makeQuantNumeric,
    di: makeDataInterpretation
  }[type];
  return maker(seed, testIndex, sectionNumber, itemIndex);
}

function makeHardMixedQuestion(type, seed, testIndex, sectionNumber, itemIndex) {
  if (type === "di") return makeAdvancedDataQuestion(type, seed, testIndex, sectionNumber, itemIndex);
  const variant = (seed + testIndex + sectionNumber + itemIndex) % 3;
  if (variant === 0) return makeAdvancedAlgebraQuestion(type, seed, testIndex, sectionNumber, itemIndex);
  if (variant === 1) return makeAdvancedArithmeticQuestion(type, seed, testIndex, sectionNumber, itemIndex);
  return makeAdvancedDataQuestion(type, seed, testIndex, sectionNumber, itemIndex);
}

function makeAdvancedAlgebraQuestion(type, seed, testIndex, sectionNumber, itemIndex) {
  const variant = (seed + testIndex + itemIndex) % 5;

  if (type === "qc") {
    if (variant === 0) {
      const rootA = 2 + (seed % 3);
      const rootB = rootA + 1 + (seed % 2);
      const rootSum = rootA + rootB;
      const product = rootA * rootB;
      return qcQuestion({
        stem: `x^2 - ${rootSum}x + ${product} = 0.`,
        quantityA: "x",
        quantityB: formatNumber(rootSum / 2),
        answer: "D",
        hint: "A quadratic equation can have two valid values for x.",
        explanation: `The equation factors as (x - ${rootA})(x - ${rootB}) = 0, so x can be ${rootA} or ${rootB}. One root is below ${formatNumber(rootSum / 2)} and one is above it, so the relationship cannot be determined.`
      });
    }
    if (variant === 1) {
      const h = 2 + (seed % 4);
      const k = 3 + (seed % 5);
      return qcQuestion({
        stem: "x is a real number.",
        quantityA: `x^2 - ${2 * h}x + ${h * h + k}`,
        quantityB: `${k - 1}`,
        answer: "A",
        hint: "Complete the square to find the least possible value of Quantity A.",
        explanation: `Quantity A is (x - ${h})^2 + ${k}. Since (x - ${h})^2 is nonnegative, Quantity A is at least ${k}, which is greater than ${k - 1}.`
      });
    }
    if (variant === 2) {
      return qcQuestion({
        stem: "x and y are positive numbers, and x + y = 10.",
        quantityA: "xy",
        quantityB: "24",
        answer: "D",
        hint: "Try balanced and unbalanced positive values with the same sum.",
        explanation: "If x = 5 and y = 5, then xy = 25. If x = 1 and y = 9, then xy = 9. Quantity A can be greater or less than Quantity B."
      });
    }
    if (variant === 3) {
      return qcQuestion({
        stem: "a + b = 7 and ab = 10.",
        quantityA: "a^2 + b^2",
        quantityB: "29",
        answer: "C",
        hint: "Use (a + b)^2 = a^2 + 2ab + b^2.",
        explanation: "a^2 + b^2 = (a + b)^2 - 2ab = 7^2 - 2(10) = 29, so the two quantities are equal."
      });
    }
    return qcQuestion({
      stem: "0 < t < 1.",
      quantityA: "t^2 - t",
      quantityB: "0",
      answer: "B",
      hint: "For a fraction between 0 and 1, squaring makes it smaller.",
      explanation: "Since 0 < t < 1, t^2 < t, so t^2 - t is negative. Quantity B is 0, so Quantity B is greater."
    });
  }

  if (type === "single") {
    if (variant === 0) {
      const item = [
        { a: 2, b: -11, c: 5, larger: "5", other: "1/2" },
        { a: 3, b: -13, c: 4, larger: "4", other: "1/3" },
        { a: 2, b: -7, c: 3, larger: "3", other: "1/2" },
        { a: 4, b: -20, c: 16, larger: "4", other: "1" }
      ][seed % 4];
      return singleQuant({
        stem: `What is the larger solution of ${item.a}x^2 ${formatSigned(item.b)}x ${formatSigned(item.c)} = 0?`,
        choices: rotateChoices([item.larger, item.other, String(Number(item.larger) + 1), "0", String(Number(item.larger) - 1)], seed),
        answer: item.larger,
        hint: "Use the quadratic formula or factor after checking for a common structure.",
        explanation: `Using the quadratic formula on ${item.a}x^2 ${formatSigned(item.b)}x ${formatSigned(item.c)} = 0 gives roots ${item.other} and ${item.larger}.`
      });
    }
    if (variant === 1) {
      const h = 4 + (seed % 4);
      const constant = 2 + (seed % 6);
      const k = h * h - constant;
      return singleQuant({
        stem: `x^2 - ${2 * h}x + ${constant} = (x - ${h})^2 - k. What is k?`,
        choices: numericChoices(k, [h, h * h, constant, k + 2]),
        answer: String(k),
        hint: "Add and subtract the square of half the x coefficient.",
        explanation: `(x - ${h})^2 = x^2 - ${2 * h}x + ${h * h}. Therefore x^2 - ${2 * h}x + ${constant} = (x - ${h})^2 - ${k}.`
      });
    }
    if (variant === 2) {
      const r = 2 + (seed % 4);
      const p = 3 + (seed % 3);
      const a = 2 + (seed % 5);
      const k = -(r ** 3) + p * r * r - a * r;
      return singleQuant({
        stem: `If x - ${r} is a factor of P(x) = x^3 - ${p}x^2 + ${a}x + k, what is k?`,
        choices: numericChoices(k, [k + r, k - r, a * r, p * r]),
        answer: String(k),
        hint: "Use the factor theorem: if x - r is a factor, then P(r) = 0.",
        explanation: `P(${r}) = ${r ** 3} - ${p}(${r * r}) + ${a}(${r}) + k = 0, so k = ${k}.`
      });
    }
    if (variant === 3) {
      const d = 2 + (seed % 4);
      const c = 1 + (seed % 5);
      const a8 = 8 * 8 + d * 8 + c;
      const a5 = 5 * 5 + d * 5 + c;
      return singleQuant({
        stem: `The nth term of a sequence is a_n = n^2 + ${d}n + ${c}. What is a_8 - a_5?`,
        choices: numericChoices(a8 - a5, [a8, a5, 3 * d, 39]),
        answer: String(a8 - a5),
        hint: "Find both terms from the formula before subtracting.",
        explanation: `a_8 = ${a8} and a_5 = ${a5}, so a_8 - a_5 = ${a8 - a5}.`
      });
    }
    const m = 2 + (seed % 3);
    const n = 3 + (seed % 4);
    const value = m * (n + 1) ** 2 - n;
    return singleQuant({
      stem: `If f(x) = ${m}x^2 - ${n} and g(x) = x + 1, what is f(g(${n}))?`,
      choices: numericChoices(value, [m * n * n - n, m * (n + 1) - n, value + n, value - m]),
      answer: String(value),
      hint: "Evaluate the inside function first, then substitute the result into f.",
      explanation: `g(${n}) = ${n + 1}, so f(g(${n})) = ${m}(${n + 1})^2 - ${n} = ${value}.`
    });
  }

  if (type === "numeric") {
    if (variant === 0) {
      const a = 2 + (seed % 3);
      const r1 = 1 + (seed % 4);
      const r2 = r1 + 2;
      const b = -a * (r1 + r2);
      const c = a * r1 * r2;
      const rootSum = -b / a;
      return numericQuestion({
        stem: `The two roots of ${a}x^2 ${formatSigned(b)}x ${formatSigned(c)} = 0 have what sum?`,
        answer: rootSum,
        hint: "For ax^2 + bx + c = 0, the sum of the roots is -b/a.",
        explanation: `The sum is -(${b})/${a} = ${formatNumber(rootSum)}.`
      });
    }
    if (variant === 1) {
      const h = 5 + (seed % 4);
      const k = 1 + (seed % 6);
      return numericQuestion({
        stem: `What is the minimum value of x^2 - ${2 * h}x + ${h * h + k}?`,
        answer: k,
        hint: "Complete the square.",
        explanation: `x^2 - ${2 * h}x + ${h * h + k} = (x - ${h})^2 + ${k}, whose minimum value is ${k}.`
      });
    }
    if (variant === 2) {
      const first = 2 + (seed % 5);
      const difference = 3 + (seed % 4);
      const term = first + 9 * difference;
      return numericQuestion({
        stem: `An arithmetic sequence has a_1 = ${first} and a_10 = ${term}. What is the common difference?`,
        answer: difference,
        hint: "The 10th term is nine common differences after the first term.",
        explanation: `${term} = ${first} + 9d, so d = ${difference}.`
      });
    }
    if (variant === 3) {
      const a = 2 + (seed % 4);
      const r1 = 2 + (seed % 3);
      const r2 = r1 + 3;
      const b = -a * (r1 + r2);
      const c = a * r1 * r2;
      return numericQuestion({
        stem: `For ${a}x^2 ${formatSigned(b)}x ${formatSigned(c)} = 0, what is the product of the two roots?`,
        answer: c / a,
        hint: "For ax^2 + bx + c = 0, the product of the roots is c/a.",
        explanation: `The product is ${c}/${a} = ${formatNumber(c / a)}.`
      });
    }
    const r = 3 + (seed % 4);
    const coefficient = 2 + (seed % 5);
    const constant = 5 + (seed % 6);
    const remainder = r * r + coefficient * r + constant;
    return numericQuestion({
      stem: `What is the remainder when x^2 + ${coefficient}x + ${constant} is divided by x - ${r}?`,
      answer: remainder,
      hint: "By the remainder theorem, divide by x - r by evaluating the polynomial at r.",
      explanation: `The remainder is P(${r}) = ${r}^2 + ${coefficient}(${r}) + ${constant} = ${remainder}.`
    });
  }

  if (type === "multi") {
    if (variant === 0) {
      const low = 1 + (seed % 4);
      const high = low + 5;
      const choices = [low - 2, low, low + 1, low + 3, high, high + 2];
      const answer = choices.filter(value => value > low && value < high).map(String);
      return {
        type: "multiple",
        subtype: "Multiple Choice, Select One or More",
        directions: "Select all choices that apply.",
        prompt: `Which listed values of x satisfy (x - ${low})(x - ${high}) < 0?`,
        choices: choices.map(String),
        answer,
        hint: "A product of two factors is negative between the two roots.",
        explanation: `The expression is negative for ${low} < x < ${high}. The listed values that work are ${answer.join(", ")}.`
      };
    }
    if (variant === 1) {
      const h = 3 + (seed % 4);
      const limit = 9;
      const choices = [h - 4, h - 3, h - 1, h, h + 2, h + 4];
      const answer = choices.filter(value => (value - h) ** 2 <= limit).map(String);
      return {
        type: "multiple",
        subtype: "Multiple Choice, Select One or More",
        directions: "Select all choices that apply.",
        prompt: `Which listed values of x satisfy (x - ${h})^2 <= ${limit}?`,
        choices: choices.map(String),
        answer,
        hint: "Take the square-root bound: the distance from h is at most 3.",
        explanation: `The inequality is equivalent to ${h - 3} <= x <= ${h + 3}. The listed values that work are ${answer.join(", ")}.`
      };
    }
    if (variant === 2) {
      const first = 4 + (seed % 4);
      const difference = 3 + (seed % 3);
      const choices = [first, first + difference, first + 2 * difference + 1, first + 3 * difference, first + 5 * difference, first + 6 * difference + 2];
      const answer = choices.filter(value => (value - first) % difference === 0 && value >= first).map(String);
      return {
        type: "multiple",
        subtype: "Multiple Choice, Select One or More",
        directions: "Select all choices that apply.",
        prompt: `The sequence starts with ${first} and has common difference ${difference}. Which listed numbers are terms of the sequence?`,
        choices: choices.map(String),
        answer,
        hint: "Subtract the first term and check divisibility by the common difference.",
        explanation: `A listed number is a term when it has the form ${first} + ${difference}k for a nonnegative integer k. The terms listed are ${answer.join(", ")}.`
      };
    }
    if (variant === 3) {
      const rootA = 2 + (seed % 4);
      const rootB = rootA + 2;
      const choices = [rootA - 1, rootA, rootA + 1, rootB, rootB + 1, -rootA];
      const answer = choices.filter(value => (value - rootA) * (value - rootB) === 0).map(String);
      return {
        type: "multiple",
        subtype: "Multiple Choice, Select One or More",
        directions: "Select all choices that apply.",
        prompt: `Which listed values are solutions of x^2 - ${rootA + rootB}x + ${rootA * rootB} = 0?`,
        choices: choices.map(String),
        answer,
        hint: "Factor the quadratic.",
        explanation: `The equation factors as (x - ${rootA})(x - ${rootB}) = 0, so the listed solutions are ${answer.join(", ")}.`
      };
    }
    const center = 6 + (seed % 5);
    const radius = 4;
    const choices = [center - 6, center - 4, center - 1, center + 2, center + 4, center + 5];
    const answer = choices.filter(value => Math.abs(value - center) < radius).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `Which listed values of x satisfy |x - ${center}| < ${radius}?`,
      choices: choices.map(String),
      answer,
      hint: "Absolute value gives distance from the center.",
      explanation: `The solution interval is ${center - radius} < x < ${center + radius}. The listed values that work are ${answer.join(", ")}.`
    };
  }

  return makeDataInterpretation(seed, testIndex, sectionNumber, itemIndex);
}

function makeAdvancedArithmeticQuestion(type, seed, testIndex, sectionNumber, itemIndex) {
  const variant = (seed + sectionNumber + itemIndex) % 5;

  if (type === "qc") {
    if (variant === 0) {
      return qcQuestion({
        stem: "In a club, the ratio of members who commute by train to members who commute by bus is 3:4. The total number of such members is unknown.",
        quantityA: "The number who commute by train",
        quantityB: "18",
        answer: "D",
        hint: "A fixed ratio does not fix the scale.",
        explanation: "The train count could be 3, 6, 9, 12, 15, 18, 21, and so on, depending on the total scale. It can be less than, equal to, or greater than 18."
      });
    }
    if (variant === 1) {
      return qcQuestion({
        stem: "1 mile = 5,280 feet. A vehicle travels 2,640 feet in 30 seconds at a constant speed.",
        quantityA: "The speed in miles per hour",
        quantityB: "60",
        answer: "C",
        hint: "Convert feet per second to miles per hour.",
        explanation: "2,640 feet in 30 seconds is 88 feet per second. Since 88 feet per second equals 60 miles per hour, the two quantities are equal."
      });
    }
    if (variant === 2) {
      return qcQuestion({
        stem: "A box contains r red tokens and b blue tokens, where r and b are positive integers.",
        quantityA: "The probability of selecting a red token",
        quantityB: "1/2",
        answer: "D",
        hint: "No relationship between r and b is given.",
        explanation: "If r > b, the probability is greater than 1/2. If r < b, it is less than 1/2. The relationship cannot be determined."
      });
    }
    if (variant === 3) {
      return qcQuestion({
        stem: "A data set of five numbers has mean 10 and median 10.",
        quantityA: "The greatest number in the data set",
        quantityB: "20",
        answer: "D",
        hint: "Mean and median do not determine the largest value.",
        explanation: "The set {10, 10, 10, 10, 10} has greatest value 10, while {0, 0, 10, 10, 30} has mean 10, median 10, and greatest value 30."
      });
    }
    const rate = 3 + (seed % 4);
    return qcQuestion({
      stem: `A pump moves ${rate} gallons every 40 seconds.`,
      quantityA: "The number of gallons moved in 6 minutes",
      quantityB: `${rate * 9}`,
      answer: "C",
      hint: "Six minutes is 360 seconds.",
      explanation: `Six minutes is 360 seconds, which is 9 intervals of 40 seconds. The pump moves ${rate * 9} gallons, so the quantities are equal.`
    });
  }

  if (type === "single") {
    if (variant === 0) {
      const cm = 18 + (seed % 4) * 3;
      const kilometers = cm * 5 / 3;
      const minutes = kilometers / 48 * 60;
      return singleQuant({
        stem: `On a map, 3 centimeters represents 5 kilometers. A route measures ${cm} centimeters on the map. At 48 kilometers per hour, how many minutes would it take to travel the route?`,
        choices: numericChoices(minutes, [kilometers, minutes / 2, minutes + 15, cm * 5]),
        answer: formatNumber(minutes),
        hint: "Convert map distance to actual distance, then use time = distance/rate.",
        explanation: `The route is ${cm} * 5/3 = ${formatNumber(kilometers)} km. Time is ${formatNumber(kilometers)}/48 hours, or ${formatNumber(minutes)} minutes.`
      });
    }
    if (variant === 1) {
      const total = 240 + (seed % 4) * 60;
      const ratioA = 2 + (seed % 3);
      const ratioB = ratioA + 3;
      const part = total / (ratioA + ratioB);
      const difference = (ratioB - ratioA) * part;
      return singleQuant({
        stem: `A total of ${total} grams of alloy is made from copper and zinc in the ratio ${ratioA}:${ratioB}. How many more grams of zinc than copper are used?`,
        choices: numericChoices(difference, [part, ratioB * part, ratioA * part, total - difference]),
        answer: formatNumber(difference),
        hint: "Find the value of one ratio part, then compare the two shares.",
        explanation: `There are ${ratioA + ratioB} parts, so each part is ${formatNumber(part)} grams. The difference is ${ratioB - ratioA} parts, or ${formatNumber(difference)} grams.`
      });
    }
    if (variant === 2) {
      const red = 4 + (seed % 4);
      const blue = 5 + (seed % 5);
      const total = red + blue;
      const probability = red / total * (red - 1) / (total - 1);
      return singleQuant({
        stem: `A bag contains ${red} red chips and ${blue} blue chips. Two chips are selected without replacement. What is the probability that both are red?`,
        choices: numericChoices(probability, [red / total, blue / total, red / total * blue / (total - 1), (red - 1) / (total - 1)]),
        answer: formatNumber(probability),
        hint: "Multiply the probability of red first by the conditional probability of red second.",
        explanation: `The probability is (${red}/${total})((${red - 1})/${total - 1}) = ${formatNumber(probability)}.`
      });
    }
    if (variant === 3) {
      const feetPerSecond = 44 + (seed % 3) * 22;
      const mph = feetPerSecond * 3600 / 5280;
      return singleQuant({
        stem: `A cyclist travels at ${feetPerSecond} feet per second. What is the speed in miles per hour?`,
        choices: numericChoices(mph, [feetPerSecond / 2, feetPerSecond, mph + 10, mph * 2]),
        answer: formatNumber(mph),
        hint: "Multiply by 3,600 seconds per hour and divide by 5,280 feet per mile.",
        explanation: `${feetPerSecond} ft/s = ${feetPerSecond} * 3600 / 5280 = ${formatNumber(mph)} miles per hour.`
      });
    }
    const matrix = buildSurveyMatrix(seed);
    return {
      ...singleQuant({
        stem: "In the two-way table shown, how many in-person students are undergraduates?",
        choices: numericChoices(matrix.inPersonUndergraduate, [matrix.onlineUndergraduate, matrix.inPersonGraduate, matrix.undergraduate, matrix.online]),
        answer: String(matrix.inPersonUndergraduate),
        hint: "Use the row and column totals to fill the missing cells.",
        explanation: `Online undergraduates = ${matrix.online} - ${matrix.onlineGraduate} = ${matrix.onlineUndergraduate}. In-person undergraduates = ${matrix.undergraduate} - ${matrix.onlineUndergraduate} = ${matrix.inPersonUndergraduate}.`
      }),
      dataTable: matrix.dataTable
    };
  }

  if (type === "numeric") {
    if (variant === 0) {
      const matrix = buildSurveyMatrix(seed);
      return {
        ...numericQuestion({
          stem: "In the two-way table shown, how many in-person students are undergraduates?",
          answer: matrix.inPersonUndergraduate,
          hint: "Use the row and column totals to fill the missing cells.",
          explanation: `Online undergraduates = ${matrix.online} - ${matrix.onlineGraduate} = ${matrix.onlineUndergraduate}. In-person undergraduates = ${matrix.undergraduate} - ${matrix.onlineUndergraduate} = ${matrix.inPersonUndergraduate}.`
        }),
        dataTable: matrix.dataTable
      };
    }
    if (variant === 1) {
      const lengthFeet = 18 + (seed % 5) * 3;
      const widthFeet = 12 + (seed % 4) * 3;
      const squareYards = lengthFeet * widthFeet / 9;
      return numericQuestion({
        stem: `A rectangular floor is ${lengthFeet} feet by ${widthFeet} feet. How many square yards is its area?`,
        answer: squareYards,
        hint: "One square yard is 9 square feet.",
        explanation: `The area is ${lengthFeet * widthFeet} square feet. Dividing by 9 gives ${formatNumber(squareYards)} square yards.`
      });
    }
    if (variant === 2) {
      const smallCount = 12 + (seed % 4);
      const largeCount = 8 + (seed % 5);
      const smallMean = 64 + (seed % 5) * 2;
      const largeMean = smallMean + 18;
      const combined = (smallCount * smallMean + largeCount * largeMean) / (smallCount + largeCount);
      return numericQuestion({
        stem: `${smallCount} measurements have mean ${smallMean}, and ${largeCount} additional measurements have mean ${largeMean}. What is the combined mean?`,
        answer: combined,
        hint: "Use weighted total divided by total count.",
        explanation: `The combined mean is (${smallCount} * ${smallMean} + ${largeCount} * ${largeMean}) / ${smallCount + largeCount} = ${formatNumber(combined)}.`
      });
    }
    if (variant === 3) {
      const first = 3 + (seed % 4);
      const second = first + 4;
      const third = second * 2 - first;
      const fourth = third * 2 - second;
      return numericQuestion({
        stem: `In a sequence, each term after the second is twice the previous term minus the term before that. If the first two terms are ${first} and ${second}, what is the fourth term?`,
        answer: fourth,
        hint: "Find the third term first, then apply the same rule again.",
        explanation: `The third term is 2(${second}) - ${first} = ${third}. The fourth term is 2(${third}) - ${second} = ${fourth}.`
      });
    }
    const cylinderRadius = 3 + (seed % 3);
    const height = 2 * cylinderRadius + 4;
    const sphereRadius = cylinderRadius;
    const coefficient = cylinderRadius * cylinderRadius * height - (4 / 3) * sphereRadius ** 3;
    return numericQuestion({
      stem: `A sphere of radius ${sphereRadius} is removed from a cylinder of radius ${cylinderRadius} and height ${height}. What is the coefficient of pi in the remaining volume?`,
      answer: coefficient,
      hint: "Subtract the sphere's volume from the cylinder's volume.",
      explanation: `Cylinder volume is ${cylinderRadius * cylinderRadius * height}pi. Sphere volume is (4/3)pi(${sphereRadius}^3) = ${formatNumber((4 / 3) * sphereRadius ** 3)}pi. The remaining coefficient is ${formatNumber(coefficient)}.`
    });
  }

  if (type === "multi") {
    if (variant === 0) {
      const total = 90 + (seed % 4) * 10;
      const groupA = 50 + (seed % 3) * 5;
      const groupB = total - 20;
      const lower = groupA + groupB - total;
      const upper = Math.min(groupA, groupB);
      const choices = [lower - 1, lower, lower + 5, Math.floor((lower + upper) / 2), upper, upper + 1];
      const answer = choices.filter(value => value >= lower && value <= upper).map(String);
      return {
        type: "multiple",
        subtype: "Multiple Choice, Select One or More",
        directions: "Select all choices that apply.",
        prompt: `In a group of ${total} people, ${groupA} study French and ${groupB} study Spanish. Which listed values could be the number who study both languages?`,
        choices: choices.map(String),
        answer,
        hint: "The overlap must be at least A + B - total and at most the smaller group.",
        explanation: `The overlap must be from ${lower} through ${upper}, inclusive. The listed possible values are ${answer.join(", ")}.`
      };
    }
    if (variant === 1) {
      const threshold = 30 + (seed % 4) * 10;
      const choices = [15, 24, 30, 36, 45, 60];
      const answer = choices.filter(value => value * 1.5 > threshold).map(String);
      return {
        type: "multiple",
        subtype: "Multiple Choice, Select One or More",
        directions: "Select all choices that apply.",
        prompt: `A rate of x miles per hour is equal to 1.5x feet per second, approximately. Which listed speeds in miles per hour correspond to more than ${threshold} feet per second?`,
        choices: choices.map(String),
        answer,
        hint: "Convert each listed speed using the given approximation.",
        explanation: `The condition is 1.5x > ${threshold}, or x > ${formatNumber(threshold / 1.5)}. The listed speeds that work are ${answer.join(", ")}.`
      };
    }
    if (variant === 2) {
      const choices = [2, 3, 4, 5, 6, 7];
      const answer = choices.filter(value => value / 8 > 1 / 2).map(String);
      return {
        type: "multiple",
        subtype: "Multiple Choice, Select One or More",
        directions: "Select all choices that apply.",
        prompt: "A fair 8-sided die is rolled once. Which listed values of n make the probability of rolling at most n greater than 1/2?",
        choices: choices.map(String),
        answer,
        hint: "There are 8 equally likely outcomes.",
        explanation: `The probability is n/8, which is greater than 1/2 when n > 4. The listed values are ${answer.join(", ")}.`
      };
    }
    if (variant === 3) {
      const mean = 20 + (seed % 5);
      const choices = [mean - 8, mean - 5, mean - 1, mean + 1, mean + 5, mean + 8];
      const answer = choices.filter(value => Math.abs(value - mean) > 5).map(String);
      return {
        type: "multiple",
        subtype: "Multiple Choice, Select One or More",
        directions: "Select all choices that apply.",
        prompt: `A data set has mean ${mean}. Which listed values are more than 5 units from the mean?`,
        choices: choices.map(String),
        answer,
        hint: "Compare each value's distance from the mean.",
        explanation: `The values more than 5 units from ${mean} are ${answer.join(", ")}.`
      };
    }
    const ratioA = 3 + (seed % 3);
    const ratioB = ratioA + 2;
    const choices = [ratioA, ratioB, ratioA + ratioB, 2 * ratioA, 2 * ratioB, 3 * (ratioA + ratioB)];
    const answer = choices.filter(value => value % (ratioA + ratioB) === 0).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `A collection is split in the ratio ${ratioA}:${ratioB}. Which listed totals could the collection have if all items are whole items?`,
      choices: choices.map(String),
      answer,
      hint: "The total must be a multiple of the sum of the ratio parts.",
      explanation: `The total must be a multiple of ${ratioA + ratioB}. The listed possible totals are ${answer.join(", ")}.`
    };
  }

  return makeDataInterpretation(seed, testIndex, sectionNumber, itemIndex);
}

function makeAdvancedDataQuestion(type, seed, testIndex, sectionNumber, itemIndex) {
  if (type === "qc") return makeDataQuantComparison(seed, testIndex, sectionNumber, itemIndex);
  if (type === "single") return makeDataSingleQuestion(seed, testIndex, sectionNumber, itemIndex);
  if (type === "numeric") return makeDataNumericQuestion(seed, testIndex, sectionNumber, itemIndex);
  if (type === "multi") return makeDataMultipleQuestion(seed, testIndex, sectionNumber, itemIndex);
  return makeDataInterpretation(seed + 23, testIndex, sectionNumber, itemIndex);
}

function makeDataQuantComparison(seed) {
  const base = 70 + (seed % 5) * 5;
  const points = [
    { label: "Q1", value: base },
    { label: "Q2", value: base + 12 },
    { label: "Q3", value: base + 7 },
    { label: "Q4", value: base + 19 }
  ];
  return {
    ...qcQuestion({
      stem: "The line graph shows quarterly subscriptions.",
      quantityA: "The increase from Q1 to Q2",
      quantityB: "The increase from Q3 to Q4",
      answer: "C",
      hint: "Compare the changes between the two pairs of quarters.",
      explanation: `Q1 to Q2 increases by 12. Q3 to Q4 also increases by 12, so the two quantities are equal.`
    }),
    dataGraph: {
      type: "line",
      caption: "Quarterly subscriptions",
      yLabel: "Subscriptions",
      points
    }
  };
}

function makeDataSingleQuestion(seed) {
  const triangle = buildCoordinateTriangle(seed);
  return {
    ...singleQuant({
      stem: "In the coordinate graph shown, what is the area of triangle ABC?",
      choices: numericChoices(triangle.area, [triangle.base + triangle.height, triangle.area / 2, triangle.base * triangle.height, triangle.area + triangle.height]),
      answer: formatNumber(triangle.area),
      hint: "Use the horizontal side as the base and count the vertical height from the graph.",
      explanation: `AB has length ${triangle.base}, and the height to AB is ${triangle.height}. The area is (1/2)(${triangle.base})(${triangle.height}) = ${formatNumber(triangle.area)}.`
    }),
    dataGraph: triangle.dataGraph
  };
}

function makeDataNumericQuestion(seed) {
  const matrix = buildSurveyMatrix(seed);
  return {
    ...numericQuestion({
      stem: "In the two-way table shown, how many in-person students are undergraduates?",
      answer: matrix.inPersonUndergraduate,
      hint: "Use the row and column totals to fill the table.",
      explanation: `Online undergraduates = ${matrix.online} - ${matrix.onlineGraduate} = ${matrix.onlineUndergraduate}. In-person undergraduates = ${matrix.undergraduate} - ${matrix.onlineUndergraduate} = ${matrix.inPersonUndergraduate}.`
    }),
    dataTable: matrix.dataTable
  };
}

function makeDataMultipleQuestion(seed) {
  const base = 80 + (seed % 4) * 10;
  const table = [
    ["A", base, base + 20],
    ["B", base + 40, base + 52],
    ["C", base + 10, base + 30],
    ["D", base + 60, base + 78]
  ];
  const answer = table
    .filter(row => (row[2] - row[1]) / row[1] > 0.18)
    .map(row => row[0]);
  return {
    type: "multiple",
    subtype: "Data Interpretation, Select One or More",
    directions: "Use the table to answer the question. Select all choices that apply.",
    prompt: "Which programs had a percent increase greater than 18%?",
    dataTable: {
      caption: "Program participation",
      headers: ["Program", "Year 1", "Year 2"],
      rows: table
    },
    choices: table.map(row => row[0]),
    answer,
    hint: "Percent increase is increase divided by the original value.",
    explanation: `The percent increases are ${table.map(row => `${row[0]}: ${formatNumber((row[2] - row[1]) / row[1] * 100)}%`).join(", ")}. The programs above 18% are ${answer.join(", ")}.`
  };
}

function buildSurveyMatrix(seed) {
  const offset = seed % 5;
  const total = 200 + 10 * offset;
  const online = 120 + 5 * offset;
  const graduate = 90 + 5 * offset;
  const onlineGraduate = 50 + 2 * offset;
  const inPerson = total - online;
  const undergraduate = total - graduate;
  const onlineUndergraduate = online - onlineGraduate;
  const inPersonGraduate = graduate - onlineGraduate;
  const inPersonUndergraduate = undergraduate - onlineUndergraduate;
  return {
    total,
    online,
    graduate,
    onlineGraduate,
    inPerson,
    undergraduate,
    onlineUndergraduate,
    inPersonGraduate,
    inPersonUndergraduate,
    dataTable: {
      caption: "Students by format and level",
      headers: ["Format", "Undergraduate", "Graduate", "Total"],
      rows: [
        ["Online", "", onlineGraduate, online],
        ["In person", "", "", inPerson],
        ["Total", undergraduate, graduate, total]
      ]
    }
  };
}

function buildCoordinateTriangle(seed) {
  const x = 1 + (seed % 2);
  const y = 1 + ((seed + 1) % 2);
  const base = 6 + (seed % 3) * 2;
  const height = 5 + (seed % 4);
  const cOffset = 2 + (seed % Math.max(2, base - 3));
  const points = [
    { label: "A", x, y },
    { label: "B", x: x + base, y },
    { label: "C", x: x + cOffset, y: y + height }
  ];
  return {
    base,
    height,
    area: base * height / 2,
    dataGraph: {
      type: "coordinate",
      caption: "Triangle ABC on the coordinate plane",
      xLabel: "x",
      yLabel: "y",
      xMin: 0,
      xMax: x + base + 2,
      yMin: 0,
      yMax: y + height + 2,
      points,
      segments: [["A", "B"], ["B", "C"], ["C", "A"]]
    }
  };
}

function selectGeometryTopic(focusName, itemIndex) {
  if (focusName === "geometry-lines") return "lines";
  if (focusName === "geometry-triangles") return "triangles";
  if (focusName === "geometry-3d") return "3d";
  if (focusName === "geometry-mixed") return ["lines", "triangles", "3d"][itemIndex % 3];
  if (focusName === "mixed" && itemIndex % 5 === 0) return ["lines", "triangles", "3d"][Math.floor(itemIndex / 5) % 3];
  return null;
}

function shouldUseGeometryFocus(focusName, itemIndex, type) {
  if (focusName.startsWith("geometry-")) return type === "di" ? itemIndex % 2 === 1 : itemIndex % 4 !== 3;
  return focusName === "mixed" && itemIndex % 5 === 0;
}

function makeGeometryQuestion(topic, type, seed, testIndex, sectionNumber, itemIndex) {
  if (topic === "lines") return makeLineAngleQuestion(type, seed, testIndex, sectionNumber, itemIndex);
  if (topic === "triangles") return makeTriangleQuestion(type, seed, testIndex, sectionNumber, itemIndex);
  return makeThreeDQuestion(type, seed, testIndex, sectionNumber, itemIndex);
}

function makeLineAngleQuestion(type, seed, testIndex, sectionNumber, itemIndex) {
  if (type === "qc") {
    const angle = 48 + (seed % 5) * 12;
    const adjacent = 180 - angle;
    const answer = angle > adjacent ? "A" : angle < adjacent ? "B" : "C";
    return qcQuestion({
      stem: `Two lines intersect. One of the angles formed measures ${angle} degrees.`,
      quantityA: "The measure of the vertical angle",
      quantityB: "The measure of an adjacent angle",
      answer,
      hint: "Vertical angles are equal. Adjacent angles formed by intersecting lines are supplementary.",
      explanation: `The vertical angle is ${angle} degrees. The adjacent angle is 180 - ${angle} = ${adjacent} degrees, so ${qcAnswerText(answer)}.`
    });
  }

  if (type === "single") {
    const x = 18 + (seed % 5) * 3;
    const coefficientA = 2 + (seed % 2);
    const coefficientB = coefficientA + 2;
    const constantA = 12 + (seed % 4) * 2;
    const constantB = coefficientB * x - (coefficientA * x + constantA);
    const choices = numericChoices(x, [x - 4, x + 4, x + constantA, constantB]);
    return {
      type: "single",
      subtype: "Geometry: Lines and Angles",
      directions: "Select one answer choice.",
      prompt: `Two parallel lines are cut by a transversal. A pair of corresponding angles measure ${coefficientA}x + ${constantA} degrees and ${coefficientB}x - ${constantB} degrees. What is x?`,
      choices,
      answer: String(x),
      hint: "Corresponding angles formed by parallel lines are equal.",
      explanation: `Set the expressions equal: ${coefficientA}x + ${constantA} = ${coefficientB}x - ${constantB}. Solving gives x = ${x}.`
    };
  }

  if (type === "numeric") {
    const x = 24 + (seed % 6) * 4;
    const constantA = 10 + (seed % 5) * 2;
    const constantB = 180 - 3 * x - constantA;
    return {
      type: "numeric",
      subtype: "Geometry: Lines and Angles",
      directions: "Enter the exact value.",
      prompt: `Two adjacent angles on a straight line measure 2x + ${constantA} degrees and x + ${constantB} degrees. What is x?`,
      answer: String(x),
      hint: "Adjacent angles on a straight line sum to 180 degrees.",
      explanation: `(2x + ${constantA}) + (x + ${constantB}) = 180, so 3x + ${constantA + constantB} = 180 and x = ${x}.`
    };
  }

  if (type === "multi") {
    const angle = 52 + (seed % 5) * 10;
    const supplement = 180 - angle;
    const choices = rotateChoices([angle, supplement, angle / 2, supplement / 2, 90, 180].map(formatNumber), seed);
    return {
      type: "multiple",
      subtype: "Geometry: Lines and Angles",
      directions: "Select all choices that apply.",
      prompt: `Two lines intersect, and one of the angles formed measures ${angle} degrees. Which angle measures must also appear in the figure?`,
      choices,
      answer: sorted([formatNumber(angle), formatNumber(supplement)]),
      hint: "Intersecting lines create two pairs of vertical angles and adjacent supplementary angles.",
      explanation: `The vertical angle also measures ${angle} degrees, and each adjacent angle measures 180 - ${angle} = ${supplement} degrees.`
    };
  }

  const x = 20 + (seed % 5) * 5;
  const constantA = 16;
  const constantB = 180 - 3 * x - constantA;
  return {
    type: "numeric",
    subtype: "Data Interpretation",
    directions: "Use the table to answer the question.",
    prompt: "Angles A and B form a straight line. What is x?",
    dataTable: {
      caption: "Line-intersection angle measures",
      headers: ["Angle", "Measure"],
      rows: [
        ["A", `2x + ${constantA}`],
        ["B", `x + ${constantB}`]
      ]
    },
    answer: String(x),
    hint: "Angles forming a straight line are supplementary.",
    explanation: `Since A and B form a straight line, (2x + ${constantA}) + (x + ${constantB}) = 180. Therefore x = ${x}.`
  };
}

function makeTriangleQuestion(type, seed, testIndex, sectionNumber, itemIndex) {
  const hardVariant = (seed + itemIndex) % 3;
  if (type === "qc") {
    if (hardVariant === 1) {
      return qcQuestion({
        stem: "A triangle has side lengths 8, 11, and x.",
        quantityA: "The perimeter of the triangle",
        quantityB: "30",
        answer: "D",
        hint: "Use the triangle inequality to find the range of x, then test values on both sides of 11.",
        explanation: "The third side must satisfy 3 < x < 19, so the perimeter is 19 + x. If x = 10, the perimeter is 29; if x = 12, the perimeter is 31. The relationship cannot be determined."
      });
    }
    if (hardVariant === 2) {
      const scale = 2 + (seed % 3);
      const smallBase = 5 + (seed % 4);
      const largeBase = smallBase * scale;
      return qcQuestion({
        stem: `Triangle A is similar to Triangle B. A side of Triangle A has length ${smallBase}, and the corresponding side of Triangle B has length ${largeBase}.`,
        quantityA: "Area of Triangle B",
        quantityB: `${scale * scale} times the area of Triangle A`,
        answer: "C",
        hint: "Areas of similar figures scale by the square of the linear scale factor.",
        explanation: `The linear scale factor is ${largeBase}/${smallBase} = ${scale}, so the area scale factor is ${scale}^2 = ${scale * scale}.`
      });
    }
    const vertexAngle = 36 + (seed % 5) * 12;
    const baseAngle = (180 - vertexAngle) / 2;
    const answer = baseAngle > vertexAngle ? "A" : baseAngle < vertexAngle ? "B" : "C";
    return qcQuestion({
      stem: `An isosceles triangle has a vertex angle of ${vertexAngle} degrees. The two base angles are congruent.`,
      quantityA: "The measure of one base angle",
      quantityB: "The measure of the vertex angle",
      answer,
      hint: "In an isosceles triangle, the two base angles are equal and all three angles sum to 180 degrees.",
      explanation: `Each base angle is (180 - ${vertexAngle}) / 2 = ${formatNumber(baseAngle)} degrees, so ${qcAnswerText(answer)}.`
    });
  }

  if (type === "single") {
    if (hardVariant === 1) {
      const triangle = buildCoordinateTriangle(seed);
      return {
        type: "single",
        subtype: "Geometry: Triangles",
        directions: "Use the coordinate graph and select one answer choice.",
        prompt: "What is the area of triangle ABC?",
        dataGraph: triangle.dataGraph,
        choices: numericChoices(triangle.area, [triangle.base + triangle.height, triangle.area / 2, triangle.base * triangle.height, triangle.area + triangle.height]),
        answer: formatNumber(triangle.area),
        hint: "Use AB as the base and count the vertical height.",
        explanation: `AB = ${triangle.base}, and the height is ${triangle.height}. The area is (1/2)(${triangle.base})(${triangle.height}) = ${formatNumber(triangle.area)}.`
      };
    }
    if (hardVariant === 2) {
      const side = 6 + (seed % 4) * 2;
      const areaCoefficient = side * side / 4;
      return {
        type: "single",
        subtype: "Geometry: Triangles",
        directions: "Select one answer choice.",
        prompt: `An equilateral triangle has side length ${side}. What is its area?`,
        choices: rotateChoices([`${formatNumber(areaCoefficient)}sqrt(3)`, `${side * side}sqrt(3)`, `${formatNumber(side * side / 2)}sqrt(3)`, `${formatNumber(areaCoefficient)}pi`, String(side * side)], seed),
        answer: `${formatNumber(areaCoefficient)}sqrt(3)`,
        hint: "The area of an equilateral triangle is (s^2 sqrt(3))/4.",
        explanation: `Area = (${side}^2 sqrt(3))/4 = ${formatNumber(areaCoefficient)}sqrt(3).`
      };
    }
    const triples = [
      [3, 4, 5],
      [5, 12, 13],
      [6, 8, 10],
      [7, 24, 25],
      [8, 15, 17]
    ];
    const triple = triples[seed % triples.length];
    const choices = numericChoices(triple[2], [triple[0] + triple[1], triple[2] - 2, triple[2] + 2, triple[0] * triple[1]]);
    return {
      type: "single",
      subtype: "Geometry: Triangles",
      directions: "Select one answer choice.",
      prompt: `A right triangle has legs of length ${triple[0]} and ${triple[1]}. What is the length of the hypotenuse?`,
      choices,
      answer: String(triple[2]),
      hint: "Use the Pythagorean theorem, or recognize the common right-triangle triple.",
      explanation: `${triple[0]}^2 + ${triple[1]}^2 = ${triple[0] * triple[0]} + ${triple[1] * triple[1]} = ${triple[2] * triple[2]}, so the hypotenuse is ${triple[2]}.`
    };
  }

  if (type === "numeric") {
    if (hardVariant === 1) {
      const triple = [
        [9, 12, 15],
        [12, 16, 20],
        [15, 20, 25]
      ][seed % 3];
      const altitude = triple[0] * triple[1] / triple[2];
      return {
        type: "numeric",
        subtype: "Geometry: Triangles",
        directions: "Enter the exact value.",
        prompt: `A right triangle has legs ${triple[0]} and ${triple[1]} and hypotenuse ${triple[2]}. What is the altitude to the hypotenuse?`,
        answer: formatNumber(altitude),
        hint: "Compute the area two ways: (1/2)ab = (1/2)ch.",
        explanation: `The altitude to the hypotenuse is (${triple[0]} * ${triple[1]}) / ${triple[2]} = ${formatNumber(altitude)}.`
      };
    }
    if (hardVariant === 2) {
      const scale = 2 + (seed % 4);
      const smallPerimeter = 18 + (seed % 4) * 3;
      const largePerimeter = smallPerimeter * scale;
      return {
        type: "numeric",
        subtype: "Geometry: Triangles",
        directions: "Enter the exact value.",
        prompt: `Two triangles are similar. The smaller triangle has perimeter ${smallPerimeter}, and the larger triangle's corresponding side lengths are ${scale} times as large. What is the perimeter of the larger triangle?`,
        answer: String(largePerimeter),
        hint: "Perimeter scales by the same factor as side length.",
        explanation: `The larger perimeter is ${smallPerimeter} * ${scale} = ${largePerimeter}.`
      };
    }
    const exterior = 118 + (seed % 5) * 6;
    const remote = 42 + (seed % 4) * 5;
    const other = exterior - remote;
    return {
      type: "numeric",
      subtype: "Geometry: Triangles",
      directions: "Enter the exact value.",
      prompt: `An exterior angle of a triangle measures ${exterior} degrees. One remote interior angle measures ${remote} degrees. What is the measure, in degrees, of the other remote interior angle?`,
      answer: String(other),
      hint: "An exterior angle equals the sum of the two remote interior angles.",
      explanation: `The other remote interior angle is ${exterior} - ${remote} = ${other} degrees.`
    };
  }

  if (type === "multi") {
    const sideA = 7 + (seed % 4);
    const sideB = 10 + (seed % 5);
    const lower = Math.abs(sideA - sideB);
    const upper = sideA + sideB;
    const choices = rotateChoices([lower, lower + 1, lower + 4, upper - 1, upper, upper + 2].map(String), seed);
    const answer = choices.filter(value => Number(value) > lower && Number(value) < upper);
    return {
      type: "multiple",
      subtype: "Geometry: Triangles",
      directions: "Select all choices that apply.",
      prompt: `Two sides of a triangle have lengths ${sideA} and ${sideB}. Which of the following could be the length of the third side?`,
      choices,
      answer,
      hint: "For side lengths a, b, and c, the third side must be greater than the positive difference and less than the sum of the other two sides.",
      explanation: `The third side must be greater than ${lower} and less than ${upper}. The valid listed values are ${answer.join(", ")}.`
    };
  }

  const base = 6 + (seed % 5) * 2;
  if (hardVariant === 1) {
    const triangle = buildCoordinateTriangle(seed);
    return {
      type: "single",
      subtype: "Data Interpretation",
      directions: "Use the coordinate graph to answer the question.",
      prompt: "What is the area of triangle ABC?",
      dataGraph: triangle.dataGraph,
      choices: numericChoices(triangle.area, [triangle.base + triangle.height, triangle.area / 2, triangle.base * triangle.height, triangle.area + triangle.height]),
      answer: formatNumber(triangle.area),
      hint: "Use AB as the base.",
      explanation: `AB = ${triangle.base}, and the height is ${triangle.height}. Area = ${formatNumber(triangle.area)}.`
    };
  }
  const table = [
    ["A", base, base + 2],
    ["B", base + 3, base],
    ["C", base - 1, base + 5]
  ];
  const areas = table.map(row => row[1] * row[2] / 2);
  const maxIndex = areas.indexOf(Math.max(...areas));
  return {
    type: "single",
    subtype: "Data Interpretation",
    directions: "Use the table to answer the question.",
    prompt: "Which triangle has the greatest area?",
    dataTable: {
      caption: "Triangle dimensions",
      headers: ["Triangle", "Base", "Height"],
      rows: table
    },
    choices: table.map(row => row[0]),
    answer: table[maxIndex][0],
    hint: "The area of a triangle is one-half times base times height.",
    explanation: `The areas are ${table.map((row, i) => `${row[0]}: ${formatNumber(areas[i])}`).join(", ")}. The greatest area is triangle ${table[maxIndex][0]}.`
  };
}

function makeThreeDQuestion(type, seed, testIndex, sectionNumber, itemIndex) {
  const hardVariant = (seed + itemIndex) % 3;
  if (type === "qc") {
    if (hardVariant === 1) {
      return qcQuestion({
        stem: "A rectangular solid has volume 64. Its dimensions are positive numbers.",
        quantityA: "The surface area of the rectangular solid",
        quantityB: "96",
        answer: "D",
        hint: "A cube gives one case, but non-cube dimensions with the same volume give another.",
        explanation: "A 4 by 4 by 4 cube has surface area 96. A 2 by 4 by 8 rectangular solid has the same volume but surface area 112. The relationship cannot be determined."
      });
    }
    if (hardVariant === 2) {
      const side = 6 + (seed % 3) * 2;
      const radius = side / 2;
      const sphereVolumeCoefficient = (4 / 3) * radius ** 3;
      const remaining = side ** 3 - sphereVolumeCoefficient * 3.14;
      const sphereApprox = sphereVolumeCoefficient * 3.14;
      return qcQuestion({
        stem: `A sphere is inscribed in a cube with side length ${side}. Use pi = 3.14 for comparison.`,
        quantityA: "The volume of the sphere",
        quantityB: "The volume inside the cube but outside the sphere",
        answer: sphereApprox > remaining ? "A" : sphereApprox < remaining ? "B" : "C",
        hint: "The sphere diameter equals the cube side length.",
        explanation: `The cube volume is ${side ** 3}. The sphere volume is about ${formatNumber(sphereApprox)}, leaving about ${formatNumber(remaining)} outside the sphere.`
      });
    }
    const side = 3 + (seed % 6);
    const volume = side ** 3;
    const surfaceArea = 6 * side * side;
    const answer = volume > surfaceArea ? "A" : volume < surfaceArea ? "B" : "C";
    return qcQuestion({
      stem: `A cube has side length ${side}.`,
      quantityA: "The volume of the cube",
      quantityB: "The surface area of the cube",
      answer,
      hint: "Cube volume is s^3. Cube surface area is 6s^2.",
      explanation: `The volume is ${side}^3 = ${volume}. The surface area is 6 * ${side}^2 = ${surfaceArea}, so ${qcAnswerText(answer)}.`
    });
  }

  if (type === "single") {
    if (hardVariant === 1) {
      const radius = 3 + (seed % 3);
      const height = 2 * radius + 4;
      const cylinderCoefficient = radius * radius * height;
      const sphereCoefficient = (4 / 3) * radius ** 3;
      const remainingCoefficient = cylinderCoefficient - sphereCoefficient;
      return {
        type: "single",
        subtype: "Geometry: 3D Shapes",
        directions: "Select one answer choice.",
        prompt: `A sphere of radius ${radius} is removed from a cylinder with radius ${radius} and height ${height}. What is the remaining volume?`,
        choices: rotateChoices([
          `${formatNumber(remainingCoefficient)}pi`,
          `${cylinderCoefficient}pi`,
          `${formatNumber(sphereCoefficient)}pi`,
          `${formatNumber(cylinderCoefficient + sphereCoefficient)}pi`,
          `${formatNumber(radius * height)}pi`
        ], seed),
        answer: `${formatNumber(remainingCoefficient)}pi`,
        hint: "Subtract the sphere's volume from the cylinder's volume.",
        explanation: `Cylinder volume is ${cylinderCoefficient}pi. Sphere volume is ${formatNumber(sphereCoefficient)}pi. The remaining volume is ${formatNumber(remainingCoefficient)}pi.`
      };
    }
    if (hardVariant === 2) {
      const side = 6 + (seed % 3) * 2;
      const radius = side / 2;
      const cubeVolume = side ** 3;
      const sphereCoefficient = (4 / 3) * radius ** 3;
      return {
        type: "single",
        subtype: "Geometry: 3D Shapes",
        directions: "Select one answer choice.",
        prompt: `A sphere is inscribed in a cube with side length ${side}. What is the volume inside the cube but outside the sphere?`,
        choices: rotateChoices([
          `${cubeVolume} - ${formatNumber(sphereCoefficient)}pi`,
          `${cubeVolume} - ${formatNumber(radius * radius)}pi`,
          `${formatNumber(sphereCoefficient)}pi`,
          `${side ** 2} - ${formatNumber(sphereCoefficient)}pi`,
          `${cubeVolume + side} - ${formatNumber(sphereCoefficient)}pi`
        ], seed),
        answer: `${cubeVolume} - ${formatNumber(sphereCoefficient)}pi`,
        hint: "The sphere diameter is the cube side.",
        explanation: `The sphere radius is ${radius}. Cube volume is ${cubeVolume}; sphere volume is ${formatNumber(sphereCoefficient)}pi.`
      };
    }
    const length = 4 + (seed % 5);
    const width = 3 + (seed % 4);
    const height = 5 + (seed % 3);
    const volume = length * width * height;
    const choices = numericChoices(volume, [length * width, 2 * (length + width + height), volume + length, volume - width]);
    return {
      type: "single",
      subtype: "Geometry: 3D Shapes",
      directions: "Select one answer choice.",
      prompt: `A rectangular solid has length ${length}, width ${width}, and height ${height}. What is its volume?`,
      choices,
      answer: String(volume),
      hint: "The volume of a rectangular solid is length times width times height.",
      explanation: `Volume = ${length} * ${width} * ${height} = ${volume}.`
    };
  }

  if (type === "numeric") {
    if (hardVariant === 1) {
      const radius = 3 + (seed % 3);
      const height = 2 * radius + 4;
      const coefficient = radius * radius * height - (4 / 3) * radius ** 3;
      return {
        type: "numeric",
        subtype: "Geometry: 3D Shapes",
        directions: "Enter the exact value.",
        prompt: `A sphere of radius ${radius} is removed from a cylinder with radius ${radius} and height ${height}. What is the coefficient of pi in the remaining volume?`,
        answer: formatNumber(coefficient),
        hint: "Compute cylinder coefficient minus sphere coefficient.",
        explanation: `Remaining coefficient = ${radius * radius * height} - ${formatNumber((4 / 3) * radius ** 3)} = ${formatNumber(coefficient)}.`
      };
    }
    const length = 3 + (seed % 5);
    const width = 4 + (seed % 4);
    const height = 5 + (seed % 3);
    const diagonalSquared = length * length + width * width + height * height;
    return {
      type: "numeric",
      subtype: "Geometry: 3D Shapes",
      directions: "Enter the exact value.",
      prompt: `A rectangular solid has dimensions ${length}, ${width}, and ${height}. What is the square of the length of its space diagonal?`,
      answer: String(diagonalSquared),
      hint: "For a rectangular solid, the space diagonal squared is l^2 + w^2 + h^2.",
      explanation: `The diagonal squared is ${length}^2 + ${width}^2 + ${height}^2 = ${length * length} + ${width * width} + ${height * height} = ${diagonalSquared}.`
    };
  }

  if (type === "multi") {
    if (hardVariant === 1) {
      const sideNeeded = 8 + (seed % 3);
      const choices = [sideNeeded - 3, sideNeeded - 1, sideNeeded, sideNeeded + 1, sideNeeded + 3, sideNeeded + 5];
      const answer = choices.filter(value => value >= sideNeeded).map(String);
      return {
        type: "multiple",
        subtype: "Geometry: 3D Shapes",
        directions: "Select all choices that apply.",
        prompt: `A cube must contain a vertical cylinder of height ${sideNeeded} and diameter ${sideNeeded - 2}. Which listed cube side lengths are large enough?`,
        choices: choices.map(String),
        answer,
        hint: "The side of the cube must be at least the cylinder's height and diameter.",
        explanation: `The height ${sideNeeded} is the larger requirement, so the side must be at least ${sideNeeded}. The listed values are ${answer.join(", ")}.`
      };
    }
    const choices = [
      [2, 3, 8],
      [3, 4, 5],
      [2, 5, 7],
      [4, 4, 4],
      [3, 5, 6],
      [2, 6, 6]
    ].map(dimensions => dimensions.map(value => value + (seed % 2)));
    const threshold = 60 + (seed % 2) * 20;
    const labels = choices.map(dimensions => dimensions.join(" by "));
    const answer = labels.filter((label, index) => choices[index].reduce((total, value) => total * value, 1) > threshold);
    return {
      type: "multiple",
      subtype: "Geometry: 3D Shapes",
      directions: "Select all choices that apply.",
      prompt: `Which rectangular solids have volume greater than ${threshold}?`,
      choices: labels,
      answer,
      hint: "Multiply the three dimensions for each choice.",
      explanation: `The valid choices have products greater than ${threshold}: ${answer.join(", ")}.`
    };
  }

  const base = 3 + (seed % 4);
  if (hardVariant === 1) {
    const table = [
      ["A", base + 3, base + 1],
      ["B", base + 4, base + 2],
      ["C", base + 5, base + 1]
    ];
    const remaining = table.map(row => row[1] ** 3 - (4 / 3) * row[2] ** 3 * 3);
    const maxIndex = remaining.indexOf(Math.max(...remaining));
    return {
      type: "single",
      subtype: "Data Interpretation",
      directions: "Use pi = 3 and the table to answer the question.",
      prompt: "For which cube is the volume outside the spherical cavity greatest?",
      dataTable: {
        caption: "Cubes with spherical cavities",
        headers: ["Cube", "Cube side", "Cavity radius"],
        rows: table
      },
      choices: table.map(row => row[0]),
      answer: table[maxIndex][0],
      hint: "Subtract sphere volume from cube volume for each row.",
      explanation: `Using pi = 3, the remaining volumes are ${table.map((row, i) => `${row[0]}: ${formatNumber(remaining[i])}`).join(", ")}. The greatest is ${table[maxIndex][0]}.`
    };
  }
  const table = [
    ["Box A", base, base + 1, base + 4],
    ["Box B", base + 2, base + 2, base + 1],
    ["Box C", base + 1, base + 3, base + 2]
  ];
  const volumes = table.map(row => row[1] * row[2] * row[3]);
  const maxIndex = volumes.indexOf(Math.max(...volumes));
  return {
    type: "single",
    subtype: "Data Interpretation",
    directions: "Use the table to answer the question.",
    prompt: "Which rectangular solid has the greatest volume?",
    dataTable: {
      caption: "Rectangular solids",
      headers: ["Solid", "Length", "Width", "Height"],
      rows: table
    },
    choices: table.map(row => row[0]),
    answer: table[maxIndex][0],
    hint: "Volume is length times width times height.",
    explanation: `The volumes are ${table.map((row, i) => `${row[0]}: ${volumes[i]}`).join(", ")}. The greatest volume is ${table[maxIndex][0]}.`
  };
}

function makeQuantComparison(seed, testIndex, sectionNumber, itemIndex) {
  const variant = (itemIndex + testIndex * 2 + sectionNumber) % 16;
  if (variant === 0) {
    const n = 5 + (seed % 11);
    const a = 2 * n + 3;
    const b = n + 12;
    const answer = a > b ? "A" : a < b ? "B" : "C";
    return qcQuestion({
      stem: `n = ${n}`,
      quantityA: `2n + 3 = ${a}`,
      quantityB: `n + 12 = ${b}`,
      answer,
      explanation: `Substitute n = ${n}. Quantity A is ${a}, and Quantity B is ${b}, so ${qcAnswerText(answer)}.`,
      hint: "Substitute the given value before comparing the quantities."
    });
  }
  if (variant === 1) {
    const x = 3 + (seed % 8);
    const a = x * x - 1;
    const b = (x - 1) * (x + 1);
    return qcQuestion({
      stem: `x is an integer greater than 2.`,
      quantityA: `x^2 - 1`,
      quantityB: `(x - 1)(x + 1)`,
      answer: "C",
      explanation: `The expression (x - 1)(x + 1) expands to x^2 - 1, so the two quantities are equal for every allowed x.`,
      hint: "Expand the factored expression."
    });
  }
  if (variant === 2) {
    const r = 2 + (seed % 5);
    const area = Math.PI * r * r;
    const circumference = 2 * Math.PI * r;
    const answer = area > circumference ? "A" : area < circumference ? "B" : "C";
    return qcQuestion({
      stem: `A circle has radius ${r}.`,
      quantityA: `Area of the circle`,
      quantityB: `Circumference of the circle`,
      answer,
      explanation: `Area is pi * ${r}^2 = ${r * r}pi. Circumference is 2pi * ${r} = ${2 * r}pi, so ${qcAnswerText(answer)}.`,
      hint: "Use A = pi r^2 and C = 2 pi r, then compare the coefficients of pi."
    });
  }
  if (variant === 3) {
    const p = 20 + (seed % 6) * 5;
    const original = 80 + (seed % 5) * 10;
    const increase = original * (1 + p / 100);
    return qcQuestion({
      stem: `A value of ${original} is increased by ${p}%.`,
      quantityA: `The increase`,
      quantityB: `${p}`,
      answer: increase - original > p ? "A" : increase - original < p ? "B" : "C",
      explanation: `The increase is ${p}% of ${original}, or ${formatNumber(increase - original)}. Compare that with ${p}.`,
      hint: "The increase is the percent of the original value, not the final value."
    });
  }
  if (variant === 4) {
    return qcQuestion({
      stem: "x is a nonzero number.",
      quantityA: "x",
      quantityB: "x^2",
      answer: "D",
      explanation: "If x = 1/2, then Quantity A is greater. If x = 2, then Quantity B is greater. The relationship cannot be determined.",
      hint: "Try a positive fraction and a positive integer greater than 1."
    });
  }
  if (variant === 5) {
    return qcQuestion({
      stem: "Set A is {6, 6, 6, 6}. Set B is {3, 5, 7, 9}.",
      quantityA: "The standard deviation of Set A",
      quantityB: "The standard deviation of Set B",
      answer: "B",
      explanation: "Set A has no variation, so its standard deviation is 0. Set B has values spread around its mean, so its standard deviation is greater than 0.",
      hint: "Standard deviation measures spread, not the size of the numbers alone."
    });
  }
  if (variant === 6) {
    return qcQuestion({
      stem: "x is a negative number.",
      quantityA: "x^3",
      quantityB: "x^2",
      answer: "B",
      explanation: "For any negative x, x^3 is negative and x^2 is positive. Therefore Quantity B is greater.",
      hint: "Track the sign after squaring and cubing a negative number."
    });
  }
  if (variant === 7) {
    return qcQuestion({
      stem: "a and b are integers, and a > b.",
      quantityA: "a^2",
      quantityB: "b^2",
      answer: "D",
      explanation: "If a = 3 and b = 2, Quantity A is greater. If a = 1 and b = -2, Quantity B is greater. The relationship cannot be determined.",
      hint: "The sign of each integer matters when comparing squares."
    });
  }
  if (variant === 8) {
    return qcQuestion({
      stem: "x and y are positive numbers, and x + y = 10.",
      quantityA: "xy",
      quantityB: "24",
      answer: "D",
      explanation: "If x = 5 and y = 5, xy = 25. If x = 1 and y = 9, xy = 9. Quantity A can be greater or less than Quantity B.",
      hint: "The same sum can produce different products."
    });
  }
  if (variant === 9) {
    return qcQuestion({
      stem: "x^2 = 16.",
      quantityA: "x",
      quantityB: "0",
      answer: "D",
      explanation: "x can be 4 or -4. Quantity A can be greater than or less than Quantity B.",
      hint: "A square equation can have a positive and a negative solution."
    });
  }
  if (variant === 10) {
    return qcQuestion({
      stem: "A triangle has side lengths 5, 7, and x.",
      quantityA: "x",
      quantityB: "12",
      answer: "B",
      explanation: "By the triangle inequality, x must be less than 5 + 7 = 12. Therefore Quantity B is greater.",
      hint: "The sum of any two side lengths must be greater than the third side."
    });
  }
  if (variant === 11) {
    return qcQuestion({
      stem: "a/b = 3/5 and b/c = 10/9.",
      quantityA: "a/c",
      quantityB: "2/3",
      answer: "C",
      explanation: "a/c = (a/b)(b/c) = (3/5)(10/9) = 30/45 = 2/3.",
      hint: "Multiply the two ratios to eliminate b."
    });
  }
  if (variant === 12) {
    return qcQuestion({
      stem: "The nth term of a sequence is a_n = 2n^2 - n.",
      quantityA: "a_5 - a_4",
      quantityB: "a_4 - a_3",
      answer: "A",
      explanation: "a_5 - a_4 = 45 - 28 = 17, while a_4 - a_3 = 28 - 15 = 13. Quantity A is greater.",
      hint: "Compute the requested terms rather than assuming the sequence is arithmetic."
    });
  }
  if (variant === 13) {
    return qcQuestion({
      stem: "A data set of five numbers has mean 10 and median 10.",
      quantityA: "The greatest number in the data set",
      quantityB: "20",
      answer: "D",
      explanation: "The set {10, 10, 10, 10, 10} gives Quantity B greater. The set {0, 0, 10, 10, 30} gives Quantity A greater.",
      hint: "Mean and median do not fix the spread."
    });
  }
  if (variant === 14) {
    return qcQuestion({
      stem: "0 < x < 1.",
      quantityA: "sqrt(x)",
      quantityB: "x^2",
      answer: "A",
      explanation: "For 0 < x < 1, sqrt(x) > x and x > x^2, so sqrt(x) > x^2.",
      hint: "Fractions between 0 and 1 become smaller when squared and larger when square-rooted."
    });
  }
  return qcQuestion({
    stem: "n is a positive integer.",
    quantityA: "The remainder when n is divided by 5",
    quantityB: "The remainder when n + 2 is divided by 5",
    answer: "D",
    explanation: "If n = 1, the remainders are 1 and 3, so Quantity B is greater. If n = 4, the remainders are 4 and 1, so Quantity A is greater.",
    hint: "Try values of n from different positions in the mod 5 cycle."
  });
}

function qcQuestion({ stem, quantityA, quantityB, answer, explanation, hint }) {
  return {
    type: "single",
    subtype: "Quantitative Comparison",
    directions: "Compare Quantity A and Quantity B, then select one answer.",
    prompt: stem,
    quantityA,
    quantityB,
    choices: [
      "A. Quantity A is greater.",
      "B. Quantity B is greater.",
      "C. The two quantities are equal.",
      "D. The relationship cannot be determined from the information given."
    ],
    answer,
    hint,
    explanation
  };
}

function makeQuantSingle(seed, testIndex, sectionNumber, itemIndex) {
  const variant = (itemIndex + testIndex + sectionNumber) % 20;
  if (variant === 0) {
    const a = 3 + (seed % 8);
    const b = 2 + ((seed + 3) % 7);
    const rhs = a * (b + 1);
    const choices = numericChoices(b, [b - 1, b + 1, b + 2, rhs, a + b]);
    return singleQuant({
      stem: `If ${a}(x + 1) = ${rhs}, what is the value of x?`,
      choices,
      answer: String(b),
      hint: "Divide both sides by the coefficient first.",
      explanation: `${a}(x + 1) = ${rhs}, so x + 1 = ${rhs / a}. Therefore x = ${b}.`
    });
  }
  if (variant === 1) {
    const ratioA = 2 + (seed % 3);
    const ratioB = ratioA + 1;
    const unit = 8 + (seed % 6);
    const total = unit * (ratioA + ratioB);
    const target = unit * ratioB;
    return singleQuant({
      stem: `A fund is divided in the ratio ${ratioA}:${ratioB}. If the total fund is ${total}, what is the larger share?`,
      choices: numericChoices(target, [unit * ratioA, total - ratioA, total / 2, target + unit]),
      answer: String(target),
      hint: "Add the ratio parts to find the value of one part.",
      explanation: `There are ${ratioA + ratioB} total ratio parts. Each part is ${total} / ${ratioA + ratioB} = ${unit}, so the larger share is ${ratioB} * ${unit} = ${target}.`
    });
  }
  if (variant === 2) {
    const mean = 12 + (seed % 8);
    const numbers = [mean - 4, mean - 1, mean + 2, mean + 3];
    const missing = mean * 5 - sum(numbers);
    return singleQuant({
      stem: `The average of five numbers is ${mean}. Four of the numbers are ${numbers.join(", ")}. What is the fifth number?`,
      choices: numericChoices(missing, [missing - 3, missing + 2, mean, numbers[3]]),
      answer: String(missing),
      hint: "Average times number of terms gives the total sum.",
      explanation: `The total must be ${mean} * 5 = ${mean * 5}. The four given numbers sum to ${sum(numbers)}, so the fifth is ${mean * 5} - ${sum(numbers)} = ${missing}.`
    });
  }
  if (variant === 3) {
    const price = 60 + (seed % 7) * 5;
    const discount = 10 + (seed % 4) * 5;
    const sale = price * (1 - discount / 100);
    return singleQuant({
      stem: `A jacket priced at $${price} is discounted by ${discount}%. What is the sale price?`,
      choices: numericChoices(sale, [price - discount, price * discount / 100, sale + 5, price + discount]),
      answer: formatNumber(sale),
      hint: "Subtract the discount amount from the original price.",
      explanation: `The discount is ${discount}% of ${price}, or ${formatNumber(price * discount / 100)}. The sale price is ${price} - ${formatNumber(price * discount / 100)} = ${formatNumber(sale)}.`
    });
  }
  if (variant === 4) {
    const length = 7 + (seed % 6);
    const width = 4 + (seed % 5);
    const perimeter = 2 * (length + width);
    return singleQuant({
      stem: `A rectangle has length ${length} and width ${width}. What is its perimeter?`,
      choices: numericChoices(perimeter, [length * width, length + width, perimeter + 4, 2 * length + width]),
      answer: String(perimeter),
      hint: "Use P = 2l + 2w.",
      explanation: `The perimeter is 2(${length} + ${width}) = ${perimeter}.`
    });
  }
  if (variant === 5) {
    const rateA = 8 + (seed % 5) * 2;
    const rateB = 6 + (seed % 4) * 3;
    const hours = 3 + (seed % 3);
    const total = (rateA + rateB) * hours;
    return singleQuant({
      stem: `Two printers work at constant rates of ${rateA} and ${rateB} pages per minute. Working together for ${hours} minutes, how many pages do they print?`,
      choices: numericChoices(total, [rateA * hours, rateB * hours, rateA + rateB, total + hours]),
      answer: String(total),
      hint: "Add the rates first, then multiply by the time.",
      explanation: `Together the printers produce ${rateA + rateB} pages per minute. In ${hours} minutes, they print (${rateA + rateB}) * ${hours} = ${total} pages.`
    });
  }
  if (variant === 6) {
    const x1 = 1 + (seed % 5);
    const y1 = 2 + (seed % 4);
    const dx = 6;
    const dy = 8;
    const x2 = x1 + dx;
    const y2 = y1 + dy;
    const distance = 10;
    return singleQuant({
      stem: `What is the distance between (${x1}, ${y1}) and (${x2}, ${y2})?`,
      choices: numericChoices(distance, [dx + dy, Math.abs(x2 - x1), Math.abs(y2 - y1), distance + 2]),
      answer: String(distance),
      hint: "Use the distance formula, or recognize the 6-8-10 right triangle.",
      explanation: `The horizontal change is ${dx} and the vertical change is ${dy}, so the distance is sqrt(${dx}^2 + ${dy}^2) = 10.`
    });
  }
  if (variant === 7) {
    const n = 5 + (seed % 5);
    const result = n * (n - 1) / 2;
    return singleQuant({
      stem: `A team has ${n} members. How many different 2-person subcommittees can be formed?`,
      choices: numericChoices(result, [n * 2, n * (n - 1), result + n, n + 2]),
      answer: String(result),
      hint: "Order does not matter for a committee.",
      explanation: `The number of 2-person committees is ${n} * ${n - 1} / 2 = ${result}.`
    });
  }
  if (variant === 8) {
    const coefficient = 2 + (seed % 4);
    const constant = 3 + (seed % 5);
    const input = 4 + (seed % 4);
    const value = coefficient * input * input - constant;
    return singleQuant({
      stem: `If f(x) = ${coefficient}x^2 - ${constant}, what is f(${input})?`,
      choices: numericChoices(value, [coefficient * input - constant, coefficient * (input - constant), value + constant, value - coefficient]),
      answer: String(value),
      hint: "Substitute the input everywhere x appears before simplifying.",
      explanation: `f(${input}) = ${coefficient}(${input})^2 - ${constant} = ${coefficient * input * input} - ${constant} = ${value}.`
    });
  }
  if (variant === 9) {
    const red = 3 + (seed % 5);
    const blue = 5 + (seed % 4);
    const total = red + blue;
    const probability = blue / total;
    return singleQuant({
      stem: `A jar contains ${red} red marbles and ${blue} blue marbles. If one marble is selected at random, what is the probability that it is blue?`,
      choices: numericChoices(probability, [red / total, blue / red, red / blue, total / blue]),
      answer: formatNumber(probability),
      hint: "Probability is favorable outcomes divided by total possible outcomes.",
      explanation: `There are ${blue} favorable outcomes and ${total} total outcomes, so the probability is ${blue}/${total} = ${formatNumber(probability)}.`
    });
  }
  if (variant === 10) {
    const x1 = 1 + (seed % 4);
    const y1 = 2 + (seed % 5);
    const rise = 3 + (seed % 3);
    const run = 2 + (seed % 4);
    const x2 = x1 + run;
    const y2 = y1 + rise;
    const slope = rise / run;
    return singleQuant({
      stem: `What is the slope of the line passing through (${x1}, ${y1}) and (${x2}, ${y2})?`,
      choices: numericChoices(slope, [run / rise, rise + run, y2 / x2, slope + 1]),
      answer: formatNumber(slope),
      hint: "Slope is change in y divided by change in x.",
      explanation: `The slope is (${y2} - ${y1}) / (${x2} - ${x1}) = ${rise}/${run} = ${formatNumber(slope)}.`
    });
  }
  if (variant === 11) {
    const radius = 4 + (seed % 4);
    const centralAngle = 90 + (seed % 3) * 30;
    const sectorArea = centralAngle / 360 * radius * radius;
    const sectorChoices = numericChoices(sectorArea, [radius * radius, centralAngle / 360 * radius, sectorArea + radius, sectorArea * 2])
      .map(value => `${value}pi`);
    return singleQuant({
      stem: `A sector of a circle has radius ${radius} and central angle ${centralAngle} degrees. What is the area of the sector in terms of pi?`,
      choices: sectorChoices,
      answer: `${formatNumber(sectorArea)}pi`,
      hint: "Sector area is the same fraction of pi r^2 as the central angle is of 360 degrees.",
      explanation: `The sector area is (${centralAngle}/360) * pi * ${radius}^2 = ${formatNumber(sectorArea)}pi.`
    });
  }
  if (variant === 12) {
    const item = [
      { a: 2, b: -11, c: 5, larger: "5", other: "1/2" },
      { a: 3, b: -13, c: 4, larger: "4", other: "1/3" },
      { a: 2, b: -9, c: 4, larger: "4", other: "1/2" }
    ][seed % 3];
    return singleQuant({
      stem: `What is the larger solution of ${item.a}x^2 ${formatSigned(item.b)}x ${formatSigned(item.c)} = 0?`,
      choices: rotateChoices([item.larger, item.other, String(Number(item.larger) + 1), "0", String(Number(item.larger) - 1)], seed),
      answer: item.larger,
      hint: "Apply the quadratic formula: x = (-b +/- sqrt(b^2 - 4ac)) / 2a.",
      explanation: `The quadratic formula gives roots ${item.other} and ${item.larger}; the larger solution is ${item.larger}.`
    });
  }
  if (variant === 13) {
    const h = 5 + (seed % 4);
    const constant = 4 + (seed % 5);
    const k = h * h - constant;
    return singleQuant({
      stem: `When x^2 - ${2 * h}x + ${constant} is written as (x - ${h})^2 - k, what is k?`,
      choices: numericChoices(k, [h * h, constant, k + h, k - 1]),
      answer: String(k),
      hint: "Complete the square by adding and subtracting h^2.",
      explanation: `(x - ${h})^2 = x^2 - ${2 * h}x + ${h * h}, so x^2 - ${2 * h}x + ${constant} = (x - ${h})^2 - ${k}.`
    });
  }
  if (variant === 14) {
    const first = 3 + (seed % 4);
    const ratio = 2;
    const fifth = first * ratio ** 4;
    return singleQuant({
      stem: `A geometric sequence has first term ${first} and common ratio ${ratio}. What is the 5th term?`,
      choices: numericChoices(fifth, [first + 4 * ratio, first * ratio ** 3, fifth / 2, fifth + ratio]),
      answer: String(fifth),
      hint: "The 5th term is four common-ratio multiplications after the first term.",
      explanation: `a_5 = ${first} * ${ratio}^4 = ${fifth}.`
    });
  }
  if (variant === 15) {
    const side = 6 + (seed % 3) * 2;
    const radius = side / 2;
    const cubeVolume = side ** 3;
    const sphereCoefficient = (4 / 3) * radius ** 3;
    return singleQuant({
      stem: `A sphere is inscribed in a cube with side length ${side}. What is the volume inside the cube but outside the sphere?`,
      choices: rotateChoices([
        `${cubeVolume} - ${formatNumber(sphereCoefficient)}pi`,
        `${cubeVolume} - ${formatNumber(radius * radius)}pi`,
        `${formatNumber(sphereCoefficient)}pi`,
        `${side ** 2} - ${formatNumber(sphereCoefficient)}pi`,
        `${cubeVolume} + ${formatNumber(sphereCoefficient)}pi`
      ], seed),
      answer: `${cubeVolume} - ${formatNumber(sphereCoefficient)}pi`,
      hint: "The sphere's diameter equals the cube's side length.",
      explanation: `The sphere radius is ${radius}. Cube volume is ${cubeVolume}, and sphere volume is ${formatNumber(sphereCoefficient)}pi. The remaining volume is ${cubeVolume} - ${formatNumber(sphereCoefficient)}pi.`
    });
  }
  if (variant === 16) {
    const red = 5 + (seed % 4);
    const blue = 4 + (seed % 5);
    const total = red + blue;
    const probability = red / total * blue / (total - 1) + blue / total * red / (total - 1);
    return singleQuant({
      stem: `A bag contains ${red} red chips and ${blue} blue chips. Two chips are selected without replacement. What is the probability that the two chips are different colors?`,
      choices: numericChoices(probability, [red / total, blue / total, red / total * blue / (total - 1), red / total * (red - 1) / (total - 1)]),
      answer: formatNumber(probability),
      hint: "Different colors can happen in two orders: red then blue or blue then red.",
      explanation: `The probability is (${red}/${total})(${blue}/${total - 1}) + (${blue}/${total})(${red}/${total - 1}) = ${formatNumber(probability)}.`
    });
  }
  if (variant === 17) {
    const feetPerSecond = 44 + (seed % 4) * 11;
    const mph = feetPerSecond * 3600 / 5280;
    return singleQuant({
      stem: `A runner moves at ${feetPerSecond} feet per second. What is the runner's speed in miles per hour?`,
      choices: numericChoices(mph, [feetPerSecond / 2, feetPerSecond, mph + 5, mph * 2]),
      answer: formatNumber(mph),
      hint: "Convert seconds to hours and feet to miles.",
      explanation: `${feetPerSecond} ft/s = ${feetPerSecond} * 3600 / 5280 = ${formatNumber(mph)} miles per hour.`
    });
  }
  if (variant === 18) {
    const cm = 12 + (seed % 4) * 3;
    const kilometers = cm * 5 / 3;
    const minutes = kilometers / 45 * 60;
    return singleQuant({
      stem: `On a scale drawing, 3 centimeters represents 5 kilometers. A road is ${cm} centimeters on the drawing. At 45 kilometers per hour, how many minutes are required to travel the road?`,
      choices: numericChoices(minutes, [kilometers, minutes / 2, minutes + 10, cm * 5]),
      answer: formatNumber(minutes),
      hint: "Convert the map length to kilometers, then divide by the rate.",
      explanation: `The actual distance is ${formatNumber(kilometers)} km. Time is ${formatNumber(kilometers / 45)} hours, or ${formatNumber(minutes)} minutes.`
    });
  }
  const triangle = buildCoordinateTriangle(seed);
  return {
    ...singleQuant({
      stem: "In the coordinate graph shown, what is the area of triangle ABC?",
      choices: numericChoices(triangle.area, [triangle.base + triangle.height, triangle.area / 2, triangle.base * triangle.height, triangle.area + triangle.height]),
      answer: formatNumber(triangle.area),
      hint: "Use the horizontal side as the base and count the vertical height.",
      explanation: `AB = ${triangle.base} and the height to AB is ${triangle.height}. Area = (1/2)(${triangle.base})(${triangle.height}) = ${formatNumber(triangle.area)}.`
    }),
    dataGraph: triangle.dataGraph
  };
}

function singleQuant({ stem, choices, answer, hint, explanation }) {
  return {
    type: "single",
    subtype: "Multiple Choice",
    directions: "Select one answer choice.",
    prompt: stem,
    choices: choices.map(String),
    answer: String(answer),
    hint,
    explanation
  };
}

function makeQuantMultiple(seed, testIndex, sectionNumber, itemIndex) {
  const variant = (itemIndex + testIndex + sectionNumber) % 12;
  if (variant === 0) {
    const divisor = 3 + (seed % 3);
    const choices = [5, 6, 7, 8, 9, 10].map((factor, index) => divisor * factor + (index % 3 === 2 ? 1 : 0));
    const answer = choices.filter(value => value % divisor === 0).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `Which of the following integers are divisible by ${divisor}?`,
      choices: choices.map(String),
      answer,
      hint: "Test divisibility choice by choice; more than one answer may be correct.",
      explanation: `The values divisible by ${divisor} are ${answer.join(", ")}.`
    };
  }
  if (variant === 1) {
    const threshold = 30 + (seed % 5) * 4;
    const choices = [threshold - 12, threshold - 3, threshold, threshold + 1, threshold + 8, threshold + 15];
    const answer = choices.filter(value => value > threshold).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `Which of the following values are greater than ${threshold}?`,
      choices: choices.map(String),
      answer,
      hint: "The phrase 'greater than' excludes equality.",
      explanation: `Only values strictly greater than ${threshold} qualify: ${answer.join(", ")}.`
    };
  }
  if (variant === 2) {
    const target = 24 + (seed % 5) * 6;
    const choices = [2, 3, 4, 5, 6, 8].map(value => value + (seed % 2));
    const answer = choices.filter(value => target % value === 0).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `Which of the following are factors of ${target}?`,
      choices: choices.map(String),
      answer,
      hint: "A factor divides the target with no remainder.",
      explanation: `The listed factors of ${target} are ${answer.join(", ")}.`
    };
  }
  if (variant === 3) {
    const target = 60 + (seed % 5) * 12;
    const choices = [2, 3, 5, 7, 11, 13];
    const answer = choices.filter(value => target % value === 0).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `Which of the following prime numbers are factors of ${target}?`,
      choices: choices.map(String),
      answer,
      hint: "Check divisibility by each listed prime.",
      explanation: `The listed prime factors of ${target} are ${answer.join(", ")}.`
    };
  }
  if (variant === 4) {
    const cutoff = 10 + (seed % 5) * 3;
    const choices = [cutoff - 6, cutoff - 1, cutoff, cutoff + 1, cutoff + 4, cutoff + 7];
    const answer = choices.filter(value => 2 * value - 5 < 2 * cutoff - 5).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `Which of the following values of x satisfy 2x - 5 < ${2 * cutoff - 5}?`,
      choices: choices.map(String),
      answer,
      hint: `Solve the inequality first: 2x < ${2 * cutoff}.`,
      explanation: `The inequality gives x < ${cutoff}. The listed values that satisfy it are ${answer.join(", ")}.`
    };
  }
  if (variant === 5) {
    const mean = 12 + (seed % 4);
    const choices = [mean - 6, mean - 2, mean, mean + 2, mean + 6, mean + 8];
    const answer = choices.filter(value => Math.abs(value - mean) <= 2).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `A data set has mean ${mean}. Which listed values are within 2 units of the mean?`,
      choices: choices.map(String),
      answer,
      hint: `Within 2 units means from ${mean - 2} through ${mean + 2}, inclusive.`,
      explanation: `The values within 2 units of ${mean} are ${answer.join(", ")}.`
    };
  }
  if (variant === 6) {
    const target = 18 + (seed % 4) * 6;
    const choices = [1, 2, 3, 4, 5, 6].map(value => value + (seed % 2));
    const answer = choices.filter(value => target / value > 4).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `For which listed values of n is ${target}/n greater than 4?`,
      choices: choices.map(String),
      answer,
      hint: `Rewrite the inequality as n < ${formatNumber(target / 4)}.`,
      explanation: `${target}/n > 4 when n < ${formatNumber(target / 4)}. The listed values that work are ${answer.join(", ")}.`
    };
  }
  if (variant === 7) {
    const low = 2 + (seed % 4);
    const high = low + 6;
    const choices = [low - 2, low, low + 1, low + 3, high, high + 2];
    const answer = choices.filter(value => value > low && value < high).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `Which listed values of x satisfy x^2 - ${low + high}x + ${low * high} < 0?`,
      choices: choices.map(String),
      answer,
      hint: "Factor the quadratic and choose values between the roots.",
      explanation: `The expression factors as (x - ${low})(x - ${high}), which is negative for ${low} < x < ${high}. The listed values are ${answer.join(", ")}.`
    };
  }
  if (variant === 8) {
    const total = 100 + (seed % 4) * 10;
    const groupA = 55 + (seed % 3) * 5;
    const groupB = total - 25;
    const lower = groupA + groupB - total;
    const upper = Math.min(groupA, groupB);
    const choices = [lower - 2, lower, lower + 4, Math.floor((lower + upper) / 2), upper, upper + 2];
    const answer = choices.filter(value => value >= lower && value <= upper).map(String);
    return {
      type: "multiple",
      subtype: "Multiple Choice, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `Of ${total} applicants, ${groupA} submitted a portfolio and ${groupB} submitted test scores. Which listed values could be the number who submitted both?`,
      choices: choices.map(String),
      answer,
      hint: "The overlap must be at least A + B - total and at most the smaller category.",
      explanation: `The possible overlap is from ${lower} through ${upper}. The listed possible values are ${answer.join(", ")}.`
    };
  }
  if (variant === 9) {
    const choices = [2, 3, 4, 5, 6, 7];
    const answer = choices.filter(value => value / 8 > 1 / 2).map(String);
    return {
      type: "multiple",
      subtype: "Probability, Select One or More",
      directions: "Select all choices that apply.",
      prompt: "A fair 8-sided die numbered 1 through 8 is rolled. Which listed values of n make the probability of rolling at most n greater than 1/2?",
      choices: choices.map(String),
      answer,
      hint: "Rolling at most n gives n favorable outcomes out of 8.",
      explanation: `n/8 is greater than 1/2 when n > 4. The listed values are ${answer.join(", ")}.`
    };
  }
  if (variant === 10) {
    const first = 5 + (seed % 5);
    const difference = 4 + (seed % 3);
    const choices = [first, first + difference, first + 2 * difference + 1, first + 3 * difference, first + 5 * difference, first + 6 * difference + 2];
    const answer = choices.filter(value => (value - first) % difference === 0 && value >= first).map(String);
    return {
      type: "multiple",
      subtype: "Sequences, Select One or More",
      directions: "Select all choices that apply.",
      prompt: `An arithmetic sequence starts with ${first} and has common difference ${difference}. Which listed values are terms of the sequence?`,
      choices: choices.map(String),
      answer,
      hint: "Subtract the first term and check for a nonnegative multiple of the common difference.",
      explanation: `Terms have the form ${first} + ${difference}k. The listed terms are ${answer.join(", ")}.`
    };
  }
  const sideNeeded = 8 + (seed % 3);
  const choices = [sideNeeded - 3, sideNeeded - 1, sideNeeded, sideNeeded + 1, sideNeeded + 3, sideNeeded + 5];
  const answer = choices.filter(value => value >= sideNeeded).map(String);
  return {
    type: "multiple",
    subtype: "Geometry: 3D Shapes",
    directions: "Select all choices that apply.",
    prompt: `A cube must contain a vertical cylinder of height ${sideNeeded} and diameter ${sideNeeded - 2}. Which listed cube side lengths are large enough?`,
    choices: choices.map(String),
    answer,
    hint: "The cube side must be at least the cylinder's height and at least its diameter.",
    explanation: `The height requirement is stricter, so the side length must be at least ${sideNeeded}. The listed values are ${answer.join(", ")}.`
  };
}

function makeQuantNumeric(seed, testIndex, sectionNumber, itemIndex) {
  const variant = (itemIndex + testIndex + sectionNumber) % 16;
  if (variant === 0) {
    const base = 6 + (seed % 8);
    const height = 4 + (seed % 6);
    const area = base * height / 2;
    return numericQuestion({
      stem: `A triangle has base ${base} and height ${height}. What is its area?`,
      answer: area,
      hint: "Use one-half times base times height.",
      explanation: `Area = 1/2 * ${base} * ${height} = ${formatNumber(area)}.`
    });
  }
  if (variant === 1) {
    const start = 50 + (seed % 6) * 10;
    const percent = 20 + (seed % 4) * 5;
    const result = start * (1 + percent / 100);
    return numericQuestion({
      stem: `${start} increased by ${percent}% equals what number?`,
      answer: result,
      hint: "Multiply by 1 plus the percent written as a decimal.",
      explanation: `${start} * (1 + ${percent}/100) = ${start} * ${formatNumber(1 + percent / 100)} = ${formatNumber(result)}.`
    });
  }
  if (variant === 2) {
    const a = 2 + (seed % 7);
    const b = 3 + (seed % 6);
    const result = a * a + b * b;
    return numericQuestion({
      stem: `If a = ${a} and b = ${b}, what is a^2 + b^2?`,
      answer: result,
      hint: "Square each value before adding.",
      explanation: `${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${result}.`
    });
  }
  if (variant === 3) {
    const first = 5 + (seed % 5);
    const diff = 3 + (seed % 4);
    const term = first + 5 * diff;
    return numericQuestion({
      stem: `An arithmetic sequence has first term ${first} and common difference ${diff}. What is the 6th term?`,
      answer: term,
      hint: "The 6th term is five common differences after the first term.",
      explanation: `a_6 = ${first} + 5(${diff}) = ${term}.`
    });
  }
  if (variant === 4) {
    const countA = 8 + (seed % 4);
    const countB = 6 + (seed % 5);
    const avgA = 70 + (seed % 5) * 2;
    const avgB = avgA + 10;
    const combined = (countA * avgA + countB * avgB) / (countA + countB);
    return numericQuestion({
      stem: `A group of ${countA} students has an average score of ${avgA}, and a group of ${countB} students has an average score of ${avgB}. What is the combined average score?`,
      answer: combined,
      hint: "Use total points divided by total students.",
      explanation: `The combined average is (${countA} * ${avgA} + ${countB} * ${avgB}) / (${countA} + ${countB}) = ${formatNumber(combined)}.`
    });
  }
  if (variant === 5) {
    const n = 6 + (seed % 5);
    const committees = n * (n - 1) / 2;
    return numericQuestion({
      stem: `How many different pairs can be selected from ${n} people?`,
      answer: committees,
      hint: "For pairs, divide n(n - 1) by 2 because order does not matter.",
      explanation: `${n} * ${n - 1} / 2 = ${committees}.`
    });
  }
  if (variant === 6) {
    const favorable = 3 + (seed % 4);
    const other = 5 + (seed % 5);
    const total = favorable + other;
    const probability = favorable / total;
    return numericQuestion({
      stem: `A box contains ${favorable} green tokens and ${other} yellow tokens. If one token is selected at random, what is the probability that it is green?`,
      answer: probability,
      hint: "Divide favorable outcomes by total outcomes.",
      explanation: `The probability is ${favorable}/${total} = ${formatNumber(probability)}.`
    });
  }
  if (variant === 7) {
    const middle = 14 + (seed % 6);
    const values = [middle - 9, middle - 3, middle, middle + 4, middle + 8];
    return numericQuestion({
      stem: `What is the median of the numbers ${values.join(", ")}?`,
      answer: middle,
      hint: "The median is the middle value after the numbers are in order.",
      explanation: `The list is already in increasing order, so the middle value is ${middle}.`
    });
  }
  if (variant === 8) {
    const width = 5 + (seed % 5);
    const length = width + 3;
    const scale = 2 + (seed % 3);
    const newArea = width * length * scale * scale;
    return numericQuestion({
      stem: `A rectangle has width ${width} and length ${length}. If both dimensions are multiplied by ${scale}, what is the new area?`,
      answer: newArea,
      hint: "Multiplying both dimensions by the same factor multiplies area by the square of that factor.",
      explanation: `The original area is ${width * length}. The new area is ${width * length} * ${scale}^2 = ${newArea}.`
    });
  }
  if (variant === 9) {
    const low = 7 + (seed % 5);
    const high = low + 13 + (seed % 4);
    const range = high - low;
    return numericQuestion({
      stem: `The smallest value in a data set is ${low}, and the largest value is ${high}. What is the range of the data set?`,
      answer: range,
      hint: "Range is greatest value minus least value.",
      explanation: `The range is ${high} - ${low} = ${range}.`
    });
  }
  if (variant === 10) {
    const r1 = 5 + (seed % 3);
    const r2 = r1 + 4;
    const b = -(r1 + r2);
    const c = r1 * r2;
    return numericQuestion({
      stem: `What is the smaller solution of x^2 ${formatSigned(b)}x ${formatSigned(c)} = 0?`,
      answer: r1,
      hint: "Factor the quadratic or use the quadratic formula.",
      explanation: `The equation factors as (x - ${r1})(x - ${r2}) = 0, so the smaller solution is ${r1}.`
    });
  }
  if (variant === 11) {
    const h = 5 + (seed % 5);
    const k = 6 + (seed % 4);
    return numericQuestion({
      stem: `What is the minimum value of x^2 - ${2 * h}x + ${h * h + k}?`,
      answer: k,
      hint: "Complete the square.",
      explanation: `x^2 - ${2 * h}x + ${h * h + k} = (x - ${h})^2 + ${k}, so the minimum value is ${k}.`
    });
  }
  if (variant === 12) {
    const matrix = buildSurveyMatrix(seed);
    return {
      ...numericQuestion({
        stem: "In the two-way table shown, how many in-person students are undergraduates?",
        answer: matrix.inPersonUndergraduate,
        hint: "Use the row and column totals.",
        explanation: `Online undergraduates = ${matrix.online} - ${matrix.onlineGraduate} = ${matrix.onlineUndergraduate}. In-person undergraduates = ${matrix.undergraduate} - ${matrix.onlineUndergraduate} = ${matrix.inPersonUndergraduate}.`
      }),
      dataTable: matrix.dataTable
    };
  }
  if (variant === 13) {
    const first = 2 + (seed % 5);
    const second = first + 3;
    const third = 2 * second - first;
    const fourth = 2 * third - second;
    return numericQuestion({
      stem: `In a sequence, a_1 = ${first}, a_2 = ${second}, and each later term equals twice the previous term minus the term before it. What is a_4?`,
      answer: fourth,
      hint: "Compute a_3 first, then a_4.",
      explanation: `a_3 = 2(${second}) - ${first} = ${third}; a_4 = 2(${third}) - ${second} = ${fourth}.`
    });
  }
  if (variant === 14) {
    const radius = 3 + (seed % 3);
    const height = 2 * radius + 4;
    const coefficient = radius * radius * height - (4 / 3) * radius ** 3;
    return numericQuestion({
      stem: `A sphere of radius ${radius} is removed from a cylinder of radius ${radius} and height ${height}. What is the coefficient of pi in the remaining volume?`,
      answer: coefficient,
      hint: "Subtract sphere volume from cylinder volume.",
      explanation: `The cylinder volume is ${radius * radius * height}pi and the sphere volume is ${formatNumber((4 / 3) * radius ** 3)}pi, leaving ${formatNumber(coefficient)}pi.`
    });
  }
  const feetPerSecond = 44 + (seed % 4) * 11;
  const mph = feetPerSecond * 3600 / 5280;
  return numericQuestion({
    stem: `A vehicle travels at ${feetPerSecond} feet per second. What is its speed in miles per hour?`,
    answer: mph,
    hint: "Multiply by 3,600 and divide by 5,280.",
    explanation: `${feetPerSecond} ft/s = ${feetPerSecond} * 3600 / 5280 = ${formatNumber(mph)} miles per hour.`
  });
}

function numericQuestion({ stem, answer, hint, explanation }) {
  return {
    type: "numeric",
    subtype: "Numeric Entry",
    directions: "Enter the exact value.",
    prompt: stem,
    answer: formatNumber(answer),
    hint,
    explanation
  };
}

function makeDataInterpretation(seed, testIndex, sectionNumber, itemIndex) {
  const variant = (itemIndex + testIndex + sectionNumber) % 12;
  const base = 40 + (seed % 10);
  if (variant === 0) {
    const table = [
      ["North", base + 8, base + 12],
      ["South", base - 5, base + 1],
      ["West", base + 2, base + 11]
    ];
    const totals = table.map(row => row[1] + row[2]);
    const maxIndex = totals.indexOf(Math.max(...totals));
    return {
      type: "single",
      subtype: "Data Interpretation",
      directions: "Use the table to answer the question.",
      prompt: "Which region had the greatest two-year total?",
      dataTable: {
        caption: "Program enrollment by region",
        headers: ["Region", "Year 1", "Year 2"],
        rows: table
      },
      choices: table.map(row => row[0]),
      answer: table[maxIndex][0],
      hint: "Add Year 1 and Year 2 for each region.",
      explanation: `The totals are ${table.map((row, i) => `${row[0]}: ${totals[i]}`).join(", ")}. The greatest total is ${table[maxIndex][0]}.`
    };
  }
  if (variant === 1) {
    const table = [
      ["North", base + 8, base + 12],
      ["South", base - 5, base + 1],
      ["West", base + 2, base + 11]
    ];
    const southIncrease = table[1][2] - table[1][1];
    return {
      type: "numeric",
      subtype: "Data Interpretation",
      directions: "Use the table to answer the question.",
      prompt: "By how many did South enrollment increase from Year 1 to Year 2?",
      dataTable: {
        caption: "Program enrollment by region",
        headers: ["Region", "Year 1", "Year 2"],
        rows: table
      },
      answer: String(southIncrease),
      hint: "Subtract South Year 1 from South Year 2.",
      explanation: `South enrollment increased by ${table[1][2]} - ${table[1][1]} = ${southIncrease}.`
    };
  }
  if (variant === 2) {
    const table = [
      ["Alpha", base + 5, base + 8, base + 11],
      ["Beta", base - 2, base + 6, base + 10],
      ["Gamma", base + 3, base + 7, base + 9]
    ];
    const betaAverage = sum(table[1].slice(1)) / 3;
    return {
      type: "numeric",
      subtype: "Data Interpretation",
      directions: "Use the table to answer the question.",
      prompt: "What was Beta's average output over the three quarters?",
      dataTable: {
        caption: "Quarterly output by project",
        headers: ["Project", "Q1", "Q2", "Q3"],
        rows: table
      },
      answer: formatNumber(betaAverage),
      hint: "Add Beta's three outputs and divide by 3.",
      explanation: `Beta's average is (${table[1][1]} + ${table[1][2]} + ${table[1][3]}) / 3 = ${formatNumber(betaAverage)}.`
    };
  }
  if (variant === 3) {
    const table = [
      ["Museum", base + 18, base + 23],
      ["Library", base + 12, base + 20],
      ["Theater", base + 16, base + 19]
    ];
    const increases = table.map(row => row[2] - row[1]);
    const maxIndex = increases.indexOf(Math.max(...increases));
    return {
      type: "single",
      subtype: "Data Interpretation",
      directions: "Use the table to answer the question.",
      prompt: "Which venue had the greatest increase in attendance?",
      dataTable: {
        caption: "Average daily attendance",
        headers: ["Venue", "Spring", "Fall"],
        rows: table
      },
      choices: table.map(row => row[0]),
      answer: table[maxIndex][0],
      hint: "Subtract Spring from Fall for each venue.",
      explanation: `The increases are ${table.map((row, i) => `${row[0]}: ${increases[i]}`).join(", ")}. The greatest increase is for ${table[maxIndex][0]}.`
    };
  }
  if (variant === 4) {
    const table = [
      ["A", 80, 96],
      ["B", 120, 138],
      ["C", 150, 165]
    ].map(row => [row[0], row[1] + (seed % 3) * 10, row[2] + (seed % 3) * 10]);
    const increases = table.map(row => (row[2] - row[1]) / row[1]);
    const maxIndex = increases.indexOf(Math.max(...increases));
    return {
      type: "single",
      subtype: "Data Interpretation",
      directions: "Use the table to answer the question.",
      prompt: "Which program had the greatest percent increase from Year 1 to Year 2?",
      dataTable: {
        caption: "Participants by program",
        headers: ["Program", "Year 1", "Year 2"],
        rows: table
      },
      choices: table.map(row => row[0]),
      answer: table[maxIndex][0],
      hint: "Percent increase is increase divided by the original value.",
      explanation: `The percent increases are ${table.map((row, i) => `${row[0]}: ${formatNumber(increases[i] * 100)}%`).join(", ")}. The greatest is program ${table[maxIndex][0]}.`
    };
  }
  if (variant === 5) {
    const table = [
      ["Local", base + 12, base + 18],
      ["Regional", base + 20, base + 25],
      ["National", base + 26, base + 34]
    ];
    const totalYear2 = table.reduce((total, row) => total + row[2], 0);
    const share = table[2][2] / totalYear2 * 100;
    return {
      type: "numeric",
      subtype: "Data Interpretation",
      directions: "Use the table to answer the question.",
      prompt: "National sales in Year 2 were approximately what percent of total Year 2 sales?",
      dataTable: {
        caption: "Sales by market",
        headers: ["Market", "Year 1", "Year 2"],
        rows: table
      },
      answer: formatNumber(share),
      hint: "Divide National Year 2 sales by total Year 2 sales, then multiply by 100.",
      explanation: `Total Year 2 sales are ${totalYear2}. National's share is ${table[2][2]} / ${totalYear2} * 100 = ${formatNumber(share)}%.`
    };
  }
  if (variant === 6) {
    const matrix = buildSurveyMatrix(seed);
    return {
      type: "numeric",
      subtype: "Data Interpretation: Two-Way Table",
      directions: "Use the table to answer the question.",
      prompt: "How many in-person students are undergraduates?",
      dataTable: matrix.dataTable,
      answer: String(matrix.inPersonUndergraduate),
      hint: "Fill the blank cells using the row and column totals.",
      explanation: `Online undergraduates = ${matrix.online} - ${matrix.onlineGraduate} = ${matrix.onlineUndergraduate}. In-person undergraduates = ${matrix.undergraduate} - ${matrix.onlineUndergraduate} = ${matrix.inPersonUndergraduate}.`
    };
  }
  if (variant === 7) {
    const bars = [
      { label: "Alpha", value: base + 22 },
      { label: "Beta", value: base + 38 },
      { label: "Gamma", value: base + 31 },
      { label: "Delta", value: base + 44 }
    ];
    const max = bars.reduce((best, item) => item.value > best.value ? item : best, bars[0]);
    return {
      type: "single",
      subtype: "Data Interpretation: Graph",
      directions: "Use the graph to answer the question.",
      prompt: "Which project had the greatest output?",
      dataGraph: {
        type: "bar",
        caption: "Project output",
        yLabel: "Units",
        bars
      },
      choices: bars.map(bar => bar.label),
      answer: max.label,
      hint: "Compare the bar heights.",
      explanation: `${max.label} has the greatest output, ${max.value} units.`
    };
  }
  if (variant === 8) {
    const points = [
      { label: "Week 1", value: base + 10 },
      { label: "Week 2", value: base + 18 },
      { label: "Week 3", value: base + 16 },
      { label: "Week 4", value: base + 31 }
    ];
    const change = points[3].value - points[0].value;
    return {
      type: "numeric",
      subtype: "Data Interpretation: Graph",
      directions: "Use the line graph to answer the question.",
      prompt: "By how many units did the value increase from Week 1 to Week 4?",
      dataGraph: {
        type: "line",
        caption: "Weekly values",
        yLabel: "Units",
        points
      },
      answer: String(change),
      hint: "Subtract the Week 1 value from the Week 4 value.",
      explanation: `The increase is ${points[3].value} - ${points[0].value} = ${change}.`
    };
  }
  if (variant === 9) {
    const triangle = buildCoordinateTriangle(seed);
    return {
      type: "single",
      subtype: "Data Interpretation: Coordinate Graph",
      directions: "Use the coordinate graph to answer the question.",
      prompt: "What is the area of triangle ABC?",
      dataGraph: triangle.dataGraph,
      choices: numericChoices(triangle.area, [triangle.base + triangle.height, triangle.area / 2, triangle.base * triangle.height, triangle.area + triangle.height]),
      answer: formatNumber(triangle.area),
      hint: "Use AB as the base and count the vertical height to C.",
      explanation: `AB = ${triangle.base}, and the height is ${triangle.height}. Area = (1/2)(${triangle.base})(${triangle.height}) = ${formatNumber(triangle.area)}.`
    };
  }
  if (variant === 10) {
    const table = [
      ["North", base + 18, base + 12],
      ["South", base + 10, base + 20],
      ["East", base + 25, base + 18],
      ["West", base + 14, base + 17]
    ];
    const answer = table.filter(row => row[1] > row[2]).map(row => row[0]);
    return {
      type: "multiple",
      subtype: "Data Interpretation, Select One or More",
      directions: "Use the table to answer the question. Select all choices that apply.",
      prompt: "For which regions is the first value greater than the second value?",
      dataTable: {
        caption: "Regional counts",
        headers: ["Region", "Value A", "Value B"],
        rows: table
      },
      choices: table.map(row => row[0]),
      answer,
      hint: "Compare the two entries in each row.",
      explanation: `The regions with Value A greater than Value B are ${answer.join(", ")}.`
    };
  }
  const points = [
    { label: "Q1", value: base + 4 },
    { label: "Q2", value: base + 15 },
    { label: "Q3", value: base + 11 },
    { label: "Q4", value: base + 22 }
  ];
  return {
    ...qcQuestion({
      stem: "The line graph shows quarterly demand.",
      quantityA: "The increase from Q1 to Q2",
      quantityB: "The increase from Q3 to Q4",
      answer: "C",
      explanation: "Q1 to Q2 increases by 11, and Q3 to Q4 also increases by 11. The quantities are equal.",
      hint: "Compare the differences between the two pairs of points."
    }),
    dataGraph: {
      type: "line",
      caption: "Quarterly demand",
      yLabel: "Units",
      points
    }
  };
}

function rotateChoices(choices, offset) {
  const copy = [...choices];
  const amount = offset % copy.length;
  return copy.slice(amount).concat(copy.slice(0, amount));
}

function numericChoices(answer, distractors) {
  const values = [answer, ...distractors]
    .map(value => formatNumber(value))
    .filter((value, index, array) => array.indexOf(value) === index);
  let filler = Number(answer) + 7;
  while (values.length < 5) {
    const candidate = formatNumber(filler);
    if (!values.includes(candidate)) values.push(candidate);
    filler += 5;
  }
  return rotateChoices(values.slice(0, 5), Math.round(Number(answer)) % 5);
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function formatNumber(value) {
  if (Number.isInteger(value)) return String(value);
  return String(Math.round(value * 100) / 100);
}

function formatSigned(value) {
  return value < 0 ? `- ${Math.abs(value)}` : `+ ${value}`;
}

function qcAnswerText(answer) {
  return {
    A: "Quantity A is greater",
    B: "Quantity B is greater",
    C: "the two quantities are equal",
    D: "the relationship cannot be determined"
  }[answer];
}

const tests = buildTests();
const SCORE_HISTORY_KEY = "grePracticeScoreHistory";
const SESSION_STORAGE_KEY = "grePracticeSessions";
const state = {
  selectedTest: null,
  currentSessionId: null,
  currentSectionIndex: 0,
  currentQuestionIndex: 0,
  answers: {},
  marked: {},
  sectionTimers: [],
  timerId: null,
  timerPaused: false,
  realMode: false,
  testInProgress: false,
  currentResultSaved: false,
  completedSections: new Set(),
  reviewQuestionId: null,
  filters: {
    search: "",
    section: "all",
    focus: "all"
  }
};

const els = {
  app: document.getElementById("app"),
  startScreen: document.getElementById("start-screen"),
  examScreen: document.getElementById("exam-screen"),
  summaryScreen: document.getElementById("summary-screen"),
  navLinks: document.querySelectorAll(".nav-link"),
  dashboardPanels: document.querySelectorAll(".dashboard-panel"),
  topStartTests: document.getElementById("top-start-tests"),
  topViewScores: document.getElementById("top-view-scores"),
  homeStartTests: document.getElementById("home-start-tests"),
  homeViewScores: document.getElementById("home-view-scores"),
  testList: document.getElementById("test-list"),
  sessionList: document.getElementById("session-list"),
  testSearch: document.getElementById("test-search"),
  sectionFilter: document.getElementById("section-filter"),
  focusFilter: document.getElementById("focus-filter"),
  resetFilters: document.getElementById("reset-filters"),
  scoreOverview: document.getElementById("score-overview"),
  scoreTrendChart: document.getElementById("score-trend-chart"),
  sectionBarChart: document.getElementById("section-bar-chart"),
  scoreHistory: document.getElementById("score-history"),
  clearScores: document.getElementById("clear-scores"),
  timerSection: document.getElementById("timer-section"),
  timer: document.getElementById("timer"),
  examModeBadge: document.getElementById("exam-mode-badge"),
  realModeCopy: document.getElementById("real-mode-copy"),
  pauseTimer: document.getElementById("pause-timer"),
  resumeTimer: document.getElementById("resume-timer"),
  sectionNav: document.getElementById("section-nav"),
  activeTestName: document.getElementById("active-test-name"),
  sectionTitle: document.getElementById("section-title"),
  progressCopy: document.getElementById("progress-copy"),
  questionNav: document.getElementById("question-nav"),
  questionType: document.getElementById("question-type"),
  questionHeading: document.getElementById("question-heading"),
  hintButton: document.getElementById("hint-button"),
  hintPanel: document.getElementById("hint-panel"),
  questionContent: document.getElementById("question-content"),
  answerArea: document.getElementById("answer-area"),
  prevQuestion: document.getElementById("prev-question"),
  markQuestion: document.getElementById("mark-question"),
  nextQuestion: document.getElementById("next-question"),
  finishSection: document.getElementById("finish-section"),
  exitTest: document.getElementById("exit-test"),
  summaryTestName: document.getElementById("summary-test-name"),
  scoreCards: document.getElementById("score-cards"),
  reviewList: document.getElementById("review-list"),
  reviewDetail: document.getElementById("review-detail"),
  retakeTest: document.getElementById("retake-test"),
  chooseTest: document.getElementById("choose-test")
};

function init() {
  renderTestList();
  renderSessionList();
  renderScoresDashboard();
  bindEvents();
}

function bindEvents() {
  els.navLinks.forEach(link => {
    link.addEventListener("click", () => activatePanel(link.dataset.target));
  });
  [els.topStartTests, els.homeStartTests].forEach(button => {
    button.addEventListener("click", () => activatePanel("tests-panel"));
  });
  [els.topViewScores, els.homeViewScores].forEach(button => {
    button.addEventListener("click", () => activatePanel("scores-panel"));
  });
  els.testSearch.addEventListener("input", event => {
    state.filters.search = event.target.value.trim().toLowerCase();
    renderTestList();
  });
  els.sectionFilter.addEventListener("change", event => {
    state.filters.section = event.target.value;
    renderTestList();
  });
  els.focusFilter.addEventListener("change", event => {
    state.filters.focus = event.target.value;
    renderTestList();
  });
  els.resetFilters.addEventListener("click", resetFilters);
  els.clearScores.addEventListener("click", clearScoreHistory);
  els.pauseTimer.addEventListener("click", pauseTimer);
  els.resumeTimer.addEventListener("click", resumeTimer);
  els.prevQuestion.addEventListener("click", () => moveQuestion(-1));
  els.nextQuestion.addEventListener("click", () => moveQuestion(1));
  els.markQuestion.addEventListener("click", toggleMarked);
  els.finishSection.addEventListener("click", finishSection);
  els.exitTest.addEventListener("click", exitToStart);
  els.hintButton.addEventListener("click", toggleHint);
  els.retakeTest.addEventListener("click", retakeCurrentTest);
  els.chooseTest.addEventListener("click", exitToStart);
}

function activatePanel(targetId) {
  const panel = document.getElementById(targetId);
  if (!panel) return;
  els.navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.target === targetId);
  });
  els.dashboardPanels.forEach(item => {
    item.classList.toggle("hidden", item.id !== targetId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetFilters() {
  state.filters = { search: "", section: "all", focus: "all" };
  els.testSearch.value = "";
  els.sectionFilter.value = "all";
  els.focusFilter.value = "all";
  renderTestList();
}

function renderTestList() {
  els.testList.innerHTML = "";
  const visibleTests = tests.filter(testMatchesFilters);
  if (!visibleTests.length) {
    els.testList.innerHTML = `<div class="empty-state">No tests match the current filters.</div>`;
    return;
  }
  visibleTests.forEach(test => {
    const card = document.createElement("article");
    card.className = "test-card";
    const totalQuestions = test.sections.reduce((total, section) => total + section.count, 0);
    const totalMinutes = test.sections.reduce((total, section) => total + section.minutes, 0);
    const category = getFocusCategory(test);
    card.innerHTML = `
      <div class="test-main">
        <span class="test-icon">${getFocusIcon(category)}</span>
        <div>
          <p class="eyebrow">${test.id.replace("-", " ")}</p>
          <h3>${test.name}</h3>
          <p>${test.description}</p>
        </div>
      </div>
      <div class="test-meta">
        <span>A</span>
        <span>V</span>
        <span>Q</span>
        <small>${totalQuestions} questions</small>
      </div>
      <div class="test-focus-cell">
        <strong>${test.focus}</strong>
        <span>${formatMinutes(totalMinutes)}</span>
      </div>
      <div class="test-start-controls">
        <label>
          <span>Start at</span>
          <select aria-label="Starting section">
            ${test.sections.map((section, index) => `<option value="${index}">${section.label}</option>`).join("")}
          </select>
        </label>
        <label class="real-mode-toggle">
          <input type="checkbox">
          <span>Real mode</span>
        </label>
        <button class="primary-button" type="button">Start</button>
      </div>
    `;
    const startSelect = card.querySelector("select");
    const realModeInput = card.querySelector('input[type="checkbox"]');
    realModeInput.addEventListener("change", () => {
      startSelect.disabled = realModeInput.checked;
      if (realModeInput.checked) startSelect.value = "0";
    });
    card.querySelector("button").addEventListener("click", () => {
      const realMode = realModeInput.checked;
      const sectionIndex = realMode ? 0 : Number(startSelect.value);
      startTest(test.id, sectionIndex, { realMode });
    });
    els.testList.appendChild(card);
  });
}

function testMatchesFilters(test) {
  const searchTarget = `${test.name} ${test.focus} ${test.description}`.toLowerCase();
  if (state.filters.search && !searchTarget.includes(state.filters.search)) return false;
  if (state.filters.focus !== "all" && getFocusCategory(test) !== state.filters.focus) return false;
  if (state.filters.section === "all") return true;
  if (state.filters.section === "mixed") return true;
  return test.sections.some(section => section.id.startsWith(state.filters.section));
}

function getFocusCategory(test) {
  if (test.quantFocus.startsWith("geometry")) return "geometry";
  if (test.quantFocus === "algebra") return "algebra";
  if (test.quantFocus === "arithmetic") return "arithmetic";
  if (test.quantFocus === "data") return "data";
  return "mixed";
}

function getFocusIcon(category) {
  return {
    mixed: "M",
    geometry: "G",
    algebra: "x",
    arithmetic: "%",
    data: "#"
  }[category] || "T";
}

function formatMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
}

function renderSessionList() {
  const sessions = loadSessions();
  if (!sessions.length) {
    els.sessionList.innerHTML = `<div class="empty-state">No tests are in progress. Exit a practice test to save it here.</div>`;
    return;
  }

  els.sessionList.innerHTML = "";
  sessions.forEach(session => {
    const test = tests.find(item => item.id === session.testId);
    if (!test) return;
    const section = test.sections[session.currentSectionIndex] || test.sections[0];
    const totalQuestions = test.sections.reduce((total, item) => total + item.count, 0);
    const answeredCount = Object.keys(session.answers || {}).filter(questionId => {
      const answer = session.answers[questionId];
      if (Array.isArray(answer)) return answer.length > 0;
      return answer !== undefined && String(answer).trim() !== "";
    }).length;
    const updated = new Date(session.updatedAt);
    const card = document.createElement("article");
    card.className = "session-card";
    card.innerHTML = `
      <div>
        <p class="eyebrow">${escapeHtml(session.mode || "Practice")} session</p>
        <h3>${escapeHtml(test.name)}</h3>
        <p>${escapeHtml(test.focus)}</p>
      </div>
      <div class="session-meta">
        <span>${escapeHtml(section.label)}</span>
        <span>Question ${session.currentQuestionIndex + 1}</span>
        <span>${answeredCount}/${totalQuestions} answered</span>
        <span>${Number.isNaN(updated.getTime()) ? "" : updated.toLocaleString()}</span>
      </div>
      <div class="session-actions">
        <button class="secondary-button" type="button" data-action="delete">Delete</button>
        <button class="primary-button" type="button" data-action="resume">Resume</button>
      </div>
    `;
    card.querySelector('[data-action="resume"]').addEventListener("click", () => resumeSession(session.id));
    card.querySelector('[data-action="delete"]').addEventListener("click", () => deleteSession(session.id));
    els.sessionList.appendChild(card);
  });
}

function loadSessions() {
  try {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveSessions(sessions) {
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessions));
  } catch {
    // Session saving is best effort; the app should still run without local storage.
  }
}

function saveCurrentSession() {
  if (!state.selectedTest || state.realMode) return null;
  const now = new Date().toISOString();
  const sessionId = state.currentSessionId || `${Date.now()}-${state.selectedTest.id}`;
  const session = {
    id: sessionId,
    testId: state.selectedTest.id,
    mode: state.realMode ? "Real" : "Practice",
    currentSectionIndex: state.currentSectionIndex,
    currentQuestionIndex: state.currentQuestionIndex,
    answers: state.answers,
    marked: state.marked,
    sectionTimers: state.sectionTimers,
    completedSections: [...state.completedSections],
    timerPaused: true,
    createdAt: state.currentSessionId
      ? loadSessions().find(item => item.id === state.currentSessionId)?.createdAt || now
      : now,
    updatedAt: now
  };
  const sessions = loadSessions().filter(item => item.id !== sessionId);
  sessions.unshift(session);
  saveSessions(sessions.slice(0, 20));
  state.currentSessionId = sessionId;
  renderSessionList();
  return sessionId;
}

function resumeSession(sessionId) {
  const session = loadSessions().find(item => item.id === sessionId);
  const test = session ? tests.find(item => item.id === session.testId) : null;
  if (!session || !test) return;

  clearInterval(state.timerId);
  state.selectedTest = cloneTest(test);
  state.currentSessionId = session.id;
  state.currentSectionIndex = clampIndex(session.currentSectionIndex, state.selectedTest.sections.length);
  const section = state.selectedTest.sections[state.currentSectionIndex];
  state.currentQuestionIndex = clampIndex(session.currentQuestionIndex, section.questions.length);
  state.answers = session.answers || {};
  state.marked = session.marked || {};
  state.sectionTimers = Array.isArray(session.sectionTimers)
    ? session.sectionTimers.map(value => Math.max(0, Number(value) || 0))
    : state.selectedTest.sections.map(item => item.minutes * 60);
  state.completedSections = new Set(Array.isArray(session.completedSections) ? session.completedSections : []);
  state.realMode = session.mode === "Real";
  state.testInProgress = true;
  state.currentResultSaved = false;
  state.timerPaused = true;
  state.reviewQuestionId = null;
  showScreen("exam");
  startTimer();
  renderExam();
}

function deleteSession(sessionId) {
  saveSessions(loadSessions().filter(session => session.id !== sessionId));
  renderSessionList();
}

function removeCurrentSession() {
  if (!state.currentSessionId) return;
  deleteSession(state.currentSessionId);
  state.currentSessionId = null;
}

function clampIndex(index, length) {
  const value = Number(index);
  if (!Number.isInteger(value)) return 0;
  return Math.min(Math.max(value, 0), Math.max(length - 1, 0));
}

function startTest(testId, initialSectionIndex = 0, options = {}) {
  const test = tests.find(item => item.id === testId);
  state.selectedTest = cloneTest(test);
  state.currentSessionId = null;
  state.currentSectionIndex = 0;
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.marked = {};
  state.sectionTimers = state.selectedTest.sections.map(section => section.minutes * 60);
  state.realMode = Boolean(options.realMode);
  state.testInProgress = true;
  state.currentResultSaved = false;
  state.completedSections = new Set();
  state.reviewQuestionId = null;
  showScreen("exam");
  startSection(initialSectionIndex);
}

function cloneTest(test) {
  return JSON.parse(JSON.stringify(test));
}

function startSection(sectionIndex) {
  clearInterval(state.timerId);
  state.currentSectionIndex = sectionIndex;
  state.currentQuestionIndex = 0;
  state.timerPaused = false;
  startTimer();
  renderExam();
}

function startTimer() {
  clearInterval(state.timerId);
  if (getRemainingSeconds() <= 0) {
    state.timerPaused = true;
    renderTimer();
    return;
  }
  state.timerId = setInterval(() => {
    if (state.timerPaused) return;
    state.sectionTimers[state.currentSectionIndex] -= 1;
    if (getRemainingSeconds() <= 0) {
      state.sectionTimers[state.currentSectionIndex] = 0;
      renderTimer();
      finishSection();
      return;
    }
    renderTimer();
  }, 1000);
  renderTimer();
}

function getRemainingSeconds() {
  return getSectionRemainingSeconds(state.currentSectionIndex);
}

function getSectionRemainingSeconds(sectionIndex) {
  return Math.max(0, state.sectionTimers[sectionIndex] ?? 0);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function pauseTimer() {
  if (state.realMode && state.testInProgress) return;
  state.timerPaused = true;
  renderTimer();
}

function resumeTimer() {
  if (state.realMode && state.testInProgress) return;
  state.timerPaused = false;
  renderTimer();
}

function renderTimer() {
  const remainingSeconds = getRemainingSeconds();
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  els.timer.textContent = formattedTime;
  els.timer.classList.toggle("warning", remainingSeconds <= 120);
  els.pauseTimer.disabled = state.realMode || state.timerPaused || remainingSeconds === 0;
  els.resumeTimer.disabled = state.realMode || !state.timerPaused || remainingSeconds === 0;
}

function renderExam() {
  const section = getCurrentSection();
  const question = getCurrentQuestion();
  els.examScreen.classList.toggle("real-mode", state.realMode);
  els.activeTestName.textContent = state.selectedTest.name;
  els.sectionTitle.textContent = section.title;
  els.timerSection.textContent = `${section.label} Timer`;
  els.examModeBadge.textContent = state.realMode ? "Real mode" : "Practice";
  els.realModeCopy.classList.toggle("hidden", !state.realMode);
  els.progressCopy.textContent = `Question ${state.currentQuestionIndex + 1} of ${section.questions.length}`;
  els.questionType.textContent = question.subtype;
  els.questionHeading.textContent = question.prompt;
  els.hintPanel.classList.add("hidden");
  els.hintPanel.textContent = question.hint;
  renderSectionNav();
  renderQuestionNav();
  renderQuestionContent(question);
  renderAnswerArea(question);
  renderQuestionActions();
  renderTimer();
}

function renderSectionNav() {
  els.sectionNav.innerHTML = "";
  state.selectedTest.sections.forEach((section, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === state.currentSectionIndex ? "current" : "";
    button.disabled = state.realMode && index !== state.currentSectionIndex;
    const status = state.completedSections.has(index) ? "Completed" : formatTime(getSectionRemainingSeconds(index));
    button.innerHTML = `${section.label}<span>${section.count} ${section.count === 1 ? "task" : "questions"} | ${status}</span>`;
    button.addEventListener("click", () => {
      if (state.realMode) return;
      if (index === state.currentSectionIndex) return;
      startSection(index);
    });
    item.appendChild(button);
    els.sectionNav.appendChild(item);
  });
}

function renderQuestionNav() {
  const section = getCurrentSection();
  els.questionNav.innerHTML = "";
  section.questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(index + 1);
    button.classList.toggle("current", index === state.currentQuestionIndex);
    button.classList.toggle("answered", hasAnswer(question.id));
    button.classList.toggle("marked", Boolean(state.marked[question.id]));
    button.addEventListener("click", () => {
      state.currentQuestionIndex = index;
      renderExam();
    });
    els.questionNav.appendChild(button);
  });
}

function renderQuestionContent(question) {
  els.questionContent.innerHTML = "";
  const directions = document.createElement("p");
  directions.className = "directions";
  directions.textContent = question.directions;
  els.questionContent.appendChild(directions);

  if (question.passage) {
    const passage = document.createElement("div");
    passage.className = "passage";
    question.passage.forEach(text => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      passage.appendChild(paragraph);
    });
    els.questionContent.appendChild(passage);
  }

  if (question.quantityA && question.quantityB) {
    const grid = document.createElement("div");
    grid.className = "quantity-grid";
    grid.innerHTML = `
      <div><strong>Quantity A</strong><span>${question.quantityA}</span></div>
      <div><strong>Quantity B</strong><span>${question.quantityB}</span></div>
    `;
    els.questionContent.appendChild(grid);
  }

  if (question.dataTable) {
    els.questionContent.appendChild(renderDataTable(question.dataTable));
  }

  if (question.dataGraph) {
    els.questionContent.appendChild(renderDataGraph(question.dataGraph));
  }
}

function renderDataTable(dataTable) {
  const wrapper = document.createElement("div");
  wrapper.className = "table-wrap";
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = dataTable.caption;
  table.appendChild(caption);
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  dataTable.headers.forEach(header => {
    const th = document.createElement("th");
    th.textContent = header;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  dataTable.rows.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  wrapper.appendChild(table);
  return wrapper;
}

function renderDataGraph(dataGraph) {
  const wrapper = document.createElement("div");
  wrapper.className = "graph-wrap";
  const caption = document.createElement("p");
  caption.className = "graph-caption";
  caption.textContent = dataGraph.caption || "Graph";
  const frame = document.createElement("div");
  frame.className = "graph-frame";
  if (dataGraph.type === "coordinate") {
    frame.innerHTML = buildCoordinateGraphSvg(dataGraph);
  } else if (dataGraph.type === "line") {
    frame.innerHTML = buildLineGraphSvg(dataGraph);
  } else {
    frame.innerHTML = buildBarGraphSvg(dataGraph);
  }
  wrapper.append(caption, frame);
  return wrapper;
}

function buildBarGraphSvg(dataGraph) {
  const bars = dataGraph.bars || [];
  const width = 420;
  const height = 260;
  const left = 48;
  const right = 18;
  const top = 18;
  const bottom = 42;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const maxValue = Math.max(...bars.map(bar => bar.value), 1);
  const barGap = 16;
  const barWidth = bars.length ? (plotWidth - barGap * (bars.length - 1)) / bars.length : plotWidth;
  const axisY = top + plotHeight;
  const barMarkup = bars.map((bar, index) => {
    const barHeight = plotHeight * (bar.value / maxValue);
    const x = left + index * (barWidth + barGap);
    const y = axisY - barHeight;
    return `
      <rect class="graph-bar" x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="4"></rect>
      <text x="${x + barWidth / 2}" y="${axisY + 20}" text-anchor="middle">${escapeHtml(bar.label)}</text>
      <text x="${x + barWidth / 2}" y="${y - 6}" text-anchor="middle">${formatNumber(bar.value)}</text>
    `;
  }).join("");
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(dataGraph.caption || "Bar graph")}">
      <line class="graph-axis" x1="${left}" y1="${axisY}" x2="${width - right}" y2="${axisY}"></line>
      <line class="graph-axis" x1="${left}" y1="${top}" x2="${left}" y2="${axisY}"></line>
      <text class="graph-axis-label" x="12" y="${top + 12}">${escapeHtml(dataGraph.yLabel || "")}</text>
      ${barMarkup}
    </svg>
  `;
}

function buildLineGraphSvg(dataGraph) {
  const points = dataGraph.points || [];
  const width = 430;
  const height = 260;
  const left = 50;
  const right = 20;
  const top = 20;
  const bottom = 44;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const values = points.map(point => point.value);
  const minValue = Math.min(...values, 0);
  const maxValue = Math.max(...values, 1);
  const span = Math.max(maxValue - minValue, 1);
  const axisY = top + plotHeight;
  const xFor = index => points.length === 1 ? left + plotWidth / 2 : left + (plotWidth * index) / (points.length - 1);
  const yFor = value => axisY - ((value - minValue) / span) * plotHeight;
  const polyline = points.map((point, index) => `${xFor(index)},${yFor(point.value)}`).join(" ");
  const markerMarkup = points.map((point, index) => {
    const x = xFor(index);
    const y = yFor(point.value);
    return `
      <circle class="graph-point" cx="${x}" cy="${y}" r="4"></circle>
      <text x="${x}" y="${axisY + 20}" text-anchor="middle">${escapeHtml(point.label)}</text>
      <text x="${x}" y="${y - 9}" text-anchor="middle">${formatNumber(point.value)}</text>
    `;
  }).join("");
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(dataGraph.caption || "Line graph")}">
      <line class="graph-axis" x1="${left}" y1="${axisY}" x2="${width - right}" y2="${axisY}"></line>
      <line class="graph-axis" x1="${left}" y1="${top}" x2="${left}" y2="${axisY}"></line>
      <text class="graph-axis-label" x="12" y="${top + 12}">${escapeHtml(dataGraph.yLabel || "")}</text>
      <polyline class="graph-line" points="${polyline}"></polyline>
      ${markerMarkup}
    </svg>
  `;
}

function buildCoordinateGraphSvg(dataGraph) {
  const points = dataGraph.points || [];
  const width = 430;
  const height = 300;
  const left = 44;
  const right = 20;
  const top = 18;
  const bottom = 38;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const xMin = dataGraph.xMin ?? 0;
  const xMax = dataGraph.xMax ?? 10;
  const yMin = dataGraph.yMin ?? 0;
  const yMax = dataGraph.yMax ?? 10;
  const xFor = value => left + ((value - xMin) / (xMax - xMin)) * plotWidth;
  const yFor = value => top + ((yMax - value) / (yMax - yMin)) * plotHeight;
  const ticksX = graphTicks(xMin, xMax);
  const ticksY = graphTicks(yMin, yMax);
  const pointByLabel = Object.fromEntries(points.map(point => [point.label, point]));
  const gridX = ticksX.map(value => `<line class="graph-grid" x1="${xFor(value)}" y1="${top}" x2="${xFor(value)}" y2="${top + plotHeight}"></line>`).join("");
  const gridY = ticksY.map(value => `<line class="graph-grid" x1="${left}" y1="${yFor(value)}" x2="${left + plotWidth}" y2="${yFor(value)}"></line>`).join("");
  const labelsX = ticksX.map(value => `<text x="${xFor(value)}" y="${top + plotHeight + 18}" text-anchor="middle">${value}</text>`).join("");
  const labelsY = ticksY.map(value => `<text x="${left - 10}" y="${yFor(value) + 4}" text-anchor="end">${value}</text>`).join("");
  const segments = (dataGraph.segments || []).map(segment => {
    const from = pointByLabel[segment[0]];
    const to = pointByLabel[segment[1]];
    if (!from || !to) return "";
    return `<line class="graph-segment" x1="${xFor(from.x)}" y1="${yFor(from.y)}" x2="${xFor(to.x)}" y2="${yFor(to.y)}"></line>`;
  }).join("");
  const pointMarkup = points.map(point => `
    <circle class="graph-point" cx="${xFor(point.x)}" cy="${yFor(point.y)}" r="4"></circle>
    <text class="graph-point-label" x="${xFor(point.x) + 8}" y="${yFor(point.y) - 8}">${escapeHtml(point.label)} (${point.x}, ${point.y})</text>
  `).join("");
  return `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(dataGraph.caption || "Coordinate graph")}">
      ${gridX}
      ${gridY}
      <line class="graph-axis" x1="${left}" y1="${top + plotHeight}" x2="${left + plotWidth}" y2="${top + plotHeight}"></line>
      <line class="graph-axis" x1="${left}" y1="${top}" x2="${left}" y2="${top + plotHeight}"></line>
      ${labelsX}
      ${labelsY}
      <text class="graph-axis-label" x="${left + plotWidth - 10}" y="${height - 8}">${escapeHtml(dataGraph.xLabel || "x")}</text>
      <text class="graph-axis-label" x="12" y="${top + 12}">${escapeHtml(dataGraph.yLabel || "y")}</text>
      ${segments}
      ${pointMarkup}
    </svg>
  `;
}

function graphTicks(min, max) {
  const range = max - min;
  const step = range <= 10 ? 1 : range <= 20 ? 2 : 5;
  const ticks = [];
  for (let value = Math.ceil(min / step) * step; value <= max; value += step) {
    ticks.push(value);
  }
  return ticks;
}

function renderAnswerArea(question) {
  els.answerArea.innerHTML = "";
  if (question.type === "essay") {
    const textarea = document.createElement("textarea");
    textarea.className = "essay-input";
    textarea.value = state.answers[question.id] || "";
    textarea.setAttribute("aria-label", "Essay response");
    textarea.addEventListener("input", event => {
      state.answers[question.id] = event.target.value;
      renderQuestionNav();
    });
    els.answerArea.appendChild(textarea);
    return;
  }

  if (question.type === "numeric") {
    const input = document.createElement("input");
    input.className = "numeric-input";
    input.type = "text";
    input.inputMode = "decimal";
    input.value = state.answers[question.id] || "";
    input.setAttribute("aria-label", "Numeric answer");
    input.addEventListener("input", event => {
      state.answers[question.id] = event.target.value;
      renderQuestionNav();
    });
    els.answerArea.appendChild(input);
    return;
  }

  question.choices.forEach(choice => {
    const label = document.createElement("label");
    label.className = "choice-label";
    const input = document.createElement("input");
    input.type = question.type === "multiple" ? "checkbox" : "radio";
    input.name = question.id;
    input.value = choiceValue(choice, question);
    input.checked = isChoiceSelected(question, input.value);
    input.addEventListener("change", () => updateChoiceAnswer(question, input.value, input.checked));
    const span = document.createElement("span");
    span.textContent = choice;
    label.append(input, span);
    els.answerArea.appendChild(label);
  });
}

function choiceValue(choice, question) {
  if (question.subtype === "Quantitative Comparison") return choice.slice(0, 1);
  return choice;
}

function isChoiceSelected(question, value) {
  const answer = state.answers[question.id];
  if (question.type === "multiple") return Array.isArray(answer) && answer.includes(value);
  return answer === value;
}

function updateChoiceAnswer(question, value, checked) {
  if (question.type === "multiple") {
    const existing = Array.isArray(state.answers[question.id]) ? [...state.answers[question.id]] : [];
    let next = checked ? [...existing, value] : existing.filter(item => item !== value);
    if (question.maxSelections && next.length > question.maxSelections) {
      next = next.slice(1);
    }
    state.answers[question.id] = next;
  } else {
    state.answers[question.id] = value;
  }
  renderAnswerArea(question);
  renderQuestionNav();
}

function renderQuestionActions() {
  const section = getCurrentSection();
  const question = getCurrentQuestion();
  els.prevQuestion.disabled = state.currentQuestionIndex === 0;
  els.nextQuestion.textContent = state.currentQuestionIndex === section.questions.length - 1 ? "Last Question" : "Next";
  els.nextQuestion.disabled = state.currentQuestionIndex === section.questions.length - 1;
  els.markQuestion.textContent = state.marked[question.id] ? "Unmark" : "Mark";
  els.markQuestion.title = "Mark flags this question for review before finishing the section. It does not affect scoring.";
  els.markQuestion.setAttribute("aria-pressed", String(Boolean(state.marked[question.id])));
  els.exitTest.disabled = state.realMode && state.testInProgress;
}

function moveQuestion(direction) {
  const section = getCurrentSection();
  const next = state.currentQuestionIndex + direction;
  if (next < 0 || next >= section.questions.length) return;
  state.currentQuestionIndex = next;
  renderExam();
}

function toggleMarked() {
  const question = getCurrentQuestion();
  state.marked[question.id] = !state.marked[question.id];
  renderExam();
}

function toggleHint() {
  els.hintPanel.classList.toggle("hidden");
}

function finishSection() {
  clearInterval(state.timerId);
  state.completedSections.add(state.currentSectionIndex);
  const nextIndex = findNextUncompletedSection();
  if (nextIndex >= state.selectedTest.sections.length) {
    showSummary();
    return;
  }
  startSection(nextIndex);
}

function findNextUncompletedSection() {
  const sectionCount = state.selectedTest.sections.length;
  for (let offset = 1; offset <= sectionCount; offset += 1) {
    const index = (state.currentSectionIndex + offset) % sectionCount;
    if (!state.completedSections.has(index)) return index;
  }
  return sectionCount;
}

function showSummary() {
  clearInterval(state.timerId);
  state.testInProgress = false;
  removeCurrentSession();
  saveCurrentScore();
  showScreen("summary");
  els.summaryTestName.textContent = state.selectedTest.name;
  renderScoreCards();
  renderReviewList();
  const firstQuestion = flattenQuestions()[0];
  if (firstQuestion) showReviewDetail(firstQuestion.question.id);
}

function renderScoreCards() {
  const score = calculateCurrentScore();

  const cards = [
    { label: "Scored Accuracy", value: `${score.correct}/${score.total}`, note: `${score.accuracy}% correct` },
    { label: "Verbal", value: `${score.verbalCorrect}/${score.verbalTotal}`, note: "Text completion, sentence equivalence, reading" },
    { label: "Quant", value: `${score.quantCorrect}/${score.quantTotal}`, note: "Comparison, multiple choice, numeric entry" },
    { label: "Writing", value: `${score.essayWords}`, note: "words written, not auto-scored" }
  ];
  els.scoreCards.innerHTML = cards.map(card => `
    <article class="score-card">
      <span>${card.label}</span>
      <strong>${card.value}</strong>
      <span>${card.note}</span>
    </article>
  `).join("");
}

function calculateCurrentScore() {
  const all = flattenQuestions();
  const scored = all.filter(item => item.question.type !== "essay");
  const correct = scored.filter(item => isCorrect(item.question)).length;
  const verbal = scored.filter(item => item.section.id.startsWith("verbal"));
  const quant = scored.filter(item => item.section.id.startsWith("quant"));
  const verbalCorrect = verbal.filter(item => isCorrect(item.question)).length;
  const quantCorrect = quant.filter(item => isCorrect(item.question)).length;
  const essay = all.find(item => item.question.type === "essay");
  const essayWords = essay ? countWords(state.answers[essay.question.id] || "") : 0;
  const accuracy = scored.length ? Math.round((correct / scored.length) * 100) : 0;
  const verbalAccuracy = verbal.length ? Math.round((verbalCorrect / verbal.length) * 100) : 0;
  const quantAccuracy = quant.length ? Math.round((quantCorrect / quant.length) * 100) : 0;

  return {
    correct,
    total: scored.length,
    accuracy,
    verbalCorrect,
    verbalTotal: verbal.length,
    verbalAccuracy,
    quantCorrect,
    quantTotal: quant.length,
    quantAccuracy,
    essayWords
  };
}

function saveCurrentScore() {
  if (!state.selectedTest || state.currentResultSaved) return;
  const score = calculateCurrentScore();
  const history = loadScoreHistory();
  history.unshift({
    id: `${Date.now()}-${state.selectedTest.id}`,
    testId: state.selectedTest.id,
    testName: state.selectedTest.name,
    focus: state.selectedTest.focus,
    mode: state.realMode ? "Real" : "Practice",
    completedAt: new Date().toISOString(),
    ...score
  });
  saveScoreHistory(history.slice(0, 30));
  state.currentResultSaved = true;
  renderScoresDashboard();
}

function loadScoreHistory() {
  try {
    const raw = localStorage.getItem(SCORE_HISTORY_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveScoreHistory(history) {
  try {
    localStorage.setItem(SCORE_HISTORY_KEY, JSON.stringify(history));
  } catch {
    // Score history is helpful, but the app should still work if storage is unavailable.
  }
}

function clearScoreHistory() {
  try {
    localStorage.removeItem(SCORE_HISTORY_KEY);
  } catch {
    saveScoreHistory([]);
  }
  renderScoresDashboard();
}

function renderScoresDashboard() {
  const history = loadScoreHistory();
  if (!history.length) {
    els.scoreOverview.innerHTML = `
      <article class="score-card">
        <span>Completed Tests</span>
        <strong>0</strong>
        <span>Finish a test to start tracking scores.</span>
      </article>
      <article class="score-card">
        <span>Best Accuracy</span>
        <strong>--</strong>
        <span>No score history yet</span>
      </article>
      <article class="score-card">
        <span>Average Accuracy</span>
        <strong>--</strong>
        <span>No score history yet</span>
      </article>
      <article class="score-card">
        <span>Real Mode Runs</span>
        <strong>0</strong>
        <span>Optional strict mode</span>
      </article>
    `;
    els.scoreTrendChart.innerHTML = `<div class="empty-state">Complete tests to draw your accuracy trend.</div>`;
    els.sectionBarChart.innerHTML = `<div class="empty-state">Verbal and quant averages will appear here.</div>`;
    els.scoreHistory.innerHTML = `<div class="empty-state">No completed tests saved yet.</div>`;
    return;
  }

  const best = Math.max(...history.map(item => item.accuracy));
  const average = Math.round(history.reduce((total, item) => total + item.accuracy, 0) / history.length);
  const realRuns = history.filter(item => item.mode === "Real").length;
  const latest = history[0];

  els.scoreOverview.innerHTML = `
    <article class="score-card">
      <span>Completed Tests</span>
      <strong>${history.length}</strong>
      <span>${realRuns} in real mode</span>
    </article>
    <article class="score-card">
      <span>Best Accuracy</span>
      <strong>${best}%</strong>
      <span>Highest saved score</span>
    </article>
    <article class="score-card">
      <span>Average Accuracy</span>
      <strong>${average}%</strong>
      <span>Across saved tests</span>
    </article>
    <article class="score-card">
      <span>Latest Test</span>
      <strong>${latest.accuracy}%</strong>
      <span>${escapeHtml(latest.testName)} | ${escapeHtml(latest.mode)}</span>
    </article>
  `;
  renderScoreTrendChart(history);
  renderSectionBarChart(history);
  renderScoreHistory(history);
}

function renderScoreTrendChart(history) {
  const data = history.slice(0, 8).reverse();
  const width = 520;
  const height = 210;
  const padding = 34;
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;
  const points = data.map((item, index) => {
    const x = data.length === 1 ? width / 2 : padding + (index / (data.length - 1)) * usableWidth;
    const y = padding + (1 - item.accuracy / 100) * usableHeight;
    return { x, y, item };
  });
  const pointList = points.map(point => `${point.x},${point.y}`).join(" ");
  const circles = points.map(point => `
    <circle cx="${point.x}" cy="${point.y}" r="4"></circle>
    <text x="${point.x}" y="${point.y - 10}" text-anchor="middle">${point.item.accuracy}%</text>
  `).join("");

  els.scoreTrendChart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Accuracy trend chart">
      <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}"></line>
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}"></line>
      <polyline points="${pointList}"></polyline>
      ${circles}
    </svg>
  `;
}

function renderSectionBarChart(history) {
  const verbalAverage = Math.round(history.reduce((total, item) => total + item.verbalAccuracy, 0) / history.length);
  const quantAverage = Math.round(history.reduce((total, item) => total + item.quantAccuracy, 0) / history.length);
  const bars = [
    { label: "Verbal", value: verbalAverage },
    { label: "Quant", value: quantAverage }
  ];

  els.sectionBarChart.innerHTML = bars.map(bar => `
    <div class="bar-row">
      <span>${bar.label}</span>
      <div class="bar-track"><div style="width: ${bar.value}%"></div></div>
      <strong>${bar.value}%</strong>
    </div>
  `).join("");
}

function renderScoreHistory(history) {
  els.scoreHistory.innerHTML = history.slice(0, 8).map(item => {
    const date = new Date(item.completedAt);
    return `
      <article class="history-row">
        <div>
          <strong>${escapeHtml(item.testName)}</strong>
          <span>${escapeHtml(item.focus)} | ${escapeHtml(item.mode)} mode</span>
        </div>
        <span>${item.accuracy}%</span>
        <small>${Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString()}</small>
      </article>
    `;
  }).join("");
}

function renderReviewList() {
  els.reviewList.innerHTML = "";
  flattenQuestions().forEach((item, index) => {
    const status = getQuestionStatus(item.question);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "review-button";
    button.classList.toggle("active", item.question.id === state.reviewQuestionId);
    button.innerHTML = `
      <strong>${index + 1}</strong>
      <span>${item.section.label}: ${item.question.subtype}</span>
      <span class="status-pill ${status.className}">${status.label}</span>
    `;
    button.addEventListener("click", () => showReviewDetail(item.question.id));
    els.reviewList.appendChild(button);
  });
}

function showReviewDetail(questionId) {
  state.reviewQuestionId = questionId;
  const item = flattenQuestions().find(entry => entry.question.id === questionId);
  if (!item) return;
  const { question, section } = item;
  const status = getQuestionStatus(question);
  const userAnswer = formatUserAnswer(question);
  const correctAnswer = formatCorrectAnswer(question);
  els.reviewDetail.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = `${section.label}: ${question.subtype}`;
  els.reviewDetail.appendChild(heading);

  const prompt = document.createElement("p");
  prompt.textContent = question.prompt;
  els.reviewDetail.appendChild(prompt);

  if (question.passage) {
    const passage = document.createElement("div");
    passage.className = "passage";
    question.passage.forEach(text => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      passage.appendChild(paragraph);
    });
    els.reviewDetail.appendChild(passage);
  }

  if (question.quantityA && question.quantityB) {
    const grid = document.createElement("div");
    grid.className = "quantity-grid";
    grid.innerHTML = `
      <div><strong>Quantity A</strong><span>${question.quantityA}</span></div>
      <div><strong>Quantity B</strong><span>${question.quantityB}</span></div>
    `;
    els.reviewDetail.appendChild(grid);
  }

  if (question.dataTable) {
    els.reviewDetail.appendChild(renderDataTable(question.dataTable));
  }

  if (question.dataGraph) {
    els.reviewDetail.appendChild(renderDataGraph(question.dataGraph));
  }

  const pair = document.createElement("div");
  pair.className = "answer-pair";
  pair.innerHTML = `
    <div><strong>Status</strong><br><span class="status-pill ${status.className}">${status.label}</span></div>
    <div><strong>Your answer</strong><br>${escapeHtml(userAnswer)}</div>
    <div><strong>Correct answer</strong><br>${escapeHtml(correctAnswer)}</div>
  `;
  els.reviewDetail.appendChild(pair);

  const solution = document.createElement("div");
  solution.innerHTML = `<h4>Solution</h4><p>${escapeHtml(question.explanation)}</p>`;
  els.reviewDetail.appendChild(solution);
  renderReviewList();
}

function flattenQuestions() {
  if (!state.selectedTest) return [];
  return state.selectedTest.sections.flatMap(section =>
    section.questions.map(question => ({ section, question }))
  );
}

function getQuestionStatus(question) {
  if (question.type === "essay") return { label: "Unscored", className: "status-unscored" };
  if (isCorrect(question)) return { label: "Correct", className: "status-correct" };
  return { label: "Wrong", className: "status-wrong" };
}

function isCorrect(question) {
  const answer = state.answers[question.id];
  if (question.type === "essay") return null;
  if (question.type === "numeric") {
    const user = parseNumeric(answer);
    const expected = parseNumeric(question.answer);
    return Number.isFinite(user) && Math.abs(user - expected) < 0.001;
  }
  if (question.type === "multiple") {
    if (!Array.isArray(answer)) return false;
    return sorted(answer).join("|") === sorted(question.answer).join("|");
  }
  return answer === question.answer;
}

function parseNumeric(value) {
  if (typeof value !== "string") return NaN;
  const trimmed = value.trim();
  if (!trimmed) return NaN;
  if (/^-?\d+(\.\d+)?\/-?\d+(\.\d+)?$/.test(trimmed)) {
    const [top, bottom] = trimmed.split("/").map(Number);
    return bottom === 0 ? NaN : top / bottom;
  }
  return Number(trimmed);
}

function sorted(values) {
  return [...values].map(String).sort((a, b) => a.localeCompare(b));
}

function hasAnswer(questionId) {
  const answer = state.answers[questionId];
  if (Array.isArray(answer)) return answer.length > 0;
  return answer !== undefined && String(answer).trim() !== "";
}

function formatUserAnswer(question) {
  const answer = state.answers[question.id];
  if (question.type === "essay") {
    return answer && answer.trim() ? `${countWords(answer)} words written` : "No essay response";
  }
  if (Array.isArray(answer)) return answer.length ? answer.join(", ") : "No answer";
  return answer === undefined || String(answer).trim() === "" ? "No answer" : String(answer);
}

function formatCorrectAnswer(question) {
  if (question.type === "essay") return "No single correct answer";
  if (Array.isArray(question.answer)) return question.answer.join(", ");
  return String(question.answer);
}

function countWords(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function getCurrentSection() {
  return state.selectedTest.sections[state.currentSectionIndex];
}

function getCurrentQuestion() {
  return getCurrentSection().questions[state.currentQuestionIndex];
}

function showScreen(screen) {
  els.app.classList.toggle("exam-active", screen === "exam");
  els.startScreen.classList.toggle("hidden", screen !== "start");
  els.examScreen.classList.toggle("hidden", screen !== "exam");
  els.summaryScreen.classList.toggle("hidden", screen !== "summary");
  if (screen === "start") {
    renderSessionList();
    renderScoresDashboard();
  }
}

function exitToStart() {
  if (state.realMode && state.testInProgress) return;
  if (state.testInProgress) saveCurrentSession();
  clearInterval(state.timerId);
  state.selectedTest = null;
  state.currentSessionId = null;
  state.realMode = false;
  state.testInProgress = false;
  state.currentResultSaved = false;
  showScreen("start");
  activatePanel("sessions-panel");
}

function retakeCurrentTest() {
  const testId = state.selectedTest ? state.selectedTest.id : "test-1";
  startTest(testId, 0, { realMode: state.realMode });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

init();
