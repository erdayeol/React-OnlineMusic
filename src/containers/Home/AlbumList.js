import {connect} from 'react-redux';
import AlbumList from '../../components/Home/AlbumList';
const mapStateToProps = (state) => {
    return {
        totalAlbums: state.albums
    }
};
export default connect(mapStateToProps)(AlbumList);


