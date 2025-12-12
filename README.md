# black-jack
A blackjack app game 
# My Blackjack Game Project

**Hi! I'm a beginner JavaScript learner, and I built this Blackjack game!** 🎉

## 🎮 What My Game Does
I made a working Blackjack game where:
- You start with 2 random cards
- You can draw more cards with a "New Card" button
- It shows your current cards, sum, and if you win/lose
- Player "Tony" starts with $200 chips

## 🛠️ How I Built It

### 1. **Player Object** (My First Object!)
```js
let player = {
    name: "Tony",
    chips: 200
}
```
I stored player info in an object and displayed it: `playerEl.textContent = player.name + ": $" + player.chips`

### 2. **Random Cards** (My Random Number Function)
```js
function randomNumber(){
    let newNumber = Math.floor(Math.random() * 13) + 1
    if (newNumber > 10) return 10  // Face cards = 10
    if (newNumber === 1) return 11  // Ace = 11
    return newNumber
}
```
**Learned:** `Math.random()`, `Math.floor()`, and if/else logic!

### 3. **Dynamic Cards with For Loop** ⭐ (My Big Win!)
```js
for (i = 0; i < cards.length; i += 1) {
    cardsEl.textContent += cards[i] + " "
}
```
**Before:** I hardcoded `cards[0] + cards[1]`
**After:** Loop shows ALL cards automatically when I add more!

### 4. **Game Flow I Created**
```
1. startGame() → 2 random cards → renderGame()
2. newCard() → add card → update sum → renderGame()
3. renderGame() → show cards + win/lose message
```

### 5. **Win/Lose Logic**
```js
if (sum <= 20) { message = "Do you want to draw another card?" }
else if (sum === 21) { message = "Woohoo! You've got Blackjack!" }
else { message = "You're out of the game" }
```

## ✅ What I Accomplished
- [x] **Arrays grow dynamically** with `.push()`
- [x] **For loop renders all cards** (no more repetition!)
- [x] **Live DOM updates** with `.textContent`
- [x] **Random card generator** with special rules
- [x] **Complete game logic** (win = 21, bust > 20)
- [x] **Player tracking** with objects

## 🎯 Skills I Learned
```
✅ My first JavaScript object
✅ Arrays + .push() for growing lists
✅ For loops for dynamic content
✅ Random numbers & Math methods
✅ DOM manipulation (textContent)
✅ Functions calling each other
✅ If/else conditionals
✅ Game state (isAlive, hasBlackjack)
```


**This was my first complete game! From copying `console.log` lines to building dynamic loops - huge progress!** 💪



