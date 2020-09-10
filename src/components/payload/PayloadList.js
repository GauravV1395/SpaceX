import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import DisplayCard from "../displaycard/DisplayCard";
import Pagination from "./../pagination/Pagination";
import Search from "./../search/Search";
import Loading from "./../loading/Loading";
import DisplayCardContent from "./../displaycardcontent/DisplayCardContent";
import { getItem, setItem } from "../../utils/LocalStorageHelpers";
import { fetchPayload, setLink } from "../../actions";

const Payload = (props) => {
  const [payload, setPayload] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    props.fetchPayload();
    const navBarList = getItem("link");
    navBarList[navBarList.length - 1].name !== "Payloads" &&
      navBarList.push({ name: "Payloads", link: "/payload" });
    setItem("link", navBarList);
    props.setLink(navBarList);
  }, []);

  useEffect(() => {
    const { payload } = props;
    if (payload) {
      setPayload(payload);
    }
  }, [props.payload]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = payload.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const renderPayloadList = () => {
    return currentPosts
      .filter((currentPost) => {
        return currentPost.payload_id
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
      .map((payload) => (
        <DisplayCard>
          <DisplayCardContent
            index={1}
            title={payload.payload_id}
            event_date_utc={payload.nationality}
            flight_number={payload.manufacturer}
            details={payload.payload_type}
            article={payload.orbit}
            wikipedia={payload.customers[0]}
            firstLabel="Title"
            secondLabel="Nationality"
            thirdLabel="Manufacturer"
            fourthLabel="Type Of Payload"
            fifthLabel="Orbit"
            sixthLabel="Customers"
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
        {renderPayloadList()}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={payload.length}
          paginate={paginate}
        />
        {payload.length <= 0 ? <Loading /> : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    payload: state.payload.payload,
    link: state.link.link,
  };
};

export default connect(mapStateToProps, { fetchPayload, setLink })(Payload);
