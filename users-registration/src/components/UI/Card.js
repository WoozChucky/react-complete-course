import style from './Card.module.css'

const Card = props => {

    const classNames = `${style.card} ${props.className}`;

    return (
        <div className={classNames}>
            {props.children}
        </div>
    );
}

export default Card;