import React from 'react';
import PleaseSignIn from '../components/PleaseSignIn';
import PageLayout from '../components/PageLayout';

const ProtectedPage = () => {
	return (
		<PleaseSignIn>
			<PageLayout>
				<div>Protected Route</div>
			</PageLayout>
		</PleaseSignIn>
	);
};

export default ProtectedPage;
