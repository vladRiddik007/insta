import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return(
            <div className="post">
                <User 
                src="https://www.chitalnya.ru/upload2/508/5778770749457181.jpg" 
                alt="man" 
                name="Jysen" 
                min={true}/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__desrc">
                    Какой-то текст
                </div>
            </div>
        )
    }
}