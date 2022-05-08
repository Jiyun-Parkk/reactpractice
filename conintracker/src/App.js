import { React, useEffect, useState } from "react";
import style from "./select.module.css";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [money, setMoney] = useState(0);
	const [price, setPrice] = useState(0);
	const [selected, setSelected] = useState(0);

	let seletedCoin;
	const onChangeSelector = (e) => {
		seletedCoin = e.target.options[e.target.selectedIndex].value;
		seletedCoin = seletedCoin.split(" ");
		coins.forEach((coin) => {
			if (coin.name === seletedCoin[0]) {
				setSelected(coin.quotes.USD.price);
			}
		});
	};
	const onChangePrice = (e) => {
		setMoney(e.target.value);
	};
	const onClickChange = () => {
		if (money !== 0) {
			setPrice((price) => Number(money) * selected);
		} else {
			setPrice((price) => selected);
		}
	};

	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
			<input
				value={money}
				type="number"
				placeholder="money you want to change"
				onChange={onChangePrice}
			/>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select className={style.selector} onChange={onChangeSelector}>
					<option>select coin</option>
					{coins.map((coin) => {
						return (
							<option key={coin.id}>
								{coin.name} ({coin.symbol})
							</option>
						);
					})}
				</select>
			)}
			<button className={style.change} onClick={onClickChange}>
				Change!
			</button>
			<hr />
			<div>Changed: {price} USD</div>
		</div>
	);
}
// https://api.coinpaprika.com/v1/tickers
export default App;
