import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as musicInfoAction from '../../actions/music';
import * as searchAction from '../../actions/search';
import Index from '../../components/Home/Index';

const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch),
        searchActions: bindActionCreators(searchAction, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);



