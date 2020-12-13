import React from "react";
import axious from "axios";


class App3 extends React.Component{
    state = {
        isLoading : true,
        movies: []
    };

    getMovies = async () => {
        const movies = await axious.get("https://yts-proxy.now.sh/list_movies.json");
    }

    //가장 먼저 실행되는 function: date fetch가 이루어짐
    componentDidMount(){
        this.getMovies();
    }

    render(){
        const { isLoading } = this.state;   //js ES6문법
        return (
            <div>{ isLoading ? "Loading..." : "we are Ready" }</div>
        );
    }
}

export default App3;