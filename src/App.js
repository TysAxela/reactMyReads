import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import Header from './Header'
import CurrentlyRding from './CurrentlyRding'
import WantToRead from './WantToRead'
import Read from './Read'
import Search from './Search'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */    
  }

	render() {
		return (
			<div className='app'>
				<Route exact path='/' render={() => (
					<div className='list-books'>
						<Header />
						<div className='list-books-content'>
            				<div>
								<CurrentlyRding />
								<WantToRead />
								<Read />
							</div>
							<div className='open-search'>
								<Link to='/search'>Add a book</Link>
							</div>
						</div>
					</div>
				)}/>
				<Route path='/search' render={({ history }) => (
					<Search />
                )}/>
			</div>
		)
	}
}

export default BooksApp
