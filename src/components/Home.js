
import React from "react";
import {
    View,
    ActivityIndicator,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { debounce } from "lodash"
import * as detailActionCreators from '../actions/showActions';
import styles from '../../style/homeStyle'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            search: '',
            showsVisible: false,
            scheduleVisible: true
        };
    }

    callEndpoint(endpoint, searchBarFlag) {
        let { actions } = this.props;
        fetch(endpoint)
            .then(response => response.json())
            .then((responseJson) => {
                if (searchBarFlag) {
                    actions.changeSchedule(responseJson)
                } else {
                    actions.changeShowList(responseJson);
                }
                this.setState({
                    loading: false
                })
            })
            .catch(error => console.log(error))
    }

    callSchedule() {
        this.callEndpoint("http://api.tvmaze.com/schedule", true);
    }
    callShows(search) {
        this.callEndpoint("http://api.tvmaze.com/search/shows?q=" + search, false)
    }
    componentDidMount() {
        this.callSchedule();
    }
    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: 1,
                width: "100%",
                backgroundColor: "black",
            }}
            />
        );
    }

    onShowPress(showTitle, poster, genres, year) {
        let { actions } = this.props;
        actions.changeShow(poster, showTitle, genres, year);
        this.props.navigation.navigate('Detail');
    }

    renderScheduleItem = (data) =>
        <TouchableOpacity
            onPress={() => this.onShowPress(data.item.show.name, data.item.show.image ? data.item.show.image.original : '', data.item.show.genres, data.item.show.premiered)}
            style={[styles.row]}>
            {data.item.show.image ? <Image
                style={{ width: 120, height: 120 }}
                source={{ uri: data.item.show.image.original }}
            /> : <Image style={{ width: 120, height: 120 }}
                source={require('../images/placeholder.png')}
                />}
            <View style={[styles.column]}>
                <Text style={styles.title}>{data.item.show.name}</Text>
                <Text style={styles.lightText}>{data.item.name}</Text>
            </View>
        </TouchableOpacity>

    renderShowItem = (data) =>
        <TouchableOpacity
            style={[styles.row]}
            onPress={() => ToastAndroid.show(data.item.show.name, ToastAndroid.TOP)}>
            {data.item.show.image ? <Image style={{ width: 120, height: 120 }}
                source={{ uri: data.item.show.image.original }}
            /> : <Image style={{ width: 120, height: 120 }}
                source={require('../images/placeholder.png')}
                />}
            <View style={[styles.column]}>
                <Text style={styles.title}>{data.item.show.name}</Text>
                <Text style={styles.lightText}>{data.item.show.premiered}</Text>
                <Text style={styles.lightText}>{data.item.show.status}</Text>
            </View>

        </TouchableOpacity>

    updateSearch = debounce(search => {
        this.callShows(search);
        this.state.scheduleVisible = false;
        this.state.showsVisible = true;
    }, 300)

    changeSearch = (search) => {
        this.setState({ search });
        if (search == "") {
            this.state.scheduleVisible = true;
            this.state.showsVisible = false;
        } else {
            this.updateSearch(search)
        }
    }

    render() {
        const { search } = this.state;
        const { scheduleDs, showsDs } = this.props;

        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" animating />
                </View>
            )
        }

        return (
            <>

                <SearchBar
                    placeholder="Look your show up!"
                    onChangeText={this.changeSearch}
                    value={search}
                    ref={search => this.search = search}
                />

                <View style={{ backgroundColor: 'black' }}>

                    {this.state.scheduleVisible &&
                        <FlatList
                            style={[styles.flatList]}
                            data={scheduleDs}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={item => this.renderScheduleItem(item)}
                            keyExtractor={item => item.id.toString()}
                        />}
                    {this.state.showsVisible &&
                        <FlatList
                            style={[styles.flatList]}
                            data={showsDs}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={item => this.renderShowItem(item)}
                            keyExtractor={item => item.show.id.toString()}
                        />}
                </View>
            </>
        )
    }
}

const mapStateToProps = state => ({
    scheduleDs: state.schedule.scheduleDs,
    showsDs: state.showList.showsDs
});


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(detailActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)