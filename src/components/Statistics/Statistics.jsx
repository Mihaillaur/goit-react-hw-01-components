import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomColor from 'helpers/getRandomColor.js';

export const Statistics = ({ title = null, dataset }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {dataset.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{
              backgroundColor: getRandomColor(),
              flex: 1,
            }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  dataset: PropTypes.array,
};
