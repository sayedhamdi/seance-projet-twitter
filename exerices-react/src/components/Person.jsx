import { PropTypes} from 'prop-types'
function Person({firstname,lastname,age}){
    console.log(age);
    const status= age>= 18 ? 'majeur':'mineur'
    return (
        <div style={{border:'4px solid orange'}}>
            <h2>{firstname}</h2>
            <h2>{lastname}</h2>
            <span> { status } </span>
        </div>
    )
}

Person.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired
}

export default Person