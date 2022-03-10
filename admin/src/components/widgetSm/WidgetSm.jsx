import { React, useState , useEffect } from 'react'
import axios from "axios"
import "./widgetSm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIzNzdhZWZiNDhmMGNlZDljZmM1Y2EiLCJ1c2VybmFtZSI6IkFudXBhbSBSb3kiLCJlbWFpbCI6ImFudXBhbXJveTU3NUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQwOCQyUTZWMlVFYmRZeXIuaUQyeEJNanp1WFFzNHd6T0Y5RnZWelBmSTU0aUZGTnFGTGR5M3pjVyIsInByb2ZpbGVQaWMiOiIiLCJpc0FkbWluIjp0cnVlLCJ0b2tlbnMiOltdLCJjcmVhdGVkQXQiOiIyMDIyLTAzLTA1VDE0OjQ2OjA2LjE1NVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAzLTA1VDE0OjQ2OjA2LjE1NVoiLCJfX3YiOjAsImlhdCI6MTY0Njg0MjUzMn0.kG7yq84Vx5WeZv7fcjWehGq8aqVFNo5yv1bH7-ThFCo",
                    }
                })
                setNewUsers(res.data);
            } catch (err) {
                console.log(err)
            }
        };
       getNewUsers()
    },[])
    return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New Join Members</span>
            <ul className="widgetSmList">
                {newUsers.map((user) => (
                    <li className="widgetSmListItem">
                        <img src= {user.profilePic || "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"} alt="" className='widgetSmImg' />
                        <div className="widgetSmUser">
                            <span className="widgetSmUserName">{user.username }</span>
                        </div>
                        <button className="widgetSmButton">
                            <FontAwesomeIcon icon={faEye} className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                ))}
        </ul>
    </div>
  )
}

export default WidgetSm