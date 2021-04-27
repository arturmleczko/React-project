import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '../../styledHelpers/oftenUsed';

const WorkspacesPageContainer = styled(PageContainer)`
	width: 100%;
`;

const Heading = styled.h1`
	font-size: 80px;
`;

const WorkspacesPage: FC = () => {
	return (
		<WorkspacesPageContainer>
			<Heading>Workspaces page</Heading>
		</WorkspacesPageContainer>
	);
};

export default WorkspacesPage;
