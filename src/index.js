import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import './style.scss';

// @Blocks
import './blocks/Tabs';

registerBlockType( metadata.name );
