import './RegistrationForm.css'



const LabelInput=()=>{
    return(

    <form className='form'>

<div className="maindiv">

<div className="input1">
    <label htmlFor="text" typeof="" >Full name :</label>
    <input placeholder='Enter your name' type="text" typeof="name" />
    <br /> <br />

    <label htmlFor="text" typeof="">Email : </label>
    <input placeholder='Enter your email' type="text" typeof="email" />
<br /> <br />

    <label htmlFor="text" typeof="password">Password : </label>
    <input placeholder='Enter your password' type="text" typeof="password" />
    <br /> <br />
</div>


<div className="input2">
    <label htmlFor="text" typeof="username">User Name :</label>
    <input placeholder='Enter your username' type="text" typeof="username" />
    <br /> <br />

    <label htmlFor="text" typeof="number">Phone Number :</label>
    <input placeholder='Enter your number' type="text" typeof="number" />
<br /> <br />

    <label htmlFor="text" typeof="password">Confirm Password : </label>
    <input placeholder=' confir password' type="text" typeof="password" />
    <br /> <br />
</div>


</div>

    </form>




    )
}

export default LabelInput;