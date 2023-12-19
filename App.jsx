import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
		  <div className="card">
			<img
			  src="https://i.pinimg.com/564x/e0/68/62/e0686223b169b0a18a00e870d392340b.jpg"
			  alt=""
			  className="front"
			/>
	
			<div className="back">
			  <h2>I hope you guys like it, Pls give it a Star </h2>
			  <div className="icon">
				<a href="#">
				  <img
					src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
					alt=""
				  />
				</a>
				<a href="#">
				  <img
					src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png"
					alt=""
				  />
				</a>
				<a href="#">
				  <img
					src="https://img.icons8.com/ios-filled/50/youtube-play.png"
					alt=""
				  />
				</a>
				<a href="#">
				  <img
					src="https://img.icons8.com/ios-filled/50/google-logo.png"
					alt=""
				  />
				</a>
			  </div>
			</div>
		  </div>
		</div>
	  );
}

export default App;
