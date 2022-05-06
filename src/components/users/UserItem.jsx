import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function UserItem({users: login, avatar_url}) {
  return (
    <div className='card shdow-md compact bg-base-100 '>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='profile pic'></img>
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link className='text-base-content text-opacity-40' to={`/users/${login}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  users: PropTypes.object.isRequired,
}

export default UserItem