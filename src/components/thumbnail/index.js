import React from 'react';
import {Radio} from 'react-bootstrap';
import './thumbnail.css';

const thumbnail = ({name, type, price, onSelect})=>(
            <div className="thumbnail-container">
                <div className="thumbnail-border">
                    <div className="thumbnail-inner-card">
                        <div className="thumbnail-inner-card-header">
                            <span>{type}</span>
                        </div>
                        <div className="thumbnail-inner-card-body">
                            <span>{name}</span>
                        </div>
                        <div className="thumbnail-inner-card-footer">
                            <span>Starting From: {price}</span>
                        </div>
                    </div>
                    <div className="thumbnail-inner-card-option">
                        <Radio 
                            onChange={onSelect} 
                            name={type}
                            data-type={name}
                        >
                            <b>Select {name} License</b>
                        </Radio>
                    </div>
                </div>
            </div>
        )

export default thumbnail;