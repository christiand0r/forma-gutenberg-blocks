// @Schema "https://schemas.wp.org/trunk/block.json"

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'blocksforma/formatabs', {
	title: __( 'Forma Tabs', 'blocksforma' ),
	category: 'media',
	icon: 'table-row-after',
	keywords: [ 'tabs', 'forma', 'layout' ],
	description: __( 'Agrupe en pestañas diversos elementos' ),
	supports: {
		html: false,
	},
	textdomain: 'blocksforma',
	edit: Edit,
	save,
} );
