import React from 'react';
import 'core-js';
import { Component, createElement, render } from "react";



import WordCloudWidgetComponent from "./components/WordCloudWidgetComponent";


export default class WordCloudWidget extends Component {
    

    shouldComponentUpdate(nextProps) {

        return nextProps.dataSource !== this.props.dataSource;
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
        debugger;
        // var dataToRender = [];
        
        // if (this.props.dataSource.status === "available" && this.props.dataSource.items) {            
        //     var i = 0;
        //                 for (i = 0; i < this.props.dataSource.items.length; i++) {
        //         dataToRender.push({                                       
        //             text: this.props.textAttrib.get((this.props.dataSource.items[i])).value,
        //             value: this.props.intAttrib.get((this.props.dataSource.items[i])).value
        //         });
        //     }
        // }
        const inputDataToRender = this.getJSONVal();
        return <WordCloudWidgetComponent inputData={inputDataToRender} chosenWord={this.props.chosenWord} onClickAction={this.props.onClickAction} width={this.props.tagCloudWidth} height={this.props.tagCloudHeight} padding={this.props.tagCloudPadding} />;

    }
}
