import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Range } from "react-range";

const Filter = () => {
  const { t } = useTranslation();
  const [values, setValues] = useState([20, 580]);
  const [count, setCount] = useState(1000);
  const [filtred, setFiltred] = useState(4);

  return (
    <div className="filter">
      <div className="filter-head">
        <h2 className="filter-head-title">Filters</h2>
      </div>
      <div className="filter-choice">
        <h3 className="filter-title">Price</h3>
        <p className="price-text">
          Price: <strong>${values[0]}</strong> - <strong>${values[1]}</strong>
        </p>
        <div className="ranger">
          <Range
            className="filter-range"
            label="Select your value"
            step={10}
            min={0}
            max={1000}
            values={values}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div {...props} className="track">
                <div
                  className="selected-range"
                  style={{
                    position: "absolute",
                    height: "100%",
                    backgroundColor: "var(--primary-color)",
                    borderRadius: "20px",
                    left: `${(values[0] / 1000) * 100}%`,
                    width: `${((values[1] - values[0]) / 1000) * 100}%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div {...props} key={props.key} className="thumb" />
            )}
          />
          <button className="range-refresh-btn">
            <i className="bi bi-arrow-clockwise"></i>
          </button>
        </div>
      </div>
      <div className="filter-choice">
        <h3 className="filter-title">Status</h3>
        <div className="status-list">
          <div className="status-option">
            <input type="radio" name="status" value="brand-new" />
            <label htmlFor="brand-new">Brand new</label>
          </div>
          <div className="status-option">
            <input type="radio" name="status" value="new-without-tags" />
            <label htmlFor="new-without-tags">New without tags</label>
          </div>
          <div className="status-option">
            <input type="radio" name="status" value="like-new" />
            <label htmlFor="like-new">Like new</label>
          </div>
          <div className="status-option">
            <input type="radio" name="status" value="great-condition" />
            <label htmlFor="great-condition">Great condition</label>
          </div>
          <div className="status-option">
            <input type="radio" name="status" value="good-condition" />
            <label htmlFor="good-condition">Good condition</label>
          </div>
          <div className="status-option">
            <input type="radio" name="status" value="fair-condition" />
            <label htmlFor="fair-condition">Fair condition</label>
          </div>
          <div className="status-option">
            <input type="radio" name="status" value="new-with-defect(s)" />
            <label htmlFor="new-with-defect(s)">New with defect(s)</label>
          </div>
          <div className="status-option">
            <input type="radio" name="status" value="used-with-defect(s)" />
            <label htmlFor="used-with-defect(s)">Used with defect(s)</label>
          </div>
          <div className="status-option">
            <input type="radio" name="status" value="altered-customized" />
            <label htmlFor="altered-customized">Altered / Customized</label>
          </div>
          <div className="status-option">
            <input type="radio" name="status" value="heavily-worn-damaged" />
            <label htmlFor="heavily-worn-damaged">Heavily worn / damaged</label>
          </div>
        </div>
      </div>
      <div className="filter-choice">
        <h3 className="filter-title">Manufacturer / Authenticity</h3>
        <div className="status-list">
          <div className="status-option">
            <input type="radio" name="authenticity" value="original" />
            <label htmlFor="original">Original</label>
          </div>
          <div className="status-option">
            <input type="radio" name="authenticity" value="hq-replica" />
            <label htmlFor="hq-replica">High-Quality Replica (HQ Copy)</label>
          </div>
          <div className="status-option">
            <input type="radio" name="authenticity" value="standard-copy" />
            <label htmlFor="standard-copy">Standard Copy</label>
          </div>
          <div className="status-option">
            <input
              type="radio"
              name="authenticity"
              value="inspired-unbranded"
            />
            <label htmlFor="inspired-unbranded">Inspired / Unbranded</label>
          </div>
          <div className="status-option">
            <input
              type="radio"
              name="authenticity"
              value="handmade-custom-made"
            />
            <label htmlFor="handmade-custom-made">Handmade / Custom-Made</label>
          </div>
          <div className="status-option">
            <input type="radio" name="authenticity" value="factory-seconds" />
            <label htmlFor="factory-seconds">Factory Seconds</label>
          </div>
          <div className="status-option">
            <input type="radio" name="authenticity" value="vintage-rare" />
            <label htmlFor="vintage-rare">Vintage / Rare</label>
          </div>
        </div>
      </div>
      <div className="filter-footer">
        <p className="filter-count">
          filtered: <strong>{filtred}</strong> products of{" "}
          <strong>{count}</strong>
        </p>
      </div>
    </div>
  );
};

export default Filter;
