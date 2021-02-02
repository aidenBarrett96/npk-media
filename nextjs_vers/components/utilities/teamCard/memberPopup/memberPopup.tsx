import React, {FC} from "react";
import { motion } from "framer-motion";
import style from '../teamCard.module.scss'

interface MemberPopupProps {

}

const MemberPopup:FC<MemberPopupProps> = ({ memberClickHandler, member, focusedMember, id }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
      transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
      style={{ pointerEvents: "auto" }}
    >
      <div className={style.popup}>
        <div className={style.popupInner}>
          <motion.img src="/placeholder.png"
            layoutId={focusedMember._uid}
          />
          <p>Need to add description in cms </p>
          <motion.button onClick={() => memberClickHandler(member)} layoutId={`btn${focusedMember._uid}`}>+</motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default MemberPopup
