import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/FooterLayout/footer';
import Header from './components/Header/header';
import MenuPanel from './components/MenuPanel/menupanel';
import MoviesList from './containers/MoviesList/movieslist';
import Search from './components/Search/search';
import Content from './components/ContentLayout/contentlayout';
import SearchResult from './components/SearchResultCounter/searchresultcounter';
import ErrorBoundary from './containers/ErrorBoundary/errorboundary';
import MoviesLayout from './components/MoviesLayout/movieslayout';

const App = () => (
  <Content>
    <Header />
    <Search />
    <MenuPanel />
    <SearchResult searchResult={30} />
    <MoviesLayout>
      <ErrorBoundary>
        <MoviesList />
      </ErrorBoundary>
    </MoviesLayout>
    <Footer>
      <p>
        <b>
          netflix
        </b>
        roulette
      </p>
    </Footer>
  </Content>
);

ReactDOM.render(<App />, document.getElementById('app'));