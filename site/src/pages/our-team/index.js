import React, { useState } from 'react';
import Layout from '../../components/layout';
import TeamCard from '../../components/utilities/teamCard';
import pStyle from './our-team.module.scss';
import teamCartoon from '../../assets/page-assets/our-team/our-team-featured-image.svg';
import ContactSection from '../../components/utilities/contactSection';

export const data = graphql`
	{
		strapi {
			teamMembers {
				name
				description
				role
				profile_image {
					alternativeText
					url
				}
			}
		}
	}
`;

const TeamPage = ({ data }) => {
	const [focusedMember, setFocusedMember] = useState('');

	const team = data.strapi.teamMembers;

	const memberClickHandler = (member) => {
		const alreadyActive = focusedMember === member;
		setFocusedMember(alreadyActive ? '' : member);
	};
	return (
		<Layout>
			<section className='hero'>
				<img
					src={teamCartoon}
					alt='Team Cartoon'
					className={pStyle.featuredImage}
				/>
			</section>
			<section className={pStyle.body}>
				<h1>Our Team</h1>
				<p>
					Our team consists of incredible individual talents which combine to
					create beautiful content.
				</p>
				<div className={pStyle.cardGrid}>
					{team.map((member) => (
						<>
							<div
								onClick={() => memberClickHandler(member.name)}
								className={
									focusedMember !== member.name && focusedMember && pStyle.hide
								}>
								<TeamCard
									image={member.profile_image.url}
									name={member.name}
									role={member.role}
								/>
							</div>
							<p
								className={`${pStyle.description} ${focusedMember ===
									member.name && pStyle.active}`}>
								{member.description}
							</p>
						</>
					))}
				</div>
			</section>
			<section className={pStyle.contactSection}>
				<ContactSection text='Interested in working with us?' />
			</section>
		</Layout>
	);
};

export default TeamPage;
