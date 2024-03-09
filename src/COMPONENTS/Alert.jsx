import Alert from 'react-bootstrap/Alert';
 
 const Alerts=()=>{
    return(
        <>
        {/* {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))} */}

        <Alert variant='warning'>this is warning alert</Alert>         
      </>
  
    )
 }

 export default Alerts;