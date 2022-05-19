import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'
import PropTypes from 'prop-types'

function RepoItem({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
        <h3 className='card-body mb-2 text-xl font-semibold'>
            <a href={html_url} target='_blank'>
                <FaLink className='inline mr-1'/> {name}
            </a>
        </h3>
        <p className='m-3 mr-4'>{description}</p>
        <div>
            <div className='m-4 mb-6 badge badge-info badge-lg'>
                <FaEye className='mr-2'/> {watchers_count}
            </div>
            <div className='m-4 mb-6 badge badge-success badge-lg'>
                <FaStar className='mr-2'/> {stargazers_count}
            </div>
            <div className='m-4 mb-6 badge badge-error badge-lg'>
                <FaInfo className='mr-2'/> {open_issues}
            </div>
            <div className='m-4 mb-6 badge badge-warning badge-lg'>
                <FaUtensils className='mr-2'/> {forks}
            </div>
        </div>
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem