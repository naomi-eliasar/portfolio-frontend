const FilterMenu = () => {
  return (
    <div className="filterBox">
      <div classname="speciesFilter">
        <label>Filter by species</label>
        <select>
          <option>Frog</option>
          <option>Koala</option>
        </select>
      </div>
      <div className="personalityFilter">
        <label>Filter by personality</label>
        <select>
          <option>Normal</option>
          <option>Peppy</option>
        </select>
      </div>
    </div>
  );
};

export { FilterMenu };
