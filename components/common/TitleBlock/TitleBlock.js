import React, {Component, Fragment} from 'react';
import {Parallax} from 'react-parallax';
import PropTypes from 'prop-types';
import {TitleBLockStyle} from './TitleBlockStyle';

class TitleBlock extends Component {

    static propTypes = {
        img:PropTypes.any,
        alt:PropTypes.string,
        title:PropTypes.string,
        subtitle:PropTypes.string,
        parallax:PropTypes.bool
    };

    render() {

        const {img,alt,title,subtitle,parallax} = this.props;

        return(
            <TitleBLockStyle>
                <div className={'title-block'}>
                    {parallax ?
                        <Parallax
                            blur={5}
                            bgImage={img}
                            bgImageAlt={alt}
                            strength={200}
                        >
                            <div className={'paralax-content'}>
                                <div className={'title'}>
                                    <p>{title}</p>
                                </div>
                                <div className={'call'}>
                                    <p>{subtitle}</p>
                                </div>
                            </div>

                        </Parallax>
                        :
                        <Fragment>
                            <div className={'simple-background'} />
                            <div className={'paralax-content'}>
                                <div className={'title'}>
                                    <p>{title}</p>
                                </div>
                                <div className={'call'}>
                                    <p>{subtitle}</p>
                                </div>
                            </div>
                        </Fragment>
                    }
                </div>
            </TitleBLockStyle>
        );
    }
}

export default TitleBlock;
