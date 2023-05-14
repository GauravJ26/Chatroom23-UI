import axios from "axios";
import "./App.css";
const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];

axios.post(`https://chatroom23.onrender.com/authenticate`,
                              // for localhost testing use this url 'http://localhost:3001/authenticate', 
{username: value }
)
.then(r => props.onAuth({...r.data, secret:value}))
.catch(e=> console.log('error', e))
    };


    return (
      <div className="card">
        <form onSubmit={onSubmit} className="form-card">
          <h2>Welcome👋 </h2>
          <strong>Set a username to get started</strong> 
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;