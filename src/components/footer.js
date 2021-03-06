import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faPhone,
	faCalendar,
} from '@fortawesome/free-solid-svg-icons';

import styles from './footer.module.scss';
import './footer.scss';

function Divider() {
	return (
		<div
			className='section is-paddingless is-hidden-mobile'
			style={{ marginLeft: '5vmin', marginRight: '5vmin' }}
		>
			<p>·</p>
		</div>
	);
}

export default () => (
	<footer
		className={'footer has-background-success has-text-dark ' + styles.Footer}
	>
		<div className='container'>
			<div className='columns is-desktop is-vcentered is-centered'>
				<div className='column is-3'>
					<div className='content'>
						<table
							className='table is-completely-borderless has-background-success'
							style={{ background: 'rgb(250, 250, 250)' }}
						>
							<tbody>
								<tr>
									<td>
										<FontAwesomeIcon icon={faPhone} />
									</td>
									<td>(805) 341-3416</td>
								</tr>
								<tr>
									<td>
										<FontAwesomeIcon icon={faEnvelope} />
									</td>

									<td>fpcw@familypsychiatry101.com</td>
								</tr>
								<tr>
									<td>
										<FontAwesomeIcon icon={faCalendar} />
									</td>
									<td>Monday - Friday, 9:00am - 6:00pm</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<Divider />
				<div className='column is-2'>
					31194 La Baya Drive
					<br />
					Suite 202
					<br />
					Westlake Village, CA 91362
				</div>
				<Divider />
				<div className='column is-2'>
					30851 Agoura Road
					<br />
					Suite 304
					<br />
					Agoura Hills, CA 91301
				</div>
				<Divider />
				<div className='column is-3'>
					<div className='content'>
						<p>© 2020 Family Psychiatry Counseling and Wellness.</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
