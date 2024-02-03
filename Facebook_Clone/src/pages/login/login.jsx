import "./Login.css";
import {Link} from 'react-router-dom'

export default function Login(){
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h2>-<br/> NapaExtra Login<br/>-</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus in autem eveniet mollitia ducimus pariatur dolore veritatis ipsum amet voluptatibus quae nobis unde fugit, 
                        laudantium necessitatibus tempora! Sint, assumenda?
                    </p>
                    <span>Don't Have An Account?</span>
                    <Link to='/signup'>
                        <button className="btn btn-primary">Register</button>
                    </Link>                    
                </div>
                <form className="right">
                    <input type="text" required placeholder="UserName"/>                
                    <input type="password" required placeholder="Password"/>
                    <button type="submit" className="btn">Login</button>
                </form>                
            </div>
        </div>
    )
}