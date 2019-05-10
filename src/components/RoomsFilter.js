import React from "react";
import Title from "./Title";
import { useContext } from "react";
import { RoomContext } from "../context";

// get all unique values

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  // console.log(context);
  const {
    handleChange,
    type,
    capacity,
    minPrice,
    price,
    maxPrice,
    maxSize,
    minSize,
    breakfast,
    pets
  } = context;
  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  // map to jsx
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <div>
      <section className='filter-container'>
        <Title title='search rooms' />
        <form className='filter-form'>
          {/* {select type} */}
          <div className='form-group'>
            <label htmlFor='type'>room type</label>
            <select
              name='type'
              id='type'
              value={type}
              className='form-control'
              onChange={handleChange}
            >
              {types}
            </select>
          </div>

          {/* {end select type} */}
          {/* {select guest} */}
          <div className='form-group'>
            <label htmlFor='capacity'>guest</label>
            <select
              name='capacity'
              id='capacity'
              value={capacity}
              className='form-control'
              onChange={handleChange}
            >
              {people}
            </select>
          </div>

          {/* {end select guests} */}
          {/* room price */}
          <div className='form-group'>
            <label htmlFor='price'>room price ${price}</label>
            <input
              type='range'
              name='price'
              min={minPrice}
              max={maxPrice}
              id='price'
              value={price}
              onChange={handleChange}
              className='form-control'
            />
          </div>
          {/* end room price */}
        </form>
      </section>{" "}
    </div>
  );
};

export default RoomFilter;
