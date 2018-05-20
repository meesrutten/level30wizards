/*
Merlin

- Level up
- Max level
- Initial/introduction animation
- Page transition
- Chatbot
*/

chatDialog = [
	{
		"intro": "Hello, my name is Merlin. If you ever need my help i'll be right here to help you."
	},
	{
		"introChat": "I am able to help you with a few actions:"
	},
	{
		"options" : [
			{"option1": "Getting in touch with Level30Wizards."},
			{"option2": "Tell you more about myself"},
			{"option3": "What there is to see"},
		]	
	},
	{
		"reactions" : [
			{ "reaction1": "You can get in touch with Level30Wizards by <a href=\"\mailto:merlin@level30wizards.com\"\>email</a>, <a href=\"\https://twitter.com/level30wizards/\"\>twitter</a> or <a href=\"\tel:0612345678\"\>mobile phone</a>."},
			{"reaction2": "My name is Merlin. I am the Archmage at Level30Wizards.com which means that I supervise every user on this website. I get experience by supervising you and others through this website. When I get experience an astounding flow of Magic flows through me and can have unexpected results to my appearance."},
			{ "reaction3": "Home, Work, Contact"},
		]	
	}
]

class Wizard {
	constructor(level) {
		this.level = level;
		this.maxLevel = 6;
		this.isMaxLevel = false;
	}
	levelUp() {
		this.level++;
	}
	checkMaxLevel() {
		if (this.level >= this.maxLevel) {
			return !this.isMaxLevel;
		}
		return this.isMaxLevel;
	}
	checkSession() {
		// Did a user level up already another time?
	}
	initialAnimation() {
		this.minimizeWizard();
	}
	minimizeWizard() {
		console.log('minimizing');
	}
	initializeChat() {

	}
	pageTransition() {
		// Do page transition
	}
	onNewPage () {
		// Level up!
		this.levelUp();
	}
}

const merlin = new Wizard(1);
console.log('test')
console.log(merlin.checkMaxLevel())