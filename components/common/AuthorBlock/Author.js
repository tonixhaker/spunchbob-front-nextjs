import React, {Component} from 'react';
import {AuthorBlockStyle} from './AuthorBlockStyle';

class AuthorBlock extends Component {

    render() {
        return(
            <AuthorBlockStyle>
                <div className={'author-block'}>
                    <div className={'container'}>
                        <div className={'block-left'}>
                            <h1 className={'title'}>Кто будет работать?</h1>
                            <div className={'image-mobile'}>
                                <div className={'img'} />
                            </div>
                            <p className={'info'}>
                            Lorem ipsum dolor sit amet, consectetur adidpiscing elit. Maecenas a luctus tellus. Suspendisse potenti. Integer auctor fermentum justo, sed mattis nulla ullamcorper eget. Morbi ornare sit amet turpis in faucibus. Mauris iaculis elit id pulvinar sodales. Sed at nisi eu lacus iaculis bibendum. Morbi turpis lacus, scelerisque a tellus nec, efficitur sodales lectus. Etiam posuere non lacus non cursus. Mauris porttitor, sem ut dictum hendrerit, mi justo egestas turpis, et porttitor elit lacus in ante. Duis egestas leo tempor augue mollis, eget placerat metus imperdiet.
                            </p>
                        </div>
                        <div className={'flex flex-center flex-column mobile-hide'}>
                            <div className={'image-right'} />
                        </div>
                    </div>
                </div>
            </AuthorBlockStyle>
        );
    }
}

export default AuthorBlock;
