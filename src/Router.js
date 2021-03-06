import 
    React
    , { 
        useState
        , useEffect 
    } from 'react';

import { 
    HashRouter
    , Switch
    , Route 
} from 'react-router-dom';

import Nav from './Nav';
import Public from './Public';
import Profile from './Profile';
import Protected from './Protected';
import MorePublic from './MorePublic';

const Router = () => {
    
    const [current, setCurrent] = useState('home');

    useEffect(
        () => {
            setRoute();
            window.addEventListener('hashchange', setRoute);
            return () => window.removeEventListener('hashchange', setRoute);
        }
        , []
    );


    const setRoute = () => {
        
        const location = window.location.href.split('/');
        const pathname = location[location.length - 1];

        setCurrent(pathname ? pathname : 'home');
    };

    return (
        <HashRouter>
            <Nav 
                current={current} 
            />
            <Switch>
                <Route 
                    exact path="/" 
                    component={Public}
                />       
                <Route 
                    exact path="/protected" 
                    component={Protected} 
                />
                <Route 
                    exact path="/profile" 
                    component={Profile}
                />
                <Route 
                    exact path="/morePublic"
                    component={MorePublic}
                />
            </Switch>
        </HashRouter>
    );
};

export default Router;