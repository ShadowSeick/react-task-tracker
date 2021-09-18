import { motion } from "framer-motion"

const Alert = ({alertText}) => {
    const variants = {
        hidden: {opacity: 0, x: 30},
        visible: {opacity: 1, translateX: -30}
    }

    return (
        <motion.div 
        initial='hidden'
        animate='visible'
        variants={variants}
        transition= {{duration: 0.2}}
        className='text-warning'>
            {alertText}
        </motion.div>
    )
}

export default Alert
