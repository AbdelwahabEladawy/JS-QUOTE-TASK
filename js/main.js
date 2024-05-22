var quotes = [`William W. Purkey
“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`,`“You only live once, but if you do it right, once is enough.”
― Mae West`,`“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”
― Albert Camus`,`“If you tell the truth, you don't have to remember anything.”
― Mark Twain`,
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The best way to predict the future is to invent it. - Alan Kay"
  ];


function changeQuote() {
    var randomI=(Math.floor(Math.random() * quotes.length))
document.getElementById("change").innerHTML=quotes[randomI]
    
}

