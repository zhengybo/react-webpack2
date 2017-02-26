import 'css/lib/style.scss';
import 'css/detail/detail.scss';
import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';
import Header from 'components/lib/header';
import Footer from 'components/lib/footer';
import Aside from 'components/lib/aside';
import Nav from 'components/lib/nav';
import Content from 'components/detail/content';
class Activity extends React.Component{
  render(){
    return (
      <div id="contain">
        <Header/>
        <Nav/>
        <Content/>
        <Aside/>
        <Footer/>
      </div>
    );
  }
}

ReactDom.render(<Activity />,document.getElementById('detail'));
