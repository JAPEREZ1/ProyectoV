interface FeedbackProps {
    feedback: string;
  }
  
  const FeedbackComponent: React.FC<FeedbackProps> = ({ feedback }) => {
    return <div>{feedback && <p>{feedback}</p>}</div>;
  };
  
  export default FeedbackComponent;
  