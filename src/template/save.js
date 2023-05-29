import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			Bloque del lado de la página ¡Esta guardado!
		</p>
	);
}
