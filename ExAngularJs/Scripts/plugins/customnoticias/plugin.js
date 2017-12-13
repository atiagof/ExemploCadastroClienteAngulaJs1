CKEDITOR.plugins.add( 'customnoticias', {
	requires: 'widget',
	icons: 'customnoticias',
	init: function( editor ) {
		editor.widgets.add( 'customnoticias', {
			allowedContent: 'div(!customnoticias); div(!customnoticias-content); h2(!customnoticias-title)',
			requiredContent: 'div(customnoticias)',
			editables: {
				title: {
					selector: '.customnoticias-title',
					allowedContent: 'br strong em'
				},
				content: {
					selector: '.customnoticias-content',
					allowedContent: 'p br ul ol li strong em'
				}
			},
			template:
				'<div class="customnoticias">' +
					'<h2 class="customnoticias-title">Title</h2>' +
					'<div class="customnoticias-content"><p>Content...</p></div>' +
				'</div>',
			button: 'Create a simple box',
			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'customnoticias' );
			}
		} );
	}
} );
