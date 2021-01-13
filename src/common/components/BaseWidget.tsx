import React from "react";

//
export class BaseWidget extends React.Component<any, any> {
    //
    constructor(props: any) {
        super(props);
    }

    //
    componentDidMount() {
        //
        console.log(`_base widget created..`)
    }

    //
    render() {
        return (<div>
            _BaseWidget.
        </div>);
    }
}


//
// export default baseWidget;
