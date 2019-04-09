import React, {Component} from 'react'
import UserService from '../services/UserService'
import UserDetails from '../cmps/UserDetails'
import BitcoinService from '../services/BitcoinService'

export default class HomePage extends Component {
    state = {
        user: UserService.getUser(),
        bitcoinRate: null
      }
      async componentDidMount() {
        const bitcoinRate = await BitcoinService.getRate(1)
        this.setState({bitcoinRate})
      }
      render() {
        const name = this.state.user.name
        const coins = this.state.user.coins
        const moves = this.state.user.moves
        return (
          <section className="HomePage">
          <h1>Home Page</h1>
            <UserDetails name={name} coins={coins} moves={moves} />
            {this.state.bitcoinRate &&<h1>Current Bitcoin Rate: <span>{this.state.bitcoinRate}</span></h1>}
            <hr />
          </section>
        );
      }
}
