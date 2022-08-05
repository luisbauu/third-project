import data from '../assets/data'
import { useState } from 'react'

export default function Meme(){
	const [memeImage, setMemeImage] = useState(data.data.memes[Math.floor(Math.random() * 100)].url);

	function handleClick(){
		setMemeImage(data.data.memes[Math.floor(Math.random() * 100)].url)		
	}

	return(
		<main>
			<form>
				<input type='text'/>
				<input type='text'/>
				<button onClick={handleClick}>Get a new meme image 🖼</button>
			</form>
			<img src={memeImage}/>
		</main>
	)
}