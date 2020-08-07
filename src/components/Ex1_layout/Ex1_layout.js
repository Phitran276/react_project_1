import React, {Component} from 'react';
import Home from './Home';
import HeaderDemo from './HeaderDemo';
import Product from './Product';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

class Ex1Layout extends Component {
    render(){
        return (
            <div className="container">
               <Home />
               <div className="row">
                   <div className="col-12">
                       <HeaderDemo />
                   </div>
               </div>
               <div className="row no-gutters">
                   <div className="col-4">
                       <Navigation/>
                   </div>
                   <div className="col-8">
                       <Content />
                   </div>
               </div>
               <div className="row">
                   <div className="col-12">
                        <Footer />
                   </div>
               </div>
           </div>
        );
    }
}

export default Ex1Layout;