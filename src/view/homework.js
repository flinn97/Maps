import { Component } from 'react';
import "../App.css"
import MapComponent from './mapComponent';
import Notes from './teacherNotes';

export default class Homework extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    let app = this.props.app
    let pic = app.state.componentList?.getComponents();
    let switchcase = app.state.switchcase;
    let dispatch = app.dispatch;
    let state = app.state;
    let styles =state.styles;

    return (
      <div>hw
      <MapComponent app={app} name="homework" cells={["title", "description", "hwlink", "delete" ]} />



      


      </div>

      // <div style={{width:"100vw", paddingTop: "10px"}}>
      //     <ParentFormComponent style={{height:"200px", border:"1px solid black"}} type="richEditor" name="html" app={app} prepareOnClick={{operation: "cleanJsonPrepare", operate:"addjournalLog"}} obj={{owner: "123", type:"journalLog"}} />
      //     <RunButton app={app} />
      //     <LogMap app={app} name="journalLog" />
      // </div>
    )
  }
}
