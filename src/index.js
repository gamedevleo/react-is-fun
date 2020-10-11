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

// let skiData ={
//   total:50,
//   power:20,
//   backcountry:10,
//   goal:100
// }
//
// const getPercent = decimal =>{
//   return decimal*100+"%";
// }
//
// const calcGoalProgress = (total,goal) =>{
//   return getPercent(total/goal);
// }
//
// const SkiDayCounter = ({total,powder,backcountry,goal}) =>{
//   return(
//     <section>
//       <div>
//         <p>
//           Total Days:{total}
//         </p>
//       </div>
//       <div>
//         <p>
//           Powder Days:{powder}
//         </p>
//       </div>
//       <div>
//         <p>
//           Backcountry Days:{backcountry}
//         </p>
//       </div>
//       <div>
//         <p>
//           Goal Process:{calcGoalProgress(total,goal)}
//         </p>
//       </div>
//     </section>
//   )
// }


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


// ReactDOM.render(
//   <SkiDayCounter
//     total={skiData.total}
//     powder={skiData.power}
//     backcountry={skiData.backcountry}
//     goal = {skiData.goal}/>,
//   document.getElementById("root")
// )

let bookList = [
  {"title": "The Sun Also Rises","author":"Ernest Hemingway","pages":260},
  {"title": "White Teeth","author":"Zadie Smith","pages":480},
  {"title": "Cat's Cradle","author":"Kurt Vonnegut","pages":304}
]

const Book = ({title,author,pages,freeBookmark})=>{
  return (
    <section>
      <h2>{title}</h2>
      <p>by:{author}</p>
      <p>Pages:{pages} pages</p>
      <p>Free Bookmark: {freeBookmark ? "Yes":"No"}</p>
    </section>
  )
}

const Hiring = () =>
    <div>
      <p>The library is hiring. Please visit www.library.com/jobs for more</p>
    </div>

const NotHiring =() =>
    <div>
      <p>The library is not hiring. Please come back late for more info.</p>
    </div>



class Library extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     open:false
  //   }
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  // }
  state ={
    open:true,
    freeBookmark:true,
    hiring:true,
    data:[],
    loading:false
  }

  componentDidMount(){
    this.setState({loading:true});
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data:data,loading:false}));
  }

  componentDidUpdate(){
    console.log("Update");
  }

  toggleOpenClosed = ()=> {
    this.setState({
      open : !this.state.open
    })
  }

  render(){
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        <div>
          {this.state.data.map((product,i) => {
            return (
              <div key ={i}>
                <h3>Library products of this week!</h3>
                <h4>{product.name}</h4>
                <img src={product.image} alt="" height={100}/>
              </div>
            )
          }
          )}
        </div>
        <h1>The library is {this.state.open ? "open":"closed"}</h1>
        <button onClick = {this.toggleOpenClosed}>Toggle</button>
        {books.map(
          (book,i) =>
            <Book
              key = {i}
              title={book.title}
              author={book.author}
              pages={book.pages}
              freeBookmark={this.state.freeBookmark}
            />
        )}

      </div>
    )
  }
}
ReactDOM.render(
  <Library books={bookList}/>,
  document.getElementById("root")
)
