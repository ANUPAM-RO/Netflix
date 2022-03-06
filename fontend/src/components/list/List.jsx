import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faListSquares,
} from "@fortawesome/free-solid-svg-icons";
import ListItem from "../listitem/ListItem";
import "./list.scss";
const List = ({ list }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const handelClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNumber(slideNumber + 1);
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="sliderArrow left"
          onClick={() => handelClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => {
            <ListItem index={i} item={item} />;
          })}
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          className=" sliderArrow right"
          onClick={() => handelClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
