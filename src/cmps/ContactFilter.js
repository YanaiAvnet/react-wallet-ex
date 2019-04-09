import React, {Component} from 'react'

export default class ContactFilter extends Component {
    state = {
        term: ''
    }
    handleChange = (event) => {
        this.setState({term: event.target.value})        
        this.props.onFilter(event.target.value)
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="filter" value={this.state.term} onChange={this.handleChange} />
            </form>
        )
    }
}

// export default (onFilter) => {
//     return (
//         <form>
//             <input type="text" placeholder="filter" onChange={onFilter.bind(this, )} />
//         </form>
//     )
// }