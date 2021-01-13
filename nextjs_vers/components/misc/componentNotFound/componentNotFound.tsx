import  {FC} from 'react'
import style from './componentNotFound.module.scss'

interface componentNotFoundProps {
    component: string
}

const ComponentNotFound: FC<componentNotFoundProps> = (props) => {
    const { component} = props
return (
    <div className={style.container}>
        <p className={style.body}>
            '{component}' not found, add this component to Components.tsx to see it here
        </p>
    </div>
)
}

export default ComponentNotFound