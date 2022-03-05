import React from 'react'
import Chart from '../../chart/Chart';
import Info from '../../featuredinfo/Info';
import "./home.css";
import { UserData } from '../../../DummyData';
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';
const Home = () => {
  return (
    <div className='home'>
        <Info/>
        <Chart data={UserData} title="User Analytics" dataKey="Active User" grid/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}

export default Home