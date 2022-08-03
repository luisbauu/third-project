import data from '../assets/data'

export default function Meme(){
	
	function handleClick(){
		console.log(data.data.memes[Math.floor(Math.random() * 100)].url)
	}
	return(
		<main>
			<form>
				<input type='text'/>
				<input type='text'/>
				<button onClick={handleClick}>Get a new meme image 🖼</button>
			</form>
		</main>
	)
}