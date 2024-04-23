import css from './Loader.modul.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.containerLoadMore}>
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>Load more</button>
  </div>
  )
}

export default LoadMoreBtn