import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
	const kurssi = {
		nimi: 'Half Stack -sovelluskehitys',
		osat: [
			{
				nimi: 'Reactin perusteet',
				tehtavia: 10
			},

	
			{
				nimi: 'Tiedonvälitys propseilla',
				tehtavia: 7
			},
	
			{
				nimi: 'Komponenttien tila',
				tehtavia: 14
			}
		]
	}

	function yhteensa(a, b, c) {
		return a + b + c
	}
	
	const vastaus = yhteensa(kurssi.osat[0].tehtavia, kurssi.osat[1].tehtavia, kurssi.osat[2].tehtavia)

	return (
		<div>
			<h1>{kurssi.nimi}</h1>
			<p>{kurssi.osat[0].nimi} {kurssi.osat[0].tehtavia}</p>
			<p>{kurssi.osat[1].nimi} {kurssi.osat[1].tehtavia}</p>
			<p>{kurssi.osat[2].nimi} {kurssi.osat[2].tehtavia}</p>
			
			<p>yhteensä {vastaus} tehtävää</p>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
