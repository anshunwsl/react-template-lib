import React from "react";

//
import "../main.scss";

export class SlaGis extends React.Component<any, any> {
    //
    constructor(props: any) {
        super(props);
    }

    //
    componentDidMount() {
        //
        console.log(`component created.`)
    }

    //
    render() {
        return (<div className="sla-gis">测试组件</div>);
    }
}



