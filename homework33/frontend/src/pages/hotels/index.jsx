import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClasses } from "../../store/thunks/classesThunk";
import { getDestinations } from "../../store/thunks/destinationsThunk";

import styles from "./Hotels.module.css"


const Hotel = () => {
  const dispatch = useDispatch();

  const [selectedDestinationId, setSelectedDestinationId] = useState(null);

  const { items: classes, loading, error } = useSelector((state) => state.classes);
  const { items: destinations, loading: destinationsLoading } = useSelector((state) => state.destinations);

  useEffect(() => {
    dispatch(getDestinations());
  }, [dispatch]);

  useEffect(() => {
    if (selectedDestinationId) {
      dispatch(getClasses({ destinationId: selectedDestinationId, query: ""}))
    }
  }, [selectedDestinationId, dispatch])



  return (
    <div className={styles.pageHotels}>
      <h2>Виберіть місто</h2>

      {destinationsLoading ? (
        <p>Завантаження міст...</p>
      ) : (
      <select
        value={selectedDestinationId || ""}
        onChange={(e) => setSelectedDestinationId(Number(e.target.value))}
      >
        <option value="" disabled>
          Оберіть місто
        </option>
        {destinations.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>
      )}

      {loading && <p>Завантаження...</p>}
      {error && <p style={{color: "red"}}>{error}</p>}

      {!loading && classes.length === 0 && selectedDestinationId && (
        <p>Готелі не знайдені</p>
      )}

      <ul>
        {classes.map(({ id, title,  instructor, location, date, imageUrl}) => (
          <li key={id} style={{ marginBottom: "20px"}}>
            <h3>{title}</h3>
            <p>Інструктор: {instructor}</p>
            <p>Локація: {location}</p>
            <p>Дата: {new Date(date).toLocaleString()}</p>
            <img src={imageUrl}
            alt={title}
            width ={200}
            onError={(e) => {
              e.target.style.display= "none";
            }}
            />
          </li>
        ))}
      </ul>
    </div>
  )

}

export default Hotel;
