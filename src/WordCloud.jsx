import { Component, createElement } from "react";
import WordCloudWidgetComponent from "./components/WordCloudWidgetComponent";

export default class WordCloudWidget extends Component {

    shouldComponentUpdate(nextProps){
        return nextProps.dataSource !== this.props.dataSource;
    }

    render() {
        var dataToRender = [];
        if(this.props.dataSource.status === "available"){
            var i=0;
            for(i=0; i< this.props.dataSource.totalCount; i++) {
                dataToRender.push({
                    text: this.props.textAttrib(this.props.dataSource.items[i]).value, 
                    value: this.props.intAttrib(this.props.dataSource.items[i]).value
                });
            }
        }
        return <WordCloudWidgetComponent inputData={dataToRender} chosenWord={this.props.chosenWord} onClickAction={this.props.onClickAction}/>;
    }
}
