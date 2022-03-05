import React from 'react'
import "./widgetLg.css";
const WidgetLg = () => {

  const Button = ({type}) =>{
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }



  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">
        Letest Transactions
      </h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.alphacoders.com/516/thumb-350-516201.jpg" alt="" className='widgetLgImg'/>
              <span className="widgetLgName">Angle Rose</span>
            </td>
            <td className="widgetLgDate">19 JUN 1998</td>
            <td className="widgetLgAmount">$230.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.alphacoders.com/516/thumb-350-516201.jpg" alt="" className='widgetLgImg'/>
              <span className="widgetLgName">Angle Rose</span>
            </td>
            <td className="widgetLgDate">19 JUN 1998</td>
            <td className="widgetLgAmount">$230.00</td>
            <td className="widgetLgStatus">
              <Button type="Decline"/>
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.alphacoders.com/516/thumb-350-516201.jpg" alt="" className='widgetLgImg'/>
              <span className="widgetLgName">Angle Rose</span>
            </td>
            <td className="widgetLgDate">19 JUN 1998</td>
            <td className="widgetLgAmount">$230.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending"/>
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.alphacoders.com/516/thumb-350-516201.jpg" alt="" className='widgetLgImg' />
              <span className="widgetLgName">Angle Rose</span>
            </td>
            <td className="widgetLgDate">19 JUN 1998</td>
            <td className="widgetLgAmount">$230.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved"/>
            </td>
          </tr>
        </table>
    </div>
  )
}

export default WidgetLg