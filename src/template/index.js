// @Schema "https://schemas.wp.org/trunk/block.json"

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

import './style.scss';

registerBlockType( 'blocksforma/nombre-del-bloque', {
	apiVersion: 2,
	version: '0.1.0',
	title: __( 'Nombre en pantalla', 'blocksforma' ),
	category: 'Categoría en la que se agrupará',
	icon: 'Icono en pantalla',
	keywords: [
		'Arreglo con las palabras claves',
		'que describen',
		'el bloque',
	],
	description: __(
		'Descripción que se mostrará al posicionar el cursos encima del bloque',
		'blocksforma'
	),
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
