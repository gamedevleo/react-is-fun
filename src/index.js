import React from 'react'
import ReactDOM from 'react-dom'

class FavoriteColorForm extends React.Component
{
  state = {value:""}

  newColor = e=>{
    this.setState({value:e.target.value});
  }
  submit = e =>{
    console.log(this.state.value);
    e.preventDefault();
  }

  render(){
    return (
      <form onSubmit ={this.submit}>
        <label>
          Favorite Color:
          <input type="color" onChange ={this.newColor}/>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

ReactDOM.render(
  <FavoriteColorForm />,
  document.getElementById("root")
)
