import React, {Component} from 'react'
import BitcoinService from '../services/BitcoinService'
import Chart from '../cmps/ChartCmp'

export default class StatisticsPage extends Component {
    state = {
        charts: null
    }
    async componentDidMount() {
        const charts = await Promise.all([BitcoinService.getMarketPrice(), BitcoinService.getConfirmedTransactions()])
        this.setState({charts})
    }
    render () {
        var charts = this.state.charts
        charts = charts ? charts.map(chart => <Chart chart={chart} key={chart.name} />) : ''
        return (
            <section className="statistics-page">
            <h1>Statistics Page</h1>
                {charts}
            <hr />
            </section>
        )
    }
}