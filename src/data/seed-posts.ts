export interface SeedPost {
  id: string;
  forumId: string;
  title: string;
  body: string;
  author: string;
}

// 10 on-topic posts per forum = 120 total
export const SEED_POSTS: SeedPost[] = [
  // THE LINE 🔥
  { id: "line-1", forumId: "the-line", title: "First time working sauté — survived", body: "Chef threw me on sauté tonight with zero warning. 86'd my dignity but got through the rush. Hands are toast.", author: "BurnUnit_Mike" },
  { id: "line-2", forumId: "the-line", title: "How do you handle a 200-cover Friday with 3 cooks?", body: "We're chronically understaffed. Last Friday was a warzone. Anyone else running skeleton crews and somehow making it work?", author: "LineCook_Jess" },
  { id: "line-3", forumId: "the-line", title: "My sous chef called me 'chef' today", body: "3 years on the line. He's never called anyone below him chef. I about cried in the walk-in.", author: "QuietKnife" },
  { id: "line-4", forumId: "the-line", title: "Ticket printer jammed during rush — chaos", body: "Expo couldn't read anything, we went full verbal for 45 minutes. Honestly kind of loved it, felt old school.", author: "OldSchoolFire" },
  { id: "line-5", forumId: "the-line", title: "Station setup tips for grill during brunch?", body: "We added a brunch menu with steaks and burgers. I'm used to dinner grill. How do y'all set up for brunch volume?", author: "GrillDad" },
  { id: "line-6", forumId: "the-line", title: "What's the longest ticket time you've recovered from?", body: "We hit 38 minutes on a ticket last night. Chef was livid but we clawed it back to 12 min avg by 8pm.", author: "Comeback_Cook" },
  { id: "line-7", forumId: "the-line", title: "New guy keeps cross-contaminating boards", body: "Third time this week. I've told him, sous has told him. At what point do you just go to chef?", author: "SafeHands_Kim" },
  { id: "line-8", forumId: "the-line", title: "Double shift energy: what do you eat between?", body: "I've got doubles all week. Need something fast that won't make me sluggish for dinner service. Staff meal ideas?", author: "DoubleDown" },
  { id: "line-9", forumId: "the-line", title: "Who else talks to their station?", body: "I catch myself saying 'come on baby' to pans during the rush. Please tell me I'm not alone.", author: "PanWhisperer" },
  { id: "line-10", forumId: "the-line", title: "We just got a new combi oven — game changer", body: "Replacing our old convection with a Rational. Prep time cut in half. If your kitchen doesn't have one, lobby hard.", author: "CombiConvert" },

  // FRONT OF HOUSE 🍷
  { id: "foh-1", forumId: "front-of-house", title: "Guest sent back wine 3 times — how do you handle it?", body: "First bottle was 'too oaky', second was 'not oaky enough', third she said was fine but looked unhappy. My sommelier instincts are crying.", author: "SommSara" },
  { id: "foh-2", forumId: "front-of-house", title: "Best tip pooling systems?", body: "We're switching from individual tips to pooled. FOH is nervous. Anyone have a system that actually feels fair?", author: "TipJar_Tom" },
  { id: "foh-3", forumId: "front-of-house", title: "How to upsell without being sleazy?", body: "My manager wants more dessert sales. I hate being pushy. What's your natural approach to suggesting without pressuring?", author: "SubtleSell" },
  { id: "foh-4", forumId: "front-of-house", title: "Dealing with guests who won't leave after close", body: "Table of 6, we closed 45 min ago, they're on their 4th round of espressos. How direct can I be?", author: "ClosingTime_Chris" },
  { id: "foh-5", forumId: "front-of-house", title: "Bar speed rack organization — what's your well?", body: "Redoing my speed rack layout. High volume cocktail bar. What's your left-to-right order?", author: "WellBuilt" },
  { id: "foh-6", forumId: "front-of-house", title: "Allergies table just walked in, no reservation", body: "Party of 4, two celiac, one tree nut allergy, one shellfish. No heads up. How does your restaurant handle walk-in allergy parties?", author: "AllergyAlert_Anna" },
  { id: "foh-7", forumId: "front-of-house", title: "My favorite regular just passed away", body: "He came in every Tuesday for 8 years. Same table, same order. His daughter called to let us know. We're all gutted.", author: "TuesdayTable" },
  { id: "foh-8", forumId: "front-of-house", title: "Pre-shift meetings: waste of time or essential?", body: "Our GM insists on 15-min pre-shifts daily. Half the staff zones out. But when we skip them, mistakes spike. Thoughts?", author: "PreShift_Pro" },
  { id: "foh-9", forumId: "front-of-house", title: "What do you say when someone asks 'what's good here?'", body: "I know they want a recommendation but everything is good (mostly). What's your go-to response that doesn't sound generic?", author: "MenuGuide" },
  { id: "foh-10", forumId: "front-of-house", title: "Hosted a 50th wedding anniversary tonight", body: "Custom menu, their original wedding cake recipe remade by pastry. The couple cried. This is why we do this.", author: "GoldenService" },

  // THE WALK-IN 🥶
  { id: "walkin-1", forumId: "the-walk-in", title: "I haven't had a weekend off in 3 months", body: "I know this is the industry but I missed my kid's soccer game again. Starting to wonder if this is worth it.", author: "TiredChef_Dan" },
  { id: "walkin-2", forumId: "the-walk-in", title: "Owner just bought a Ferrari but can't give us raises", body: "We've been asking for a cost of living adjustment for 2 years. He pulled up in a new 488 today. Cool cool cool.", author: "RaiseMePlease" },
  { id: "walkin-3", forumId: "the-walk-in", title: "Customer called me stupid to my face", body: "Because their medium-rare steak had pink in it. I had to smile and apologize. I went to the walk-in after.", author: "WalkInCrier" },
  { id: "walkin-4", forumId: "the-walk-in", title: "Just found out I'm being replaced by my trainee", body: "Spent 3 weeks training the new guy. Today I overheard chef say he's 'more reliable.' I literally trained him on MY systems.", author: "Replaced_Rachel" },
  { id: "walkin-5", forumId: "the-walk-in", title: "Burned out. Considering leaving the industry entirely", body: "15 years in. My body hurts, my relationships suffer, I drink too much. Love the craft but hate what it's doing to me.", author: "FifteenYears" },
  { id: "walkin-6", forumId: "the-walk-in", title: "Health insurance? What's that?", body: "Went to the doctor for the first time in 4 years. Bill was $800 for a checkup. No benefits, no PTO, no sick days. The American hospitality dream.", author: "NoBenefits_Nate" },
  { id: "walkin-7", forumId: "the-walk-in", title: "Yelp reviewer destroyed us with lies", body: "1-star review saying they found a hair in food and we 'refused to comp.' Never happened. We have cameras. Yelp won't remove it.", author: "YelpVictim" },
  { id: "walkin-8", forumId: "the-walk-in", title: "I love this industry but it doesn't love me back", body: "Some days I create beautiful food and it feels like art. Most days I'm just surviving. Anyone else feel this duality?", author: "DualityChef" },
  { id: "walkin-9", forumId: "the-walk-in", title: "Manager scheduled me on my grandma's funeral", body: "I told him two weeks ago. It's on the calendar. He said 'find coverage or come in.' I'm done.", author: "DoneWithThis" },
  { id: "walkin-10", forumId: "the-walk-in", title: "Why do cooks glorify suffering?", body: "The machismo around working injured, sleep deprived, hungover — why do we celebrate this? It's not a flex, it's a problem.", author: "NotAFlex" },

  // PURVEYORS 📦
  { id: "purv-1", forumId: "purveyors", title: "Wüsthof vs Shun for daily prep?", body: "Chef's knife needs replacing. I've used both but can't decide. Daily heavy prep environment. What's your go-to and why?", author: "SharpDecisions" },
  { id: "purv-2", forumId: "purveyors", title: "Best food-grade gloves that don't rip?", body: "Nitrile gloves from our supplier are garbage. Rip within minutes on prep. Brand recs for something that lasts?", author: "GloveUp" },
  { id: "purv-3", forumId: "purveyors", title: "Our fish supplier ghosted us mid-week", body: "Wednesday delivery never showed. No call, no text. Had to scramble to Costco for salmon. Time for a new purveyor.", author: "FishPanic" },
  { id: "purv-4", forumId: "purveyors", title: "Cast iron vs carbon steel for searing?", body: "Team carbon steel here. Lighter, heats faster, seasons beautifully. But the cast iron crowd is passionate. Convince me.", author: "SearMaster" },
  { id: "purv-5", forumId: "purveyors", title: "Sous vide circulator recs under $300?", body: "Want to add sous vide to our protein prep. Not looking for Polyscience commercial level, just reliable for daily use.", author: "LowTemp_Luis" },
  { id: "purv-6", forumId: "purveyors", title: "Anyone tried Impinger ovens for pizza?", body: "Thinking about adding pizza to our menu. Impinger conveyor vs deck oven debate. Space is limited.", author: "PizzaPivot" },
  { id: "purv-7", forumId: "purveyors", title: "Truffle oil: real vs synthetic — can you tell?", body: "Our supplier has 'real' truffle oil at 4x the price. Did a blind test with staff. Results were... humbling.", author: "TruffleTruth" },
  { id: "purv-8", forumId: "purveyors", title: "Walk-in shelving — wire vs solid?", body: "Reorganizing our walk-in. NSF wire shelves let air flow but stuff falls through. Solid shelves are easier to clean but less ventilation.", author: "ShelfLife" },
  { id: "purv-9", forumId: "purveyors", title: "Switching from Sysco to local — cost comparison", body: "We're trying to go more local/seasonal. Running the numbers and it's about 15-20% more. Worth it for the story and quality?", author: "LocalFirst" },
  { id: "purv-10", forumId: "purveyors", title: "Best non-slip kitchen shoes in 2026?", body: "Birkenstocks are dying. Tried Shoes for Crews but they fall apart. What's everyone wearing that lasts and doesn't destroy your feet?", author: "HappyFeet_Hannah" },

  // THE PASS 🍽️
  { id: "pass-1", forumId: "the-pass", title: "Finally nailed my microgreen placement", body: "Spent a week obsessing over garnish placement on our new tasting menu. Chef said 'that's the one.' Screenshot attached.", author: "PlatingPerfect" },
  { id: "pass-2", forumId: "the-pass", title: "Phone cameras are ruining food photography", body: "Guests flash-bombing their plates ruins the mood for the whole dining room. Should we have a no-phone policy?", author: "NoFlash_Nancy" },
  { id: "pass-3", forumId: "the-pass", title: "Fall menu launch — feedback welcome", body: "Squash three ways, braised short rib, pear tarte tatin. Going seasonal-rustic. How does this lineup read?", author: "FallForward" },
  { id: "pass-4", forumId: "the-pass", title: "Sauce art: dots vs swooshes vs pools", body: "Our new chef wants everything deconstructed with dot patterns. I miss a good swoosh. What's the current plating vibe?", author: "SwooshChef" },
  { id: "pass-5", forumId: "the-pass", title: "Edible flowers — worth the cost?", body: "They're beautiful but $40/flat and they wilt in hours. Trying to justify the cost to my GM who only sees the P&L.", author: "FlowerPower_Chef" },
  { id: "pass-6", forumId: "the-pass", title: "I designed our new dessert menu around nostalgia", body: "Elevated pop-tart, fancy s'mores, cereal milk panna cotta. Guests are loving it. Childhood memories on a plate.", author: "NostalgiaPlates" },
  { id: "pass-7", forumId: "the-pass", title: "What plate color shows food best?", body: "We're ordering new dishware. White is classic but matte black is trending. Anyone have experience with how it photographs?", author: "DishDecider" },
  { id: "pass-8", forumId: "the-pass", title: "Hot take: negative space > loaded plates", body: "Let the food breathe. A single perfect element with space around it hits harder than a crowded plate. Fight me.", author: "LessIsMore" },
  { id: "pass-9", forumId: "the-pass", title: "Smoke gun presentations — gimmick or art?", body: "Our new cocktail comes in a smoke-filled cloche. Instagram loves it. Purists hate it. Where do you stand?", author: "SmokeShow" },
  { id: "pass-10", forumId: "the-pass", title: "Created a tasting menu inspired by my grandmother", body: "7 courses, all based on her Filipino recipes, elevated with French technique. Most personal thing I've ever cooked.", author: "LolasCooking" },

  // BOOKS & BUSINESS 📊
  { id: "biz-1", forumId: "books-and-business", title: "Food cost hit 38% last month — help", body: "We're targeting 30%. Beef prices and waste are killing us. What's your food cost management strategy?", author: "MarginWatch" },
  { id: "biz-2", forumId: "books-and-business", title: "Thinking about opening a second location", body: "First restaurant is profitable after 3 years. Is it too soon? What should my cash reserves look like before expanding?", author: "GrowthMode" },
  { id: "biz-3", forumId: "books-and-business", title: "How much should a GM make in a mid-size city?", body: "Offering $65K + bonus structure. Losing candidates to corporate chains offering $80K. What's competitive?", author: "HiringHelp" },
  { id: "biz-4", forumId: "books-and-business", title: "Our lease is up — renegotiation tips?", body: "Landlord wants 20% increase. We've been a reliable tenant for 5 years. What leverage do I have?", author: "LeaseStress" },
  { id: "biz-5", forumId: "books-and-business", title: "Ghost kitchen as revenue supplement?", body: "Considering running a virtual brand out of our kitchen during slow hours. Anyone doing this successfully?", author: "GhostRevenue" },
  { id: "biz-6", forumId: "books-and-business", title: "Insurance claim after kitchen fire — nightmare", body: "Small grease fire, contained quickly. Insurance is dragging their feet on the claim. 6 weeks and counting.", author: "FireClaim_Fred" },
  { id: "biz-7", forumId: "books-and-business", title: "What accounting software do you use?", body: "QuickBooks feels clunky for restaurant-specific needs. Is there something better for tracking food cost, labor, daily P&L?", author: "NumbersCook" },
  { id: "biz-8", forumId: "books-and-business", title: "Should I switch to counter service?", body: "Labor costs are unsustainable for full table service. But we're a 'sit-down restaurant.' Would going fast-casual kill our brand?", author: "ServiceSwitch" },
  { id: "biz-9", forumId: "books-and-business", title: "Partner wants out — how to handle buyout?", body: "50/50 partner for 4 years. He wants to exit. How do you value a restaurant for a buyout? Getting an appraiser?", author: "PartnerSplit" },
  { id: "biz-10", forumId: "books-and-business", title: "Revenue per seat hour — anyone tracking this?", body: "Started tracking RevPASH. Changed how we think about table turns and reservation slots. Anyone else using this metric?", author: "DataDriven_Dave" },

  // HEALTH & FIRE 🧯
  { id: "health-1", forumId: "health-and-fire", title: "Surprise inspection today — we passed!", body: "Health inspector walked in during lunch rush. 96/100. Only ding was a thermometer calibration. Prep pays off.", author: "InspectionReady" },
  { id: "health-2", forumId: "health-and-fire", title: "HACCP plan template for small restaurants?", body: "Health dept is requiring a formal HACCP plan. We're a 40-seat bistro, not a factory. Anyone have a simple template?", author: "HACCPHelp" },
  { id: "health-3", forumId: "health-and-fire", title: "Ansul system maintenance — how often?", body: "Our fire suppression system is due for inspection. How often do you service yours and what does it cost?", author: "FireSafe_Frank" },
  { id: "health-4", forumId: "health-and-fire", title: "Staff member came in sick — what's the policy?", body: "Line cook showed up visibly ill. Sent him home but he was upset about losing the shift. What's your sick policy?", author: "SickPolicy" },
  { id: "health-5", forumId: "health-and-fire", title: "Pest control: monthly spray vs IPM?", body: "Current pest company just sprays monthly. Heard integrated pest management is better long-term. Experiences?", author: "BugFree_Beth" },
  { id: "health-6", forumId: "health-and-fire", title: "New allergen labeling laws — are you compliant?", body: "Our state just expanded allergen disclosure requirements. Now we need to label 14 allergens on all menu items. Anyone have a good system?", author: "AllergenCompliant" },
  { id: "health-7", forumId: "health-and-fire", title: "Walk-in temp was 48°F this morning", body: "Should be 38°F. Compressor is running. Called repair but they can't come till tomorrow. What do I do with the food?", author: "TempPanic" },
  { id: "health-8", forumId: "health-and-fire", title: "Workers comp claim process — first timer", body: "Prep cook sliced her hand badly. First serious injury in 6 years. How does workers comp work for restaurants?", author: "FirstClaim" },
  { id: "health-9", forumId: "health-and-fire", title: "Grease trap overflowed into the dining room", body: "Worst Saturday night of my career. Grease trap backed up, sewage smell, had to evacuate diners. How do you prevent this?", author: "GreaseTrapHorror" },
  { id: "health-10", forumId: "health-and-fire", title: "ServSafe certification — online vs in-person?", body: "Need to recertify. Online is cheaper but I've heard the in-person classes are more thorough. Worth the extra cost?", author: "CertifyMe" },

  // STAGECRAFT 🎓
  { id: "stage-1", forumId: "stagecraft", title: "Is culinary school worth it in 2026?", body: "CIA is $60K/year. I could stage at great restaurants for free and learn on the job. What's the honest answer?", author: "SchoolOrStage" },
  { id: "stage-2", forumId: "stagecraft", title: "Just finished my stage at a Michelin star kitchen", body: "2 weeks at a 2-star in NYC. Learned more in 14 days than 2 years of culinary school. Here's what surprised me.", author: "StarStruck" },
  { id: "stage-3", forumId: "stagecraft", title: "How to ask a chef for a stage?", body: "Dream restaurant in my city. Want to stage there but I'm intimidated. What's the etiquette? Email? Walk in?", author: "DreamStage" },
  { id: "stage-4", forumId: "stagecraft", title: "Transitioning from FOH to BOH — advice?", body: "Been serving for 5 years but my heart is in the kitchen. How do I make the jump without starting at zero pay?", author: "FOHtoBOH" },
  { id: "stage-5", forumId: "stagecraft", title: "My mentor retired today", body: "He taught me everything. 30 years in the industry, hands like leather, palate like a machine. End of an era.", author: "MentorGratitude" },
  { id: "stage-6", forumId: "stagecraft", title: "Best cookbooks for technique (not recipes)?", body: "I want to understand the WHY. Not 'add 2 cups flour' but why gluten development matters. Science-forward recommendations?", author: "WhyNotHow" },
  { id: "stage-7", forumId: "stagecraft", title: "Offered exec chef at 28 — am I ready?", body: "Small farm-to-table, 60 seats. I've been sous for 3 years. Excited but terrified. When did you know you were ready?", author: "YoungChef" },
  { id: "stage-8", forumId: "stagecraft", title: "Building a resume in this industry", body: "Do restaurants even look at resumes? Every job I've gotten was through connections. What do hiring chefs actually want to see?", author: "ResumeBuilder" },
  { id: "stage-9", forumId: "stagecraft", title: "Competition cooking: worth it for career?", body: "Got invited to a regional cooking competition. Will it actually help my career or is it just ego?", author: "CompCook" },
  { id: "stage-10", forumId: "stagecraft", title: "Teaching my apprentice to taste", body: "Hardest thing to teach. Seasoning, balance, acid — it's intuitive to me now. How do you teach someone to develop their palate?", author: "TasteTeacher" },

  // OFF THE CLOCK 🏖️
  { id: "off-1", forumId: "off-the-clock", title: "Finally took a real vacation", body: "2 weeks in Portugal. No emails, no 'quick questions' from staff. Ate my way through Lisbon. I feel human again.", author: "VacayMode" },
  { id: "off-2", forumId: "off-the-clock", title: "What do you cook at HOME?", body: "After cooking professionally all day, I eat cereal for dinner. Anyone else? Or do you actually enjoy cooking at home?", author: "CerealForDinner" },
  { id: "off-3", forumId: "off-the-clock", title: "Dating when you work nights and weekends", body: "Every dating app match wants Friday dinner dates. I work Friday dinner. How do hospitality people find relationships?", author: "NightShiftLove" },
  { id: "off-4", forumId: "off-the-clock", title: "Best podcasts for your commute?", body: "45-minute drive to work. Need something good. Doesn't have to be food-related — actually prefer non-industry content.", author: "CommuteCast" },
  { id: "off-5", forumId: "off-the-clock", title: "Got into gardening — it's therapeutic", body: "Started growing herbs at home. Something about nurturing plants instead of cooking them is incredibly calming.", author: "GreenThumb_Chef" },
  { id: "off-6", forumId: "off-the-clock", title: "Picked up surfing on my days off", body: "Dawn patrol on Tuesdays and Wednesdays. The ocean doesn't care about your ticket times. Best therapy I've found.", author: "SurfChef" },
  { id: "off-7", forumId: "off-the-clock", title: "Anyone else's family think you can cook Thanksgiving?", body: "Family assumes I WANT to cook for 30 relatives on my day off. No, Aunt Karen, I want to sit on the couch and eat YOUR dry turkey.", author: "NotCookingToday" },
  { id: "off-8", forumId: "off-the-clock", title: "Reading recs — not food books", body: "Need to escape the industry mentally. Sci-fi, thriller, anything. What are you reading that has zero to do with restaurants?", author: "BookEscape" },
  { id: "off-9", forumId: "off-the-clock", title: "Just adopted a dog", body: "Rescue mutt, named him Roux. He waits by the door every night until I get home at midnight. Best decision I've made.", author: "ChefDogDad" },
  { id: "off-10", forumId: "off-the-clock", title: "Fitness routine that works with our schedule?", body: "I want to work out but I'm exhausted after 12-hour shifts. 5am gym? Late night? When do you all exercise?", author: "FitCook" },

  // POP-UPS & PROJECTS 🚚
  { id: "popup-1", forumId: "pop-ups-and-projects", title: "First pop-up this weekend — terrified", body: "Rented a brewery space, menu of 5 items, capacity 40. Sold out in 2 hours. Now I'm panicking about execution.", author: "PopUpPanic" },
  { id: "popup-2", forumId: "pop-ups-and-projects", title: "Food truck vs brick-and-mortar: my honest comparison", body: "Ran a truck for 2 years before opening a restaurant. Here's the real financial breakdown nobody talks about.", author: "TruckToBrick" },
  { id: "popup-3", forumId: "pop-ups-and-projects", title: "Catering pricing — am I undercharging?", body: "Charging $45/head for a plated dinner. 50 guests. Is that reasonable for a mid-tier market? Feel like I'm leaving money on the table.", author: "CateringCalc" },
  { id: "popup-4", forumId: "pop-ups-and-projects", title: "Collab dinner with a brewery — logistics help", body: "Doing a beer pairing dinner at a local brewery next month. 5 courses, 5 beers. How do you split revenue?", author: "CollabCook" },
  { id: "popup-5", forumId: "pop-ups-and-projects", title: "Starting a hot sauce brand from my kitchen", body: "My habanero-mango sauce is my signature. Want to bottle and sell. What's the process? Copacker? Commercial kitchen rental?", author: "SauceBoss" },
  { id: "popup-6", forumId: "pop-ups-and-projects", title: "Farmers market booth — first season tips", body: "Got approved for a vendor spot at our local market. Selling prepared foods. What do I wish I knew before day one?", author: "MarketNewbie" },
  { id: "popup-7", forumId: "pop-ups-and-projects", title: "Teaching cooking classes as a side gig", body: "Offering private cooking classes on my days off. $150/person, groups of 6. It's weirdly the most fun I have cooking.", author: "TeachAndCook" },
  { id: "popup-8", forumId: "pop-ups-and-projects", title: "Pop-up series: 6 cities, 6 chefs, 1 menu", body: "Organizing a collaborative touring pop-up. Each city, a local chef adds one course. It's ambitious but exciting.", author: "TourChef" },
  { id: "popup-9", forumId: "pop-ups-and-projects", title: "Meal prep service for gym clients", body: "Partnering with a local CrossFit gym. Macro-counted meals, weekly delivery. Surprisingly lucrative side income.", author: "MacroMeals" },
  { id: "popup-10", forumId: "pop-ups-and-projects", title: "Writing a cookbook — self-publish or traditional?", body: "Finally putting my recipes into a book. Self-publishing gives control but traditional gives credibility. What's the move?", author: "CookbookDream" },

  // TECH & TOOLS 💻
  { id: "tech-1", forumId: "tech-and-tools", title: "Toast vs Square vs Clover — POS showdown", body: "Switching POS systems. Currently on Aloha (ancient). What's everyone using and what do you actually like about it?", author: "POSHunter" },
  { id: "tech-2", forumId: "tech-and-tools", title: "7shifts vs HotSchedules for staff scheduling?", body: "Need a scheduling app that staff will actually use. Budget-conscious. What works for a 20-person team?", author: "ScheduleWoes" },
  { id: "tech-3", forumId: "tech-and-tools", title: "Online ordering: build in-house or use a platform?", body: "DoorDash takes 30%. Building our own ordering page saves money but adds complexity. What's the breakeven?", author: "OrderDirect" },
  { id: "tech-4", forumId: "tech-and-tools", title: "Kitchen display system changed our ticket flow", body: "Went from paper tickets to KDS. Expo can see everything, modify on the fly, track times. Should've done this years ago.", author: "KDSConvert" },
  { id: "tech-5", forumId: "tech-and-tools", title: "Inventory management: still using spreadsheets", body: "There has to be something better than my Excel nightmare. What inventory software integrates with your POS?", author: "SpreadsheetHell" },
  { id: "tech-6", forumId: "tech-and-tools", title: "QR code menus — guests hate them or love them?", body: "We went QR-only during COVID and never went back. Half our reviews mention it negatively. Time to print menus again?", author: "QRDebate" },
  { id: "tech-7", forumId: "tech-and-tools", title: "Security cameras: what system do you use?", body: "Need to cover kitchen, bar, and entrance. Cloud vs local storage? Wired vs wireless? Budget around $2K.", author: "EyeInTheSky" },
  { id: "tech-8", forumId: "tech-and-tools", title: "Reservation systems: Resy vs OpenTable vs Tock", body: "OpenTable's per-cover fees are killing us. Resy is flat rate. Tock does prepaid. What's best for a 80-seat restaurant?", author: "ResoSwitch" },
  { id: "tech-9", forumId: "tech-and-tools", title: "Using AI to write menu descriptions", body: "Fed our ingredients into ChatGPT and got surprisingly good menu copy. Is this cheating or just efficient?", author: "AIMenuWriter" },
  { id: "tech-10", forumId: "tech-and-tools", title: "Digital tip-out calculator we built in-house", body: "Our manager built a Google Sheets formula for tip pooling that auto-calculates based on hours and position. Happy to share.", author: "TipCalc_Dev" },

  // THE REGULARS 👋
  { id: "reg-1", forumId: "the-regulars", title: "New here — pastry chef from Chicago", body: "15 years in pastry. Currently at a hotel. Excited to find a community that gets it. What should I check out first?", author: "ChiPastry" },
  { id: "reg-2", forumId: "the-regulars", title: "Can we get a 'Late Night' flair for shift workers?", body: "Half my posts are at 2am after service. Would be fun to have a flair that shows we're the night crew.", author: "NightOwl_Nick" },
  { id: "reg-3", forumId: "the-regulars", title: "AMA: 20 years as a food truck operator", body: "Started with a taco truck in 2006. Now I run 3 trucks and a commissary. Ask me anything about mobile food.", author: "TruckVet" },
  { id: "reg-4", forumId: "the-regulars", title: "This community saved my career", body: "Was ready to quit last year. Posted in The Walk-In, got support, advice, and a DM that led to my current dream job. Thank you.", author: "Grateful_Grace" },
  { id: "reg-5", forumId: "the-regulars", title: "Meetup: Portland food industry drinks?", body: "Anyone in the PDX area want to get together? Industry night somewhere, swap stories, maybe make some connections.", author: "PDXMeetup" },
  { id: "reg-6", forumId: "the-regulars", title: "Feature request: recipe formatting in posts", body: "Would be great to have a recipe card format — ingredients, steps, yield, cook time — built into the post editor.", author: "FormatFan" },
  { id: "reg-7", forumId: "the-regulars", title: "Introducing myself — dishwasher turned owner", body: "Started as a dish dog at 16. Bought the restaurant I worked at when the owner retired. Full circle.", author: "DishToOwner" },
  { id: "reg-8", forumId: "the-regulars", title: "Best threads of the month — January roundup", body: "Compiling the top posts from each forum this month. Here are the ones that got the most engagement and best discussions.", author: "ModRoundup" },
  { id: "reg-9", forumId: "the-regulars", title: "Should we add a 'Wine & Spirits' forum?", body: "There's enough beverage-specific content that it might deserve its own space. Thoughts from the community?", author: "WineForum_Pitch" },
  { id: "reg-10", forumId: "the-regulars", title: "Happy anniversary — Mise is 1 year old!", body: "Can't believe this community has been going for a year. From 50 members to 12,000. Here's to year two. 🍾", author: "MiseAdmin" },
];
