import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Statistics = ({ title = null, dataset }) => {
  return (
    <section className={css.statistics}>
      {title !== '' && title !== null && <h2 className={css.title}>{title}</h2>}
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
}


