import React from 'react'
import "./newuser.css"
const Newuser = () => {
  return (
    <div className="newuser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItems">
                <label >User Name</label>
                <input type="text" placeholder='alex7654'/>
            </div>
            <div className="newUserItems">
                <label >Full Name</label>
                <input type="text" placeholder='Alex'/>
            </div>
            <div className="newUserItems">
                <label >Email</label>
                <input type="email" placeholder='alex1234@gmail.com'/>
            </div>
            <div className="newUserItems">
                <label >Phone No</label>
                <input type="number" placeholder='+91 8250217470'/>
            </div>
            <div className="newUserItems">
                <label >Address</label>
                <input type="text" placeholder='Kolkata India'/>
            </div>
            <div className="newUserItems">
                <label >Gender</label>
                <div className="newUserGender">
                <input type="radio" name="gender" id = "male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id = "female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id = "other" value="other" />
                <label for="other">Other</label>

                </div>
            </div>
            <div className="newUserItems">
            <label >Active</label>
                <select name="active" id="active" className="newUserActive">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
           
        </form>
        <button className="newUseCreate">Create</button>
    </div>
  )
}

export default Newuser