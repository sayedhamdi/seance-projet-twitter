import Person from './Person'
import { PropTypes} from 'prop-types'

function PersonsList({persons}){

    return(

    <div>
    {
        persons.length=== 0 ? 
        <h2> No person found</h2> 
        : 
        persons.map((person)=> 
        <Person 
            firstname={person.firstname} 
            lastname={person.lastname} 
            age={person.age}/>
        )
    }
       
    </div>
    )

}
PersonsList.propTypes = {
    persons: PropTypes.array.isRequired
}

PersonsList.defaultProps = {
    persons: []
}
export default PersonsList