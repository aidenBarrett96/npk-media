import * as React from 'react';
import Components from '..';

const Page = ({ blok }) => {
	return (
		<div>
			{blok.body && blok.body.length > 0 ? (
				blok.body.map((innerBlok) => (
					<section>
						{React.createElement(Components(innerBlok.component), {
							key: innerBlok.uid,
							blok: innerBlok,
						})}
					</section>
				))
			) : (
				<p style={{ textAlign: 'center' }}>
					Add some bloks to the body to see them here
				</p>
			)}
		</div>
	);
};

export default Page;
