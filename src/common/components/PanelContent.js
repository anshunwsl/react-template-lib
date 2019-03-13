/**
 * @description ...
 * @author wangsl wangsl@dse.cn
 * @version v1.0.0
 * @date create Administrator on 2019/3/13
 *
 */

import React from 'react';

import {sendAjax} from '../../utils/requestUtil.js';

//
class PanelContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        //
        this.listItemClick = this.listItemClick.bind(this);
    }

    //
    listItemClick(evet) {
        //
        // alert(JSON.stringify(evet))
    }


    handleLocClick = (event)=>{
        //
        // alert(event.NAME);
    }
    btnGetDataClick = (event) => {
        sendAjax(this.props.source)
            .then(({data}) => {
                let List = data.map((item) => {
                    //
                    return (<li className='list-group-item'
                                // onClick={() => this.listItemClick(item)}
                                key={item.STCD}>
                        <div>
                            <p>{item.NAME}</p>
                            <button className='btn btn-dark' onClick={()=>this.handleLocClick(item)}> 定位</button>
                        </div>

                    </li>);
                });
                this.setState({
                    items: List
                });
            })
            .catch((error) => {
                //
                console.log(error.message);
            });
    };

    //
    render() {
        return (
            <div>
                <div>
                    <button className='btn btn-primary' onClick={this.btnGetDataClick}>GetData</button>
                </div>

                <ul className='list-group'>
                    {this.state.items}
                </ul>
            </div>
        );
    }

}

//
export default PanelContent;