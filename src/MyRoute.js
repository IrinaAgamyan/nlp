import React, { Component } from 'react';
import App from './App';
import Speech from './Speech';
import Letter from './Letter';
import SpeechDone from './SpeechDone';
import LetterDone from './LetterDone';
import 'react-dropdown/style.css';

import { Router, Route, browserHistory } from 'react-router'

class MyRoute extends Component {
	getChildContext() {
		return {
			myObj: {					
				WS: {
					storyGroomsmen: "",
					storyBridesmaids: "",
					anecdote: "",
					storyMeet: "",
					storyParents: "",
					nameGroom: "",
					nameBride: "",
					lastNameMaidOfHonor: "",
					firstNameMaidOfHonor: "",
					lastNameBestMan: "",
					firstNameBestMan: "",
                    word: "",
					text: {
						Introduction: "",
						Best_man_and_ushers: "",
						Bridesmaids: "",
						Parents: "",
						Wife: "",
                        Letter: ""
					}
				},
				
				CL: {
					workStyle: "",
					HowLong: "",
					Title: "",
					Plase: "",
					HowLong1: "",
					Title1: "",
					Plase1: "",
					HowLong2: "",
					Title2: "",
					Plase2: "",
					HowLong3: "",
					Title3: "",
					Plase3: "",
                    Name: "",
                    Address: "",
                    Phone: "",
                    Email: "",
                    Boss: "",
                    Organization:"",
                    Notes: "",
                    text: ""
				},
                word: {

                    Adjectives: {
                        Adjectives_1: [
                            "anxious",
                            "nervous",
                            "worried",
                            "tense",
                            "uneasy",
                            "apprehensive",
                            "scared"
                        ],
                        Adjectives_2: [
                            "singular",
                            "exceptional",
                            "special",
                            "extraordinary",
                            "excellent",
                            "brilliant",
                            "incomparable"
                        ],
                        Adjectives_3: [
                            "lovely",
                            "gorgeous",
                            "beautiful",
                            "stunning",
                            "striking",
                            "handsome",
                            "charming",
                            "delightful",
                            "wonderful"
                        ],
                        Adjectives_4: [
                            "excited",
                            "happy",
                            "enthusiastic",
                            "thrilled",
                            "eager"
                        ],
                        Adjectives_5: [
                            "inconceivable",
                            "incredible",
                            "astonishing",
                            "amazing",
                            "extraordinary",
                            "staggering",
                            "mind-blowing",
                            "mindboggling",
                            "unbelievable",
                            "fantastic",
                            "remarkable",
                            "tremendous",
                            "phenomenal"
                        ],
                        Adjectives_6: [
                            "demanding",
                            "stressful",
                            "worrying",
                            "traumatic",
                            "tense",
                            "nerve-wracking"
                        ],
                        Adjectives_7: [
                            "certain",
                            "convinced",
                            "positive",
                            "confident"
                        ],
                        Adjectives_8: [
                            "important",
                            "significant",
                            "vital",
                            "sincere",
                            "genuine"
                        ],
                        Adjectives_9: [
                            "entertaining",
                            "enjoyable",
                            "exciting",
                            "cool",
                            "fun",
                            "great"
                        ],
                        Adjectives_10: [
                            "easy",
                            "effortless",
                            "efficient"
                        ],
                        Adjectives_11: [
                            "ideal",
                            "great",
                            "wonderful",
                            "faultless",
                            "flawless",
                            "textbook",
                            "picture-perfect",
                            "seamless",
                            "impeccable"
                        ],
                        Adjectives_12: [
                            "difficult",
                            "stickling",
                            "problematic",
                            "tough",
                            "trying",
                            "challenging",
                            "demanding",
                            "arduous",
                            "strenuous"
                        ],
                        Adjectives_13: [
                            "simple",
                            "trouble-free",
                            "straightforward",
                            "effortless",
                            "uncomplicated",
                            "undemanding",
                            "painless"
                        ],
                        Adjectives_14: [
                            "larger",
                            "bigger",
                            "greater",
                            "broader",
                            "more extensive"
                        ],
                        Adjectives_15: [
                            "nobler",
                            "better",
                            "worthier",
                            "more respectable",
                            "more advantageous"
                        ],
                        Adjectives_16: [
                            "studier",
                            "stronger",
                            "tougher",
                            "more robust",
                            "more resilient",
                            "sounder",
                            "more formidable",
                            "more intense"
                        ],
                        Adjectives_17: [
                            "better-looking",
                            "finer-looking",
                            "more handsome",
                            "more attractive",
                            "more fetching",
                            "finer"
                        ],
                        Adjectives_18: [
                            "unknown",
                            "mysterious",
                            "clandestine",
                            "covert",
                            "obscure",
                            "cryptic",
                            "concealed",
                            "veiled",
                            "hidden",
                            "buried",
                            "shrouded"
                        ],
                        Adjectives_19: [
                            "total",
                            "complete",
                            "utter",
                            "unqualified",
                            "outright",
                            "unconditional",
                            "supreme",
                            "unadulterated",
                            "perfect",
                            "unquestionable",
                            "unequivocal"
                        ],
                        Adjectives_20: [
                            "excellent",
                            "unmatched",
                            "unbeatable",
                            "untouchable",
                            "best",
                            "matchless",
                            "exceptional",
                            "incomparable",
                            "unparalleled",
                            "consummate",
                            "superlative",
                            "unrivaled",
                            "supreme"
                        ],
                        Adjectives_21: [
                            "fortunate",
                            "lucky",
                            "blessed"
                        ]
                    },
                    PersonalExperiences: {
                        PersonalExperiences_1: [
                            "Personal anecdote about best man",
                            "Personal anecdote about ushers"
                        ],
                        PersonalExperiences_2: "Explain some personal flaws that parents looked past",
                        PersonalExperiences_3: "Explain how you met your wife and some ensuing stages"
                    },
                    Adverbs: {
                        Adverbs_1:[
                            "actually",
                            "in fact",
                            "in effect",
                            "in reality",
                            "indeed",
                            "truthfully",
                            "as a matter of fact"
                        ],
                        Adverbs_2:[
                            "surely",
                            "positively",
                            "definitely",
                            "undoubtedly",
                            "unquestionably",
                            "without doubt",
                            "absolutely",
                            "indubitably"
                        ],
                        Adverbs_3:[
                            "obviously",
                            "of course",
                            "undeniably",
                            "certainly",
                            "naturally",
                            "evidently"
                        ],
                        Adverbs_4:[
                            "very",
                            "extremely",
                            "unbelievably",
                            "amazingly",
                            "incredibly",
                            "really",
                            "exceedingly",
                            "extraordinarily",
                            "exceptionally",
                            "awfully",
                            "astoundingly",
                            "inconceivably"
                        ],
                        Adverbs_5:[
                            "easily",
                            "effortlessly",
                            "efficiently",
                            "smoothly",
                            "well"
                        ],
                        Adverbs_6:[
                            "rather",
                            "reasonably",
                            "somewhat",
                            "moderately",
                            "pretty",
                            "fairly",
                            "quite"
                        ],
                        Adverbs_7:[
                            "once more",
                            "another time",
                            "yet again",
                            "once again"
                        ]
                    },
                    Nouns: {
                        Nouns_1: [
                            "occasion",
                            "event",
                            "instance"
                        ],
                        Nouns_2: [
                            "world",
                            "country",
                            "state",
                            "planet"
                        ],
                        Nouns_3: [
                            "dad",
                            "brother",
                            "sister",
                            "brother-in-law",
                            "uncle",
                            "aunt",
                            "grandmother",
                            "grandfather",
                            "friend",
                            "best man"
                        ],
                        Nouns_4: [
                            "illness",
                            "sickness",
                            "trouble",
                            "disease",
                            "bad health",
                            "ill health",
                            "problems",
                            "difficulties",
                            "dilemmas",
                            "trials",
                            "tribulations",
                            "strife",
                            "turmoil",
                            "conflict"
                        ],
                        Nouns_5: [
                            "alliance",
                            "acquaintance",
                            "companionship",
                            "friendship",
                            "comradeship"
                        ],
                        Nouns_6: [
                            "ability",
                            "chance",
                            "capacity",
                            "possibility",
                            "potential",
                            "capability"
                        ],
                        Nouns_7: [
                            "bank",
                            "store",
                            "drug store",
                            "factory",
                            "high school",
                            "car lot"
                        ],
                        Nouns_8: [
                            "morning",
                            "evening",
                            "day",
                            "night",
                            "afternoon",
                            "week",
                            "time"
                        ],
                        Nouns_9: [
                            "assistance",
                            "service",
                            "aid",
                            "care",
                            "backing"
                        ],
                        Nouns_10: [
                            "particulars",
                            "minutiae",
                            "specifics",
                            "features",
                            "aspects",
                            "points",
                            "facets"
                        ],
                        Nouns_11: [
                            "anxiety",
                            "uneasiness",
                            "nervousness",
                            "tension"
                        ],
                        Nouns_12: [
                            "element",
                            "ingredient",
                            "component",
                            "section",
                            "portion",
                            "bit",
                            "segment"
                        ],
                        Nouns_13: [
                            "gentleman",
                            "man",
                            "guy",
                            "chap",
                            "fellow",
                            "dude"
                        ],
                        Nouns_14: [
                            "an opening",
                            "an opportunity",
                            "a possibility"
                        ],
                        Nouns_15: [
                            "tolerance",
                            "patience",
                            "perseverance",
                            "forbearance",
                            "unflappability",
                            "staying power"
                        ],
                        Nouns_16: [
                            "objective",
                            "aim",
                            "goal",
                            "target"
                        ],
                        Nouns_17: [
                            "goblets",
                            "glasses",
                            "beakers",
                            "flutes",
                            "tumblers",
                            "wineglasses"
                        ],
                        Nouns_18: [
                            "girl",
                            "bride",
                            "sweetheart",
                            "lady",
                            "female",
                            "better half"
                        ]
                    },
                    Injections: [
                        "Okeydokey",
                        "Okay",
                        "Right",
                        "Sure",
                        "Fine",
                        "Yes",
                        "Yep",
                        "All right"
                    ],
                    Verbs : {
                        Verbs_1: [
                            "see",
                            "observe",
                            "note",
                            "become aware of"
                        ],
                        Verbs_2: [
                            "make it",
                            "get",
                            "arrive"
                        ],
                        Verbs_3: [
                            "flow",
                            "run",
                            "proceed",
                            "happen",
                            "progress",
                            "move along"
                        ],
                        Verbs_4: [
                            "shaped",
                            "molded",
                            "formed",
                            "made",
                            "fashioned"
                        ],
                        Verbs_5: [
                            "persuaded",
                            "influenced",
                            "swayed",
                            "induced won over"
                        ],
                        Verbs_6: [
                            "stopped",
                            "concluded",
                            "completed",
                            "wrapped up"
                        ],
                        Verbs_7: [
                            "surrendering",
                            "agreeing",
                            "conceding",
                            "accepting"
                        ],
                        Verbs_8: [
                            "manage",
                            "coordinate",
                            "set up"
                        ],
                        Verbs_9: [
                            "jolts",
                            "jerks",
                            "thrusts",
                            "boots"
                        ],
                        Verbs_10: [
                            "observe",
                            "notice",
                            "witness",
                            "glimpse"
                        ],
                        Verbs_11: [
                            "gliding",
                            "drifting",
                            "coasting",
                            "wafting",
                            "wandering",
                            "moving"
                        ],
                        Verbs_12: [
                            "intended",
                            "meant",
                            "destined",
                            "fated",
                            "predestined"
                        ],
                        Verbs_13: [
                            "provided",
                            "offered",
                            "gave",
                            "presented",
                            "granted",
                            "awarded"
                        ],
                        Verbs_14: [
                            "conceal",
                            "hide",
                            "veil",
                            "bury",
                            "cover",
                            "screen",
                            "put out of sight"
                        ],
                        Verbs_15: [
                            "attempt",
                            "try",
                            "endeavor",
                            "struggle",
                            "strive",
                            "make an effort"
                        ],
                        Verbs_16: [
                            "anticipate",
                            "expect",
                            "envisage",
                            "look forward to",
                            "require"
                        ],
                        Verbs_17: [
                            "surpass",
                            "go beyond",
                            "exceed",
                            "outstrip"
                        ],
                        Verbs_18: [
                            "receiving",
                            "accepting",
                            "taking",
                            "admitting",
                            "agreeing to take"
                        ],
                        Verbs_19: [
                            "lift",
                            "raise",
                            "hoist",
                            "elevate",
                            "lift up"
                        ],
                        Verbs_20: [
                            "breath",
                            "take a deep breath",
                            "inhale",
                            "exhale"
                        ],
                        Verbs_21: [
                            "adore",
                            "worship",
                            "love",
                            "am in love with"
                        ],
                        Verbs_22: [
                            "assure",
                            "swear to",
                            "promise",
                            "vow to",
                            "guarantee",
                            "pledge to",
                            "ensure"
                        ],
                        Verbs_23: [
                            "speak to",
                            "talk to",
                            "chat with",
                            "converse with",
                            "gossip with",
                            "gab at",
                            "natter on to"
                        ]
                    },
                    Prepositions : [
                        "aboard",
                        "about",
                        "above",
                        "across",
                        "after",
                        "against",
                        "along",
                        "amid",
                        "among",
                        "anti",
                        "around",
                        "as",
                        "at",
                        "before",
                        "behind",
                        "below",
                        "beneath",
                        "beside",
                        "besides",
                        "between",
                        "beyond",
                        "but",
                        "by",
                        "concerning",
                        "considering",
                        "despite",
                        "down",
                        "during",
                        "except",
                        "excepting",
                        "excluding",
                        "following",
                        "for",
                        "from",
                        "in",
                        "inside",
                        "into",
                        "like",
                        "minus",
                        "near",
                        "of",
                        "off",
                        "on",
                        "onto",
                        "opposite",
                        "outside",
                        "over",
                        "past",
                        "per",
                        "plus",
                        "regarding",
                        "round",
                        "save",
                        "since",
                        "than",
                        "through",
                        "throughout",
                        "to",
                        "toward",
                        "towards",
                        "under",
                        "underneath",
                        "unlike",
                        "until",
                        "up",
                        "upon",
                        "versus",
                        "via",
                        "with",
                        "within",
                        "without"
                    ]
                },
                textSpeechArray: {
                    Introduction : "Hi, everybody. [greeting] As you all know, I am not much of a speaker, and, {Adverbs_1}, I am very {Adjectives_1} standing here in front of all of you, even though you are all my friends, family, and future family. Anyway, my {Adjectives_3} wife and I are very {Adjectives_4} that all of you are here today to share this {Adjectives_2} {Nouns_8} with us.  When you look around the room, you will {Verbs_10} people from all over the {Nouns_2}. My {Nouns_3} Connie flew in from San Francisco, my {Nouns_3}, David, from Berlin, and my {Nouns_3}, {Best man}, from Florence, Italy. Thank you for the {Adjectives_5} effort to {Verbs_2} here. It means a lot to both of us, and it will {Adverbs_3} make this speech less {Adjectives_6} knowing that you are here. {Adverbs_3}, we are missing some people here in the room tonight who should be celebrating with us. But they are here in spirit even though they are not here in person because of {Nouns_4}, {Nouns_4}, or death. So, please stand with me for our first toast of the evening. Here’s to all you who are here and to those of you who couldn’t be!",
                    Best_man_and_ushers : "Next up, I’d like to thank my best man {Best man} and the ushers for making the evening {Verbs_3} so {Adverbs_4} {Adverbs_5}.  I’m {Injections} that I haven’t been the best friend throughout the years, {Best man}, but your {Nouns_5} has {Verbs_4} me into what I am today.  You somehow knew my {Nouns_6} and {Adjectives_7} your {Nouns_3} to hire me to work at your {Nouns_7} at Crooks Super Duper back in 2012. We had lots of {Adjectives_9} times, and you were the one who gave me the courage to ask {Bride} to be my bride that {Nouns_8} {Best man and ushers}. You have always been and hope you will always be my right-hand man.<br/>{PersonalExperiences_1} {Anecdote}<br/>Thanks, John and Patrick, for {Verbs_7} to be my ushers on such an important {Nouns_8}. Thanks for your help and support, and let’s keep the teamwork going. Please stand with me for the second toast of the evening. Here’s to my best man and ushers!",
                    Bridesmaids : "But the smooth evening is also due to the bridesmaids.  I’m {Injections} that I don’t {Verbs_1} half of what it took to organize such a {Adjectives_19} wedding, but thank you for the {Adjectives_2} effort.  You all look {Adjectives_3} tonight. First of all, thanks to {Bride}’s flower girl, Chrissie. You look {Adjectives_9} in that flowing white dress, and if you were fifteen years older, I would introduce you to my best man {Best man}.  Both the bridesmaids, Joy and Cynthia, have always been just behind the scenes, but today you have come to the foreground and really taken care of the {Adjectives_12} details to make this a {Adjectives_9} night. I’m {Adjectives_7} that it will not be long before we can help to organize your {Adjectives_2} evenings.  One more toast, you guys, to {Bride}’s flower girl and bridesmaids. Thank you, and we love you.",
                    Parents : "Okay, that was all {Adverbs_6} {Adjectives_10} so far. Now the {Nouns_11} kicks into high gear. This is the most serious part of my speech.  I would like to say a singular thank you to {Bride}’s parents Suzanne and Sam. I know that it could not have been {Adjectives_10} to {Verbs_1} your young daughter {Verbs_11} towards a guy like me. You must have known that she was {Verbs_12} for a {Adjectives_14} and {Adjectives_15} life with a {Adjectives_16} and {Adjectives_17} {Nouns_13}. But you {Verbs_13} me a {Nouns_6}. {Parents story} to {Verbs_1} someone with some kind of {Adjectives_18} {Nouns_6}. Maybe you saw the love that I couldn’t {Verbs_14} for your daughter. Whatever it was, you gave me a {Nouns_6}, and because of your {Nouns_15}, I am standing here today as a part of your family.  I will do more than try to be everything you {Verbs_16} as a son-in-law.  I will {Verbs_17} the {Nouns_16}. Thank you for {Verbs_7} me into your family. That’s right everybody. It is time to get on our feet again and {Verbs_19} our {Nouns_17} to Suzanne and Sam!",
                    Wife : "{Injections}, I got through the {Adjectives_12} part of the speech. I can {Verbs_20} now. Here is the {Adjectives_10} part. Thank you, {Bride}, for being the absolute superlative woman in the {Nouns_2}. I love you. I love you now, and I {Verbs_22} to love you even more every day that we are lucky enough to spend together.  {History meet} You look {Adjectives_3} tonight, {Bride}. Thank you for having me, and I promise to be the best husband in the {Nouns_2}. Let me say it one more time: I love you. And finally, before {Best man} comes up to {Verbs_23} you, let’s {Verbs_19} a glass for the last time to my {Adjectives_3} wife {Bride}!"
                },
                p: -1,
                arrayPosition: [],
                arrayTextPosition: {
                    Introduction : 0,
                    Best_man_and_ushers : 0,
                    Bridesmaids : 0,
                    Parents : 0,
                    Wife : 0,
                    current: 0
                },
                newWord: {
				    arrWord: [],
                    nameText: ""
				}
			}
		};
	}
	render() {
		return (  
			<Router history={browserHistory}>
				<Route path="/nlp" component={App}/>
				<Route path='/nlp/speech' component={Speech}/>
				<Route path='/nlp/speech/done' component={SpeechDone}/>
				<Route path='/nlp/letter' component={Letter}/>
				<Route path='/nlp/letter/done' component={LetterDone}/>
			</Router>
		);
	}
}

MyRoute.childContextTypes = {
	myObj: React.PropTypes.object
};

export default MyRoute;