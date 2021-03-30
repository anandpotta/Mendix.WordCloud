import { createElement } from "react";
import { render } from "react-dom";
import WordCloud from "react-d3-cloud";

export default function WordCloudWidgetComponent(props){
  const data = props.inputData;
  const fontSizeMapper = word => Math.log2(word.value) * 5;
  const rotate = word => (Math.floor(Math.random()*2) * 90);

  const onClickHandle = (text) => {
    if (props.onClickAction.canExecute && !props.onClickAction.isExecuting) {
        props.chosenWord.setValue(text);
        props.onClickAction.execute();
    }
  };
  
  return (
    <WordCloud data={data} fontSizeMapper={fontSizeMapper} rotate={rotate} onWordClick={word => onClickHandle(word.text)}/>
  );
}