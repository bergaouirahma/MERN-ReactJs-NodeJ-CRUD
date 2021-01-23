  
import React from 'react';
import { Route, Switch } from "react-router-dom";
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
function App() {
  return (
   
      <Suspense fallback={(<div>Loading...</div>)}>
        <NavBar />
        <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={(LandingPage, null)} />
            <Route exact path="/product/upload" component={(UploadProductPage, true)} />
            <Route exact path="/product/:productId" component={(DetailProductPage, null)} />
           
          </Switch>
        </div>
        <Footer />
      </Suspense>
    );
}

export default App;
