import '../App.css';
import "../styles/index.css"


const Projects = () => {
  return(
    <div className="App">
      <header className="App-header"> 
        <view>
          <h3 className='title_head'>Here are my projects</h3>
        </view>
      </header>
      <body className='App-body'>
        <ul>
            <li><a href='./'>Home</a></li>
            <li><a className='active' href='/projects'>Projects</a></li>
            <li><a href="/os">My OS</a></li>
        </ul>
        <h1 className='title1'>Projects Page</h1>
        <div className='box'>
          <h4 className='sub_title1'>Coding</h4>
          <p className='sub_title2'>A simple script that allows you to encode and decode strings and files, with or without a key.</p>
          <img className='images_post' src='https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'></img>
          <img className='images_post' src="https://img.shields.io/github/downloads/GFS-0508/Python-Projects/total?style=for-the-badge&logo=appveyor"></img>
          <img className='images_post' src="https://img.shields.io/github/stars/GFS-0508/Python-Projects?style=social?style=for-the-badge&logo=appveyor"></img>
        </div>
      </body>
      <footer className='App-footer'></footer>
    </div>
  )
};

export default Projects;