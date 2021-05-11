import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Image,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as detailActionCreators from '../actions/showActions';

import styles from '../../style/detailStyle'


class Detail extends Component {

    render() {
        const { poster, showTitle, genres, year } = this.props;
        return (
            <ScrollView style={[styles.page]}>
                {poster ?
                    <Image
                        style={[styles.image]}
                        source={{ uri: poster }}
                    /> :
                    <Image style={[styles.image]}
                        source={require('../images/questionMark.jpg')}
                    />
                }
                <Text style={[styles.title]}>{showTitle}</Text>
                {genres.length > 0 ?
                    <View styles={[styles.row]}>
                        {genres.map((item, key) => (
                            <Text key={key} style={[styles.lightText]}>{item} </Text>)
                        )}
                    </View> : <></>}
                <Text style={[styles.lightText, { marginTop: 35 }]}>data pubblicazione: {year}</Text>
            </ScrollView>
        );
    }
};


const mapStateToProps = state => ({
    poster: state.show.poster,
    showTitle: state.show.showTitle,
    genres: state.show.genres,
    year: state.show.year
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(detailActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail)