import './index.css'

export const PictureContainer = ({author, url}) =>{ 
    return(
        <div className = "container">
            <h2 className = "name">{author}</h2>
            <img className='imgContainer' src = {url} alt = "random"/>
        </div>
    );
};