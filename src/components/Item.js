import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './item.css';

function Item({title, desc, backgroundImg, leftBtnText, leftBtnLink, rightBtnText, rightBtnLink, twoButtons, first}) {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>{title}</p>
                    <div className="item_description">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item_buttons">
                        <Button inp = 'primary' text = {leftBtnText} link = {leftBtnLink} />
                        {twoButtons && (
                            <Button inp='secondary' text= {rightBtnText} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <div className="item_expand">
                            <ExpandMoreIcon/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item 
