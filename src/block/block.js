/**
 * BLOCK: tpd-ads
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import Inspector from './inspector'

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element
const { TextControl } = wp.components

registerBlockType( 'tpd/block-tpd-ads', {
	title: __( 'The Publisher Desk Ads' ),
	icon: 'megaphone',
	category: 'common',
	keywords: [ __( 'ads' ), __( 'tpd' ), ],
	attributes: {
		ad_size: {
			type: 'string',
			default: 'leaderboard'
		},
		adID: {
			type: 'string',
			default: ''
		},
		adID_mob: {
			type: 'string',
			default: ''
		},
		isSticky:{
			type:'boolean',
			default:false
		}
	},
	supports: {
		align: true
	},

	edit: ( props ) => {

		const { attributes, setAttributes } = props
		const { ad_size, adID, adID_mob } = attributes

		// Creates a <p class='wp-block-cgb-block-tpd-ads'></p>.
		return (
			<Fragment>
				<Inspector {...props}/>
				<div className={ props.className }>
					<div className={ ad_size }>
						<TextControl
							value={ adID || '' }
							onChange={ value => { setAttributes({ adID: value }) } }
							placeholder='Ad Div ID for Desktop'
						/>
						<TextControl
							value={ adID_mob || '' }
							onChange={ value => { setAttributes({ adID_mob: value }) } }
							placeholder='Ad Div ID for Mobile'
						/>
					</div>
				</div>
			</Fragment>

		);
	},

	save: ( props ) => {

		const { attributes } = props
		const { adID, adID_mob, isSticky } = attributes

		let isStickyClass = isSticky ? ' is-sticky' : '';
		let hasDesktop = adID ? ' has-dsk' : '';
		let hasMobile = adID_mob ? ' has-mob' : '';

		return (
			<div className={ `${isStickyClass}`+`${hasDesktop}`+`${hasMobile}` }>
				<div id={ adID }></div>
				<div id={ adID_mob }></div>
			</div>
		);
	},

	deprecated: [
		{
			attributes: {
				ad_size: {
					type: 'string',
					default: 'leaderboard'
				},
				adID: {
					type: 'string',
					default: ''
				},
				adID_mob: {
					type: 'string',
					default: ''
				},
				isSticky:{
					type:'boolean',
					default:false
				}
			},
			save( props ) {
				const { attributes } = props
				const { adID, adID_mob } = attributes
				return (
					<div className={ props.className }>
						<div id={ adID }></div>
						<div id={ adID_mob }></div>
					</div>
				);
			},
		}
	]

} );
