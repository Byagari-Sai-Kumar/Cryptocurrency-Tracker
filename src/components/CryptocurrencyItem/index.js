import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {usdValue, euroValue, currencyName, currencyLogo} = currencyDetails

  return (
    <li className="cryptoList">
      <div className="cryptoImageContainer">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="cryptoCoinImage"
        />
        <p className="cryptoInfo">{currencyName}</p>
      </div>
      <div className="cryptoValueContainer">
        <p className="cryptoInfo">{usdValue}</p>
        <p className="cryptoInfo">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
