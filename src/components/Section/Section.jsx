import propTypes from 'prop-types';
import css from './Section.module.css';

export function Section({ title, children }) {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.node,
};

export default Section;
