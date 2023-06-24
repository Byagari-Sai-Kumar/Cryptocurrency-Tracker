import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyDataList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({cryptocurrencyDataList: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrencyDataList, isLoading} = this.state

    return (
      <div className="cryptoBgContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrencyImage"
            />
            <ul className="cryptoUnorderedListContainer">
              <div className="headerContainer">
                <h1 className="listHeading">Coin Type</h1>
                <div className="headerSubContainer">
                  <h1 className="listHeading">USD</h1>
                  <h1 className="listHeading">EURO</h1>
                </div>
              </div>
              {cryptocurrencyDataList.map(eachObject => (
                <CryptocurrencyItem
                  currencyDetails={eachObject}
                  key={eachObject.id}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
