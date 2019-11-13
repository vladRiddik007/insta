import React from 'react';
import User from './User';

export default function Uses() {
    return(
        <div className="right">
            <User 
                src="https://www.chitalnya.ru/upload2/508/5778770749457181.jpg" 
                alt="man" 
                name="Jysen" 
                />
                <div className="users__block">
                <User 
                src="https://www.chitalnya.ru/upload2/508/5778770749457181.jpg" 
                alt="man" 
                name="Jysen" 
                min={true}/>
                <User 
                src="https://www.chitalnya.ru/upload2/508/5778770749457181.jpg" 
                alt="man" 
                name="Jysen" 
                min={true}/>
                <User 
                src="https://www.chitalnya.ru/upload2/508/5778770749457181.jpg" 
                alt="man" 
                name="Jysen" 
                min={true}/>
                <User 
                src="https://www.chitalnya.ru/upload2/508/5778770749457181.jpg" 
                alt="man" 
                name="Jysen" 
                min={true}/>
                </div>
        </div>
    )
}