import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectHotDeals } from '../../redux/shopData/shopSelectors';

import { Banner, Background, BannerButton, BannerTitle, BannerInfo, Title  } from './directoryStyles'

import Discover from './discover/discover'
import Hotdeals from './hotdeals/hotdeals'

const Directory = ({hotDeals}) => {
    return(
        <div>
            <Banner>
                <Background imgUrl='https://images.pexels.com/photos/54206/pexels-photo-54206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                <BannerInfo>
                    <BannerTitle>Don't let Winter<br />surprise you!</BannerTitle>
                    <BannerButton>Shop Now</BannerButton>
                </BannerInfo>
            </Banner>
            <Title>Hot Deals</Title>
            <Hotdeals hotDeals={hotDeals} />
            <Title>Discover</Title>
            <Discover />
        </div>
    )
};

const mapState = createStructuredSelector({
    hotDeals: SelectHotDeals
})

export default connect(mapState)(Directory) 

