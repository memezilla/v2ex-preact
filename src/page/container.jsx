/**
  * Copyright (C) 2016 yanni4night.com
  * container.jsx
  *
  * changelog
  * 2016-09-08[15:30:47]:revised
  *
  * @author yanni4night@gmail.com
  * @version 0.1.0
  * @since 0.1.0
  */
'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Container extends Component {
    render() {
        const {current} = this.props;
        let latestClass = 'f-1 f-f f-c f-m ';
        let hotClass = 'f-1 f-f f-c f-m ';
        if(current === '/'){
            latestClass += 'active';
        } else if(current === '/hot') {
            hotClass += 'active';
        }
        return (
        <div className="container">
            <header className="header f-f f-h">
                <Link className={latestClass} to="/">Latest</Link>
                <Link className={hotClass} to="hot">Hot</Link>
            </header>
            <div className="content">
                {this.props.children}
            </div>
        </div>);
    }
}