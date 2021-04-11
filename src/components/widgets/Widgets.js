import React from "react";
import "./widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subTitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle("MUSAB is legend", "Bla bla bal")}
      {newsArticle("MUSAB is legend", "Bla bla bal")}
      {newsArticle("MUSAB is legend", "Bla bla bal")}
      {newsArticle("MUSAB is legend", "Bla bla bal")}
      {newsArticle("MUSAB is legend", "Bla bla bal")}
      {newsArticle("MUSAB is legend", "Bla bla bal")}
      {newsArticle("MUSAB is legend", "Bla bla bal")}
      {newsArticle("MUSAB is legend", "Bla bla bal")}
      {newsArticle("MUSAB is legend", "Bla bla bal")}
    </div>
  );
};

export default Widgets;
