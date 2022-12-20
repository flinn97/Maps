import { Component } from 'react';
import "../App.css"
import MapComponent from '../view/mapComponent';


export default class Card extends Component {
  constructor(props) {
    super(props);
    

  }

  /**
   * 
   * OPTIONS
   * BIGGESTCARD
   * BIGGERCARD
   * BIGCARD
   */


  render() {
    let app = {...this.props.app};
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    
    
    if(this.props.theme){
      if(Object.prototype.toString.call(this.props.theme) === "[object String]"){
        styles = state.themeFactory.getThemeFactory()[this.props.theme];
      }
      else{
        styles= this.props.theme;
      }
    }
    app.state.styles=styles
    
    
    let cards={
      biggestCard: <BiggestCard app={app} />,
      biggerCard: <BiggerCard app={app} />,
      bigCard: <BigCard app={app} />,
      biggestCardColorTab: <BiggestCardColorTab app ={app} />,
      biggerCardColorTab: <BiggerCardColorTab app ={app} />,
      bigCardColorTab: <BigCardColorTab app ={app} />,
      popupLarge: <PopupLarge app={app} handleClose={this.props.handleClose} />


    
    }

    return (
      <div >
        
        {cards[this.props.type? this.props.type: "biggestCardColorTab"]}
        </div>

    )
  }
}
class MainContent extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    

    return(
      
      <MapComponent  app={app} name="student" cells={[{img:"picURL"}, ["firstName", "lastName"], "_id", "delete", ]} linkOptions={{path:["/student/"], cells:[0,1,2]}}/>      
    
      )
  }
}

class TabContent extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
    <div></div>
      )
  }
}

class BiggestCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
    <div className='scroller' style={{...styles?.biggestCard}}>      
      <MainContent app={app} />
      </div>
      )
  }
}

class BiggestCardColorTab extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;
    console.log(styles?.biggestCard);

    return(
    <div  style={{...styles?.biggestCard}}>   
    <div style={{width:"100%", height:"100px", background:"green", borderRadius:"23px 23px 0px 0px"}}><TabContent app={app} /></div>   
    <div style={{height:"80%"}} className='scroller'>
      <MainContent app={app} />
      </div>
      </div>
      )
  }
}

class BiggerCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
      <div className='scroller'  style={{...styles?.biggerCard}}>      
            
            <MainContent app={app} />

      </div>
      )
  }
}


class BiggerCardColorTab extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
    <div  style={{...styles?.biggerCard}}>   
    <div style={{width:"100%", height:"100px", background:"green", borderRadius:"23px 23px 0px 0px"}}><TabContent app={app} /></div>   
    <div  className='scroller'>
      <MainContent app={app} />
      </div>
      </div>
      )
  }
}



class BigCard extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
      <div className='scroller'  style={{...styles?.bigCard}}>   
      
            <MainContent app={app} />
  
      </div>
      )
  }
}

class BigCardColorTab extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let app = this.props.app;
    let dispatch = app.dispatch;
    let state = app.state;
    let componentList = state.componentList;
    let styles =state.styles;

    return(
    <div  style={{...styles?.bigCard}}>   
    <div style={{width:"100%", height:"100px", background:"green", borderRadius:"23px 23px 0px 0px"}}> <TabContent app={app} /></div>   
    <div className='scroller'>
      <MainContent app={app} />
      </div>
      </div>
      )
    }
  }
  class PopupLarge extends Component{
    constructor(props) {
      super(props);
    }
    render(){
      let app = this.props.app;
      let dispatch = app.dispatch;
      let state = app.state;
      let componentList = state.componentList;
      let styles =state.styles;
  
      return(
        <div className="popup-box" style={{ zIndex: "1010" }}>
        <div ref={this.wrapperRef}  className="popupCard" style={{ zIndex: "1010", ...styles.popupLarge }}>
        <div style={ ///EXIT BUTTON
                        styles.buttons.closeicon
                    } onClick={this.props.handleClose}>x</div>
            
 
         
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", display:"flex", alignItems:"center0", }}>

<MainContent app ={app} />
       

    </div>
    </div>



    </div>
        )
      }
    }
  





