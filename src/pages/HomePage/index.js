import React, { Component } from 'react';
import BannerCaraousal from './../../components/BannerCaraousal/BannerCaraousal';
import Tiles from './../../components/Tiles/Tiles';
import Banner from './../../components/Banner/Banner';
import BannerImage from './../../components/Banner/BannerImage';
import Spacer from './../../components/Spacer/Spacer';


class HomePage extends Component {

    render() {
        return (
            <main className="home-section">
                <section>
                    <BannerCaraousal />
                </section>

                <section>
                    <Tiles />
                </section>

                    <Spacer color="#ffffff" mobileHeight="32px" desktopHeight="68px" />

                <section>
                    <BannerImage
                     title="Take off in the new Signature Legging"
                     subtitle="Lorem Ipsum Dolor Tempor"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna."
                     primaryBtn="shop now"
                     secondaryBtn="shop Collection"/>
                </section>

                    <Spacer color="#ffffff" mobileHeight="32px" desktopHeight="68px" />

                <section>
                    <Banner flow="rtl"
                     img="assets/images/banner/fashion1.jpg"
                     title="Conquer your next adventure"
                     description="Lorem Ipsum Dolor Tempor"
                     btn="shop devices"
                     showLocator="true"
                     container="container"/>
                </section>

                    <Spacer color="#ffffff" mobileHeight="32px" desktopHeight="128px" />

            </main>
        );
    }

}

export default HomePage;