import React from 'react';
import './MemeGenerator.css';

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []

        }
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(responce => { return responce.json(); })
            .then(responce => {
                console.log(responce.data.memes);
                let { memes } = responce.data; //===> memes=responce.data.memes
                this.setState({ allMemeImgs: memes })
            })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let randNum = Math.ceil(Math.random() * this.state.allMemeImgs.length);
        let randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({ randomImg: randMemeImg });

    }

    render() {
        return (
            <div>
                <div className="Meme">
                    <form className="meme-form" onSubmit={this.handleSubmit}>
                        <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange} />
                        <input type="text" name="bottomText" placeholder="Bottom Text" value={this.state.bottomText} onChange={this.handleChange} />
                        <button>Gen</button>
                    </form>
                </div>
                <div className="meme">
                    <img align="center" src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
export default MemeGenerator