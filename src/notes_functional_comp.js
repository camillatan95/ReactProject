// const app = (props) => {
//   const [myState , setNewState ] = useState ({  //here we use 'useState'
//       count : 20,
//       persons:[
//         {name:'Sakai', career:'Samarai'},
//         {name:'Yuna', career:'Warrior'},
//         {name:'Taka', career:'Hero'}
//       ],
//       //otherstate : 'other'
//   })

//   const [otherstat, setOtherState] = useState ('other') //can be object

//   const switchNameHandler = () => {
//     // console.log('is clicked');
//     setNewState ({   //delete this.
//       persons:[
//         {name:'Sakai', career:'SAMARI'},
//         {name:'Sakai', career:'Samarai'},
//         {name:'Sakai', career:'Samarai'}
//       ],
//       otherstate: myState.otherstate  
//       //otherstate will be deleted if not copied here because useState does not merge data, but replace data
//       //more elegant to merge data: we could just use more useState()
//     })
//   }

//   console.log(myState, otherstat);

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           Burger
//         </p>
//         <Bum name={myState.persons[0].name} career={myState.persons[0].career} age="1" />
//         <Bum name={myState.persons[1].name} career={myState.persons[1].career}>Powershell</Bum>
//         <Bum name={myState.persons[2].name}career={myState.persons[2].career}>I am {myState.count}</Bum>
//         <button onClick={switchNameHandler}></button>  
//         {/* delete 'this.' in the switch.. since it's not in a class anymore */}
//       </div>
//     );
//   }

// export default App;