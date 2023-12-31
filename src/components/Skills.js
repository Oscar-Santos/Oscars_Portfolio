
import FireBase from '../assets/rails.png';
import Tailwind from '../assets/sql_2.png';
import Openai from '../assets/openai_2.webp';
import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Mongo from "../assets/mongo.png";
import Express from "../assets/express.png";
import Node from "../assets/node.png";
import Github from "../assets/github.png";

function Skills() {
	return (
		<div
			name="skills"
			className='w-full h-screen bg-[#0a0a0a] text-gray-300 px-4 pt-[120px]'
		>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						Skills
					</p>
					<p className="text-2xl py-4">
						These are the technologies I'm proficient with :
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={JavaScript}
							alt="JavaScript icon"
						></img>
						<p className="my-4">JAVASCRIPT</p>
					</div>

					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src={FireBase}  />
						<p className='my-4'>RUBY ON RAILS</p>
                	</div>
				
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   		<img className='w-20 mx-auto' src={Openai}  />
                    	<p className='my-4'>OPENAI API</p>
               		 </div>

					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={ReactImg}
							alt="React icon"
						></img>
						<p className="my-4">REACT</p>
					</div>

					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={CSS}
							alt="CSS icon"
						></img>
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Github}
							alt="Github icon"
						></img>
						<p className="my-4">GITHUB</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Node}
							alt="Node icon"
						></img>
						<p className="my-4">NODE</p>
					</div>

				 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   <img className='w-20 mx-auto' src={Tailwind} />
                    <p className='my-4'>POSTGRESQL</p>
                </div>
			</div>
			</div>
		</div>
	);
}

export default Skills;