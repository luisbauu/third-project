import troll from '../assets/troll.png'

export default function Header(){
	return(
		<nav>
			<div className='left'>
				<img src={troll}/>
				<h2>Meme Generator</h2>
			</div>
			<h4>React Course - Project 3</h4>
		</nav>
	)
}