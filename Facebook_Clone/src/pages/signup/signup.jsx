import './signup.css'
import {Link} from 'react-router-dom'

export default function Signup(){
    return(
        <div className="signup">
            <div className="card">
                <div className="left">
                    <h2>-<br/> NapaExtra Signup<br/>-</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit minus in autem eveniet mollitia ducimus pariatur dolore veritatis ipsum amet voluptatibus quae nobis unde fugit, 
                        laudantium necessitatibus tempora! Sint, assumenda?
                    </p>
                    <span>Have An Account?</span>
                    <Link to='/login'>
                        <button className="btn btn-primary">Login</button>
                    </Link>
                </div>
                <form className="right">
                    <input type="text" required placeholder="UserName"/>                
                    <input type="email" required placeholder="email"/>                
                    <input type="password" required placeholder="Password"/>
                    <button type="submit" className="btn">Register</button>
                </form>                
            </div>
        </div>
    )
}