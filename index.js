// Be still - become aware of God's presence.

// Be thankful - review the moments of your day with gratitude

// Be present - review your day with curiosity rather than judgement

// Be prayerful - choose one part of your day and pray about it

// Be hopeful - look toward tomorrow


//

console.log('praise cage')

const headline = document.querySelector('h1')

const content = ['Be still', 'Be thankful', 'Be present', 'Be prayerful', 'Be hopeful']

let i = 0
const cycleText = () => {
  headline.textContent = content[i]
  i = ++i % content.length
}

cycleText()
setInterval( cycleText, 2000);