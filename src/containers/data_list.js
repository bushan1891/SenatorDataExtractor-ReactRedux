import React from 'react';
import {connect} from 'react-redux';

class DataList extends React.Component{
  constructor(props){
    super(props);

    this.renderData=this.renderData.bind(this);
  }

getdisplay(data)
{
  return(
    <tr key={data.id}>
        <td>{data.person.name}</td>
        <td>{data.senator_class}</td>
        <td>{data.description}</td>
        <td>{data.person.birthday}</td>
        <td>{data.senator_class}</td>
        <td>{data.state}</td>
        <td>{data.startdate}</td>
    </tr>
  )
}
  renderData(data){
  return data.map(this.getdisplay);
}



render(){
let value=[];
if(this.props.senator_data.length!=0){
 value=this.props.senator_data;
}
    return (
      <div>
            <div>
            <p>
            <b>Page-Number : </b>{value.length}
            <br/>
            <b>NumberOfResult : </b>{value.length *100}
            </p>


            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                          <th>Name</th>
                          <th>Senator</th>
                          <th>description</th>
                          <th>birthday</th>
                          <th>senator_class</th>
                          <th>state</th>
                          <th>startdate</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map(this.renderData)
                    }
                </tbody>
            </table>
    </div>
    )
  }

}

function mapStateToProps(state){
  console.log('at reduser ' ,state.senator_data);
  return {senator_data:state.senator_data};
}

export default connect(mapStateToProps)(DataList);
