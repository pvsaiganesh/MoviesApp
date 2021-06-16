import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'

class Home extends Component {
  state = {trending: [], topRated: [], original: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response1 = await fetch(
      'https://api.themoviedb.org/3/trending/all/week?api_key=e866bccfd1d14a1e02e79d7b35669566',
    )
    const trending = await response1.json()
    const formattedTrending = trending.results.map(item => ({
      backdropPath: item.backdrop_path,
      posterPath: item.poster_path,
    }))
    const response2 = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=e866bccfd1d14a1e02e79d7b35669566&language=en-US',
    )
    const topRated = await response2.json()
    const formattedTopRated = topRated.results.map(item => ({
      backdropPath: item.backdrop_path,
      posterPath: item.poster_path,
    }))

    const response3 = await fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=e866bccfd1d14a1e02e79d7b35669566',
    )
    const originals = await response3.json()

    const formattedOriginals = originals.results.map(item => ({
      backdropPath: item.backdrop_path,
      posterPath: item.poster_path,
    }))

    this.setState({
      trending: formattedTrending,
      topRated: formattedTopRated,
      originals: formattedOriginals,
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>Home</div>
      </div>
    )
  }
}
export default Home
