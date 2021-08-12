import React, { useState } from 'react'
import './form.css'

const ReactContact = () => {

    const[user, setUser] = useState({
        txtName:'',
        txtLName:'',
        txtEmail:'',
        txtPhone:'',
        txtMessage:''
    });

    let name, value;
    const getUserData = (e) => {
        name= e.target.name;
        value= e.target.value;

        setUser({...user, [name]:value})

    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const {txtName,txtLName,txtEmail,txtPhone,txtMessage} = user
        if(txtName && txtLName && txtEmail && txtPhone && txtMessage) {
            const res = await fetch("https://react-form-234a8-default-rtdb.firebaseio.com/aureatedb.json",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                txtName,
                txtLName,
                txtEmail,
                txtPhone,
                txtMessage
            })
        })

        if(res){
            setUser({
                txtName:'',
                txtLName:'',
                txtEmail:'',
                txtPhone:'',
                txtMessage:''
            });
            alert("Data Stored Successfully")
        }
        } else {
            alert("Please fill all the blanks")
        }

        
        
    }

    return (
        <div>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <input type="submit" name="" value="Login"/><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Apply as a Employee</h3>
                                <div className="row register-form" method="POST">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={getUserData} value={user.txtName} name="txtName" placeholder="First Name *"  />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" onChange={getUserData} value={user.txtLName} name="txtLName" placeholder="Last Name *"  />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" onChange={getUserData} value={user.txtEmail} name="txtEmail" placeholder="Your Email *"  />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" minlength="10" maxlength="10" onChange={getUserData} value={user.txtPhone} name="txtPhone" className="form-control"  placeholder="Your Phone *" />
                                        </div>
                                    </div>                                            
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea className="form-control" onChange={getUserData} value={user.txtMessage} name="txtMessage"  placeholder="Enter Your Message *" cols="30" rows="10"></textarea>
                                        </div>
                                        <input onClick={onSubmit} type="submit" className="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReactContact
