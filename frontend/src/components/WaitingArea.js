import {BallTriangle} from 'react-loader-spinner';

const WaitingArea = (props) => {
  if (props.status === 'waiting') {
    return <BallTriangle
      wrapperClass="waiting-area"
      //color="#3f6a9b"
      color="#20835e"
      height={200}
      width={200}
    />;
  } else {
    return <div />;
  }
};

export default WaitingArea;
