import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: "";
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = ""}) => {
  return (
    <p className={css.errorMessage}>
  {message.length > 0 ? message : "Whoops, something went wrong! Please try reloading this page!"}
    </p>
  )
};

export default ErrorMessage