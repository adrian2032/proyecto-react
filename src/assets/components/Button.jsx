export default function MyButton(props){

  const styleBtn  = {
    backgroundColor: props.color
  }

    return <button onClick={props.onClick} style={styleBtn} >{props.label}</button>
  }

  