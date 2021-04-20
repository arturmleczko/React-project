import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ImageWithText, { Shape } from '../../../common/ImageWithText';
import CustomIcon from '../../../common/CustomIcon';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';
import { RoundedContainer } from '../../../../styledHelpers/oftenUsed';

export interface IWorkspaceProps {
	workspaceReference: string;
	workspaceImageSrc: string;
	workspaceIconSrc: string;
	workspaceTitle: string;
	workspaceInfoFirstIconSrc: string;
	workspaceKind: string;
	workspaceInfoSecondIconSrc: string;
	workspaceUsersNumber: number;
	workspaceDaysSinceLastUpdate: number;
}

interface IWorkspacePropsStyle {
	workspaceImageSrc: string;
}

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 216px;
	padding: 0 15px 15px 15px;
`;

const Dot = styled.span`
	width: 4px;
	height: 4px;
	margin: 0 10px;
	border-radius: 50%;
	background-color: ${colors.darkNavyBlue};
`;

const Header = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 136px;
	padding: 20px;
`;

const Heading = styled.h2`
	padding-left: 25px;
	font-size: ${fontSize[22]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const HeaderIconContainer = styled(RoundedContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 136px;
	height: 136px;
`;

const InfoIconsContainer = styled.div`
	display: flex;
	align-items: center;
`;

const PhotoContainer = styled.div<IWorkspacePropsStyle>`
	height: 144px;
	background-image: url(${({ workspaceImageSrc }) => workspaceImageSrc});
	background-size: cover;
	background-position: center;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const UpdateInfo = styled.p`
	padding-left: 10px;
	font-size: ${fontSize[17]};
	color: ${colors.greyTwo};
`;

const WorkspaceContainer = styled(RoundedContainer)`
	position: relative;
	height: 360px;
	margin-bottom: 7px;
`;

const WorkspaceInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 93px;
	padding-top: 20px;
`;

const WorkspaceReference = styled(Link)`
	text-decoration: none;
`;

const Workspace: FC<IWorkspaceProps> = ({
	workspaceReference,
	workspaceImageSrc,
	workspaceIconSrc,
	workspaceTitle,
	workspaceInfoFirstIconSrc,
	workspaceKind,
	workspaceInfoSecondIconSrc,
	workspaceUsersNumber,
	workspaceDaysSinceLastUpdate,
}) => {
	const howManyDaysAgoInfo: string =
		workspaceDaysSinceLastUpdate > 1
			? `${workspaceDaysSinceLastUpdate} days ago`
			: `${workspaceDaysSinceLastUpdate} day ago`;

	return (
		<WorkspaceContainer>
			<PhotoContainer
				workspaceImageSrc={workspaceImageSrc}
			></PhotoContainer>
			<ContentContainer>
				<WorkspaceReference to={workspaceReference}>
					<Header>
						<HeaderIconContainer shadowWidth={5}>
							<CustomIcon src={workspaceIconSrc} size={70} />
						</HeaderIconContainer>
						<Heading>{workspaceTitle}</Heading>
					</Header>
				</WorkspaceReference>
				<WorkspaceInfo>
					<InfoIconsContainer>
						<ImageWithText
							src={workspaceInfoFirstIconSrc}
							size={25}
							shape={Shape.square}
							text={workspaceKind}
							textSize={fontSize[19]}
							color={colors.greyNine}
						/>
						<Dot />
						<ImageWithText
							src={workspaceInfoSecondIconSrc}
							size={25}
							shape={Shape.square}
							text={`${workspaceUsersNumber} users`}
							textSize={fontSize[19]}
							color={colors.greyNine}
						/>
					</InfoIconsContainer>
					<UpdateInfo>Last update {howManyDaysAgoInfo}</UpdateInfo>
				</WorkspaceInfo>
			</ContentContainer>
		</WorkspaceContainer>
	);
};

export default Workspace;
