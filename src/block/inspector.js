const { __ } = wp.i18n
const { Component } = wp.element
const { InspectorControls, PanelColorSettings } = wp.blockEditor
const { PanelBody, RadioControl, SelectControl, ToggleControl,TextControl, RangeControl, FormTokenField } = wp.components
const { apiFetch } = wp;

export default class Inspector extends Component {

    render(){

        const { attributes, setAttributes } = this.props
        const { isSticky } = attributes
        

        return(
            <InspectorControls>
                <ToggleControl
                className="tpd-ads-toggle-control"
                label={ __( 'Enable sticky ad' ) }
                checked={ isSticky }
                onChange={ ( isSticky ) => setAttributes( { isSticky } ) }
                />
            </InspectorControls>
        )
    }
}