const RegistrationForm = () => {

    return (


        <div className="form">
            
            <h2>Registration</h2>

            <label htmlFor="">Fullname : </label>
            <input type="text" />
            <br /><br />

            <label htmlFor="">Email : </label>
            <input type="text" />
            <br /><br />

            <label htmlFor="">Mobile number : </label>
            <input type="text" />
            <br /><br />

            <label htmlFor="">Password : </label>
            <input type="text" />
            <br /><br />


            <h4>Gender :</h4>
            <span> Male  </span>
            <input type="checkbox" />


            <span> Female  </span>
            <input type="checkbox" />


            <span> Others  </span>
            <input type="checkbox" />
            <br /> <br />


            <button type="submit">Submit</button>
            

        </div>

    )
}

export default RegistrationForm