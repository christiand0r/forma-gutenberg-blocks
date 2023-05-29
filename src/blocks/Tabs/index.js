// @Schema "https://schemas.wp.org/trunk/block.json"

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

import './style.scss';

registerBlockType( 'blocksforma/formatabs', {
	apiVersion: 2,
	version: '0.1.0',
	title: __( 'Forma Tabs', 'blocksforma' ),
	category: 'layout',
	icon: 'table-row-after',
	keywords: [ 'tabs', 'forma', 'layout' ],
	description: __( 'Agrupe en pestañas diversos elementos' ),
	supports: {
		html: false,
	},
	textdomain: 'blocksforma',
	editorScript: 'file:./index.js',
	editorStyle: 'file:./index.css',
	style: 'file:./style-index.css',
	edit: Edit,
	save,
} );
