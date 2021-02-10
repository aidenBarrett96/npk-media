import React, {FC} from "react";
import { motion } from "framer-motion";
import style from '../teamCard.module.scss'

interface MemberPopupProps {
  memberClickHandler: (member) => void,
  focusedMember: any
  member: any
}

const MemberPopup:FC<MemberPopupProps> = ({ memberClickHandler, member, focusedMember }) => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <motion.div className={style.popup}>
          <div className={style.popupInner}>
            <motion.img src={`${focusedMember.image.filename}` || "/placeholder.png"}
              layoutId={focusedMember._uid}
              exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <p>{focusedMember.description || 'No description yet'}</p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              layoutId={`btn_${focusedMember._uid}`}
              transition={{ duration: 0.8, ease: 'easeOut' }} 
              exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }} 
              className={style.button}
              onClick={() => memberClickHandler(member)}
            >
              <button>+</button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default MemberPopup
