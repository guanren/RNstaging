/**
 *  Created by wangjun on 2017/12/28.
 **/
import Routers from '../../routers/test';

const FlagRoutes = new Set(); // 防止短时间内多次点击多次跳转
const navs = (state, action) => {
    if (action.type === 'Navigation/NAVIGATE') {
        if (FlagRoutes.has(action.routeName)) {
            return state;
        }
        FlagRoutes.add(action.routeName);
        setTimeout(() => {
            FlagRoutes.delete(action.routeName);
        }, 500);
    }
    const newState = Routers.router.getStateForAction(action, state);
    return newState || state;
};

export default navs;
