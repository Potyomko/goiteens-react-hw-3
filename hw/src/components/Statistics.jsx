import PropTypes from "prop-types";
import s from '../components/Statistic.module.css'


export const Statistics = (props)=>{
    const {stats, title} = props
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>{title}</h2>
            <ul className={s.statList}>
                {stats.map((stat)=>{
                    return(
                        <li style={{backgroundColor: `#${ Math.floor(Math.random()*16777215).toString(16)}`}} className={s.item} key={stat.id}>
                            <span className={s.label}>{stat.label}</span>
                            <span className={s.percentage}>{stat.percentage}</span>
                        </li>
                    )
                })}
            </ul>
        </section>


    )
}

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.string.isRequired,
        })
    )
  }
  