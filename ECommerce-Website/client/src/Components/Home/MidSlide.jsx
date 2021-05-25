import { Box, makeStyles } from '@material-ui/core';
// import { dealData } from '../../constant/data';
import Slide from './Slide';
import { useSelector, useDispatch } from 'react-redux'; // hooks

const useStyle = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        width: '83%'
    },
    rightComponent: {
        marginTop: 12,
        background: '#FFFFFF',
        width: '17%',
        marginLeft: 10,
        padding: 5
    }
})

const MidSlide = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    return (
        <Box className={classes.component}>
            <Box className={classes.leftComponent}>
                <Slide 
                    data={products} 
                    title='Deals of the Day'
                    timer={true} 
                    multi={true} 
                />
            </Box>
            <Box className={classes.rightComponent}>
                <img src={adURL} style={{width: 232}}/>
            </Box>
        </Box>
    )
}

export default MidSlide;