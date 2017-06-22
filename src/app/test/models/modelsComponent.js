import React from "react";

export default class ModelsComponent extends React.Component {
    draw (){
        let c = [];
        for(let i = 0; i< 300; i++){
            c.push(<div key={i}> {i} </div>);
        }
        return c;
    }
    render() {
        return (
            <div style={{border: '1px solid red', margin: '20px 20px'}}>
                <span> models </span>
                {this.draw()}
            </div>
        );
    }
};
