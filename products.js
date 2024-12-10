const products = [
    {
        "id":1,
        "image":"assets/A ballad.jpg",
        "bookname":"A Ballad Of Never After",
        "authorname":"Stephanie Garber",
        "price":300,
        "desc":"Not every love is meant to be. After Jacks, the Prince of Hearts, betrays her, Evangeline Fox swears she'll never trust him again. Now that she's discovered her own magic,Evangeline believes she can use it to restore the chance at happily ever after that Jacks stole away."
    },
    {
        "id":2,
        "image":"assets/Acurse for true love_.jpg",
        "bookname":"A Curse for True Love",
        "authorname":"Stephanie Garber",
        "price":280,
        "desc":"Evangeline Fox ventured to the Magnificent North in search of her happy ending, and it seems as if she has it. She’s married to a handsome prince and lives in a legendary castle. But Evangeline has no idea of the devastating price she’s paid for this fairytale. She doesn’t know what she has lost, and her husband is determined to make sure she never finds out . . . but first he must kill Jacks, the Prince of Hearts."
    },
    {
        "id":3,
        "image":"assets/Throttled.jpg",
        "bookname":"Throttled",
        "authorname":"Stephanie Garber",
        "price":200,
        "desc":"Developing feelings for Noah wasn’t part of my plan.But then again, neither was anyone finding out.Turns out the man I was warned about happens to be the one I can’t stay away from.Even if he breaks my heart once the season comes to an end."
    },
    {
        "id":4,
        "image":"assets/All This Twisted Glory.jpg",
        "bookname":"All This Twisted Glory",
        "authorname":"Tahereh Mafi",
        "price":350,
        "desc":"The highly anticipated third novel in the This Woven Kingdom series, full of explosive magic, searing romance, and heartbreaking betrayal, from the award-winning and bestselling author of the Shatter Me series. Perfect for fans of Leigh Bardugo, Sabaa Tahir, and Tomi Adeyemi."
    },
    {
        "id":5,
        "image":"assets/BloodGuard-cecyrobson.jpg",
        "bookname":"BloodGuard",
        "authorname":"Cecy Robson",
        "price":500,
        "desc":"Then Leith meets Maeve, an elven royal who is everything he despises. Everything he should hate. Until the alluring princess offers him the one thing he needs most: a chance to win the coveted title of Bloodguard—and his freedom.But in a kingdom built on secrets and lies, hope doesn’t come cheap.Nor will his ultimate revenge…"
    },
    {
        "id":6,
        "image":"assets/Book loversjpg.jpg",
        "bookname":"Book Lovers",
        "authorname":"Emily Henry",
        "price":200,
        "desc":"If Nora knows she’s not an ideal heroine, Charlie knows he’s nobody’s hero, but as they are thrown together again and again—in a series of coincidences no editor worth their salt would allow—what they discover might just unravel the carefully crafted stories they’ve written about themselves."
    },
    {
        "id":7,
        "image":"assets/by a threadjpg.jpg",
        "bookname":"By a Thread",
        "authorname":"Lucy Score",
        "price":270,
        "desc":"A steamy, swoony workplace romantic comedy with a grumpy boss hero determined to save the day and a plucky heroine who is starting to wonder if there might actually be a beating heart just beneath her boss’s sexy vests."
    },
    {
        "id":8,
        "image":"assets/Check.jpg",
        "bookname":"Check & Mate",
        "authorname":"Ali Hazelwood",
        "price":300,
        "desc":"As she rockets up the ranks, Mallory struggles to keep her family safely separated from the game that wrecked it in the first place. And as her love for the sport she so desperately wanted to hate begins to rekindle, Mallory quickly realizes that the games aren't only on the board, the spotlight is hotter than she imagined, and the competition can be fierce(-ly attractive. And intelligent...and infuriating...)"
    },
    {
        "id":9,
        "image":"assets/Daydream.jpg",
        "bookname":"Daydream",
        "authorname":"Hannah Grace",
        "price":430,
        "desc":"The third in the New York Times bestselling Maple Hills series follows fan-favorite Henry and a bookish fellow student who come up with a plan to help them both overcome their respective challenges in a difficult year."
    },
    {
        "id":10,
        "image":"assets/Collided.jpg",
        "bookname":"Collided",
        "authorname":"Lauren Asher",
        "price":180,
        "desc":"He wants to strike a deal. Cross off naughty bucket list items together while traveling around the world.I should say no and walk away.Instead, we make a bet.I broke my biggest rule, unwillingly adding a new item to my list while shattering my heart—and friendship—in the process."
    },
    {
        "id":11,
        "image":"assets/Defy_me.jpg",
        "bookname":"Defy Me",
        "authorname":"Tahereh Mafi",
        "price":200,
        "desc":"The gripping fifth installment in the New York Times, USA Today, and Publishers Weekly bestselling Shatter Me series. Will Juliette’s broken heart make her vulnerable to the strengthening darkness within her?"
    },
    {
        "id":12,
        "image":"assets/Destroy_me.jpg",
        "bookname":"Destroy Me",
        "authorname":"Tahereh Mafi",
        "price":230,
        "desc":"Back at the base and recovering from his near-fatal wound, Warner must do everything in his power to keep his soldiers in check and suppress any mention of a rebellion in the sector. Still as obsessed with Juliette as ever, his first priority is to find her, bring her back, and dispose of Adam and Kenji, the two traitors who helped her escape. But when Warner’s father, The Supreme Commander of The Reestablishment, arrives to correct his son’s mistakes, it’s clear that he has much different plans for Juliette. Plans Warner simply cannot allow."
    },
    {
        "id":13,
        "image":"assets/Crooked Kingdom.jpg",
        "bookname":"Crooked Kingdom",
        "authorname":"Leigh Bardugo",
        "price":290,
        "desc":"Kaz Brekker and his crew of deadly outcasts have just pulled off a heist so daring even they didn't think they'd survive. But instead of divvying up a fat reward, they're right back to fighting for their lives."
    },
    {
        "id":14,
        "image":"assets/Everything.jpg",
        "bookname":"Everything is temporary",
        "authorname":"Jon Cohn",
        "price":150,
        "desc":"Now, Sarah must go on a journey into her husband's past to learn if Tom is in the midst of a psychotic breakdown, if he's a danger to his family, or if he really is being hunted by the malevolent holiday horror that destroyed his childhood."
    },
    {
        "id":15,
        "image":"assets/FinalOffer.jpg",
        "bookname":"Final Offer",
        "authorname":"Lauren Asher",
        "price":300,
        "desc":"Falling in love with Callahan Kane was a mistake.He told me so before destroying my heart and our friendship six summers ago.When he promised never to come back, I foolishly believed him.But then Cal showed up again, intending to sell his grandfather’s lake house.The biggest flaw in his plan?"
    },
    {
        "id":16,
        "image":"assets/Love redesigned.jpg",
        "bookname":"Love Redesigned",
        "authorname":"Lauren Asher",
        "price":500,
        "desc":"Love Redesigned is a steamy, small town romance about two family friends-turned-childhood rivals. It is the first book in the standalone Lakefront Billionaires series and has a happy ending."
    },
    {
        "id":17,
        "image":"assets/Six of crows.jpg",
        "bookname":"Six of crows",
        "authorname":"Leigh Bardugo",
        "price":330,
        "desc":"Six dangerous outcasts. One impossible heist. Kaz’s crew is the only thing that might stand between the world and destruction—if they don’t kill each other first."
    },
    {
        "id":18,
        "image":"assets/This Woven Kingdom.jpg",
        "bookname":"This Woven Kingdom",
        "authorname":"Tahereh Mafi",
        "price":380,
        "desc":"To all the world, Alizeh is a disposable servant, not the long-lost heir to an ancient Jinn kingdom forced to hide in plain sight.The crown prince, Kamran, has heard the prophecies foretelling the death of his king. But he could never have imagined that the servant girl with the strange eyes, the girl he can’t put out of his mind, would one day soon uproot his kingdom—and the world."
    },
    {
        "id":19,
        "image":"assets/These Infinite Threads.jpg",
        "bookname":"These Infinite Threads",
        "authorname":"Tahereh Mafi",
        "price":400,
        "desc":"With the heat of a kiss, the walls between Alizeh, the long-lost heir to an ancient Jinn kingdom, and Kamran, the crown prince of the Ardunian empire, have crumbled. And so have both of their lives.Alizeh, the heir to the Jinn throne, is destined to free her people from the half-lives they’ve been forced to live under human rule. When Kamran, the heir to the human throne, falls in love with her, he’s forced to question everything he’s been taught about Jinn."
    },
    {
        "id":20,
        "image":"assets/Heir-Sabaatahir.jpg",
        "bookname":"Heir",
        "authorname":"Sabaa Tahir",
        "price":130,
        "desc":"Beloved storyteller Sabaa Tahir interweaves the lives of three young people as they grapple with power, treachery, love, and the devastating consequences of unchecked greed, on a journey that may cost them their lives―and their hearts. Literally."
    },
    {
        "id":21,
        "image":"assets/Tempest Tea.jpg",
        "bookname":"A tempest of Tea",
        "authorname":"Hafsah Faizal",
        "price":290,
        "desc":"From the New York Times—bestselling author of We Hunt the Flame comes the first book in a hotly anticipated fantasy duology teeming with romance and revenge, led by an orphan girl willing to do whatever it takes to save her self-made kingdom. Dark, action-packed, and swoonworthy, this is Hafsah Faizal better than ever."
    },
    {
        "id":22,
        "image":"assets/The professor.jpg",
        "bookname":"The Professor",
        "authorname":"Lauren Nossett",
        "price":150,
        "desc":"In her relentless pursuit to uncover the mystery behind Ethan’s death, Marlitt will be forced to confront the power structures ingrained in the classroom against the backdrop of a historic campus and an institution that sometimes fails its most vulnerable members."
    },
    {
        "id":23,
        "image":"assets/things we hide.jpg",
        "bookname":"Things We Hide From The Light",
        "authorname":"Lucy Score",
        "price":280,
        "desc":"Too bad Lina’s got secrets of her own, and if Nash finds out the real reason she’s in town, he’ll never forgive her. Besides, she doesn’t do relationships. Ever. A hot, short-term fling with a local cop? Absolutely. Sign her up. A relationship with a man who expects her to plant roots? No freaking way. Once she gets what she’s after, she has no intention of sticking around. But Knockemout has a way of getting under people’s skin. And once Nash decides to make Lina his, he’s not about to be dissuaded…even if it means facing the danger that nearly killed him."
    },
    {
        "id":24,
        "image":"assets/TheStriker-Anahuang.jpg",
        "bookname":"The Striker",
        "authorname":"Ana Huang",
        "price":500,
        "desc":"Scarlett DuBois is a former prima ballerina whose career was cut short by a tragic accident. Now a teacher at a prestigious dance academy but still haunted by the ghosts of her past, the last thing she wants is to spend the summer cross-training Asher Donovan, of all people ."
    }
    

];
export default products;