import PropTypes from 'prop-types'

function Filter({ onChange, filter }) {
    return (
        <label>
            Filter by name:
            <input type="text" value={filter} onChange={onChange}></input>
        </label>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string
}

export default Filter