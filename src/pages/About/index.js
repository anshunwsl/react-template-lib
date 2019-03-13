/**
 * @description ...
 * @author wangsl wangsl@dse.cn
 * @version v1.0.0
 * @date create Administrator on 2019/3/13
 *
 */

import React from 'react';

import  PanelTitle from '../../common/components/PanelTitle.js';
import  PanelContent from '../../common/components/PanelContent.js';

// import  {getDemoData}  from '../../api/DemoVm.js';
//
class About extends React.Component {
    //
    //
    render() {
        //
        return (
            <div>
                <PanelTitle title='About Title'/>

                <div>
                   <PanelContent source='data/test_points.json'/>
                </div>
            </div>
        );
    }


}

export default About;