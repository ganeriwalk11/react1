import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkIDAction } from '../actions/validations';
import { checkIndexAction } from '../actions/validations';
import rootReducer from '../reducers/index';
import { postData } from '../actions/index';
require("babel-polyfill");


class ActualData extends Component {
  constructor(props) {
    super(props);
    this.x = [];
    this.undo = [];
    this.redo = [];
    this.filter = [];
    this.heads = [];
    this.datas =[];
    }

  renderHeadData(data){
      var heads = [];
      heads = Object.keys(data[0]);
      return heads.map(function(head){
          if(head == 'fname')
          { return <th colSpan='2' rowSpan='1'>Name</th>;}
          else if (head == 'lname')
          {}
          else
          return <th rowSpan='2'>{head}</th>;
        });
  }

  renderNestedHead(data){
    var heads = [];
    heads = Object.keys(data[0]);
    var fname =heads[8];
    var lname = heads[9];
    return <tr key='a'><th key={fname}>{fname}</th><th key={lname}>{lname}</th></tr> ;
  }

  componentDidUpdate(){
    var t1 = performance.now();
    console.log(t1);
   // this.props.filterState(this.filter);
  }

checkFocus(event){
    this.x.push(event.target.innerText);
}

async xt(head,i,j,event){
    var a = event.target;
    //console.log(this);
    //console.log(this.datas[i]);
    var flag = await this.validateData(head,event,i,j);
    if(flag == 1)
    {
        a.style.color = this.props.vad.color;
        /*if(this.props.vad.color == "green"){
            this.datas[i][this.heads[j]] = a;
            console.log(this.datas[i]);
        }*/
        //console.log(a.style.border);
        a.style.border = this.props.vad.borderColor;
    } 
}


validateData(head,event,i,j){
    var flag = 0;
    let t = this.x[this.x.length -1];
    let a = event.target.innerText;
    if(event.target.innerText != this.x)
    {
        this.undo.push({i,j,t,a});
        if(head["head"] === 'index')
        {
            this.props.checkIndexAction(event.target.innerText,head,event.target.style.color);
        }
        else if(head["head"] === '_id')
        {
            this.props.checkIDAction(this.props.data,head["head"],event.target.innerText,event.target.style.color);
        }
        flag =1;
    }
    this.x.pop();
    return flag;
};

   renderData = (data) => {
        var me = this;
        me.filter = [];
        me.datas = data;
        me.heads = Object.keys(me.datas[0]);
        var t0 = performance.now();
        console.log(t0);
        return me.datas.map(function(row,i){
            var cols = me.heads.map(function(head,j)
            {
                if(head == "eyeColor" && me.filter.indexOf(row[head]) === -1)
                {
                    me.filter.push(row[head]);
                }
            return (
            <td 
            ref={function(e){if(e != null) e.contentEditable=true;}} 
                    key={j} 
                    onBlur = {me.xt.bind(me,{head},i,j)}
                    onFocus = {me.checkFocus.bind(me)}
                    > 
                    {row[head]} 
            </td>);
            });
            return <tr key={i}>{cols}</tr>;
        });
    }

    undoData(){
        var me = this;
        if(me.undo.length === 0)
        {
            alert("No changes made");
        }
        else
        {
            let len = me.undo.length -1;
            let r = (me.undo[len]["i"]);
            let c = (me.undo[len]["j"]);
            let value = (me.undo[len]["t"]);
            let a = me.undo[len]["a"];
            var myTable = document.getElementsByTagName('tr')[r+2];
            myTable.children[c].innerHTML = value;
            me.props.data[0][r][me.heads[c]] = value;
            me.redo.push(me.undo.pop());
        }

    }
    redoData(){
        var me = this;
        if(me.redo.length === 0){
            alert("Nothing undone");
        }
        else
        {
            let len = me.redo.length -1;
            let r = (me.redo[len]["i"]);
            let c = (me.redo[len]["j"]);
            let value = (me.redo[len]["a"]);
            let a = me.redo[len]["t"];
                
            var myTable = document.getElementsByTagName('tr')[r+2];
                myTable.children[c].innerHTML = value;
                me.props.data[0][r][me.heads[c]] = value;
               // console.log(myTable.children[c].innerHTML);
                me.undo.push(me.redo.pop());
                //console.log(me.undo);
                //console.log(me.redo);
            }
    }
    saveData(){
       var dats = this.props.data;
       this.props.postData(dats[0]);
       //console.log(this);
    }

  render() {
        return (
        <div>
        <button id="undo" onClick={this.undoData.bind(this)}>UNDO</button>
        <button id="redo" onClick={this.redoData.bind(this)}>REDO</button>
        <button id="save" onClick={this.saveData.bind(this)}>SAVE</button>
        
            <table>
                <thead>
                    <tr>{this.props.data.map(this.renderHeadData)}</tr>
                    {this.props.data.map(this.renderNestedHead)}
                </thead>
                <tbody>
                     {this.props.data.map(this.renderData)}
                </tbody>
            </table>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      data: state.data,
      vad : state.vad
  };
}

function mapDispatchToProps(dispatch) {
return {
    //filterState: bindActionCreators(filterState, dispatch),
    checkIndexAction: bindActionCreators(checkIndexAction, dispatch),
    checkIDAction: bindActionCreators(checkIDAction, dispatch),
    postData: bindActionCreators(postData,dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(ActualData);
