import React from 'react';
import { Component, createElement, render } from "react";
import 'core-js';
import WordCloud from "react-d3-cloud";




export default function WordCloudWidgetComponent(props) {
  
  const data = props.inputData;
  debugger;

  const fontSizeMapper = word => Math.log2(word.value) * 5;
  const fontSize = (word) => Math.log2(word.value) * 5;
  const rotate = word => (Math.floor(Math.random() * 2) * 0);

  const onClickHandle = (text) => {
    
    (props.onClickAction.canExecute && !props.onClickAction.isExecuting)
    
    {
      props.chosenWord.setValue(text);
      props.onClickAction.execute();
    }
  };

  return (
    <WordCloud data={data} fontSizeMapper={fontSizeMapper} fontSize={fontSize} rotate={rotate} width={props.width} height={props.height} padding={props.padding} onWordClick={(event, word) => onClickHandle(word.text)} />
  );
}
