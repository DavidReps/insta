import css from './App.module.css';
import React from 'react';
import Header from 'components/Header';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import Profile from './Profile';
import Activity from './Activity';
import NewPost from './NewPost';
import Explore from './Explore';




class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        page: "home"
      }
      this.setPage = this.setPage.bind(this);
    }
    setPage(page){
      this.setState({ page: page});
    }

    render (){

      return(
      
      <div className={css.container}>
      <Header/>
      <main className={css.content}>
        {this.renderMain(this.state.page)}        
      </main>
      <Navbar onNavChange={this.setPage}/>
    </div>
      );
    }

  renderMain(page){

    switch(page){
    case "home": return <Home/>;
    case "explore": return <Explore/>;
    case "newpost": return <NewPost/>;
    case "activity": return <Activity/>;
    case "profile": return <Profile/>;
    default: return <Home/>;
    };
  
  }


} export default App;

