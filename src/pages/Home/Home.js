/**
 * @description ...
 * @author wangsl wangsl@dse.cn
 * @version v1.0.0
 * @date create Administrator on 2019/3/13
 *
 */
import React from 'react';

//

class Home extends React.Component {

    render() {
        return (
            <div className='panel'>
                <div className='en'>Title</div>
                <div>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

//

export default Home;