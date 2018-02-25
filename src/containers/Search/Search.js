import {connect} from 'react-redux';
import Search from '../../components/Search/Search';
import * as musicInfoAction from '../../actions/music';
import * as searchAction from '../../actions/search';
import {bindActionCreators} from 'redux';
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        musicInfoActions: bindActionCreators(musicInfoAction, dispatch),
        searchActions: bindActionCreators(searchAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);