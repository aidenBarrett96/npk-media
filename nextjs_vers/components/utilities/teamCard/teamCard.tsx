import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import MembersGrid from './membersGrid/membersGrid';
import MemberPopup from './memberPopup/memberPopup';


interface MembersPageProps {
	members: object,
	memberClickHandler: Dispatch<SetStateAction<object>>,
	focusedMember?: string,
}

const MembersPage:FC<MembersPageProps> = ({members}) => {

	const [focusedMember, setFocusedMember] = useState();
	
	const memberClickHandler = (member) => {
		const alreadyActive = focusedMember === member;
		setFocusedMember(alreadyActive ? {} : member);
	};
	
  return (
    <div>
      <AnimateSharedLayout type="crossfade">
				
				<AnimatePresence>
					<MembersGrid memberClickHandler={memberClickHandler} focusedMember={focusedMember} team={members}/>
					{focusedMember
					//@ts-ignore
						? <MemberPopup memberClickHandler={memberClickHandler} focusedMember={focusedMember} key={focusedMember._uid}/>
						: null
					}
				</AnimatePresence>
      </AnimateSharedLayout>
    </div>
  )
}

export default MembersPage