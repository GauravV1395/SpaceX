import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import DisplayCard from "../displaycard/DisplayCard";
import Pagination from "./../pagination/Pagination";
import Loading from "./../loading/Loading";
import Search from "./../search/Search";
import { getItem, setItem } from "../../utils/LocalStorageHelpers";
import DisplayCardContent from "../displaycardcontent/DisplayCardContent";

import { fetchHistory, setLink } from "../../actions";

const History = (props) => {
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    props.fetchHistory();
    const navBarList = getItem("link");
    console.log(navBarList[navBarList.length - 1]);
    navBarList[navBarList.length - 1].name !== "History" &&
      navBarList.push({ name: "History", link: "/history" });
    setItem("link", navBarList);
    props.setLink(navBarList);
  }, []);

  useEffect(() => {
    const { history } = props;
    if (history) {
      setHistory(history);
    }
  }, [props.history]);

  // get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = history.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderHistoryList = () => {
    return currentPosts
      .filter((currentPost) => {
        return currentPost.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
      .map((history) => (
        <DisplayCard>
          <DisplayCardContent
            index={0}
            title={history.title}
            event_date_utc={history.event_date_utc}
            flight_number={history.flight_number}
            details={history.details}
            article={history.links.article}
            wikipedia={history.links.wikipedia}
            firstLabel="Title"
            secondLabel="Date of Event"
            thirdLabel="Flight Number"
            fourthLabel="Details"
            fifthLabel="Related Article"
            sixthLabel="Wiki"
          />
        </DisplayCard>
      ));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Search
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Title"
        />
        {renderHistoryList()}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={history.length}
          paginate={paginate}
        />
        {history.length <= 0 ? <Loading /> : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    history: state.history.history,
    link: state.link.link,
  };
};

// todo pagination and card like for Each data;

export default connect(mapStateToProps, { fetchHistory, setLink })(History);
