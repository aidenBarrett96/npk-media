// import { team } from "../alldata"; // this will be coming from the cms
import { motion } from "framer-motion";
import style from '../teamCard.module.scss'
import {FC} from 'react'


// types for the member card
interface MemberCardProps {
  member: {
    image: {
      filename: string
    }
    name: string,
    _uid: string,
    role: string
  },
  memberClickHandler: (member) => void,
}

// types for the grid of members
interface MembersGridProps {
  team: any,
  memberClickHandler: (member) => void,
  focusedMember: any
}

// individual member card
const MemberCard:FC<MemberCardProps> = ({ member, memberClickHandler }) => {
  return (
    <motion.div className={style.member}>
      <div className={style.innerWrap}>
        <motion.img 
          src={`${member.image.filename}` || "/placeholder.png"} 
          alt={`Profile image of ${member.name}`} 
          layoutId={member._uid}
        />
        <motion.button onClick={() => memberClickHandler(member)} layoutId={`btnActive${member._uid}`}>+</motion.button>
      </div>
      <div className={style.nameRole}>
        <p>{member.name}</p>
        <p>{member.role}</p>
      </div>
    </motion.div> 
  );
}


// all members
const MembersGrid:FC<MembersGridProps> = ({focusedMember, memberClickHandler, team}) => {  
  return (
    <div className={style.team}>
      {team.map((member) => (
        <MemberCard 
          member={member} 
          //@ts-ignore
          focusedMember={focusedMember === member} 
          key={member._uid} 
          memberClickHandler={memberClickHandler}
        />
      ))}
    </div>
  )
}

export default MembersGrid