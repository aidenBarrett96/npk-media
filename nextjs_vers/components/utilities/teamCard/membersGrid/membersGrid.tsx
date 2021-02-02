// import { team } from "../alldata"; // this will be coming from the cms
import { motion } from "framer-motion";
import style from '../teamCard.module.scss'
import {FC} from 'react'


interface MemberCardProps {

}
interface MembersGridProps {

}

const MemberCard:FC<MemberCardProps> = ({ member, memberClickHandler }) => {
  
  return (
    <motion.div className={style.member}>
      <div className={style.innerWrap}>
        <motion.img 
          src={`${member.image.filename}` || "/placeholder.png"} 
          alt={`Profile image of ${member.name}`} 
          layoutId={member._uid}
        />
        <motion.button onClick={() => memberClickHandler(member)} layoutId={`btn${member._uid}`}>+</motion.button>
      </div>
      <div className={style.nameRole}>
        <p>{member.name}</p>
        <p>{member.role}</p>
      </div>
    </motion.div> 
  );
}


const MembersGrid:FC<MembersGridProps> = ({focusedMember, memberClickHandler, team}) => {
  return (
    <div className={style.team}>
      {team.map((member) => (
        <MemberCard 
          member={member} 
          focusedMember={focusedMember === member} 
          key={member._uid} 
          memberClickHandler={memberClickHandler}
        />
      ))}
    </div>
  )
}

export default MembersGrid