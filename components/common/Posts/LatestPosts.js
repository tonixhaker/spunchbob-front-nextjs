import React, {Component} from 'react';
import {Button} from 'antd';
import {LatestPostsStyle} from './LatestPostsStyle';

class LatestPosts extends Component {

    render() {
        const fake = [
            {
                title:'Шо там по пельменям?',
                img:require('img/pelmeni.jpg'),
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a luctus tellus. Suspendisse potenti. Integer auctor fermentum justo, sed mattis nulla ullamcorper eget. Morbi ornare sit amet turpis in faucibus. Mauris iaculis elit id pulvinar sodales. Sed at nisi eu lacus iaculis bibendum. Morbi turpis lacus, scelerisque a tellus nec, efficitur sodales lectus. Etiam posuere non lacus non cursus. Mauris porttitor, sem ut dictum hendrerit, mi justo egestas turpis, et porttitor elit lacus in ante. Duis egestas leo tempor augue mollis, eget placerat metus imperdiet.'
            },
            {
                title:'Голубцы тоже люди!',
                img:require('img/golybci.jpg'),
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a luctus tellus. Suspendisse potenti. Integer auctor fermentum justo, sed mattis nulla ullamcorper eget. Morbi ornare sit amet turpis in faucibus. Mauris iaculis elit id pulvinar sodales. Sed at nisi eu lacus iaculis bibendum. Morbi turpis lacus, scelerisque a tellus nec, efficitur sodales lectus. Etiam posuere non lacus non cursus. Mauris porttitor, sem ut dictum hendrerit, mi justo egestas turpis, et porttitor elit lacus in ante. Duis egestas leo tempor augue mollis, eget placerat metus imperdiet.'
            },
            {
                title:'Шашлыки от Адольфа',
                img:require('img/hitler.jpg'),
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a luctus tellus. Suspendisse potenti. Integer auctor fermentum justo, sed mattis nulla ullamcorper eget. Morbi ornare sit amet turpis in faucibus. Mauris iaculis elit id pulvinar sodales. Sed at nisi eu lacus iaculis bibendum. Morbi turpis lacus, scelerisque a tellus nec, efficitur sodales lectus. Etiam posuere non lacus non cursus. Mauris porttitor, sem ut dictum hendrerit, mi justo egestas turpis, et porttitor elit lacus in ante. Duis egestas leo tempor augue mollis, eget placerat metus imperdiet.'
            }
        ];
        return(
            <LatestPostsStyle>
                <div className={'latest-posts-block'}>
                    <p className={'block-title'}>Полезная информация</p>
                    <div className={'container'}>
                        {fake.map((value,key)=>{
                            return(
                                <div key={key} className={'post-card'}>
                                    <div style={{backgroundImage:'url('+value.img+')'}} className={'post-img'}/>
                                    <p className={'post-title'}>{value.title}</p>
                                    <p className={'post-description'}>{value.description}</p>
                                    <div className={'flex-center'}>
                                        <Button className={'btn details-button'}>Подробно</Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </LatestPostsStyle>
        );
    }
}

export default LatestPosts;
