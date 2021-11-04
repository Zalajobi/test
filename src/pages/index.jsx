import React from "react";
import Header from "../component/common/navbar/Header";
import Dashboard from "../component/dashboard/Dashboard";

const Home = (props) => {
    return (
        <React.Fragment>
            <Header/>

            <Dashboard/>
        </React.Fragment>
    )
}

export default Home;