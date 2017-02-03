// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchFilData } from '../actions/filterAction';
// import rootReducer from '../reducers/index';

// class FilterData extends Component {
//   constructor(props) {
//     super(props);
//   }

//     applyFilter(event)
//     {
//         var f = event.target.value;
//         var datas = this.props.data[0];
//         var dataCopy = [];
//         var heads = Object.keys(datas[0]);
//          for(var i=0;i<datas.length;i++){
//             if(datas[i][heads[7]] == f)
//             {
//                 dataCopy.push(datas[i]);
//             }
//         }
//         this.props.fetchFilterData(dataCopy);
//     }

//     componentWillUpdate(){
//         this.props.fetchFilData();
//     }

//   renderOptions = (data) =>
//   {
//         console.log(data);
//         return (<option value={data}>{data}</option>);
//   }

//   render() {
//     return (
//         <div>
//             <select onChange={this.applyFilter.bind(this)}>
//                 <option value="" disabled selected>Filter according to:</option>
//                     {this.props.filterBox.map(this.renderOptions)}
//             </select>
//         </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//       filterBox: state.filterBox,
//       data: state.data
//   };
// }

// function mapDispatchToProps(dispatch) {
//     return ({ fetchFilData },dispatch);
// }

// export default connect(mapStateToProps,mapDispatchToProps)(FilterData);
