import React from 'react'
import ReactDOM from 'react-dom'

// var style = {
//   backgroundColor : 'orange',
//   color: 'white',
//   fontFamily : 'Arial'
// }
// const title = React.createElement(
//   'ul',
//   {id:"title",className:"header", style:style},
//   React.createElement(
//     'li',
//     {},
//     'item on our list'
//   )
// )
// ReactDOM.render(
//   <div style ={style}>
//     <h1>Hello World</h1>
//     <p>We're glad you are here!</p>
//   </div>,
//   document.getElementById('root')
// )

// class Message extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1 style={{color:this.props.color}}>
//           {this.props.msg}
//         </h1>
//         <p>
//           I'll check back in {this.props.minutes} minutes.
//         </p>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <Message color="blue" msg = "how are you" minutes = {5}/>,
//   document.getElementById('root')
// )

let skiData ={
  total:50,
  power:20,
  backcountry:10,
  goal:100
}

const getPercent = decimal =>{
  return decimal*100+"%";
}

const calcGoalProgress = (total,goal) =>{
  return getPercent(total/goal);
}

const SkiDayCounter = ({total,powder,backcountry,goal}) =>{
  return(
    <section>
      <div>
        <p>
          Total Days:{total}
        </p>
      </div>
      <div>
        <p>
          Powder Days:{powder}
        </p>
      </div>
      <div>
        <p>
          Backcountry Days:{backcountry}
        </p>
      </div>
      <div>
        <p>
          Goal Process:{calcGoalProgress(total,goal)}
        </p>
      </div>
    </section>
  )
}


// class SkiDayCounter extends React.Component{
//
//   getPercent = decimal =>{
//     return decimal*100 + "%";
//   }
//   calcGoalProgress = (total,goal)=>{
//     return this.getPercent(total/goal);
//   }
//
//   render(){
//     const {total,goal} = this.props   //use destructing
//     return (
//       <section>
//         <div>
//           <p>
//             Total Days:{this.props.total}
//           </p>
//         </div>
//         <div>
//           <p>
//             Powder Days:{this.props.powder}
//           </p>
//         </div>
//         <div>
//           <p>
//             Backcountry Days:{this.props.backcountry}
//           </p>
//         </div>
//         <div>
//           <p>
//             Goal Process:{this.calcGoalProgress(total,goal)}
//           </p>
//         </div>
//       </section>
//     )
//   }
// }


ReactDOM.render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.power}
    backcountry={skiData.backcountry}
    goal = {skiData.goal}/>,
  document.getElementById("root")
)
