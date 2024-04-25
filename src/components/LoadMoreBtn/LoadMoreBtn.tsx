import css from './LoadMoreBtn.module.css';

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreProps> = ({ onClick }) => {
  return (
    <div className={css.containerLoadMore}>
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>Load more</button>
  </div>
  )
}

export default LoadMoreBtn