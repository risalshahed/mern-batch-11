// const Counter = ({ jaKhushi }) => {
const Counter = (props) => {
  // Lifting State Up
  // const [count, setCount] = useState(0);
  // BUT the Increment Counter Button is NOT HERE! So, amra ei state ta "App" Component theke Declare korbo
  
  return (
    <h2 style={{ paddingLeft: '18px' }}>
      {/* { jaKhushi } */}
      { props.props }
    </h2>
  )
}

export default Counter;