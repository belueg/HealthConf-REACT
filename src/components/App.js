import React from 'react';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Layout from './Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;