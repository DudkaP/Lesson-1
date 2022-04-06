import './App.css';
import {Comments, Posts, Users} from "./components";

export function App() {
    return (
        <div>
            <div className={'user_posts'}>
                <Users/>
                <Posts/>
            </div>

            <Comments/>
        </div>
    );
}

