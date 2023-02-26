import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

function Error() {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='image'></img>
        <h3>Ohh! Page not found</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <Link to='/'>Back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
