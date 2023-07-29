// MODULES
import { useState } from 'react'

// COMPONENTS

// STYLE
import './style/Login.scss'

function Login() {

  const [ logged, setLogged ] = useState(false)

  return (
    <div className='Login'>
      {logged ? 
        <div className="login">
        <section className='form'>
          <h2>Welcome back!</h2>
          <form action="">

            {/* Nickname */}
            <div>
              <label htmlFor="nick">Nickname:</label>
              <input type="text" id='nick' required/>
            </div>

            {/* password */}
            <div>
              <label htmlFor="pass">Password:</label>
              <input type="password" id='pass' required/>
            </div>

            <input className='submit' type="submit" value="Submit"/>

          </form>
        </section>
        <section className='change'>
          <h2>Do not have an account?</h2>
          <button onClick={()=>setLogged(false)}>
            Sign up!
          </button>
        </section>
      </div>
      :
      <div className="signup">
        <section className='form'>
          <h2>Welcome!</h2>
          <form action="">

            {/* Nickname */}
            <div>
              <label htmlFor="nick">Nickname:</label>
              <input type="text" id='nick' required/>
            </div>

            {/* Mail */}
            <div>
              <label htmlFor="mail">Mail:</label>
              <input type="mail" id='mail' required/>
            </div>

            {/* password */}
            <div>
              <label htmlFor="pass">Password:</label>
              <input type="password" id='pass' required/>
            </div>

            <input className='submit' type="submit" value="Submit"/>

          </form>
        </section>
        
        <section className='change'>
          <h2>Already have an account?</h2>
          <button onClick={()=>setLogged(true)}>
            Log in!
          </button>
        </section>
      </div>
      }
      

    </div>
  )
}

export default Login