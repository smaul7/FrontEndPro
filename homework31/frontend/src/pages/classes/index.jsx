import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getDestinations } from "../../store/thunks/destinationsThunk.js"

const Classes = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.destinations);
    console.log(data)

    useEffect( () => {
        dispatch(getDestinations())
    }, [])
    return (
        <div>

        </div>
    )
}

export default Classes;