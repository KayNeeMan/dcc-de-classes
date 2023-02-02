/**
* DCC DE Vat-Thing character sheet overrides
*/

import DCCActorSheet from '/system/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Vat-Thing
 * @extends {DCCActorSheet}
 */
class ActorSheetVatThing extends DCCActorSheet{
	/**@overrides */
		async getData (options) {
	const data = await super.getData(options)
	this.options.template = 'modules/dcc-de-classes/templates/actor-sheet-vat-thing.html'
	if (data.system.details.sheetClass !== 'Vat-Thing') {
	  this.actor.update({
	    'data.class.className': game.il8n.localize('VatThing.VatThing')
	  })
	}
	return data
      }
}

export {
	ActorSheetVatThing
}
