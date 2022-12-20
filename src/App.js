import './App.css';
import { Component } from 'react';
import Dispatch from './dispatch.js';
import { forFactory } from './models/myComponents';
import styleService from './services/styleService';
import ComponentListInterface from './componentListNPM/componentListInterface';
import auth from './services/auth';
import Students from './view/students';
import Goals from './view/goals';
import Homework from './view/homework';
import Badge from './view/badges';
import Chat from './view/chat';
import Login from './componentListNPM/componentForms/login';
import Notes from './view/teacherNotes';
import Users from './view/users';
import ThemeFactory from './componentListNPM/themes/themeFactory';
import NavThemeFactory from './componentListNPM/themes/navThemes/navThemeFactory';
//fonts


//model
export default class App extends Component {
  constructor(props){
    super(props);
        this.handleChange=this.handleChange.bind(this);
        this.dispatch=this.dispatch.bind(this);

    this.state={
      styles: styleService.getstyles(),
      loginPage: true,
      registerPage:false,
      user: undefined,
      componentListInterface: new ComponentListInterface(this.dispatch),
      themeFactory: new ThemeFactory(),
      navFactory: new NavThemeFactory(),
      componentList: undefined,
      currentCharacter: undefined,
      opps: undefined,
      navType:"topBar",
      
      // switchcase: "home",
      
      login : true,
      
      
      operate: undefined,
      operation: "cleanJsonPrepare",
      object: undefined,
      currentComponent: undefined,
      backend: false,
      backendUpdate: undefined,
      currentComponents: [],
      backendUpdate:[],
      backend: false,
      myswitch: "home",
      defaultTheme: "legato",
      globalTheme: "",
      switchCase:[
        {path:"/", comp:Students, name: "Students" },
        {path: "/users", comp:Users, name: "Users"},
        {path: "/goals", comp:Goals, name: "Goals"},
        {path: "/homework", comp:Homework, name:"Homework"},
        {path:"/badge", comp:Badge, name: "Badges" },
        {path: "/notes", comp:Notes, name: "Notes"},
        {path: "/chat", comp:Chat, name:"Chats"}
      ]

    }
  }

  async componentDidUpdate(props, state){
    if(this.state.backend){
      // await this.setState({backend: false});
      // auth.dispatch(this.state.backendUpdate, this.state.email);
    }
    
    if(this.state.operate!==undefined){
      let operate = this.state.operate;
      let operation= this.state.operation;
      let object= this.state.object;
      await this.setState({operate:undefined, object:undefined, operation:"cleanJsonPrepare"});

      
      let currentComponent = await this.state.componentListInterface.getOperationsFactory().operationsFactoryListener({operate: operate, object:object, operation: operation});
      
      console.log(currentComponent);
      let key = await this.state.componentListInterface.getOperationsFactory().getSplice(operate);
      if(currentComponent!==undefined){
        this.setState({currentComponent: currentComponent[key][0]});
      }
    }

    
    
    

  }

  async dispatch(obj){

    await this.setState(obj)
}

handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
        [name]: value,
    })
}

  async componentDidMount(){
    
    let list;
    if(this.state.componentListInterface && this.state.componentList===undefined){
        list= await this.state.componentListInterface.createComponentList();
        await this.setState({
          componentList:list,
          opps: list.getOperationsFactory()
        })
        
        
        
        let obj = await forFactory();
        for(const key in obj){
          
         await this.state.componentListInterface.getFactory().registerComponents({name:key, component:obj[key]});
        }
    
  
    
      }
    
    if(this.state.navFactory){
      let f = this.state.navFactory.getNavThemeFactory();
      let styles = f["defaultTopNav"];
      
      this.setState({navStyles:styles, linkStyleDefault: styles?.link});

    }
    if(this.state.themeFactory){
      let f = this.state.themeFactory.getThemeFactory();
      let styles = f[this.state.globalTheme!==""? this.state.globalTheme: this.state.defaultTheme!==""? this.state.defaultTheme: "default"];
      
      this.setState({styles:styles});
    }


  }

  //ENTIRE view
  render(){
    let styles = this.state.styles;
  return (
    <div className= "fontNormal" style={{
      width:"100vw", 
      height:"100vh", 
      display:"flex", 
      
      zIndex:"100",
      
       
      flexDirection:"column"}}>
        
      {this.state.login?(<Login app={{state:this.state, dispatch:this.dispatch}}/>):(
      // {this.state.dataRetrieved&&(
      <Dispatch app={{run:this.run, state:this.state, handlechange:this.handleChange, dispatch:this.dispatch, factory:this.factory}} />)}
      {/* )} */}
    </div>
  )}
}
