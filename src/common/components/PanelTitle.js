import React from 'react';

import '../styles/components/PanelTitle.scss';

//
class PanelTitle extends React.Component {
    render() {
        //
        return (
            <div className='as-panel-title'>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}
export default PanelTitle;