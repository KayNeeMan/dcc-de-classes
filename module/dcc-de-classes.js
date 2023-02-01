//global Actors

import * as VatThingSheets from './actor-sheets-vat-thing.js'
//import * as MagicianSheets from './actor-sheets-magician.js'
//import * as WayfarerSheets from './actor-sheets-wayfarer.js'
//import * as WitchSheets from './actor-sheets-witch.js'

//FoundryVTT Initialization

Hooks.once('init', async function () {
	console.log(`DCC | Initializing Dungeon Crawl Classics System`)
	console.log(`Loading DCC Dying Earth Classes`)
	
	//Register sheet application classes
	Actors.registerSheet('dcc-de-vat-thing', VatThingSheets.ActorSheetVatThing, { types: ['Player'], label: 'vat-thing.ActorSheetVatThing'})
	//Actors.registerSheet('dcc-de-magician', MagicianSheets.ActorSheetMagician, { types: ['Player], label: 'magician.ActorSheetMagician'})
	//Actors.registerSheet('dcc-de-wayfarer', WayfarerSheets.ActorSheetWayfarer, { types: ['Player], label: 'wayfarer.ActorSheetWayfarer'})
	//Actors.registerSheet('dcc-de-witch', WitchSheets.ActorSheetWitch, { types: ['Player'], label: 'witch.ActorSheetWitch'})
})