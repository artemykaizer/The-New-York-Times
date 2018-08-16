import React from 'react'
import {connect} from 'react-redux'
import {getNews} from '../actions/index'
import SingleNews from '../components/SingleNews'
import Preloader from '../components/Preloader'

function mapStateToProps (state) {
    return {
        news: state.news,
        isFetching: state.isFetching
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getNews: (url) => dispatch(getNews(url))
    }
}

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.getNews(this.props.match.path)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.path!==this.props.match.path) {
            this.props.getNews(this.props.match.path)
        }
    }

    render() {
        
        if(this.props.isFetching) {
            return <Preloader/>
        }

        else {
            return (
                <div className="container main-container">
                    {this.props.news.map(news => {
                        return (
                                <SingleNews
                                    url={news.url}
                                    title={news.title}
                                    abstract={news.abstract}
                                    id = {news.published_date}
                                    img={news.multimedia[1]}
                                />
                        )
                    })}
                </div>
            )
        }
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)