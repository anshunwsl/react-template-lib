import React from "react";

import "../../styles/user.scss";
//
import Map from "ol/Map";
import View from "ol/View";

//
export class SlashUser extends React.Component<any, any> {
    //
    constructor(props: any) {
        super(props);
    }

    //
    componentDidMount() {
        //
        let view = new View({
            //

        });
        //
        console.log(view);
        //

    }

    //
    render() {
        return (
            //
            <div className="sla-user">SlashUser test...</div>
        );
    }
}
