import React from "react";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Chart from "../../chart/Chart";
import Info from "../../featuredinfo/Info";
import "./home.css";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";
const Home = () => {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userState, setUserState] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIzNzdhZWZiNDhmMGNlZDljZmM1Y2EiLCJ1c2VybmFtZSI6IkFudXBhbSBSb3kiLCJlbWFpbCI6ImFudXBhbXJveTU3NUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCQyUTZWMlVFYmRZeXIuaUQyeEJNanp1WFFzNHd6T0Y5RnZWelBmSTU0aUZGTnFGTGR5M3pjVyIsInByb2ZpbGVQaWMiOiIiLCJpc0FkbWluIjp0cnVlLCJ0b2tlbnMiOltdLCJjcmVhdGVkQXQiOiIyMDIyLTAzLTA1VDE0OjQ2OjA2LjE1NVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAzLTA1VDE0OjQ2OjA2LjE1NVoiLCJfX3YiOjAsImlhdCI6MTY0NjkzMDgwNX0.QdBpqfHL94i4M9txWcTjY_NkerEMk8CIdm4ub0dc5Sc",
          },
        });
        const statslist = res.data.sort(function (a, b) {
          return a._id - b._id;
        })

        statslist.map((item) =>
          setUserState((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
 
  return (
    <div className="home">
      <Info />
      <Chart data={userState} title="User Analytics" dataKey="New User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
