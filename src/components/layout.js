import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';

import './layout.scss';

import favicon16 from '../images/favicon16.png';
import favicon32 from '../images/favicon32.png';
import favicon64 from '../images/favicon64.png';

function getFavicon(size, icon) {
	return {
		rel: 'icon',
		type: 'image/png',
		sizes: size.toString() + 'x' + size.toString(),
		href: `${icon}`,
	};
}

export default ({ children }) => (
	<>
		<div className='site'>
			<Helmet
				link={[
					getFavicon(16, favicon16),
					getFavicon(32, favicon32),
					getFavicon(64, favicon64),
				]}
			>
				<html className='has-navbar-fixed-top' lang='en' />
			</Helmet>
			<Header />
			<section className='section has-background-light site-content is-paddingless'>
				<div className=''>{children}</div>
			</section>
		</div>
		<Footer />
	</>
);
