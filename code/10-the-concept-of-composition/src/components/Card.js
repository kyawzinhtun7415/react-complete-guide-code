import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className; // props.className will let you apply class to the Card component (which html works out of the box)
  console.log(classes);
  return <div className={classes}>{props.children}</div>; // to enable a wrapper component, add {props.children} OR IT WILL NOT WORK!!
}

export default Card;