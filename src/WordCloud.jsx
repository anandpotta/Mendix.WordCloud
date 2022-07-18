import React, {createElement} from "react";
import WordCloudWidgetComponent from "./components/WordCloudWidgetComponent.jsx";

export default class WordCloudWidget extends React.Component {

    constructor(props) {
        super(props);
        this.getJSONVal=this.getJSONVal.bind(this);
    }
    

    shouldComponentUpdate(nextProps){
        return nextProps.dataSource !== this.props.dataSource;
        // return false;
    }

    getJSONVal(){
        // debugger;
        var dataToRender = [];
        if(this.props.dataSource.status === "available"){
            var i=0;
            // for(i=0; i< this.props.dataSource.totalCount; i++) {
            for(i=0; i< this.props.dataSource.items.length; i++) {
                if(this.props.textAttrib.get(this.props.dataSource.items[i]).value && this.props.intAttrib.get(this.props.dataSource.items[i]).value){
                    dataToRender.push({
                        // text: this.props.textAttrib(this.props.dataSource.items[i]).value, 
                        // value: this.props.intAttrib(this.props.dataSource.items[i]).value
                        text: this.props.textAttrib.get(this.props.dataSource.items[i]).value, 
                        value: this.props.intAttrib.get(this.props.dataSource.items[i]).value
                    });
                }
            }
        }
        return dataToRender;
    }

    render() {
        // debugger;
        // const textAttr = this.getTextAttr();
        // const valAttr = this.getValueAttr();

        // var dataToRender = [];
        // if(this.props.dataSource.status === "available"){
        //     var i=0;
        //     // for(i=0; i< this.props.dataSource.totalCount; i++) {
        //     for(i=0; i< this.props.dataSource.items.length; i++) {
        //         dataToRender.push({
        //             text: this.props.textAttrib(this.props.dataSource.items[i]).value, 
        //             value: this.props.intAttrib(this.props.dataSource.items[i]).value
        //         });
        //     }
        // }
        // return <WordCloudWidgetComponent inputData={dataToRender} chosenWord={this.props.chosenWord} onClickAction={this.props.onClickAction}/>;

        const inputDataToRender = this.getJSONVal();
        return <WordCloudWidgetComponent inputData={inputDataToRender} chosenWord={this.props.chosenWord} onClickAction={this.props.onClickAction}/>;

    }
}
